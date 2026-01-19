# Portfolio Website Template

A minimal, motion-forward portfolio template built with Next.js, Tailwind CSS, and Framer Motion. Edit the content files, deploy, and you have a clean, fast personal site ready for clients.

Live demo: https://portfolio-website-template-iota.vercel.app/

## Features

- Single-page portfolio flow (Hero, About, Work, Capabilities, Experience, Contact)
- Content-first setup via `src/content/*`
- Smooth section reveal animations with reduced-motion support
- Mobile-first layout and accessible focus states
- Easy theme control using CSS variables

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Edit content (no component edits)

- `src/content/portfolio.ts` - section copy, project cards, services, experience, contact details
- `src/content/site.ts` - brand, nav labels, socials, navbar CTA, site URL
- `public/og/default.png` - default social image

Content is validated at runtime; missing fields throw a clear error in dev/build.

## Sections

Section order and visibility are driven by `portfolioConfig.homepage.sections` in `src/content/portfolio.ts`. Reorder or toggle sections there.

## Theming

Theme tokens live in `src/app/globals.css` under `:root`:

- `--ink`, `--paper`, `--surface`
- `--brand-1`, `--brand-2`, `--brand-3`

Adjust the gradient background there to quickly change the overall mood.

## Motion

Section animations are defined in `src/components/motion/*` and applied via `MotionSection` and `MotionItem`. Respect for `prefers-reduced-motion` is built in.

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
