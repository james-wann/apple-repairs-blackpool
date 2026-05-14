import { defineCollection, z } from 'astro:content';

/**
 * Services collection — every repairable service we offer.
 * Each markdown file is one service. The `categories` field controls which
 * pages it appears on. Adding a new service is one markdown file.
 */
const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    priceFrom: z.string().optional(),
    categories: z.array(
      z.enum(['imac', 'mac-mini', 'macbook', 'storage', 'support'])
    ),
    order: z.number().default(100),
    /**
     * If true, the service gets its own /services/[slug]/ landing page.
     * Reserve for services with enough unique body content to justify a page.
     */
    standalone: z.boolean().default(false)
  })
});

/**
 * Towns collection — service-area landing pages.
 * Each markdown file is one town in the Fylde / Lancashire service area.
 * The dynamic page at /towns/[slug]/ renders one per file.
 */
const towns = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    postcode: z.string(),
    distance: z.string(),
    summary: z.string(),
    order: z.number().default(100)
  })
});

/**
 * FAQs collection — frequently asked questions grouped by category.
 * Powers the /faq/ hub page and its FAQPage schema. Rendered with one-line
 * direct answers (LLM-friendly) and the markdown body for elaborated context.
 */
const faqs = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.enum(['general', 'pricing', 'process', 'macbook', 'imac', 'data-recovery', 'business']),
    order: z.number().default(100)
  })
});

/**
 * Common faults collection — diagnostic / "what to do if" pages.
 * Each markdown file is one named fault pattern (e.g. "MacBook overheating"),
 * with a direct one-paragraph answer, then the longer how-to body.
 * Powers per-fault pages at /common-faults/[slug]/.
 */
const commonFaults = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    symptom: z.string(),
    summary: z.string(),
    affects: z.array(z.enum(['MacBook', 'MacBook Air', 'MacBook Pro', 'iMac', 'Mac Mini', 'Mac Pro', 'All Macs'])),
    order: z.number().default(100)
  })
});

export const collections = { services, towns, faqs, commonFaults };
