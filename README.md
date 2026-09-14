# Swappei

Retail website for Swappei Inc, a US-based reseller of pre-owned smartphones,
built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Structure

- `src/app/page.tsx` — Home
- `src/app/store/page.tsx` — Store listing (filter by manufacturer/condition, sort)
- `src/app/store/[slug]/page.tsx` — Product detail page
- `src/app/faq/page.tsx` — FAQ
- `src/app/guide/page.tsx` — User Guide (how to purchase, shipping, returns)
- `src/app/contact/page.tsx` — Contact form (UI only, not wired to a backend yet)
- `src/app/legal/*` — Terms & Conditions, Privacy Policy, Return & Refund Policy,
  Shipping Policy, Warranty Policy
- `src/lib/products.ts` — Mock product catalog, one entry per representative
  model per manufacturer (not per-IMEI)
- `src/components/` — Header, Footer, Logo, and shared UI

## Notes / things to wire up later

- Contact form currently just shows a success state on submit — no email/backend yet
- "Add to Cart" is a placeholder — no cart or checkout flow yet
- Product images are placeholder SVGs in `public/products/` — swap for real photos
- Legal page content is a reasonable starting draft, not reviewed by counsel
