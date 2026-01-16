# Asset Inventory

This project only uses locally stored assets. No stock photography.

## Source directories

- `src/assets/images/` (UI screenshots, decorative accents, logo placeholders)
- `public/og/` (Open Graph images)
- `public/` (Next.js default icons)

## Assets in src/assets/images

Product and UI
- `src/assets/images/app-screen.png` - primary product screenshot (Lumen)
- `src/assets/images/message.png` - supporting screenshot (messaging/notes)
- `src/assets/images/cursor.png` - supporting screenshot (review/approval)
- `src/assets/images/product.avif` - abstract product visual (unused)

Decorative accents
- `src/assets/images/helix2.png` - hero accent (spiral)
- `src/assets/images/emojistar.png` - hero accent (star)

Integration/logo placeholders
- `src/assets/images/acme.png`
- `src/assets/images/apex.png`
- `src/assets/images/celestial.png`
- `src/assets/images/echo.png`
- `src/assets/images/pulse.png`
- `src/assets/images/quantum.png`

Bento grid partner logos
- `src/assets/images/logo-amazon.png`
- `src/assets/images/logo-apple.png`
- `src/assets/images/logo-wise.png`

Other
- `src/assets/images/logosaas.png` - generic logo (unused)
- `src/assets/images/eldoraui.png` - generic logo (unused)

## Assets in public/og

- `public/og/default.png` - default OG image

## Assets in public

- `public/next.svg`
- `public/vercel.svg`

## Asset roles in content config

- `companyConfig.heroVisual` (hero accents)
- `companyConfig.homepage.featuredProduct.previewImage` (homepage featured product image)
- `products[].screenshots` (product screenshot set)

## Approved generic sources (if assets are missing)

Use these only when local assets are insufficient:
- Figma Community (SaaS illustrations, abstract gradients, app mockups)
- unDraw (clean illustrations)
- Haikei (SVG backgrounds: mesh gradients, blobs, waves)
- Heroicons/Lucide (icons)

Avoid: stock photos of people, landscapes, or overly illustrative cartoon styles.
