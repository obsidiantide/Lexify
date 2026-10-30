"use client";

/**
 * Last-resort screen for errors in the root layout itself, where messages and
 * styles are unavailable. Shows the same text in all three languages.
 */
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="az">
      <body style={{ margin: 0, minHeight: "100dvh", display: "grid", placeItems: "center", background: "#faf7f1", color: "#0f1b3d", fontFamily: "system-ui, sans-serif", textAlign: "center", padding: 16 }}>
        <div>
          <h1 style={{ fontSize: 24, margin: 0 }}>Nəsə alınmadı · Something went wrong · Что-то пошло не так</h1>
          <p style={{ color: "#5d667a" }}>Lexify</p>
          <button type="button" onClick={reset} style={{ marginTop: 16, padding: "10px 20px", borderRadius: 999, border: 0, background: "#0f1b3d", color: "#fff", fontWeight: 600, cursor: "pointer" }}>
            Yenidən · Try again · Ещё раз
          </button>
          {error.digest && <p style={{ marginTop: 16, fontSize: 12, color: "#5d667a" }}>{error.digest}</p>}
        </div>
      </body>
    </html>
  );
}
