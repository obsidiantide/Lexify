import { describe, expect, it } from "vitest";
import { axisTop } from "@/lib/chart-scale";
import { seedPracticeTasks } from "@/content/practice";

describe("chart axis", () => {
  it("fits percentages tightly", () => {
    expect(axisTop(52)).toBe(60);
    expect(axisTop(48)).toBe(50);
    expect(axisTop(100)).toBe(100);
  });
  it("keeps small values readable instead of rounding up to 20", () => {
    expect(axisTop(6.2)).toBe(7.5);
    expect(axisTop(0.8)).toBe(1);
    expect(axisTop(3)).toBe(3);
  });
  it("handles empty data", () => {
    expect(axisTop(0)).toBe(10);
  });
  it("never puts a bar above the top of the axis", () => {
    for (const ex of seedPracticeTasks) {
      for (const w of ex.writing ?? []) {
        if (!w.chart) continue;
        const max = Math.max(...w.chart.series.flatMap((s) => s.values));
        const top = axisTop(max);
        expect(top, w.id).toBeGreaterThanOrEqual(max);
        expect(top, w.id).toBeLessThan(max * 1.6);
      }
    }
  });
});
