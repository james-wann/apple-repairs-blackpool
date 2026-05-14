# Mac Repairs Blackpool — Launch & Setup Checklist

Last updated: May 2026.

Tick items as you complete them. Items marked **✓ done** were completed in the build sessions.

---

## A. Ship the current build

- [ ] `npm run build` locally — confirm 45+ pages generate without errors
- [ ] `npm test` locally — confirm Playwright suite passes
- [ ] `git add . && git commit -m "..." && git push` to land changes on Netlify
- [ ] Watch the Netlify deploy succeed in the Netlify dashboard
- [ ] Confirm the build picked up the new pages (Netlify deploy log should mention them)

## B. DNS / domain switchover

- [✓] Nameservers moved to Netlify DNS
- [ ] DNS propagation completed (check via https://whatsmydns.net querying NS for macrepairsblackpool.co.uk)
- [ ] Site resolves at `https://macrepairsblackpool.co.uk`
- [ ] Padlock icon shows in address bar (Netlify auto-provisioned the Let's Encrypt SSL cert)
- [ ] Click through every page on the live URL
- [ ] Mobile check: open the live URL on your phone, scroll through the homepage, FAQ, a town page, the contact page

## C. Placeholders to replace

- [✓] "15+ years" trust signal baked in (header bar + About page + LocalBusiness schema)
- [✓] Pricing reframed (no fixed prices; explanation of the "we quote after diagnostic" approach)
- [ ] Engineer's real name on the About page (currently "John" placeholder in `src/pages/about.astro` and `Person` schema; John Wellby per the email forwarding setup)
- [ ] Engineer's credentials on the About page (Apple certifications, anything credible to mention)
- [ ] Real photos to replace Unsplash placeholders:
  - [ ] Hero image on the homepage (`src/pages/index.astro`)
  - [ ] Three pillar tile photos on the homepage (`src/pages/index.astro`)
  - [ ] Photo for the standalone service pages (optional; they currently render text-only)
- [ ] Real review snippets if John's willing to share three or four Google reviews verbatim (would feature on the homepage or a dedicated Reviews block)
- [ ] Confirm the ten named service-area towns are accurate (in `src/data/site.ts` and `src/content/towns/`)

## D. Email setup

- [✓] WHOIS privacy forward set up at 123-reg (auto-forwards "contact the domain owner" emails)
- [ ] Customer-facing email forwarding via ImprovMX:
  - [ ] Sign up at improvmx.com, add `macrepairsblackpool.co.uk`
  - [ ] Configure forward: `contact@macrepairsblackpool.co.uk` → `johnwellby@hotmail.com`
  - [ ] Add MX records in Netlify DNS (`mx1.improvmx.com` priority 10, `mx2.improvmx.com` priority 20)
  - [ ] Add SPF TXT record (`v=spf1 include:spf.improvmx.com -all`)
  - [ ] Verify domain in ImprovMX dashboard
  - [ ] Send a test email from another inbox, confirm it lands with John
- [ ] (Optional) Configure Netlify Forms to email John when someone submits the contact form (Netlify → Forms → Form notifications)

## E. Post-launch SEO setup

- [ ] Verify ownership in **Google Search Console** for `macrepairsblackpool.co.uk` (Netlify can serve the verification TXT record)
- [ ] Submit the sitemap in Search Console: `https://macrepairsblackpool.co.uk/sitemap-index.xml`
- [ ] Request indexing for key pages in Search Console:
  - [ ] `/` (homepage)
  - [ ] `/faq/`
  - [ ] `/vs-apple-store/`
  - [ ] Top 2-3 common-fault pages
  - [ ] Top 2-3 standalone service pages
  - [ ] Top 2-3 town pages
- [ ] Validate LocalBusiness schema at https://search.google.com/test/rich-results (paste homepage URL)
- [ ] Decide on **Google Business Profile** strategy (his existing GBP is for "Apple Repairs Blackpool"; creating a second GBP at the same address with the same phone would likely be flagged as duplicate. Options: leave the new site to rank on organic alone; or rebrand the existing GBP to "Mac Repairs Blackpool" if John ever wants to migrate)

## F. Operational measurement

- [ ] Install **Microsoft Clarity** (free heatmaps + session recordings). Sign up at clarity.microsoft.com, get project ID, add script tag to `src/layouts/Base.astro`
- [ ] Install traffic analytics. Pick one:
  - [ ] **Plausible** (£9/month, no cookie banner needed, much nicer dashboard)
  - [ ] **GA4** (free, requires cookie banner under UK GDPR)
- [ ] (Optional, later) Call tracking via CallRail or ResponseTap (~£30-50/month) for attribution

## G. The demonstration phase (3-12 weeks after launch)

- [ ] Weekly Search Console check for impressions, clicks, and rankings on:
  - [ ] "apple repairs blackpool"
  - [ ] "mac repair blackpool"
  - [ ] "macbook repair blackpool"
  - [ ] "macbook screen replacement blackpool"
  - [ ] "data recovery blackpool"
- [ ] Periodic LLM citation tests: ask ChatGPT, Perplexity, Claude "where can I get a MacBook screen replaced in Blackpool" and track whether Mac Repairs Blackpool appears in the answer
- [ ] After 3 months, compare ranking on shared keywords vs `applerepairsblackpool.co.uk`. This is the demonstration to John

## H. Future content expansion (when time allows)

- [ ] More standalone service pages (keyboard, fan, RAM, password removal, macOS reinstall, etc.) — one markdown file each + `standalone: true` flag
- [ ] More common-fault diagnostic pages (Wi-Fi dropping, beach ball, kernel panic, USB-C port damaged, etc.)
- [ ] 10-20 more FAQ entries to broaden coverage
- [ ] A "Process" page walking step-by-step through "what happens when you bring in a Mac" — citation gold for LLMs
- [ ] A small blog / news section for ongoing fresh content
- [ ] Customer case studies with real customer permission

## I. Handover to John (when ready)

- [ ] Transfer GitHub repo ownership to a new account under John's email (or change the email on `james-wann` to John's)
- [ ] Transfer Netlify site ownership the same way
- [ ] Transfer ImprovMX, Search Console, Clarity, analytics accounts
- [ ] Walk John through the Cowork / Claude workflow: open Claude, point at this repo, ask for changes
- [ ] Verify John can independently make a small change (update a price comment, add a sentence) without help
