# King's Cut — El Cajon

> El Cajon's premier barbershop since 2007. Your Cut. Your Crown.

Production website for King's Cut barbershop at 729 Jamacha Rd, El Cajon, CA.
Built with Next.js 16, React 19, Tailwind CSS v4, GSAP 3, Lenis, and Framer
Motion to an editorial / Awwwards-grade standard.

## Stack

| Layer       | Tool                                       |
| ----------- | ------------------------------------------ |
| Framework   | Next.js 16 (App Router) + Turbopack        |
| Runtime     | React 19                                   |
| Styling     | Tailwind CSS v4 (custom design tokens)     |
| Type System | TypeScript (strict)                        |
| Animation   | GSAP 3 + ScrollTrigger + Lenis smooth      |
| Motion      | Framer Motion 11                           |
| Typography  | Cormorant Garamond · DM Sans · DM Mono     |

## Verified Business Data

- **Address:** 729 Jamacha Rd, El Cajon, CA 92019
- **Phone:** (619) 334-6665
- **Founded:** 2007
- **Owner:** Maysam
- **Hours:** Mon–Sat 9 AM – 7 PM · Sun 9 AM – 3 PM
- **Booking:** Fresha
- **Yelp:** 4.1★ · 116 reviews

## Routes

| Route       | Purpose                                |
| ----------- | -------------------------------------- |
| `/`         | Home — hero, services, story, CTA      |
| `/services` | Full service menu                      |
| `/barbers`  | Meet the team                          |
| `/gallery`  | Portfolio of work and shop interior    |
| `/book`     | Online booking + walk-in info          |

## Design System

Color palette and typography tokens are defined in
[`app/globals.css`](app/globals.css) under `@theme { ... }`.

| Token             | Value      |
| ----------------- | ---------- |
| Background Dark   | `#0A0A0A`  |
| Background Light  | `#F5F0E8`  |
| Accent (Gold)     | `#C8A227`  |
| Crimson           | `#8B1A1A`  |
| Border            | `rgba(200,162,39,0.2)` |

## Animation Inventory

- GSAP SplitText character reveal on hero headline
- Ken Burns subtle zoom on hero background image
- Lenis smooth scroll synced with GSAP ScrollTrigger
- Bidirectional scroll reveals (`toggleActions: play none none reverse`)
- Framer Motion `AnimatePresence` page route transitions
- Magnetic buttons on primary CTAs (pointer:fine only)
- Infinite GSAP marquee on trust bar + testimonials
- Clip-path wipe on services cards + story section image
- GSAP counting animation on stats — bidirectional
- Cinematic parallax on story image (0.6× scroll speed)
- Float idle animation on service cards
- Scroll progress counter (top-right, DM Mono, `000%` → `100%`)
- FPS / scroll debug panel (bottom-left, decorative)
- Ghost watermark text on hero, story, CTA sections

## SEO & Discovery

- JSON-LD `BarberShop` + `LocalBusiness` schema on `/`
- `aggregateRating` with verified Yelp data
- Canonical URLs on every route
- Open Graph + Twitter cards
- Dynamic OG image at `/opengraph-image`
- `public/sitemap.xml`, `public/robots.txt`, `public/llms.txt`, `public/llms-full.txt`

## Security

`next.config.ts` sets the following security headers on all routes:

- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()`
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- `X-DNS-Prefetch-Control: on`

## Local Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start    # production server
```

## Deploy

Auto-deploys from `main` to Vercel.

## License

© 2025 King's Cut. All rights reserved.
