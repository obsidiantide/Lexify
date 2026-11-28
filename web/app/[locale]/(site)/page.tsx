import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { CourseCatalog, type CatalogCourse } from "@/components/marketing/CourseCatalog";
import { HeroDashboard } from "@/components/marketing/HeroDashboard";
import { isLocale, pick } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import { SITE_URL } from "@/lib/site";
import { getCourses, getLessonList } from "@/server/content";

export const revalidate = 300;

/**
 * Landing page in two screens: an offer with a live-looking dashboard that
 * opens the demo, then the course catalogue that turns into plans in place.
 */
export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const [m, courses, lessons] = await Promise.all([getMessages(locale), getCourses(), getLessonList()]);
  const home = `/${locale}`;

  const catalog: CatalogCourse[] = courses.map((c) => ({
    id: c.id,
    title: pick(c.title, locale),
    description: pick(c.description, locale),
    skills: c.skills,
    lessons: lessons.filter((l) => l.courseId === c.id).length,
    mocks: c.mockCount,
  }));

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Lexify",
            url: SITE_URL,
            logo: `${SITE_URL}/icon.svg`,
          },
          ...courses.map((c) => ({
            "@context": "https://schema.org",
            "@type": "Course",
            name: pick(c.title, locale),
            description: pick(c.description, locale),
            inLanguage: "en",
            provider: { "@type": "Organization", name: "Lexify", sameAs: SITE_URL },
          })),
        ]}
      />

      {/* Hero: offer on the left, dashboard replica on the right */}
      <section className="px-5 pt-14 pb-16 sm:px-8 sm:pt-20 lg:pb-24">
        <div className="mx-auto grid max-w-[1320px] items-start gap-12 min-[1100px]:grid-cols-[minmax(0,0.85fr)_minmax(0,1.55fr)] min-[1100px]:gap-[4.5rem]">
          <div className="max-w-[480px] max-[1099px]:mx-auto max-[1099px]:text-center min-[1100px]:pt-6">
            <p className="paper-in eyebrow">{m.home.eyebrow}</p>
            <h1 className="paper-in mt-5 font-display text-[clamp(2.1rem,5.4vw,3.5rem)] leading-[1.06] font-medium tracking-[-0.012em] text-balance [animation-delay:80ms]">
              {m.home.title}
            </h1>
            <p className="paper-in mt-6 max-w-[46ch] text-[clamp(0.95rem,1.4vw,1.05rem)] leading-relaxed text-ink/75 [animation-delay:160ms] max-[1099px]:mx-auto">
              {m.home.subtitle}
            </p>
            <div className="paper-in mt-9 flex flex-col items-stretch gap-2.5 [animation-delay:240ms] sm:items-start max-[1099px]:sm:items-center">
              <Link href={`${home}/welcome/diagnostic`} className="btn-primary group px-6 py-3.5 text-[15px]">
                {m.home.ctaPrimary} <span className="arrow-nudge">→</span>
              </Link>
              <Link href={`${home}/preview`} className="btn-accent group px-6 py-3.5 text-[15px]">
                {m.home.ctaSecondary} <span className="arrow-nudge">→</span>
              </Link>
            </div>
            <ul className="paper-in mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-ink/65 [animation-delay:320ms] max-[1099px]:justify-center">
              {m.home.trust.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="h-px w-3 bg-amber" aria-hidden="true" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="paper-in min-w-0 [animation-delay:200ms] max-[1099px]:mx-auto max-[1099px]:w-full max-[1099px]:max-w-[720px]">
            <HeroDashboard m={m} href={`${home}/preview`} />
          </div>
        </div>
      </section>

      {/* Courses, which turn into plans in place */}
      <CourseCatalog courses={catalog} />
    </>
  );
}
