# Motion Tests (Manual Regression Checklist)

Run these checks after ANY refactor involving motion, layout primitives, or section composition.
Goal: ensure premium motion behaviors were not removed or simplified incorrectly.

## Setup
- Run: `npm run dev`
- Test in a normal browser window.
- Also test with reduced motion enabled:
  - macOS: System Settings → Accessibility → Display → Reduce motion
  - (or browser devtools emulate prefers-reduced-motion)

---

## A) Must-Preserve Behaviors (Normal Motion)

### 1) App screenshot scroll effect (tinted -> flat)
- Navigate to the section with the app screenshot.
- Scroll slowly through the section.
PASS if:
- Screenshot starts tinted/overlayed near the top
- Tint/overlay smoothly reduces as you scroll
- Ends flat/normal by the intended scroll point
FAIL if:
- Effect is gone, instantly snaps, or only fades in once.

### 2) Logos marquee / carousel is continuous
- Find the logos social proof section.
PASS if:
- Logos move continuously in a seamless loop
- No jitter or jump when resizing the window
FAIL if:
- It became a static row, stopped moving, or only animates on reveal.

### 3) Bento grid ambient animation + hover
- Locate the bento/highlights section.
PASS if:
- Ambient animation (beams/shimmer/etc.) is present and subtle
- Hovering cards triggers glow/interaction states
- No jank while scrolling
FAIL if:
- Ambient motion removed or hover interactions removed.

### 4) Hero draggable decorative elements
- On the hero section, interact with decorative draggable icons/elements.
PASS if:
- Elements remain draggable
- Dragging does not break scroll or layout
FAIL if:
- Draggability removed or causes layout glitches.

### 5) CTA parallax / scroll-linked decorative motion
- Find the CTA section and scroll around it.
PASS if:
- Decorative elements shift subtly with scroll (depth effect)
FAIL if:
- Parallax removed or replaced with a simple fade.

### 6) Reveal animations still function
- Scroll from top to bottom once.
PASS if:
- Sections/content reveal subtly (opacity + small y/scale)
- Motion is consistent across sections (same “language”)
FAIL if:
- reveals are inconsistent, too flashy, or missing.

---

## B) Reduced Motion Mode (prefers-reduced-motion)

Enable reduced motion and re-test:

### 1) App screenshot effect reduced-motion fallback
PASS if:
- Screenshot shows a static flat/normal appearance
- No scroll-linked transform animation occurs

### 2) Logos marquee reduced-motion fallback
PASS if:
- Logos are shown as a static row/grid/list
- No continuous movement occurs

### 3) Bento reduced-motion fallback
PASS if:
- Ambient looping animation is disabled
- Bento content still looks intentional (not broken)

### 4) CTA reduced-motion fallback
PASS if:
- Parallax is disabled (static)
- CTA content/layout unchanged

### 5) Reveal animations reduced-motion fallback
PASS if:
- Either no reveals or minimal opacity-only reveals
- No y/scale transforms

---

## C) Performance sanity check

PASS if:
- Scrolling remains smooth
- No obvious layout shifts in hero, screenshots, or bento
- No console errors/warnings related to motion hooks

FAIL if:
- severe stutters, repeated reflows, or console spam