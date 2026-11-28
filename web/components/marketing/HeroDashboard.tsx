import Link from "next/link";
import { ArrowRight, ArrowDownRight, ArrowUpRight, Lightbulb, MoveRight } from "lucide-react";
import { LogoMark } from "@/components/Logo";
import { formatBand, skillColor } from "@/lib/band";
import { SKILLS, type Skill } from "@/lib/types";
import type { Messages } from "@/messages/en";

/**
 * A still, full-width replica of the student dashboard for the landing page.
 * The whole card links to the public demo, so the "what you get" picture is
 * one click away from the real thing. Numbers are sample data.
 */
const SAMPLE: Record<Skill, { band: number; delta: number; trend: "up" | "down" | "flat" }> = {
  reading: { band: 7.0, delta: 0.5, trend: "up" },
  listening: { band: 7.0, delta: -0.5, trend: "down" },
  writing: { band: 5.5, delta: 0, trend: "flat" },
  speaking: { band: 6.5, delta: 0.5, trend: "up" },
};
const OVERALL = 6.5;
const LADDER = [5.5, 6.0, 6.5];

function Delta({ value }: { value: number }) {
  const tone =
    value > 0
      ? "border-success/30 bg-success/10 text-success"
      : value < 0
        ? "border-danger/30 bg-danger/10 text-danger"
        : "border-amber/40 bg-amber/10 text-amber-deep";
  return (
    <span className={`rounded-[2px] border px-1.5 py-0.5 text-[10px] font-semibold tabular-nums ${tone}`}>
      {value > 0 ? "+" : value < 0 ? "−" : "+"}
      {Math.abs(value).toFixed(1)}
    </span>
  );
}

