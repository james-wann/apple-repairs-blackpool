import { test, expect } from '@playwright/test';
import { ALL_PAGES, PHONE } from './fixtures';

/**
 * Discovery tests.
 *
 * Things that affect whether a potential customer can find the site
 * (SEO basics: schema, titles, meta, sitemap) and whether they can navigate it
 * without falling into a 404 hole.
 */

test.describe('page health', () => {

  for (const path of ALL_PAGES) {
    test(`${path} returns 200`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status(), `${path} did not return 200`).toBe(200);
    });
  }

});

test.describe('internal link integrity', () => {

  test('no internal link on any page returns 404', async ({ page, request }) => {
    const visited = new Set<string>();
    const broken: { from: string; href: string; status: number }[] = [];

    for (const path of ALL_PAGES) {
      await page.goto(path);
      const hrefs = await page.locator('a[href]').evaluateAll(els =>
        els
          .map(el => (el as HTMLAnchorElement).getAttribute('href'))
          .filter((h): h is string => !!h)
          .filter(h => !h.startsWith('tel:'))
          .filter(h => !h.startsWith('mailto:'))
          .filter(h => !h.startsWith('http://') && !h.startsWith('https://'))
          .filter(h => !h.startsWith('#'))
      );

      for (const href of hrefs) {
        if (visited.has(href)) continue;
        visited.add(href);
        const res = await request.get(href);
        if (res.status() !== 200) {
          broken.push({ from: path, href, status: res.status() });
        }
      }
    }

    expect(broken, `broken internal links found: ${JSON.stringify(broken, null, 2)}`).toEqual([]);
  });

});

test.describe('LocalBusiness schema', () => {

  test('homepage emits valid LocalBusiness JSON-LD with required fields', async ({ page }) => {
    await page.goto('/');
    const jsonLd = await page.locator('script[type="application/ld+json"]').first().textContent();
    expect(jsonLd, 'no JSON-LD script tag found').toBeTruthy();

    const parsed = JSON.parse(jsonLd as string);

    expect(parsed['@type']).toBe('LocalBusiness');
    expect(parsed.name).toBeTruthy();
    expect(parsed.url).toBeTruthy();
    expect(parsed.telephone).toBeTruthy();
    expect(parsed.address).toBeTruthy();
    expect(parsed.address.addressLocality).toBe('Cleveleys');
    expect(parsed.address.postalCode).toBe('FY5 1RY');
    expect(parsed.openingHoursSpecification).toBeTruthy();
    expect(Array.isArray(parsed.areaServed) && parsed.areaServed.length).toBeGreaterThan(0);
  });

  test('LocalBusiness schema telephone matches the live phone numbers', async ({ page }) => {
    await page.goto('/');
    const jsonLd = await page.locator('script[type="application/ld+json"]').first().textContent();
    const parsed = JSON.parse(jsonLd as string);
    const phones: string[] = Array.isArray(parsed.telephone) ? parsed.telephone : [parsed.telephone];
    expect(phones).toContain('+441253445032');
    expect(phones).toContain('+447873170729');
  });

  test('schema is emitted on every page (not just homepage)', async ({ page }) => {
    for (const path of ALL_PAGES) {
      await page.goto(path);
      const scriptCount = await page.locator('script[type="application/ld+json"]').count();
      expect(scriptCount, `${path} missing JSON-LD schema`).toBeGreaterThan(0);
    }
  });

});

test.describe('meta tags', () => {

  test('every page has a non-empty title', async ({ page }) => {
    for (const path of ALL_PAGES) {
      await page.goto(path);
      const title = await page.title();
      expect(title.trim().length, `${path} has empty title`).toBeGreaterThan(0);
    }
  });

  test('every page has a non-empty meta description', async ({ page }) => {
    for (const path of ALL_PAGES) {
      await page.goto(path);
      const description = await page.locator('meta[name="description"]').getAttribute('content');
      expect(description?.trim().length, `${path} has empty meta description`).toBeGreaterThan(0);
    }
  });

  test('page titles are unique across the site', async ({ page }) => {
    const titles = new Map<string, string>();
    for (const path of ALL_PAGES) {
      await page.goto(path);
      titles.set(path, await page.title());
    }
    const uniqueTitles = new Set(titles.values());
    expect(
      uniqueTitles.size,
      `duplicate page titles: ${JSON.stringify(Object.fromEntries(titles), null, 2)}`
    ).toBe(titles.size);
  });

  test('every page has a canonical link', async ({ page }) => {
    for (const path of ALL_PAGES) {
      await page.goto(path);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical, `${path} missing canonical link`).toBeTruthy();
    }
  });

});

test.describe('sitemap', () => {

  test('sitemap is reachable and lists all expected URLs', async ({ request }) => {
    const indexRes = await request.get('/sitemap-index.xml');
    expect(indexRes.status(), 'sitemap-index.xml not found').toBe(200);
    const indexXml = await indexRes.text();
    expect(indexXml).toContain('<sitemap>');

    const sitemapMatch = indexXml.match(/<loc>([^<]+sitemap[^<]+)<\/loc>/);
    expect(sitemapMatch).toBeTruthy();
    // Astro's sitemap integration writes the production domain in <loc>.
    // Strip it and fetch the path locally.
    const sitemapPath = new URL(sitemapMatch![1]).pathname;

    const sitemapRes = await request.get(sitemapPath);
    expect(sitemapRes.status(), `sitemap at ${sitemapPath} not found`).toBe(200);
    const sitemapXml = await sitemapRes.text();

    for (const path of ALL_PAGES) {
      const expectedUrl = `https://macrepairsblackpool.co.uk${path}`;
      expect(sitemapXml, `sitemap missing ${expectedUrl}`).toContain(expectedUrl);
    }
  });

});
