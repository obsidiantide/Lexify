/**
 * Consistency checks for the starter content: every question has a valid answer,
 * ids are unique, and every text exists in all three languages.
 */
import { describe, expect, it, vi } from "vitest";
vi.mock("server-only", () => ({}));
import { scoreObjective } from "@/server/diagnostic/scoring";
import { seedCourses, seedLessons } from "@/content/catalog";
import { seedAnswerKeys, seedDiagnosticTasks } from "@/content/diagnostic";
import { seedPracticeAnswerKeys, seedPracticeTasks } from "@/content/practice";
import { guides } from "@/content/guides";
import { locales } from "@/lib/i18n/config";
import { questionsOf, type AnswerKey, type DiagnosticTask } from "@/lib/diagnostic/types";

const allTasks: [DiagnosticTask, AnswerKey | undefined][] = [
  ...seedDiagnosticTasks.map((t) => [t, seedAnswerKeys[t.id]] as [DiagnosticTask, AnswerKey | undefined]),
  ...seedPracticeTasks.map((t) => [t, seedPracticeAnswerKeys[t.id]] as [DiagnosticTask, AnswerKey | undefined]),
];

function unique(ids: string[]) {
  expect(ids.filter((id, i) => ids.indexOf(id) !== i)).toEqual([]);
}

describe("catalogue", () => {
  it("has unique ids", () => {
    unique(seedCourses.map((c) => c.id));
    unique(seedLessons.map((l) => l.id));
    unique(allTasks.map(([t]) => t.id));
    unique(guides.map((g) => g.slug));
  });

  it("links every lesson to a course and fills every language", () => {
    const courses = new Set(seedCourses.map((c) => c.id));
    for (const l of seedLessons) {
      expect(courses.has(l.courseId), l.id).toBe(true);
      expect(l.body.trim(), l.id).not.toBe("");
      for (const loc of locales) {
        expect(l.title[loc]?.trim(), `${l.id} title ${loc}`).toBeTruthy();
        expect(l.summary[loc]?.trim(), `${l.id} summary ${loc}`).toBeTruthy();
      }
    }
  });

  it("fills every guide in every language", () => {
    for (const g of guides) {
      for (const loc of locales) {
        const t = g.text[loc];
        expect(t.title && t.description && t.body, `${g.slug} ${loc}`).toBeTruthy();
      }
    }
  });
});

describe.each(allTasks.filter(([t]) => t.groups?.length).map(([t, key]) => [t.id, t, key] as const))("objective task %s", (_id, task, key) => {
  const questions = questionsOf(task);

  it("has an answer for every question and nothing else", () => {
    expect(key).toBeDefined();
    unique(questions.map((q) => q.id));
    expect(Object.keys(key!.answers).sort()).toEqual(questions.map((q) => q.id).sort());
    for (const q of questions) expect(key!.answers[q.id].length, q.id).toBeGreaterThan(0);
  });

  it("uses answers that fit each question type", () => {
    const passages = new Set((task.passages ?? []).map((p) => p.id));
    for (const g of task.groups!) if (g.passageId) expect(passages.has(g.passageId), g.id).toBe(true);
    for (const q of questions) {
      const answers = key!.answers[q.id];
      if (q.type === "tfng") for (const a of answers) expect(["true", "false", "not given"], q.id).toContain(a.toLowerCase());
      if (q.type === "ynng") for (const a of answers) expect(["yes", "no", "not given"], q.id).toContain(a.toLowerCase());
      if (q.type === "mcq" || q.type === "match") {
        const values = (q.options ?? []).map((o) => o.value.toUpperCase());
        for (const a of answers) expect(values, q.id).toContain(a.toUpperCase());
      }
      if (q.type === "gap" && q.maxWords) for (const a of answers) expect(a.trim().split(/\s+/).length, `${q.id} "${a}"`).toBeLessThanOrEqual(q.maxWords);
    }
  });

  it("scores full marks when every answer comes from the key", () => {
    const section = task.section === "listening" ? "listening" : "reading";
    const answers = Object.fromEntries(questions.map((q) => [q.id, key!.answers[q.id][0]]));
    const result = scoreObjective(section, task.groups!, key!, answers);
    expect(result.raw).toBe(questions.length);
    expect(result.band).toBe(9);
  });
});

describe.each(allTasks.filter(([t]) => t.writing?.length || t.speaking?.length).map(([t]) => [t.id, t] as const))("productive task %s", (_id, task) => {
  it("has charts with one value per category", () => {
    for (const w of task.writing ?? []) {
      if (!w.chart) continue;
      for (const s of w.chart.series) expect(s.values.length, `${w.id} ${s.name}`).toBe(w.chart.categories.length);
    }
  });

  it("gives Speaking Part 2 a cue card and preparation time", () => {
    for (const p of task.speaking ?? []) {
      expect(p.questions.length).toBeGreaterThan(0);
      if (p.part === 2) {
        expect(p.cueCard?.bullets.length).toBeGreaterThan(0);
        expect(p.prepSeconds).toBeGreaterThan(0);
      }
    }
  });
});
