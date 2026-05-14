/**
 * SITE_INFO — single source of truth for the most-edited business data.
 * Phone numbers, address, hours, service areas, diagnostic fee.
 * All schema, header, footer, and contact-page content reads from here.
 * Change a value here and it propagates site-wide.
 */

export const SITE_INFO = {
  name: 'Mac Repairs Blackpool',
  tagline: 'Apple Specialists.',
  description:
    'Independent Mac and Apple repair specialists in Blackpool and the Fylde Coast. Experienced Apple technicians, 100% genuine OEM parts, onsite repairs, 90 day warranty.',
  url: 'https://macrepairsblackpool.co.uk',
  email: 'contact@macrepairsblackpool.co.uk',
  phone: {
    landline: {
      display: '01253 445032',
      href: 'tel:01253445032',
      e164: '+441253445032'
    },
    mobile: {
      display: '07873 170729',
      href: 'tel:07873170729',
      e164: '+447873170729'
    }
  },
  address: {
    locality: 'Cleveleys',
    region: 'Lancashire',
    postcode: 'FY5 1RY',
    country: 'GB'
  },
  hours: {
    weekday: '9am to 5pm',
    saturday: 'by appointment',
    sunday: 'closed'
  },
  diagnosticFee: '£75',
  foundedYear: 2010,
  reviews: {
    rating: 5.0,
    count: 39,
    source: 'Google'
  },
  serviceAreas: [
    { name: 'Blackpool',         slug: 'blackpool' },
    { name: 'Blackburn',         slug: 'blackburn' },
    { name: 'Cleveleys',         slug: 'cleveleys' },
    { name: 'Fleetwood',         slug: 'fleetwood' },
    { name: 'Kirkham',           slug: 'kirkham' },
    { name: 'Lancaster',         slug: 'lancaster' },
    { name: 'Lytham St Annes',   slug: 'lytham-st-annes' },
    { name: 'Morecambe',         slug: 'morecambe' },
    { name: 'Poulton',           slug: 'poulton' },
    { name: 'Preston',           slug: 'preston' }
  ],
} as const;

export type SiteInfo = typeof SITE_INFO;
