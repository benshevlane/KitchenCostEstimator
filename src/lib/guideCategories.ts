import type { SeoPageData } from '@/content/types';

export type GuideCategory = 'Pillar' | 'Size' | 'Geo' | 'Informational';

const PILLAR_SLUGS = new Set([
  'kitchen-remodel-cost',
  'kitchen-cost',
  'kitchen-renovation-cost',
]);

export function categorize(page: SeoPageData): GuideCategory {
  if (PILLAR_SLUGS.has(page.slug)) return 'Pillar';
  if (page.slug.startsWith('small-')) return 'Size';
  // City pages: have a city name before "kitchen" (e.g. london-kitchen-cost)
  const parts = page.slug.split('-kitchen-');
  if (parts.length > 1 && parts[0] !== '') return 'Geo';
  return 'Informational';
}

export function categoryLabel(cat: GuideCategory): string {
  switch (cat) {
    case 'Pillar': return 'Main Cost Guides';
    case 'Size': return 'By Kitchen Size';
    case 'Geo': return 'By City / Region';
    case 'Informational': return 'Informational';
  }
}

export function localeLabel(locale: 'us' | 'uk' | 'ca'): string {
  switch (locale) {
    case 'us': return 'United States';
    case 'uk': return 'United Kingdom';
    case 'ca': return 'Canada';
  }
}

export function localePrefix(locale: 'us' | 'uk' | 'ca'): string {
  return locale === 'us' ? '' : `/${locale}`;
}

export function guidesPath(locale: 'us' | 'uk' | 'ca'): string {
  return locale === 'us' ? '/guides' : `/${locale}/guides`;
}

export function pageHref(page: SeoPageData): string {
  return page.locale === 'us' ? `/${page.slug}` : `/${page.locale}/${page.slug}`;
}
