# NightOwl Landing Page

AI after-hours phone receptionist landing page. Answers calls, books appointments, texts summaries.

## Live URLs

- **Production:** https://nightowl-landing.vercel.app
- **GitHub:** https://github.com/garrettm31/nightowl-landing

## Tech Stack

- Next.js 15 (downgraded from 16 — Vercel doesn't support 16 yet)
- React 18
- Tailwind CSS 4
- Framer Motion (animations)
- Lucide React (icons)
- TypeScript
- Deployed on Vercel (auto-deploys from `main`)

## Project Structure

```
src/
  app/
    page.tsx          # Root page — assembles all landing sections
    layout.tsx        # Root layout — Inter font, metadata, OG tags
    globals.css       # Tailwind import + custom color theme (night-*, owl-*, mint-*)
  components/
    nav.tsx           # Top navigation (inline SVG owl logo + sticky header)
    hero.tsx          # Hero section
    metrics.tsx       # Key metrics/stats
    problem.tsx       # Problem statement section
    how-it-works.tsx  # How it works steps
    features.tsx      # Feature highlights
    pricing.tsx       # Pricing tiers 
    faq.tsx           # FAQ accordion
    cta-banner.tsx    # Call-to-action banner
    footer.tsx        # Footer
    ui/
      animated-section.tsx  # Framer Motion scroll animation wrapper
      button.tsx            # Reusable button component
      section-header.tsx    # Reusable section header
  lib/
    faq-data.ts       # FAQ content data
    pricing-data.ts   # Pricing tier data
```

## Custom Theme Colors

Defined in `globals.css` via Tailwind `@theme`:
- `night-50` through `night-950` — dark background palette
- `owl-300` through `owl-700` — primary purple/indigo accent
- `mint-400`, `mint-500` — secondary green accent

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint
```

## Deployment

Push to `main` on GitHub triggers automatic Vercel deployment. No special env vars or build config needed.

## Key Decisions / Gotchas

- **Next.js 16 broke Vercel deploys** — caused 404 on production. Downgraded to 15. Don't upgrade until Vercel officially supports 16.
- **`gh` CLI** is installed and authenticated as `garrettm31` via keyring.
- ESLint config uses `@eslint/eslintrc` FlatCompat for Next.js 15 compatibility.
- **Logo** is an inline SVG owl in `nav.tsx` (purple eye rings, white face, amber beak) — not an image file. To change it, edit the SVG directly in the component.

## What's Next (TODO)

- Custom domain setup (trynightowl.com is referenced in OG metadata)
- Analytics (Vercel Speed Insights / Web Analytics not yet enabled)
- Form/CTA integration (waitlist signup, Calendly, etc.)
- A/B testing on hero copy
- Mobile responsiveness audit
