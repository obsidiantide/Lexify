"""
SuperMemo-2 (SM-2) spaced repetition engine.

Each card keeps three numbers between reviews:

* ``easiness_factor`` (EF): how easy the card is for this learner. It starts
  at 2.5 and never drops below 1.3.
* ``repetitions`` (n): how many times in a row the card was recalled.
* ``interval_days`` (I): the gap that was scheduled after the last review.

After a review graded with quality ``q`` (0 = blackout .. 5 = perfect):

* if ``q >= 3`` the next interval is 1 day (n = 0), 6 days (n = 1) or
  ``I * EF`` rounded to whole days (n >= 2), and n grows by one;
* if ``q < 3`` the card starts over: n = 0 and I = 1 day;
* in both cases EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)),
  floored at 1.3.

The interval uses the easiness factor the card had *before* this review, as in
the published algorithm; the updated EF applies from the next review on.
"""

from __future__ import annotations

import datetime
from dataclasses import dataclass, replace
from typing import Protocol

DEFAULT_EASINESS_FACTOR = 2.5
MIN_EASINESS_FACTOR = 1.3

# Quality grades used by the quiz. SM-2 defines 0..5; the quiz cannot tell
# every level apart, so it uses the ones it can observe.
QUALITY_SKIPPED = 0  # "I don't know" / skip button
QUALITY_WRONG = 1  # answered, but wrong
QUALITY_RECOGNISED = 4  # picked the right option in multiple choice
QUALITY_FUZZY = 4  # typed answer accepted with a small typo
QUALITY_PERFECT = 5  # typed answer matched exactly
PASSING_QUALITY = 3


@dataclass(frozen=True)
class SRSState:
    easiness_factor: float
    interval_days: int
    repetitions: int
    next_review: datetime.datetime


def _utc_now() -> datetime.datetime:
    return datetime.datetime.now(datetime.timezone.utc).replace(tzinfo=None)


def update_easiness(easiness_factor: float, quality: int) -> float:
    """Return the SM-2 easiness factor after a review of the given quality."""
    miss = 5 - quality
    new_ef = easiness_factor + (0.1 - miss * (0.08 + miss * 0.02))
    return max(MIN_EASINESS_FACTOR, round(new_ef, 2))


def calculate_sm2(
    quality: int,
    easiness_factor: float = DEFAULT_EASINESS_FACTOR,
    interval_days: int = 0,
    repetitions: int = 0,
    now: datetime.datetime | None = None,
) -> SRSState:
    """Compute the card state after one review.

    Args:
        quality: Recall quality from 0 (complete fail) to 5 (perfect).
            Values outside the range are clamped.
        easiness_factor: Easiness factor before this review.
        interval_days: Interval scheduled after the previous review.
        repetitions: Consecutive successful recalls before this review.
        now: Time of the review; defaults to the current UTC time.
    """
    if now is None:
        now = _utc_now()

    q = max(0, min(5, quality))
    ef = max(MIN_EASINESS_FACTOR, easiness_factor)
    reps = max(0, repetitions)

    if q >= PASSING_QUALITY:
        if reps == 0:
            new_interval = 1
        elif reps == 1:
            new_interval = 6
        else:
            # Round half up; Python's round() rounds 2.5 to 2.
            new_interval = max(1, int(max(1, interval_days) * ef + 0.5))
        new_repetitions = reps + 1
    else:
        new_interval = 1
        new_repetitions = 0

    return SRSState(
        easiness_factor=update_easiness(ef, q),
        interval_days=new_interval,
        repetitions=new_repetitions,
        next_review=now + datetime.timedelta(days=new_interval),
    )


def calculate_sm2_batch(
    records: list[dict],
    now: datetime.datetime | None = None,
) -> list[SRSState]:
    """Calculate SM-2 states for a batch of review records."""
    return [
        calculate_sm2(
            quality=r.get("quality", PASSING_QUALITY),
            easiness_factor=r.get("easiness_factor", DEFAULT_EASINESS_FACTOR),
            interval_days=r.get("interval_days", 0),
            repetitions=r.get("repetitions", 0),
            now=now,
        )
        for r in records
    ]


class ReviewCard(Protocol):
    """Anything that stores SM-2 state, e.g. the ``UserWord`` ORM row."""

    easiness_factor: float
    interval_days: int
    repetitions: int
    next_review: datetime.datetime


def apply_review(
    card: ReviewCard,
    quality: int,
    now: datetime.datetime | None = None,
    relearn_delay: datetime.timedelta | None = None,
) -> SRSState:
    """Run one SM-2 step on ``card`` and write the result back to it.

    ``relearn_delay`` brings a failed card back sooner than SM-2's one day,
    so a word the learner just missed comes up again later the same day.
    The SM-2 state itself is still reset as the algorithm says.
    """
    if now is None:
        now = _utc_now()

    state = calculate_sm2(
        quality=quality,
        easiness_factor=(
            card.easiness_factor
            if card.easiness_factor is not None
            else DEFAULT_EASINESS_FACTOR
        ),
        interval_days=card.interval_days or 0,
        repetitions=card.repetitions or 0,
        now=now,
    )

    next_review = state.next_review
    if quality < PASSING_QUALITY and relearn_delay is not None:
        next_review = now + relearn_delay

    card.easiness_factor = state.easiness_factor
    card.interval_days = state.interval_days
    card.repetitions = state.repetitions
    card.next_review = next_review
    return replace(state, next_review=next_review)
