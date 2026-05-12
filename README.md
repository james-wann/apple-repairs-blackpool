# Apple Repairs Blackpool

Website for Apple Repairs Blackpool. Independent Apple specialists serving the Fylde Coast.

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

## Project structure

```
src/
  layouts/Base.astro       Shared HTML shell, head metadata, LocalBusiness schema
  components/
    Header.astro            Top utility bar + sticky nav
    Footer.astro            Footer with social row and copyright
  pages/
    index.astro             Homepage
    imac-repair-upgrades.astro
    mac-mini.astro
    macbook-all-models-repairs-upgrades.astro
    storage.astro
    apple-support.astro
    contact-us.astro
  styles/global.css         Design system (v5 visual language)
public/
  robots.txt
  favicon.svg
astro.config.mjs            Astro config, sitemap integration, trailing slash policy
netlify.toml                Netlify build config + redirects + security headers
```

## Deployment

Pushing to the `main` branch triggers an auto-deploy on Netlify. No manual steps.

The `netlify.toml` file pins the build command, publish directory, redirects from
legacy WordPress URLs, and adds security headers.

## URLs preserved from the old WordPress site

These URLs are kept exactly to maintain SEO ranking:

- `/` (homepage)
- `/imac-repair-upgrades/`
- `/mac-mini/`
- `/macbook-all-models-repairs-upgrades/`
- `/storage/`
- `/apple-support/`
- `/contact-us/`

Legacy WordPress URLs (old blog posts, `/wp-admin/`, etc.) are 301-redirected to `/`
via `netlify.toml`.

## How to make changes

Open Claude. Point it at this repo folder. Ask it to do whatever you need:

- "Update the diagnostic fee to £85 on every page"
- "Add a new service page for iPhone screen repair"
- "Change the hero photo to this one" (then attach the file)
- "Add a Lancaster town page following the same pattern"

Claude edits the relevant files. Commit and push. Netlify deploys in ~30 seconds.

## Notes for whoever takes this over

- All keyword-bearing content was preserved verbatim from the original WordPress site
  where it ranked. Per-service descriptions on the interior pages were written fresh
  for the rebuild and approved by the owner.
- LocalBusiness schema lives in `src/layouts/Base.astro`. Update phone, hours, or
  address there and it propagates site-wide.
- Hero and tile photography is currently from Unsplash placeholder URLs. Swap for the
  business's own photography by changing the `background-image` URLs in
  `src/pages/index.astro`.
- The contact form uses Netlify Forms. Submissions appear in the Netlify dashboard
  under Forms. Free tier covers 100 submissions per month.
- Phone numbers, address, hours, and the £75 diagnostic fee are sourced from the
  existing live site. Update in `Base.astro` (schema) and `contact-us.astro` if any
  of those change.
