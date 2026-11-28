import Link from "next/link";
import { Logo } from "@/components/Logo";
import type { Locale } from "@/lib/i18n/config";
import type { Messages } from "@/messages/en";
import { SOCIAL_LINKS, SUPPORT_EMAIL } from "@/lib/site";

function SocialIcon({ id }: { id: (typeof SOCIAL_LINKS)[number]["id"] }) {
  const paths: Record<typeof id, string> = {
    instagram:
      "M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3Zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 3.6c2.7 0 3 0 4.1.1 2.7.1 4 1.4 4.1 4.1.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 2.7-1.4 4-4.1 4.1-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-2.7-.1-4-1.4-4.1-4.1C3.7 15 3.6 14.7 3.6 12s0-3 .1-4.1c.1-2.7 1.4-4 4.1-4.1 1.1-.1 1.4-.2 4.2-.2Z",
    telegram:
      "M20.7 4.3 2.9 11.2c-1.2.5-1.2 1.2-.2 1.5l4.6 1.4 1.8 5.4c.2.6.4.8.8.8.4 0 .6-.2.9-.5l2.2-2.1 4.6 3.4c.8.5 1.4.2 1.6-.8l3-14.2c.3-1.2-.5-1.8-1.5-1.3Zm-3 3.3-8.2 7.4-.3 3.4-1.6-4.9 9.6-6.1c.4-.3.8-.1.5.2Z",
    youtube:
      "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z",
    tiktok:
      "M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.7V9a7.4 7.4 0 0 0 4.3 1.4V7.3a4.3 4.3 0 0 1-3.2-1.5Z",
  };
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d={paths[id]} />
    </svg>
  );
}

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2.5">
      <h3 className="mb-1 text-[0.62rem] font-bold tracking-[0.26em] text-amber uppercase">{title}</h3>
      {children}
    </div>
  );
}

const linkCls = "paper-link w-fit text-sm text-ink/70 transition-colors hover:text-ink";

export function SiteFooter({ locale, m }: { locale: Locale; m: Messages }) {
  const home = `/${locale}`;
  const socials = SOCIAL_LINKS.filter((s) => s.href);
  return (
    <footer className="no-print border-t border-ink/[0.08] bg-[#f2ecdd] px-5 pt-10 pb-6 sm:px-10 sm:pt-12">
      <div className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-[minmax(180px,1fr)_2fr] md:gap-14">
        <div className="flex max-w-[340px] flex-col gap-4">
          <Link href={home} aria-label="Lexify" className="w-fit transition-opacity hover:opacity-70">
            <Logo />
          </Link>
          <p className="max-w-[28ch] font-display text-[1.05rem] leading-snug text-ink/70 italic">{m.footer.tagline}</p>
          {SUPPORT_EMAIL && (
            <a href={`mailto:${SUPPORT_EMAIL}`} className={linkCls}>
              {SUPPORT_EMAIL}
            </a>
          )}
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
          <Col title={m.footer.product}>
            <Link className={linkCls} href={`${home}/welcome/diagnostic`}>{m.nav.diagnostic}</Link>
            <Link className={linkCls} href={`${home}/preview`}>{m.nav.preview}</Link>
            <Link className={linkCls} href={`${home}#plans`}>{m.nav.pricing}</Link>
            <Link className={linkCls} href={`${home}/guides`}>{m.nav.guides}</Link>
          </Col>
          <Col title={m.footer.legal}>
            <Link className={linkCls} href={`${home}/terms`}>{m.footer.terms}</Link>
            <Link className={linkCls} href={`${home}/privacy`}>{m.footer.privacy}</Link>
            <Link className={linkCls} href={`${home}/refund-policy`}>{m.footer.refund}</Link>
          </Col>
          {socials.length > 0 && (
            <Col title={m.footer.follow}>
              {socials.map((s) => (
                <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" className={`${linkCls} inline-flex items-center gap-2`}>
                  <SocialIcon id={s.id} /> {s.label}
                </a>
              ))}
            </Col>
          )}
          {SUPPORT_EMAIL && (
            <Col title={m.footer.reach}>
              <a className={linkCls} href={`mailto:${SUPPORT_EMAIL}`}>Email</a>
            </Col>
          )}
        </div>
      </div>
      <div className="mx-auto mt-9 mb-5 h-px max-w-[1180px] bg-[linear-gradient(90deg,transparent,rgb(181_122_46_/_0.28)_18%,rgb(181_122_46_/_0.28)_82%,transparent)]" />
      <div className="mx-auto flex max-w-[1180px] flex-col gap-2 text-[0.74rem] text-ink/55 md:flex-row md:items-start md:justify-between">
        <p className="shrink-0">© {new Date().getFullYear()} Lexify. {m.footer.rights}</p>
        <p className="max-w-2xl md:text-right">{m.footer.disclaimer}</p>
      </div>
    </footer>
  );
}
