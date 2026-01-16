# Architecture

This repository is a Next.js + Tailwind + Framer Motion startup website template.

## Router and Entry Points

- Router: **Next.js App Router**
- Root layout: `src/app/layout.tsx`
- Home route: `src/app/page.tsx`

## High-level Structure

- `src/app/`
  - `layout.tsx` — root layout, global metadata, providers if any
  - `page.tsx` — homepage (scrollable single-page sections)
- `src/components/`
  - Home sections (Hero, Features, etc.)
  - Shared UI primitives
  - Motion primitives (if present)
- `src/components/socialproof/`
  - Social proof components such as the logos marquee implementation
- `src/components/product/`
  - Product-related components such as screenshot scroll effects
- `src/assets/`
  - Static assets (images, SVGs, etc.) used via imports
- `public/`
  - Currently minimal/empty in this repo

IMPORTANT: Do **not** move assets between `src/assets` and `public` unless you update **all** imports/paths and verify the UI visually (this is a common source of regressions).

## Homepage Composition (scroll sections)

Homepage is a scrollable landing page. Navbar links currently scroll to section IDs.

`src/app/page.tsx` renders sections in this general order:

1. Banner / Announcement
2. Navbar
3. Hero
4. Logos / Social Proof section
5. Features
6. Bento / Highlights
7. Pricing (optional)
8. FAQ
9. Call to Action
10. Footer

(Exact filenames may differ; see `docs/MOTION_INVENTORY.md` for canonical component paths.)

## Section IDs (Anchor Navigation)

Each major section must have a stable `id` so anchors like `/#pricing` work reliably:
- `hero`
- `logos`
- `features`
- `highlights` (bento)
- `pricing`
- `faq`
- `cta`

IDs must remain stable across refactors.

## Motion Architecture (Important)

This template uses multiple categories of motion:

A. Reveal-only animations  
- Entrance animations for sections/content (whileInView, fade/slide)
- These can be standardized into motion primitives.

B. Scroll-linked motion (must preserve exactly)  
- Effects that change based on scroll progress (useScroll/useTransform)
- Examples: product screenshot tint/overlay changes, parallax elements

C. Looping motion (must preserve exactly)  
- Continuous marquees/carousels (logos scrolling)
- Animated ambient elements (beams/shimmer) that loop

D. Micro-interactions (must preserve exactly)  
- Hover/tap effects, draggable elements, small UI feedback

IMPORTANT RULE:
- Only A (Reveal-only) should be migrated to generalized primitives like `MotionSection`.
- B/C/D behaviors must be preserved in dedicated components and must NOT be removed, replaced, or simplified into reveal-only animations.

## Key Components (Canonical Paths)

### Social proof
- Section wrapper (heading/layout): `src/components/LogoTicker.tsx` (or equivalent)
- Marquee implementation (looping motion): `src/components/socialproof/LogosMarquee.tsx`

IMPORTANT:
- `LogosMarquee.tsx` is the continuous loop behavior and must be preserved.

### Product screenshot scroll effect
- Scroll-linked screenshot effect: `src/components/product/AppScreenshotScrollEffect.tsx`

IMPORTANT:
- This component must preserve the “tinted -> flat” transition while scrolling.
- DO NOT convert it to a simple reveal animation.

### Bento/Highlights
- Bento grid section: `src/components/bentogrid.tsx`
- Contains ambient motion + hover micro-interactions and may include internal reveal animations.

### Call to Action
- CTA section: `src/components/CallToAction.tsx`
- May include scroll-linked parallax on decorative elements.

## Build & Run

- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`

## Documentation

- `docs/MOTION_INVENTORY.md` — canonical list of motion behaviors and where they live
- `docs/MOTION_TESTS.md` — manual regression checklist after motion refactors