function Ladder({ labels }: { labels: string[] }) {
  const w = 200;
  const h = 70;
  const x = (i: number) => 14 + (i * (w - 28)) / (LADDER.length - 1);
  const y = (v: number) => 8 + ((7.5 - v) * (h - 24)) / 3;
  const path = LADDER.map((v, i) => `${i ? "L" : "M"}${x(i)},${y(v)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full" aria-hidden="true">
      {[4.5, 5.5, 6.5, 7.5].map((t) => (
        <line key={t} x1={8} x2={w - 4} y1={y(t)} y2={y(t)} stroke="currentColor" strokeOpacity={0.08} />
      ))}
      <path d={path} fill="none" stroke="var(--color-amber)" strokeWidth={1.6} />
      {LADDER.map((v, i) => (
        <circle key={i} cx={x(i)} cy={y(v)} r={2.6} fill="var(--color-surface)" stroke="var(--color-amber)" strokeWidth={1.4} />
      ))}
      {labels.map((l, i) => (
        <text key={l} x={i === 0 ? 4 : i === labels.length - 1 ? w - 4 : x(i)} y={h - 2} textAnchor={i === 0 ? "start" : i === labels.length - 1 ? "end" : "middle"} fontSize={7} fill="currentColor" fillOpacity={0.5} letterSpacing={0.4}>
          {l.toUpperCase()}
        </text>
      ))}
    </svg>
  );
}

export function HeroDashboard({ m, href }: { m: Messages; href: string }) {
  const d = m.home.dash;
  const trendIcon = { up: ArrowUpRight, down: ArrowDownRight, flat: MoveRight } as const;

  return (
    <Link
      href={href}
      aria-label={d.open}
      className="group relative block rounded-[14px] text-ink transition-transform duration-300 ease-[var(--ease-paper)] hover:-translate-y-1 focus-visible:outline-offset-[6px] motion-reduce:hover:translate-y-0"
    >
      {/* Floating "open the demo" pill with a live dot */}
      <span className="pointer-events-none absolute top-3 right-3 z-10 inline-flex items-center gap-2 rounded-full bg-ink py-1.5 pr-3.5 pl-3 text-xs font-medium text-cream shadow-sm transition-[background-color,transform] duration-200 group-hover:translate-x-0.5 group-hover:bg-amber-deep sm:top-4 sm:right-4 sm:text-[13px]">
        <span className="paper-pulse h-[7px] w-[7px] rounded-full bg-[#6a8765]" />
        {d.open}
        <ArrowRight className="arrow-nudge h-3.5 w-3.5" />
      </span>

      <div className="overflow-hidden rounded-[14px] border border-line bg-surface shadow-[0_24px_60px_-40px_rgb(74_58_38_/_0.45)] transition-shadow duration-300 group-hover:shadow-[0_32px_68px_-36px_rgb(74_58_38_/_0.42)]">
        {/* App bar */}
        <div className="flex items-center gap-4 border-b border-line px-4 py-3 sm:px-5">
          <span className="flex items-center gap-2">
            <LogoMark className="h-5 w-5" />
            <span className="font-display text-sm font-semibold">Lexify</span>
          </span>
          <span className="h-4 w-px bg-line" />
          <span className="font-display text-xs italic text-muted">IELTS</span>
          <span className="ml-4 hidden items-center gap-5 text-[11px] text-muted lg:flex">
            <span className="border-b border-ink pb-0.5 font-medium text-ink">{d.nav}</span>
            {SKILLS.map((s) => (
              <span key={s}>{m.common.skills[s]}</span>
            ))}
          </span>
        </div>

        <div className="grid gap-3 p-3 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,2.6fr)] sm:p-4">
          {/* Left rail */}
          <div className="hidden flex-col gap-3 border border-line bg-paper/60 p-3 sm:flex">
            <div>
              <p className="text-[9px] font-semibold tracking-[0.16em] text-muted uppercase">{d.estimated}</p>
              <p className="mt-1 font-display text-4xl leading-none">
                {formatBand(OVERALL)}
                <span className="ml-1 text-xs text-muted">/ 9</span>
              </p>
            </div>
            <div className="border-t border-line pt-2.5">
              <p className="text-[9px] font-semibold tracking-[0.16em] text-muted uppercase">{d.ladder}</p>
              <Ladder labels={d.ladderLabels} />
            </div>
            <div className="border-t border-line pt-2.5">
              <p className="text-[9px] font-semibold tracking-[0.16em] text-muted uppercase">{d.exam}</p>
              <p className="mt-1 font-display text-2xl leading-none italic">
                44 <span className="text-[10px] not-italic text-muted">{d.daysLeft}</span>
              </p>
              <p className="mt-0.5 text-[10px] text-muted">{d.examDate}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 border-t border-line pt-2.5">
              <p className="font-display text-xl leading-none italic">
                19
                <span className="mt-1 block text-[9px] font-semibold tracking-[0.14em] not-italic text-muted uppercase">{d.sessions}</span>
              </p>
              <p className="font-display text-xl leading-none italic">
                12
                <span className="mt-1 block text-[9px] font-semibold tracking-[0.14em] not-italic text-muted uppercase">{d.streak}</span>
              </p>
            </div>
          </div>

          {/* Main column */}
          <div className="flex min-w-0 flex-col gap-3">
            <div className="flex items-start gap-3 border border-amber/30 border-l-2 border-l-amber bg-amber-soft/50 p-3">
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-deep" aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <p className="text-[9px] font-semibold tracking-[0.18em] text-amber-deep uppercase">{d.insightLabel}</p>
                <p className="mt-0.5 text-xs font-medium sm:text-[13px]">{d.insight}</p>
                <p className="text-[11px] text-muted">{d.insightNext}</p>
              </div>
              <span className="hidden shrink-0 border border-line bg-surface px-2 py-1 text-[9px] font-semibold tracking-[0.12em] uppercase md:inline">
                {d.openSkill} →
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {SKILLS.map((s) => {
                const x = SAMPLE[s];
                const Icon = trendIcon[x.trend];
                return (
                  <div key={s} className="relative min-w-0 border border-line border-l-2 bg-surface p-3" style={{ borderLeftColor: skillColor[s].fg }}>
                    <div className="flex items-start justify-between gap-2">
                      <p className="truncate font-display text-lg leading-tight italic sm:text-2xl" style={{ color: skillColor[s].fg }}>
                        {m.common.skills[s]}
                      </p>
                      <Delta value={x.delta} />
                    </div>
                    <p className="mt-0.5 font-display text-base italic">
                      {formatBand(x.band)} <span className="text-[10px] not-italic text-muted">/ 9</span>
                    </p>
                    <div className="hidden sm:block">
                      <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-muted">{m.home.mock.tips[s]}</p>
                    </div>
                    <div className="mt-2 flex items-end justify-between gap-2 text-[10px]">
                      <span className="hidden sm:block">
                        <span className="block text-[8px] font-semibold tracking-[0.14em] text-muted uppercase">{d.lastMock}</span>
                        {d.ago[s]}
                      </span>
                      <span className={`inline-flex items-center gap-0.5 ${x.trend === "up" ? "text-success" : x.trend === "down" ? "text-danger" : "text-muted"}`}>
                        <Icon className="h-3 w-3" aria-hidden="true" />
                        {d.trends[x.trend]}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
