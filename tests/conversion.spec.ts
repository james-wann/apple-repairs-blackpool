import { test, expect } from '@playwright/test';
import { ALL_PAGES, PHONE, EMAIL } from './fixtures';

/**
 * Conversion-path tests.
 *
 * The site's job is to generate leads (phone calls + contact form submissions).
 * These tests assert that every conversion lever is in place on every page.
 */

test.describe('phone CTA presence and integrity', () => {

  for (const path of ALL_PAGES) {
    test(`${path} contains at least one tel: link`, async ({ page }) => {
      await page.goto(path);
      const telLinks = page.locator('a[href^="tel:"]');
      const count = await telLinks.count();
      expect(count, `expected at least one tel: link on ${path}`).toBeGreaterThan(0);
    });
  }

  for (const path of ALL_PAGES) {
    test(`${path} only contains the two official phone numbers in tel: links`, async ({ page }) => {
      await page.goto(path);
      const telLinks = page.locator('a[href^="tel:"]');
      const hrefs = await telLinks.evaluateAll(els =>
        els.map(el => (el as HTMLAnchorElement).getAttribute('href'))
      );
      const validHrefs = [PHONE.landline.href, PHONE.mobile.href];
      for (const href of hrefs) {
        expect(validHrefs, `unexpected phone href on ${path}: ${href}`).toContain(href);
      }
    });
  }

  for (const path of ALL_PAGES) {
    test(`${path} displays the landline number in visible text`, async ({ page }) => {
      await page.goto(path);
      const body = await page.locator('body').textContent();
      expect(body, `landline number missing from ${path}`).toContain(PHONE.landline.display);
    });
  }

});

test.describe('contact form', () => {

  test('contact page has a Netlify-configured form', async ({ page }) => {
    await page.goto('/contact-us/');
    const form = page.locator('form[name="contact"]');
    await expect(form).toBeAttached();
    await expect(form).toHaveAttribute('data-netlify', 'true');
  });

  test('contact form has the hidden form-name input Netlify needs', async ({ page }) => {
    await page.goto('/contact-us/');
    const hidden = page.locator('form[name="contact"] input[type="hidden"][name="form-name"]');
    await expect(hidden).toBeAttached();
    await expect(hidden).toHaveValue('contact');
  });

  test('contact form has the honeypot field', async ({ page }) => {
    await page.goto('/contact-us/');
    const honeypot = page.locator('form[name="contact"] input[name="bot-field"]');
    await expect(honeypot).toBeAttached();
  });

  test('contact form has required name, email, and message fields', async ({ page }) => {
    await page.goto('/contact-us/');
    const form = page.locator('form[name="contact"]');

    const nameInput = form.locator('input[name="name"]');
    const emailInput = form.locator('input[name="email"]');
    const messageTextarea = form.locator('textarea[name="message"]');

    await expect(nameInput).toBeAttached();
    await expect(emailInput).toBeAttached();
    await expect(messageTextarea).toBeAttached();

    await expect(nameInput).toHaveAttribute('required', '');
    await expect(emailInput).toHaveAttribute('required', '');
    await expect(messageTextarea).toHaveAttribute('required', '');
  });

  test('contact form email input has type="email" for validation', async ({ page }) => {
    await page.goto('/contact-us/');
    const emailInput = page.locator('form[name="contact"] input[name="email"]');
    await expect(emailInput).toHaveAttribute('type', 'email');
  });

});

test.describe('NAP (name, address, phone) consistency', () => {

  test('contact page shows the email address', async ({ page }) => {
    await page.goto('/contact-us/');
    const body = await page.locator('body').textContent();
    expect(body).toContain(EMAIL);
  });

  test('contact page shows the studio location', async ({ page }) => {
    await page.goto('/contact-us/');
    const body = await page.locator('body').textContent();
    expect(body).toContain('Cleveleys');
    expect(body).toContain('FY5 1RY');
  });

  test('every page footer links the email via mailto:', async ({ page }) => {
    for (const path of ALL_PAGES) {
      await page.goto(path);
      const mailtoLink = page.locator(`a[href="mailto:${EMAIL}"]`);
      const count = await mailtoLink.count();
      expect(count, `mailto: missing on ${path}`).toBeGreaterThan(0);
    }
  });

});
