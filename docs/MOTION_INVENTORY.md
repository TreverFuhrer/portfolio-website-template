# Motion Inventory

This file is the canonical inventory of all motion behaviors in the codebase.
It exists to prevent refactors from accidentally removing key motion behaviors
that are part of the template’s premium feel.

## Motion Categories

A. Reveal-only animations  
- Entrance animations for sections/content
- Examples: fade in / small slide up when section enters viewport

B. Scroll-linked motion (MUST PRESERVE EXACTLY)  
- Motion depends on scroll progress (useScroll/useTransform)
- These are NOT “reveal” animations.

C. Looping motion (MUST PRESERVE EXACTLY)  
- Continuous/looped motion (marquee, beam shimmer, auto-scrolling carousels)

D. Micro-interactions (MUST PRESERVE EXACTLY)  
- Hover/tap/draggable effects, small UI feedback interactions

## Refactor Rules (Codex-Proof)

- You MAY refactor Category A into standardized primitives like MotionSection/MotionItem.
- You MUST NOT remove, replace, or simplify any Category B/C/D behaviors.
- DO NOT convert B/C/D into “reveal-only” animations.
- DO NOT delete useScroll/useTransform from B behaviors.
- DO NOT remove looping/marquee animation logic from C behaviors.
- DO NOT remove hover/draggable interactions from D behaviors.
- Reduced motion: acceptable to disable transforms/loops and present static alternatives.

---

## Inventory Entries

### 1) Logos ticker / marquee (Category C) — MUST PRESERVE EXACTLY
- Section wrapper: `src/components/LogoTicker.tsx`
  - Contains reveal-only motion for heading/section entrance (Category A)
  - SAFE to migrate reveal-only part to MotionSection/MotionItem
- Marquee implementation: `src/components/socialproof/LogosMarquee.tsx`
  - Behavior: continuous looping logo marquee/carousel
  - MUST PRESERVE EXACTLY
  - DO NOT replace with reveal-only animation
  - Reduced motion fallback: show static grid/list of logos (no movement)

Visual expectation:
- Logos continuously scroll horizontally in a seamless loop.
- No jitter, no jump on resize.
- Loop should be seamless (duplicate logo array if necessary).

---

### 2) App screenshot scroll effect (Category B) — MUST PRESERVE EXACTLY
- Component: `src/components/product/AppScreenshotScrollEffect.tsx`

Behavior:
- As the user scrolls, the app screenshot transitions from “tinted/overlayed” to “flat/normal”
- Implemented via scroll progress → transform values

Rules:
- MUST PRESERVE EXACTLY
- DO NOT remove useScroll/useTransform
- DO NOT convert to simple reveal animation
- Reduced motion fallback: static flat image is acceptable

Visual expectation:
- At top of section: screenshot appears tinted/overlayed
- As scroll progresses: tint reduces smoothly to flat

---

### 3) Bento grid ambient motion + interactions (Categories C + D) — MUST PRESERVE EXACTLY
- Component: `src/components/bentogrid.tsx`

Behaviors:
- Ambient/looping visuals (beams/shimmer or similar) (Category C)
- Hover glow / interactive states on cards (Category D)
- May contain internal reveal transitions (Category A)

Rules:
- Preserve C and D exactly
- Reveal-only can be standardized, but do not remove the ambient loop or hover effects
- Reduced motion: disable looping/beam animations and keep a static visual

Visual expectation:
- Ambient animations should feel subtle and premium
- Hover effects should be responsive but not flashy
- No performance jank while scrolling

---

### 4) Hero micro-interactions (Category D) — MUST PRESERVE EXACTLY
- Component: `src/components/Hero.tsx`

Behaviors:
- Draggable decorative icons (or similar interactive hero embellishments)
- Hover/tap interactions on CTA buttons

Rules:
- MUST PRESERVE EXACTLY
- DO NOT remove dragging behavior
- Reduced motion: dragging can remain; animations/transforms should be minimized if needed

Visual expectation:
- Decorative elements can be dragged without breaking scroll or layout
- CTA hover feels responsive

---

### 5) Call to Action parallax / scroll-linked decor (Category B) — MUST PRESERVE EXACTLY
- Component: `src/components/CallToAction.tsx`

Behaviors:
- Decorative image parallax tied to scroll (Category B)
- CTA button hover/tap (Category D)

Rules:
- MUST PRESERVE EXACTLY
- DO NOT remove scroll-linked parallax logic
- Reduced motion: parallax disabled (static position) is acceptable

Visual expectation:
- Decorative elements shift subtly with scroll creating depth

---

## Motion Primitives (for Category A only)

If present/added:
- `components/motion/MotionSection.tsx` — reveal-only section wrapper
- `components/motion/MotionItem.tsx` — staggered children

Rules:
- Only Category A gets migrated to these primitives.
- B/C/D must stay in dedicated components.

---

## Reduced Motion Policy

When `prefers-reduced-motion` is enabled:
- Disable scroll-linked transforms where possible (show static states)
- Disable looping marquees/beams (show static alternatives)
- Keep layout unchanged
- Preserve content and hierarchy

This is required for accessibility and prevents motion regressions.