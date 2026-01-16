# Customization

## Change colors

Edit CSS variables in `src/app/globals.css` under `:root` (for example `--brand-1`, `--brand-2`, `--ink`). Keep the variable names the same to avoid layout changes.

## Swap the logo

Update `LogoIcon` in `src/components/icons.tsx` with your own SVG, then update `siteConfig.brand` in `src/content/site.ts` for the label.

## Change navigation

Edit `src/content/site.ts`:

- Anchor items must use `href: "/#<id>"` and `sectionId: "<id>"`.
- `sectionId` should match a section `navId` in `companyConfig.homepage.sections`.
- Page items can point to `/product/<slug>`.

## Add or reorder product blocks

In `src/content/products.ts`, each product has a `page` config:

- Edit block copy in `page.hero`, `page.screenshots`, `page.howItWorks`, `page.featureGrid`, `page.useCases`, `page.faq`, `page.finalCta`.
- Reorder or remove blocks by editing `page.order` (uses block keys above).
- To add a brand-new block type, add a new type in `src/content/types.ts`, create a component in `src/components/product`, and update `src/components/product/ProductSections.tsx`.
