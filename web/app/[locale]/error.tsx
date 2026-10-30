"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { useI18n } from "@/components/i18n";

/** Shown instead of the bare Next.js error screen when a page under a locale fails to render. */
export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { locale, m } = useI18n();
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-4 text-center">
      <Logo />
      <h1 className="mt-10 font-display text-3xl font-semibold">{m.serverError.title}</h1>
      <p className="mt-2 max-w-md text-muted">{m.serverError.text}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button type="button" onClick={reset} className="btn-primary btn-lg">
          {m.serverError.retry}
        </button>
        <Link href={`/${locale}`} className="btn-ghost btn-lg">
          {m.serverError.home}
        </Link>
      </div>
      {error.digest && <p className="mt-6 text-xs text-muted">{error.digest}</p>}
    </div>
  );
}
