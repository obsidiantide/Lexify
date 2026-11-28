"""Unit tests for the SM-2 scheduling maths."""

import datetime
from dataclasses import dataclass

import pytest

from app.services.srs_service import (
    DEFAULT_EASINESS_FACTOR,
    MIN_EASINESS_FACTOR,
    apply_review,
    calculate_sm2,
    calculate_sm2_batch,
    update_easiness,
)

NOW = datetime.datetime(2026, 1, 1, 12, 0, 0)


@pytest.mark.parametrize(
    ("quality", "expected"),
    [
        (5, 2.6),  # +0.10
        (4, 2.5),  # +0.00
        (3, 2.36),  # -0.14
        (2, 2.18),  # -0.32
        (1, 1.96),  # -0.54
        (0, 1.7),  # -0.80
    ],
)
def test_easiness_update_matches_sm2_formula(quality, expected):
    assert update_easiness(2.5, quality) == pytest.approx(expected)


def test_easiness_never_drops_below_minimum():
    assert update_easiness(1.3, 0) == MIN_EASINESS_FACTOR
    assert update_easiness(1.4, 3) == MIN_EASINESS_FACTOR


def test_first_two_successful_reviews_use_fixed_intervals():
    first = calculate_sm2(quality=4, now=NOW)
    assert (first.interval_days, first.repetitions) == (1, 1)
    assert first.next_review == NOW + datetime.timedelta(days=1)

    second = calculate_sm2(
        quality=4,
        easiness_factor=first.easiness_factor,
        interval_days=first.interval_days,
        repetitions=first.repetitions,
        now=NOW,
    )
    assert (second.interval_days, second.repetitions) == (6, 2)


def test_later_intervals_grow_by_previous_easiness_factor():
    # Third review: I = round(6 * 2.5) = 15, even though q=5 raises EF to 2.6.
    state = calculate_sm2(quality=5, easiness_factor=2.5, interval_days=6, repetitions=2, now=NOW)
    assert state.interval_days == 15
    assert state.repetitions == 3
    assert state.easiness_factor == pytest.approx(2.6)


def test_hard_card_grows_slowly():
    state = calculate_sm2(quality=3, easiness_factor=1.3, interval_days=10, repetitions=4, now=NOW)
    assert state.interval_days == 13
    assert state.easiness_factor == MIN_EASINESS_FACTOR


def test_failed_recall_resets_repetitions_and_interval():
    state = calculate_sm2(quality=2, easiness_factor=2.5, interval_days=40, repetitions=5, now=NOW)
    assert state.repetitions == 0
    assert state.interval_days == 1
    assert state.easiness_factor == pytest.approx(2.18)
    assert state.next_review == NOW + datetime.timedelta(days=1)


def test_quality_three_is_the_pass_mark():
    assert calculate_sm2(quality=3, repetitions=3, interval_days=10, now=NOW).repetitions == 4
    assert calculate_sm2(quality=2, repetitions=3, interval_days=10, now=NOW).repetitions == 0


def test_out_of_range_inputs_are_clamped():
    high = calculate_sm2(quality=9, now=NOW)
    assert high.easiness_factor == pytest.approx(2.6)
    low = calculate_sm2(quality=-3, now=NOW)
    assert low.easiness_factor == pytest.approx(1.7)
    corrupt = calculate_sm2(quality=4, easiness_factor=0.5, interval_days=10, repetitions=3, now=NOW)
    assert corrupt.interval_days == 13  # EF treated as 1.3


def test_legacy_row_without_interval_still_moves_forward():
    state = calculate_sm2(quality=4, interval_days=0, repetitions=3, now=NOW)
    assert state.interval_days >= 1


def test_perfect_streak_produces_expected_schedule():
    ef, interval, reps = DEFAULT_EASINESS_FACTOR, 0, 0
    intervals = []
    for _ in range(5):
        state = calculate_sm2(5, ef, interval, reps, now=NOW)
        ef, interval, reps = state.easiness_factor, state.interval_days, state.repetitions
        intervals.append(interval)
    # Each interval uses the EF from before that review (2.5, 2.6, 2.7, ...):
    # 1, 6, 6*2.7=16.2->16, 16*2.8=44.8->45, 45*2.9=130.5->131
    assert intervals == [1, 6, 16, 45, 131]


def test_interval_rounds_half_up():
    state = calculate_sm2(quality=4, easiness_factor=2.5, interval_days=5, repetitions=2, now=NOW)
    assert state.interval_days == 13  # 12.5 -> 13, not banker's 12


def test_batch_matches_single_calls():
    records = [
        {"quality": 5},
        {"quality": 1, "easiness_factor": 2.0, "interval_days": 6, "repetitions": 2},
    ]
    assert calculate_sm2_batch(records, now=NOW) == [
        calculate_sm2(5, now=NOW),
        calculate_sm2(1, 2.0, 6, 2, now=NOW),
    ]


@dataclass
class Card:
    easiness_factor: float = DEFAULT_EASINESS_FACTOR
    interval_days: int = 0
    repetitions: int = 0
    next_review: datetime.datetime = NOW


def test_apply_review_writes_state_back():
    card = Card(easiness_factor=2.5, interval_days=6, repetitions=2)
    state = apply_review(card, 4, now=NOW)
    assert (card.easiness_factor, card.interval_days, card.repetitions) == (2.5, 15, 3)
    assert card.next_review == NOW + datetime.timedelta(days=15)
    assert state.next_review == card.next_review


def test_relearn_delay_only_applies_to_failures():
    delay = datetime.timedelta(hours=1)

    failed = Card(interval_days=20, repetitions=4)
    apply_review(failed, 1, now=NOW, relearn_delay=delay)
    assert failed.next_review == NOW + delay
    assert (failed.interval_days, failed.repetitions) == (1, 0)

    passed = Card()
    apply_review(passed, 5, now=NOW, relearn_delay=delay)
    assert passed.next_review == NOW + datetime.timedelta(days=1)


def test_apply_review_tolerates_unset_fields():
    card = Card(easiness_factor=None, interval_days=None, repetitions=None)
    apply_review(card, 4, now=NOW)
    assert (card.easiness_factor, card.interval_days, card.repetitions) == (2.5, 1, 1)
