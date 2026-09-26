/**
 * Central site configuration.
 * Checkout URL comes from NEXT_PUBLIC_CHECKOUT_URL — never hardcode it in components.
 */

export const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_URL || "#checkout";

/** Cloudflare R2 (or other CDN) URL for the sales video — not bundled in the project */
export const SALES_VIDEO_URL =
  process.env.NEXT_PUBLIC_SALES_VIDEO_URL || "";

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

export const SITE = {
  name: "Fursa za Biashara",
  title: "Fursa za Biashara — Jenga Mfumo wa Kuuza Digital Products",
  description:
    "Jifunze jinsi ya kupata wateja kupitia Meta Ads, kuuza digital products na kuwapelekea bidhaa automatically baada ya malipo.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  contactEmail: "[CONTACT EMAIL]",
  ogImage: "/og-image.jpg",
} as const;
