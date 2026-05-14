/**
 * Test fixtures — the canonical expected values for the site.
 *
 * Hardcoded here rather than imported from src/data/site.ts on purpose:
 * tests should describe what the site is supposed to show. If someone
 * accidentally changes SITE_INFO, the tests should catch it.
 */

export const STATIC_PAGES = [
  '/',
  '/imac-repair-upgrades/',
  '/mac-mini/',
  '/macbook-all-models-repairs-upgrades/',
  '/storage/',
  '/apple-support/',
  '/contact-us/',
  '/towns/',
  '/faq/',
  '/about/',
  '/pricing/',
  '/vs-apple-store/',
  '/common-faults/',
  '/services/'
] as const;

export const STANDALONE_SERVICE_SLUGS = [
  'macbook-screen',
  'macbook-battery',
  'liquid-damage',
  'data-recovery',
  'ssd-upgrade'
] as const;

export const SERVICE_PAGES = STANDALONE_SERVICE_SLUGS.map(s => `/services/${s}/`);

export const TOWN_SLUGS = [
  'blackpool',
  'cleveleys',
  'lytham-st-annes',
  'fleetwood',
  'poulton',
  'kirkham',
  'preston',
  'lancaster',
  'morecambe',
  'blackburn'
] as const;

export const TOWN_PAGES = TOWN_SLUGS.map(s => `/towns/${s}/`);

export const COMMON_FAULT_SLUGS = [
  'macbook-overheating',
  'macbook-wont-turn-on',
  'macbook-battery-draining-fast',
  'macbook-screen-flickering',
  'liquid-spilled-macbook',
  'imac-no-display',
  'mac-running-slow',
  'mac-wont-charge'
] as const;

export const COMMON_FAULT_PAGES = COMMON_FAULT_SLUGS.map(s => `/common-faults/${s}/`);

export const ALL_PAGES = [...STATIC_PAGES, ...TOWN_PAGES, ...COMMON_FAULT_PAGES, ...SERVICE_PAGES];

export const PHONE = {
  landline: {
    display: '01253 445032',
    href: 'tel:01253445032'
  },
  mobile: {
    display: '07873 170729',
    href: 'tel:07873170729'
  }
};

export const EMAIL = 'contact@macrepairsblackpool.co.uk';

export const ADDRESS = {
  locality: 'Cleveleys',
  postcode: 'FY5 1RY'
};
