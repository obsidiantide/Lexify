"use client";

import { useEffect } from "react";
import { track, type FunnelEvent } from "@/lib/analytics";

/** Fires one funnel event once per browser, e.g. on a server-rendered page. */
export function TrackOnMount({ event, onceKey }: { event: FunnelEvent; onceKey: string }) {
  useEffect(() => {
    try {
      if (localStorage.getItem(onceKey)) return;
      localStorage.setItem(onceKey, "1");
    } catch {
      // Storage blocked: still send the event.
    }
    track(event);
  }, [event, onceKey]);
  return null;
}
