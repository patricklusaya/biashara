/**
 * Cleaner Meta Pixel helpers.
 * Standard events use fbq('track', ...).
 * Custom video milestones use fbq('trackCustom', ...).
 */

import { META_PIXEL_ID } from "./config";

declare global {
  interface Window {
    fbq?: (
      action: string,
      event: string,
      params?: Record<string, unknown>
    ) => void;
    _fbq?: unknown;
  }
}

const STANDARD_EVENTS = new Set([
  "PageView",
  "ViewContent",
  "InitiateCheckout",
]);

export type PixelEvent =
  | "PageView"
  | "ViewContent"
  | "VideoStart"
  | "Video50Percent"
  | "VideoComplete"
  | "InitiateCheckout";

export function isPixelConfigured(): boolean {
  return Boolean(META_PIXEL_ID);
}

export function trackEvent(
  event: PixelEvent,
  params?: Record<string, unknown>
): void {
  if (typeof window === "undefined") return;
  if (!isPixelConfigured()) return;
  if (typeof window.fbq !== "function") return;

  try {
    if (STANDARD_EVENTS.has(event)) {
      window.fbq("track", event, params);
    } else {
      window.fbq("trackCustom", event, params);
    }
  } catch {
    // Tracking must never break the page
  }
}

export function trackCustomEvent(
  event: string,
  params?: Record<string, unknown>
): void {
  if (typeof window === "undefined") return;
  if (!isPixelConfigured()) return;
  if (typeof window.fbq !== "function") return;

  try {
    window.fbq("trackCustom", event, params);
  } catch {
    // no-op
  }
}
