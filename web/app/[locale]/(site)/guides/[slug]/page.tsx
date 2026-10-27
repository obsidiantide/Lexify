import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { Markdown } from "@/components/Markdown";
import { getGuide, guides } from "@/content/guides";
import { isLocale, locales } from "@/lib/i18n/config";
import { fmt } from "@/lib/i18n/format";
import { getMessages } from "@/lib/i18n/messages";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/guides/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuide(slug);
  if (!isLocale(locale) || !guide) return {};
  const { title, description } = guide.text[locale];
  const path = `/guides/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: `/${locale}${path}`, languages: Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])) },
    openGraph: { type: "article", title, description, modifiedTime: guide.updated },
  };
}

export default async function GuidePage({ params }: PageProps<"/[locale]/guides/[slug]">) {
  const { locale, slug } = await params;
  const guide = getGuide(slug);
  if (!isLocale(locale) || !guide) notFound();
  const m = await getMessages(locale);
  const { title, description, body } = guide.text[locale];
  const date = new Intl.DateTimeFormat(locale === "az" ? "az-Latn-AZ" : locale, { dateStyle: "long" }).format(new Date(guide.updated));

  return (
    <article className="container-page max-w-3xl py-10 sm:py-14">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description,
          inLanguage: locale,
          dateModified: guide.updated,
          mainEntityOfPage: `${SITE_URL}/${locale}/guides/${slug}`,
          publisher: { "@type": "Organization", name: "Lexify", url: SITE_URL },
        }}
      />
      <Link href={`/${locale}/guides`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-ink">
        <ArrowLeft className="h-4 w-4" /> {m.guides.back}
      </Link>
      <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
      <p className="mt-3 text-lg text-muted">{description}</p>
      <p className="mt-2 text-sm text-muted">
        {fmt(m.guides.updated, { date })} · {fmt(m.preview.minutesRead, { n: guide.minutes })}
      </p>
      <div className="card mt-8 p-6 sm:p-8">
        <Markdown>{body}</Markdown>
      </div>
      <div className="card mt-8 bg-sand/60 p-6 sm:p-8">
        <h2 className="text-xl font-bold">{m.guides.ctaTitle}</h2>
        <p className="mt-2 text-muted">{m.guides.ctaText}</p>
        <Link href={`/${locale}/welcome/diagnostic`} className="btn-primary btn-lg mt-4">
          {m.nav.diagnostic} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
