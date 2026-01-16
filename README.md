# Startup Landing Template

A plug-and-play startup site with a company homepage and app-centric product pages. Edit `src/content/*` and deploy.

Demo: https://startup-website-template-zeta.vercel.app/product/app

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Edit content (no component edits)

- `src/content/site.ts` - brand, nav, socials, navbar config (anchors + product routes)
- `src/content/company.ts` - homepage section order, hero copy, mission/pillars/vision, trust bar, hero visuals, featured product teaser, final CTA
- `src/content/products.ts` - product list, product sub-nav, screenshots, and product page blocks
- `src/content/pricing.ts` - pricing plans (used on product pages)
- `src/content/faq.ts` - company FAQ (homepage)
- `public/og/default.png` - default social image (set per product via `ogImage`)
- `docs/ASSET_INVENTORY.md` - current asset list and sources policy

Content is validated at build time. If something is missing, the build/dev server will throw a clear error.

## Homepage structure

Homepage sections are driven by `companyConfig.homepage.sections` in `src/content/company.ts`. Toggle sections on/off or reorder them there. Pricing is off by default on the homepage.

## Product page navigation

The product page includes a second sticky sub-nav under the main navbar. Configure it in `products[].page.nav` in `src/content/products.ts`. Each nav item must map to a section `id` used in the product blocks.

## Add a product

1. Add screenshots to `src/assets/images`.
2. Add a product entry in `src/content/products.ts` with a unique `slug`, `ogImage`, and `screenshots`.
3. Fill in `page` blocks and set `page.order` to the blocks you want to render.
4. Update `page.nav` to match the block ids you want to link to.
5. (Optional) Add a nav link in `src/content/site.ts` to `/product/<slug>`.

The homepage featured product and primary CTA use the first product in the array, so reorder if needed.

## Assets

All visuals come from local assets in `src/assets/images`. Asset roles are explicitly defined in content:

- `companyConfig.heroVisual`
- `companyConfig.homepage.featuredProduct.previewImage`
- `products[].screenshots`

If new assets are needed, follow the policy in `docs/ASSET_INVENTORY.md`.

## Deploy to Vercel

1. Push the repo to GitHub.
2. Import the project in Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to your production domain.
4. Deploy (build command: `npm run build`).

## Scripts

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run typecheck`
- `npm run format`

## License

MIT License
