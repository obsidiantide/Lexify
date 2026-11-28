"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { useI18n } from "@/components/i18n";
import { useSession } from "@/components/useSession";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { logout, UserMenu } from "./UserMenu";

export function SiteHeader() {
  const { locale, m } = useI18n();
  const { user, loading } = useSession();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const home = `/${locale}`;
  const links = [
    { href: `${home}#courses`, label: m.nav.courses },
    { href: `${home}#plans`, label: m.nav.pricing },
    { href: `${home}/preview`, label: m.nav.preview },
    { href: `${home}/guides`, label: m.nav.guides },
  ];

  return (
    <header
      className={`no-print sticky top-0 z-40 border-b bg-paper/[0.88] backdrop-blur-md transition-colors duration-300 ${scrolled || open ? "border-line" : "border-transparent"}`}
    >
      <div className="mx-auto grid h-16 max-w-[1320px] grid-cols-[1fr_auto] items-center gap-4 px-5 sm:px-8 md:grid-cols-[1fr_auto_1fr]">
        <div className="flex items-center gap-4">
          <Link href={home} aria-label="Lexify" onClick={() => setOpen(false)} className="transition-opacity hover:opacity-75">
            <Logo />
          </Link>
          <span className="hidden md:block">
            <LanguageSwitcher align="left" />
          </span>
        </div>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="paper-link text-sm text-ink/85 transition-colors hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-2 md:flex">
          {loading ? (
            <span className="h-9 w-24" />
          ) : user ? (
            <>
              <Link href={`${home}/app`} className="btn-primary px-4 py-2">
                {m.nav.cabinet}
              </Link>
              <UserMenu user={user} />
            </>
          ) : (
            <>
              <Link href={`${home}/signup`} className="paper-link px-2 text-sm text-ink/85 hover:text-ink">
                {m.nav.signup}
              </Link>
              <Link href={`${home}/login`} className="btn-primary px-4 py-2">
                {m.nav.login}
              </Link>
            </>
          )}
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="p-2 transition-opacity hover:opacity-70"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? m.nav.closeMenu : m.nav.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="paper-view-in border-t border-line bg-paper md:hidden">
          <nav className="container-page flex flex-col py-3">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-line/70 px-1 py-3.5 font-display text-lg hover:text-amber-deep">
                {l.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              {user ? (
                <>
                  <Link href={`${home}/app`} onClick={() => setOpen(false)} className="btn-primary btn-lg">
                    {m.nav.cabinet}
                  </Link>
                  <Link href={`${home}/account`} onClick={() => setOpen(false)} className="btn-ghost btn-lg">
                    {m.nav.account}
                  </Link>
                  {user.isAdmin && (
                    <Link href={`${home}/admin`} onClick={() => setOpen(false)} className="btn-ghost btn-lg">
                      {m.nav.admin}
                    </Link>
                  )}
                  <button onClick={() => logout(locale)} className="btn-ghost btn-lg">
                    {m.nav.logout}
                  </button>
                </>
              ) : (
                <>
                  <Link href={`${home}/signup`} onClick={() => setOpen(false)} className="btn-primary btn-lg">
                    {m.nav.signup}
                  </Link>
                  <Link href={`${home}/login`} onClick={() => setOpen(false)} className="btn-ghost btn-lg">
                    {m.nav.login}
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
