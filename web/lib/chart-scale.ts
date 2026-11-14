/** Steps that give readable axis labels (×10ⁿ). */
const STEPS = [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10];

/**
 * Top of a bar chart axis with five equal ticks, as tight as possible above `max`.
 * Works for small values (hours, ratings) as well as percentages.
 */
export function axisTop(max: number, ticks = 5): number {
  if (!(max > 0)) return 10;
  const raw = max / ticks;
  const mag = 10 ** Math.floor(Math.log10(raw));
  for (const m of STEPS) {
    const top = round(m * mag * ticks);
    if (top >= max) return top;
  }
  return round(10 * mag * ticks);
}

/** Removes floating point noise such as 0.30000000000000004. */
export function round(v: number): number {
  return Number(v.toPrecision(10));
}
