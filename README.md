# Mac Repairs Blackpool

Website for Mac Repairs Blackpool. Independent Apple specialist serving Blackpool and the Fylde Coast.

The brand "Mac Repairs Blackpool" is a second identity for the same workshop that operates as Apple Repairs Blackpool. Same engineer, same phone numbers, same Cleveleys studio. This site is the SEO+AEO-focused frontend; the legacy WordPress site at applerepairsblackpool.co.uk is untouched.

Built with Astro. Deployed on Netlify. Maintained via Claude.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:4321 to view.

## Build

```bash
npm run build
```

Output goes to `/dist`.

## Tests

```bash
npm test
```

89 Playwright tests covering lead-generation behaviour and discovery integrity.
See `tests/conversion.spec.ts` and `tests/discovery.spec.ts`.

## Project structure

```
src/
  data/site.ts             SITE_INFO — single source of truth for NAP, hours, services
  layouts/Base.astro       Shared HTML shell, head metadata, LocalBusiness schema
  components/
    Header.astro            Top utility bar + sticky nav
    Footer.astro            Footer with social row, copyright, service areas
    PageHero.astro          Interior-page hero (eyebrow + title + lead + CTAs)
    CtaBand.astro           Bottom-of-page call-to-action strip
    PillarTile.astro        Homepage three-pillar tile
    ServiceGrid.astro       Renders services from the content collection by category
  content/
    config.ts               Astro content collection schemas
    services/*.md           One markdown file per Service
    towns/*.md              One markdown file per service-area Town
  pages/
    index.astro
    imac-repair-upgrades.astro
    mac-mini.astro
    macbook-all-models-repairs-upgrades.astro
    storage.astro
    apple-support.astro
    contact-us.astro
    towns/index.astro       Service areas index
    towns/[slug].astro      Dynamic town landing pages
  styles/global.css         Design system
public/
  robots.txt
  favicon.svg
astro.config.mjs            Astro config, sitemap integration, trailing slash policy
netlify.toml                Netlify build config + redirects + security headers
playwright.config.ts        Test config
CONTEXT.md                  Domain vocabulary
```

## Deployment

Pushing to the `main` branch triggers an auto-deploy on Netlify. No manual steps.

## How to make changes

Open Claude. Point it at this repo folder. Ask it to do whatever you need:

- "Update the diagnostic fee to £85 on every page"
- "Add a new service page for iPhone screen repair"
- "Change the hero photo to this one" (then attach the file)
- "Add an FAQ page about MacBook batteries"

Claude edits the relevant files. Commit and push. Netlify deploys in ~30 seconds.

## Notes for whoever takes this over

- Phone numbers, address, hours, diagnostic fee, service areas all live in `src/data/site.ts`. Change them there once and the entire site updates.
- LocalBusiness schema is auto-generated from `SITE_INFO` in `src/layouts/Base.astro`.
- Hero and tile photography is currently Unsplash placeholders. Swap for real workshop photography by changing the `background-image` URLs in `src/pages/index.astro` (or the town `[slug].astro` template for town pages).
- The contact form uses Netlify Forms. Submissions appear in Netlify → Forms. Free tier covers 100 submissions per month.
- Services are markdown files in `src/content/services/`. Each has frontmatter declaring which `categories` (page types) it appears on. To add a service, drop a new markdown file in.
- Towns are markdown files in `src/content/towns/`. Each generates a landing page at `/towns/[slug]/`. To add a town, drop a new markdown file in.
