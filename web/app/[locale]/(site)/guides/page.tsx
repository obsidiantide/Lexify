import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { guides } from "@/content/guides";
import { isLocale, locales } from "@/lib/i18n/config";
import { fmt } from "@/lib/i18n/format";
import { getMessages } from "@/lib/i18n/messages";

export async function generateMetadata({ params }: PageProps<"/[locale]/guides">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const m = await getMessages(locale);
  return {
    title: m.guides.title,
    description: m.guides.intro,
    alternates: { canonical: `/${locale}/guides`, languages: Object.fromEntries(locales.map((l) => [l, `/${l}/guides`])) },
  };
}

export default async function GuidesPage({ params }: PageProps<"/[locale]/guides">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const m = await getMessages(locale);
  return (
    <div className="container-page max-w-3xl py-10 sm:py-14">
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{m.guides.title}</h1>
      <p className="mt-3 text-lg text-muted">{m.guides.intro}</p>
      <ul className="mt-8 space-y-3">
        {guides.map((g) => (
          <li key={g.slug}>
            <Link href={`/${locale}/guides/${g.slug}`} className="card group block p-5 transition hover:-translate-y-0.5 sm:p-6">
              <p className="text-sm text-muted">{fmt(m.preview.minutesRead, { n: g.minutes })}</p>
              <h2 className="mt-1 text-lg font-bold group-hover:underline">{g.text[locale].title}</h2>
              <p className="mt-2 text-muted">{g.text[locale].description}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
