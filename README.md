# Digital Product Sales System — Landing Page

Mobile-first sales landing page for a digital course teaching:

**Meta Ads → Customers → Landing Page → Payment → Automatic Product Delivery**

Built with Next.js (App Router), TypeScript, and Tailwind CSS. Ready for Vercel.

## Quick start

```bash
npm install
cp .env.example .env.local
# Set NEXT_PUBLIC_CHECKOUT_URL and optionally NEXT_PUBLIC_META_PIXEL_ID
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_CHECKOUT_URL` | Yes (for live CTAs) | External payment/checkout URL |
| `NEXT_PUBLIC_SALES_VIDEO_URL` | Yes (for video) | Cloudflare R2 (or CDN) MP4 URL — not stored in the repo |
| `NEXT_PUBLIC_META_PIXEL_ID` | No | Meta Pixel ID for ads tracking |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical site URL for SEO/OG |

## Sales video

The sales video is streamed from an external URL (`NEXT_PUBLIC_SALES_VIDEO_URL`), e.g. Cloudflare R2.

Do **not** commit the MP4 into this project. Optional poster: `public/sales-video-poster.jpg`.

## Editing copy

All page copy lives in `src/content/landing.ts`.

Brand/SEO defaults: `src/lib/config.ts`.

## Deploy to Vercel

1. Push to GitHub (or import the folder in Vercel).
2. Set environment variables in the Vercel project settings.
3. Deploy.

The landing page has **no backend, database, or auth**. Payment and product delivery are handled by your external checkout system.
