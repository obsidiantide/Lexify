"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Check, ShieldCheck } from "lucide-react";
import { useI18n } from "@/components/i18n";
import { SkillIcon } from "@/components/SkillIcon";
import { fmt, plural } from "@/lib/i18n/format";
import {
  CUSTOM_MAX_DAYS,
  CUSTOM_MIN_DAYS,
  PAYMENTS_ENABLED,
  PLAN_IDS,
  PLANS,
  customPrice,
  formatAzn,
  type PlanId,
} from "@/lib/pricing";
import type { Skill } from "@/lib/types";

export type CatalogCourse = {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
  lessons: number;
  mocks: number;
};

/** Top-border accent for each course card, in catalogue order. */
const ACCENTS = ["var(--color-listening)", "var(--color-amber)", "var(--color-reading)", "var(--color-speaking)"];

type View = "courses" | "plans";

/**
 * The landing page's second screen. Courses and plans share one slot: picking
 * a course swaps the cards for that course's plans in place, and "Back to
 * courses" swaps them back. #courses, #pricing and #plans deep-link into it.
 */
export function CourseCatalog({ courses }: { courses: CatalogCourse[] }) {
  const [view, setView] = useState<View>("courses");
  const [courseId, setCourseId] = useState(courses[0]?.id ?? "ielts-academic");
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sync = () => {
      const h = window.location.hash;
      if (h === "#pricing" || h === "#plans") setView("plans");
      else if (h === "#courses") setView("courses");
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  function show(next: View, id?: string) {
    if (id) setCourseId(id);
    setView(next);
    history.replaceState(null, "", next === "plans" ? "#plans" : "#courses");
    root.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div ref={root} id="pricing" className="relative scroll-mt-16">
      <span id="courses" className="absolute -top-16" aria-hidden="true" />
      <span id="plans" className="absolute -top-16" aria-hidden="true" />
      {view === "courses" ? (
        <Courses key="courses" courses={courses} onPick={(id) => show("plans", id)} />
      ) : (
        <Plans key={`plans-${courseId}`} courseId={courseId} onBack={() => show("courses")} />
      )}
    </div>
  );
}

function Heading({ title, lead }: { title: string; lead?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="font-display text-[clamp(2rem,3.8vw,2.9rem)] leading-[1.08] font-medium tracking-[-0.012em] text-balance">{title}</h2>
      {lead && <p className="mt-3 font-display text-base text-muted">{lead}</p>}
    </div>
  );
}

function Courses({ courses, onPick }: { courses: CatalogCourse[]; onPick: (id: string) => void }) {
  const { locale, m } = useI18n();
  return (
    <section className="paper-view-in flex min-h-[85vh] flex-col items-center gap-8 px-5 pt-8 pb-16 sm:gap-10">
      <Heading title={m.home.courses.title} lead={m.home.courses.lead} />
      <div className={`mx-auto grid w-full max-w-5xl gap-6 sm:gap-7 ${courses.length > 1 ? "md:grid-cols-2" : ""} ${courses.length > 2 ? "lg:grid-cols-3" : ""}`}>
        {courses.map((c, i) => (
          <article
            key={c.id}
            className="flex min-h-[440px] flex-col border border-t-2 border-line bg-surface"
            style={{ borderTopColor: ACCENTS[i % ACCENTS.length] }}
          >
            {/* Ruled "notebook" header with the course's skills */}
            <div
              className="flex h-40 items-center justify-center gap-5 border-b border-line/70 text-ink/45"
              style={{
                backgroundImage: "repeating-linear-gradient(to bottom, transparent 0 23px, rgb(74 58 38 / 0.07) 23px 24px)",
              }}
              aria-hidden="true"
            >
              {c.skills.map((s, j) => (
                <span key={s} className="flex items-center gap-5">
                  {j > 0 && <span className="h-8 w-px bg-ink/15" />}
                  <SkillIcon skill={s} className="h-9 w-9 stroke-[1.1]" />
                </span>
              ))}
            </div>
            <div className="flex flex-1 flex-col px-6 py-6">
              <h3 className="text-center font-display text-[1.9rem] leading-[1.05] font-medium tracking-[-0.014em]">{c.title}</h3>
              <p className="mt-2 text-center text-[0.7rem] font-medium tracking-[0.08em] text-muted uppercase">
                {c.skills.map((s) => m.common.skills[s]).join(" · ")}
              </p>
              <span className="mx-auto my-4 block h-px w-9 bg-ink/25" />
              <ul className="mb-auto space-y-2 font-display text-[0.96rem] leading-snug text-ink/85">
                {[c.description, `${c.lessons} ${m.home.courses.lessons}`, `${c.mocks} ${m.home.courses.mocks}`].map((b) => (
                  <li key={b} className="relative pl-5 before:absolute before:left-0 before:text-ink/40 before:content-['—']">
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col items-center gap-2">
                <button type="button" onClick={() => onPick(c.id)} className="btn-ghost group px-5">
                  {m.home.courses.cta} <span className="arrow-nudge">→</span>
                </button>
                <Link href={`/${locale}/preview`} className="paper-link text-xs text-muted hover:text-ink">
                  {m.home.courses.demo}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const savePct = (id: PlanId) => {
  const week = PLANS.week.price / PLANS.week.days;
  const plan = PLANS[id];
  return Math.round((1 - plan.price / plan.days / week) * 100);
};

function Plans({ courseId, onBack }: { courseId: string; onBack: () => void }) {
  const { locale, m } = useI18n();
  const [tab, setTab] = useState<"popular" | "custom">("popular");
  const buy = (q: string) => `/${locale}/buy/${courseId}?${q}`;

  return (
    <section className="paper-view-in flex min-h-[85vh] flex-col items-center gap-8 px-5 pt-10 pb-16">
      <Heading title={m.pricing.title} lead={m.pricing.subtitle} />

      {/* What every plan includes */}
      <div className="w-full max-w-5xl">
        <p className="mb-4 text-center text-[0.66rem] font-semibold tracking-[0.2em] text-muted uppercase">{m.pricing.included}</p>
        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {m.pricing.features.map((f) => (
            <li key={f} className="flex gap-2.5 text-sm text-ink/85">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber" aria-hidden="true" /> {f}
            </li>
          ))}
        </ul>
      </div>

      {!PAYMENTS_ENABLED && (
        <p className="border border-amber/30 bg-amber-soft/60 px-4 py-2 text-center text-sm text-amber-deep">{m.pricing.launchBanner}</p>
      )}

      <div role="tablist" className="inline-flex gap-8 border-b border-line px-1">
        {(["popular", "custom"] as const).map((t) => (
          <button
            key={t}
            role="tab"
            type="button"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`relative px-0.5 pt-2 pb-3 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-ink after:transition-opacity ${tab === t ? "text-ink after:opacity-100" : "text-muted after:opacity-0 hover:text-ink"}`}
          >
            {t === "popular" ? m.pricing.tabPopular : m.pricing.tabCustom}
          </button>
        ))}
      </div>

      {tab === "popular" ? (
        <ul key="popular" className="paper-view-in grid w-full max-w-5xl gap-6 md:grid-cols-3 md:gap-7">
          {PLAN_IDS.map((id) => {
            const plan = PLANS[id];
            const pick = id === "month";
            const save = savePct(id);
            return (
              <li key={id} className="flex">
                <div className={`relative flex flex-1 flex-col items-center border border-t-2 border-line border-t-ink px-6 pt-8 pb-6 text-center ${pick ? "bg-[#fbf5e7]" : "bg-surface"}`}>
                  {pick && (
                    <span className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-ink px-3.5 py-1 text-[0.62rem] font-semibold tracking-[0.18em] whitespace-nowrap text-cream uppercase">
                      {m.pricing.ourPick}
                    </span>
                  )}
                  <h3 className="font-display text-[1.8rem] leading-[1.05] font-medium tracking-[-0.014em]">{m.pricing.plans[id].name}</h3>
                  <p className="mt-1.5 text-[0.7rem] font-medium tracking-[0.08em] text-muted uppercase">{m.pricing.plans[id].note}</p>
                  <span className="my-5 block h-px w-9 bg-ink/25" />
                  <PriceTag amount={plan.price} />
                  <p className="mt-1 text-xs text-muted">
                    {formatAzn(Math.round(((PAYMENTS_ENABLED ? plan.price : 0) / plan.days) * 100) / 100)} {m.common.perDay}
                  </p>
                  <span className="mt-3 min-h-6">
                    {!PAYMENTS_ENABLED ? (
                      <Badge>{m.pricing.freeNow}</Badge>
                    ) : (
                      save > 0 && <Badge>{fmt(m.pricing.save, { p: save })}</Badge>
                    )}
                  </span>
                  <Link href={buy(`plan=${id}`)} className={`${pick ? "btn-primary" : "btn-ghost"} group mt-6 w-full py-3`}>
                    {PAYMENTS_ENABLED ? m.pricing.buy : m.pricing.getFree} <span className="arrow-nudge">→</span>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <CustomDays key="custom" buy={buy} />
      )}

      <div className="flex flex-col items-center gap-5">
        <p className="flex flex-col items-center gap-2 text-xs text-muted sm:flex-row sm:gap-6">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-success" aria-hidden="true" /> {m.pricing.guarantee}
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-success" aria-hidden="true" /> {m.pricing.oneTime}
          </span>
        </p>
        <button type="button" onClick={onBack} className="group inline-flex items-center gap-2 px-1 py-1.5 text-sm font-medium text-muted transition-colors hover:text-ink">
          <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" aria-hidden="true" />
          {m.pricing.backToCourses}
        </button>
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="inline-block bg-amber-soft px-2.5 py-1 text-[0.66rem] font-semibold tracking-[0.12em] text-amber-deep uppercase">{children}</span>;
}

function PriceTag({ amount }: { amount: number }) {
  const shown = PAYMENTS_ENABLED ? amount : 0;
  return (
    <p className="flex items-baseline justify-center gap-2">
      {!PAYMENTS_ENABLED && <s className="font-display text-xl text-muted/80">{amount}</s>}
      <span className="font-display text-6xl leading-none font-medium tabular-nums">{shown}</span>
      <span className="text-[0.66rem] font-semibold tracking-[0.18em] text-muted">AZN</span>
    </p>
  );
}

const DAY = 86_400_000;
const clampDays = (n: number) => Math.min(CUSTOM_MAX_DAYS, Math.max(CUSTOM_MIN_DAYS, Math.round(n)));

function CustomDays({ buy }: { buy: (q: string) => string }) {
  const { locale, m } = useI18n();
  const [days, setDays] = useState(30);
  const [exam, setExam] = useState("");
  const daysLabel = (n: number) => `${n} ${plural(locale, n, m.common.days)}`;
  const total = customPrice(days);
  const perDay = Math.round(((PAYMENTS_ENABLED ? total : 0) / days) * 100) / 100;
  const today = new Date().toISOString().slice(0, 10);

  function onExam(value: string) {
    setExam(value);
    const t = Date.parse(value);
    if (!Number.isNaN(t)) setDays(clampDays(Math.ceil((t - Date.now()) / DAY)));
  }

  return (
    <div className="paper-view-in w-full max-w-xl border border-t-2 border-line border-t-ink bg-surface">
      <div className="divide-y divide-line px-6">
        <label className="flex items-center justify-between gap-4 py-5 text-sm font-medium">
          <span>
            {m.pricing.examDate} <span className="font-normal text-muted">({m.pricing.optional})</span>
          </span>
          <input type="date" min={today} value={exam} onChange={(e) => onExam(e.target.value)} className="input w-auto py-2 text-sm" />
        </label>
        <div className="py-5">
          <div className="flex items-center justify-between gap-4 text-sm font-medium">
            <label htmlFor="lx-days">{m.pricing.daysNeed}</label>
            <span className="flex items-baseline gap-1.5 border border-line bg-paper px-3 py-1.5">
              <input
                id="lx-days"
                type="number"
                inputMode="numeric"
                min={CUSTOM_MIN_DAYS}
                max={CUSTOM_MAX_DAYS}
                value={days}
                onChange={(e) => setDays(clampDays(Number(e.target.value) || CUSTOM_MIN_DAYS))}
                className="w-12 bg-transparent text-right font-display text-lg tabular-nums focus:outline-none"
              />
              <span className="text-[0.62rem] font-semibold tracking-[0.18em] text-muted uppercase">{plural(locale, days, m.common.days)}</span>
            </span>
          </div>
          <input
            type="range"
            min={CUSTOM_MIN_DAYS}
            max={CUSTOM_MAX_DAYS}
            value={days}
            onChange={(e) => {
              setDays(Number(e.target.value));
              setExam("");
            }}
            className="mt-5 w-full accent-[var(--color-ink)]"
            aria-label={m.pricing.daysNeed}
          />
          <div className="mt-1 flex justify-between text-[0.7rem] text-muted">
            <span>{daysLabel(CUSTOM_MIN_DAYS)}</span>
            <span>{daysLabel(CUSTOM_MAX_DAYS)}</span>
          </div>
        </div>
        <div className="py-6 text-center">
          <PriceTag amount={total} />
          <p className="mt-2 text-xs text-muted">{fmt(m.pricing.perDayLine, { price: formatAzn(perDay), days: daysLabel(days) })}</p>
          <p className="mt-1 text-xs text-muted">{m.pricing.customText}</p>
        </div>
      </div>
      <Link href={buy(`plan=custom&days=${days}`)} className="btn-primary group w-full rounded-none py-3.5">
        {fmt(m.pricing.startCustom, { days: daysLabel(days) })} <span className="arrow-nudge">→</span>
      </Link>
    </div>
  );
}
