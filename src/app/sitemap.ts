import type { MetadataRoute } from 'next';
import { getPagesByLocale } from '@/content';

const BASE_URL = 'https://kitchencostestimator.com';

function getPriority(slug: string): number {
  // Pillar pages: main cost guide per locale
  const pillarSlugs = [
    'kitchen-remodel-cost',
    'kitchen-cost',
    'kitchen-renovation-cost',
  ];
  if (pillarSlugs.includes(slug)) return 0.9;

  // Geo/component pages: city-specific or small-kitchen variants
  if (slug.startsWith('small-')) return 0.8;
  // City pages have a city name prefix before "kitchen"
  if (slug.includes('-kitchen-')) return 0.8;

  // Informational pages
  return 0.7;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split('T')[0];

  const entries: MetadataRoute.Sitemap = [];

  // Homepage entries for each locale
  entries.push(
    {
      url: `${BASE_URL}/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/uk`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/ca`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  );

  // Guides pages
  entries.push(
    {
      url: `${BASE_URL}/guides`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/uk/guides`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ca/guides`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  );

  // US pages: /[slug]
  for (const page of getPagesByLocale('us')) {
    entries.push({
      url: `${BASE_URL}/${page.slug}`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: getPriority(page.slug),
    });
  }

  // UK pages: /uk/[slug]
  for (const page of getPagesByLocale('uk')) {
    entries.push({
      url: `${BASE_URL}/uk/${page.slug}`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: getPriority(page.slug),
    });
  }

  // CA pages: /ca/[slug]
  for (const page of getPagesByLocale('ca')) {
    entries.push({
      url: `${BASE_URL}/ca/${page.slug}`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: getPriority(page.slug),
    });
  }

  return entries;
}
