# Mac Repairs Blackpool — domain vocabulary

This document names the things this codebase talks about. New code should use these terms; if a concept doesn't have a name here, name it here first.

## Business

**Mac Repairs Blackpool** — the brand identity of this site. A second public-facing brand for the same workshop that historically traded as Apple Repairs Blackpool. Same engineer, same Cleveleys studio (FY5 1RY), same phone numbers. This site is the SEO+AEO-focused frontend; the legacy WordPress site at applerepairsblackpool.co.uk continues to operate on the original brand unchanged.

**Apple Repairs Blackpool** — the legacy brand. Mentioned only for internal context; the public-facing site (this one) does not link to or reference it.

**Studio** — the physical workshop in Cleveleys, FY5 1RY. Used in copy in preference to "shop" or "office".

**Fylde Coast** — the geographic service area. Wider than Blackpool itself. Used as a region label.

**Service area** — a named town within the wider Fylde / Lancashire region that the business serves. Ten of them are defined in `SITE_INFO.serviceAreas` and rendered as Town landing pages.

**NAP** — name, address, phone. The three pieces of business data Google's local SEO cares about most. Lives in `SITE_INFO`.

**Diagnostic fee** — the fixed fee charged when the fault isn't obvious from a phone description. Currently £75. Deducted from any subsequent repair. Lives in `SITE_INFO.diagnosticFee`.

## Page concepts

**Page Hero** — the standard top-of-page block on interior pages. Glass-pill eyebrow + big display title + lead paragraph + optional CTAs. Implemented as the `PageHero` component.

**CTA Band** — the bottom-of-page call-to-action strip. Heading + lead + two pill buttons. Implemented as the `CtaBand` component.

**Pillar Tile** — one of the three feature tiles on the homepage three-up grid (Qualified Apple Engineer / 100% Genuine Apple Parts / Onsite Repairs). Text at top on a clean tile background, photo hero anchored at the bottom. Light or dark variant. Implemented as the `PillarTile` component.

**Feature Card** — the wider two-column promotional block used on the homepage for "Apple Computer Sales". Image with glass overlay on one side, copy on the other. Currently inline; could become a `FeatureCard` component if reused.

**Service Grid** — the responsive grid of `service-card` blocks shown on Repair/Support pages. Driven by the services content collection filtered by category. Implemented as the `ServiceGrid` component.

## Content collections

**Service** — one repairable fault or upgrade we offer (e.g. "Screen replacement", "Battery replacement", "Data recovery"). Stored as markdown files in `src/content/services/`. Each service declares one or more `categories` controlling which Repair/Support pages it appears on.

**Service category** — one of: `imac`, `mac-mini`, `macbook`, `storage`, `support`. Each category corresponds to a top-level Repair/Support page.

**Town** — one service-area town with its own landing page. Stored as markdown files in `src/content/towns/`. The dynamic page at `/towns/[slug]/` renders one per file. Listed together at `/towns/`.

## SEO / structured data

**LocalBusiness schema** — the JSON-LD `LocalBusiness` block emitted in the `<head>` of every page. Single source of truth: built from `SITE_INFO` in `src/layouts/Base.astro`.

## Architectural shorthand

**Module / Interface / Seam / Adapter / Depth / Leverage / Locality** — as defined by the improve-codebase-architecture skill. Used in commit messages and code review notes.
