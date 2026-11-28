"""Quiz answers are graded and scheduled with SM-2 end to end."""

import asyncio
import datetime

import pytest
from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine

from app.database.models import Base, User, UserWord, Word
from app.services import quiz_service as quiz_module
from app.services.quiz_service import WRONG_INTERVAL, quiz_service
from app.services.srs_service import (
    QUALITY_FUZZY,
    QUALITY_PERFECT,
    QUALITY_RECOGNISED,
    QUALITY_SKIPPED,
    QUALITY_WRONG,
)

NOW = datetime.datetime(2026, 3, 1, 9, 0, 0)


@pytest.mark.parametrize(
    ("answer", "expected"),
    [
        ("устойчивый", QUALITY_PERFECT),
        ("  Стойкий ", QUALITY_PERFECT),  # any variant, case and spaces ignored
        ("устойчивй", QUALITY_FUZZY),  # one letter missing
        ("быстрый", QUALITY_WRONG),
        ("", QUALITY_WRONG),
    ],
)
def test_grade_answer(answer, expected):
    translation = "1. устойчивый, 2. упорный, 3. стойкий"
    assert quiz_service.grade_answer(answer, translation) == expected
    assert quiz_service.check_answer(answer, translation) == (expected >= 3)


def _run(scenario):
    async def main():
        engine = create_async_engine("sqlite+aiosqlite:///:memory:")
        async with engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)
        factory = async_sessionmaker(engine, expire_on_commit=False)
        try:
            async with factory() as session:
                user = User(telegram_id=1)
                word = Word(
                    word="resilient",
                    translation="устойчивый",
                    meaning="able to recover quickly",
                    example="Children are resilient.",
                    simple_explanation="recovers fast",
                )
                session.add_all([user, word])
                await session.flush()
                session.add(UserWord(user_id=user.id, word_id=word.id))
                await session.flush()
                return await scenario(session, user, word)
        finally:
            await engine.dispose()

    return asyncio.run(main())


@pytest.fixture
def frozen_now(monkeypatch):
    monkeypatch.setattr(quiz_module, "_now_utc", lambda: NOW)


def test_new_word_starts_with_default_sm2_state():
    async def scenario(session, user, word):
        uw = await session.get(UserWord, 1)
        return uw.easiness_factor, uw.interval_days, uw.repetitions

    assert _run(scenario) == (2.5, 0, 0)


def test_successive_correct_answers_follow_sm2(frozen_now):
    async def scenario(session, user, word):
        seen = []
        for quality in (QUALITY_PERFECT, QUALITY_RECOGNISED, QUALITY_PERFECT):
            uw = await quiz_service.record_answer_for_user(session, user, word.id, quality)
            seen.append((uw.interval_days, uw.repetitions, uw.next_review))
        return seen, uw.correct_count, uw.wrong_count, uw.easiness_factor

    seen, correct, wrong, ef = _run(scenario)
    assert [s[:2] for s in seen] == [(1, 1), (6, 2), (16, 3)]  # 6 * 2.6 = 15.6
    assert seen[-1][2] == NOW + datetime.timedelta(days=16)
    assert (correct, wrong) == (3, 0)
    assert ef == pytest.approx(2.7)


def test_wrong_answer_resets_and_relearns_same_day(frozen_now):
    async def scenario(session, user, word):
        for _ in range(3):
            await quiz_service.record_answer_for_user(session, user, word.id, QUALITY_PERFECT)
        return await quiz_service.record_answer_for_user(session, user, word.id, QUALITY_WRONG)

    uw = _run(scenario)
    assert (uw.repetitions, uw.interval_days) == (0, 1)
    assert uw.next_review == NOW + WRONG_INTERVAL
    assert uw.wrong_count == 1
    assert uw.easiness_factor == pytest.approx(2.8 - 0.54)


def test_skip_counts_as_wrong_and_lowers_easiness_most(frozen_now):
    async def scenario(session, user, word):
        return await quiz_service.record_answer_for_user(session, user, word.id, QUALITY_SKIPPED)

    uw = _run(scenario)
    assert uw.wrong_count == 1
    assert uw.easiness_factor == pytest.approx(1.7)


def test_word_outside_library_is_rejected():
    async def scenario(session, user, word):
        with pytest.raises(ValueError):
            await quiz_service.record_answer_for_user(session, user, 999, QUALITY_PERFECT)

    _run(scenario)
