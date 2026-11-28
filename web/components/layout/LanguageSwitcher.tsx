"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useI18n } from "@/components/i18n";
import { rememberLocale } from "@/lib/i18n/client";
import { localeNames, localeShort, locales, type Locale } from "@/lib/i18n/config";

export function LanguageSwitcher({ align = "right" }: { align?: "left" | "right" }) {
  const { locale, m } = useI18n();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  function choose(next: Locale) {
    setOpen(false);
    if (next === locale) return;
    rememberLocale(next);
    const rest = pathname.replace(/^\/(az|en|ru)(?=\/|$)/, "");
    router.push(`/${next}${rest}${window.location.search}`);
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 px-1.5 py-1.5 text-xs font-semibold tracking-[0.08em] text-ink transition-opacity hover:opacity-75"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={m.common.language}
      >
        {localeShort[locale]}
        <ChevronDown className={`h-3.5 w-3.5 opacity-65 transition-transform duration-200 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {open && (
        <ul
          role="listbox"
          className={`absolute z-50 mt-2 w-48 overflow-hidden border border-ink/30 bg-surface py-1 ${align === "right" ? "right-0" : "left-0"}`}
        >
          {locales.map((l) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={l === locale}
                onClick={() => choose(l)}
                className={`flex w-full items-center justify-between px-3.5 py-2.5 text-left text-sm hover:bg-ink/5 ${l === locale ? "bg-amber/10" : ""}`}
              >
                <span>{localeNames[l]}</span>
                <span className="text-[10px] font-semibold tracking-[0.1em] text-muted">{localeShort[l]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
