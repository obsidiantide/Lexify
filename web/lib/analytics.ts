/**
 * Marketing analytics: Google Analytics 4 and Meta Pixel. Both stay off until
 * NEXT_PUBLIC_GA_ID / NEXT_PUBLIC_META_PIXEL_ID are set, and calls made before
 * the scripts load (or with them blocked) are dropped silently.
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

type Gtag = (...args: unknown[]) => void;
type Fbq = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: Gtag;
    fbq?: Fbq;
  }
}

/** Funnel events, named after the GA4 recommended events where one exists. */
export type FunnelEvent =
  | { name: "sign_up" }
  | { name: "diagnostic_complete"; band: number }
  | { name: "purchase"; value: number; plan: string; orderId: string };

const META_EVENT: Record<FunnelEvent["name"], string> = {
  sign_up: "CompleteRegistration",
  diagnostic_complete: "Lead",
  purchase: "Purchase",
};

export function track(event: FunnelEvent): void {
  if (typeof window === "undefined") return;
  try {
    const { name, ...params } = event;
    if (window.gtag) {
      if (event.name === "purchase") {
        window.gtag("event", "purchase", { transaction_id: event.orderId, value: event.value, currency: "AZN", items: [{ item_id: event.plan }] });
      } else {
        window.gtag("event", name, params);
      }
    }
    if (window.fbq) {
      const extra = event.name === "purchase" ? { value: event.value, currency: "AZN" } : params;
      window.fbq("track", META_EVENT[name], extra);
    }
  } catch {
    // Analytics must never break the page.
  }
}
