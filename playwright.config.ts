import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright config.
 * Runs the production build via `astro preview` and points tests at it.
 * Single browser (Chromium) — this is a static marketing site, cross-browser
 * differences aren't where lead-gen regressions live.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',

  use: {
    baseURL: 'http://localhost:4321',
    trace: 'on-first-retry'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ],

  // Build then preview before tests run. Reuses an existing server in local dev.
  webServer: {
    command: 'npm run build && npm run preview',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 180 * 1000
  }
});
