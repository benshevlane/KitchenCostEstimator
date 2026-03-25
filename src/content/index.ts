import type { SeoPageData } from './types';
import { usPages } from './us/pages';
import { ukPages } from './uk/pages';
import { caPages } from './ca/pages';

const allPages: SeoPageData[] = [...usPages, ...ukPages, ...caPages];

const pageMap = new Map<string, SeoPageData>();
for (const page of allPages) {
  const key = `${page.locale}:${page.slug}`;
  pageMap.set(key, page);
}

export function getPage(locale: 'us' | 'uk' | 'ca', slug: string): SeoPageData | undefined {
  return pageMap.get(`${locale}:${slug}`);
}

export function getPagesByLocale(locale: 'us' | 'uk' | 'ca'): SeoPageData[] {
  return allPages.filter((p) => p.locale === locale);
}

export function getAllSlugs(locale: 'us' | 'uk' | 'ca'): string[] {
  return getPagesByLocale(locale).map((p) => p.slug);
}

// ---------------------------------------------------------------------------
// Cross-locale slug equivalents
// ---------------------------------------------------------------------------

type Locale = 'us' | 'uk' | 'ca';

/**
 * Explicit groups of slugs that represent the same content across locales.
 * Each entry maps locale → slug for that content group.
 */
const CROSS_LOCALE_GROUPS: Array<Partial<Record<Locale, string>>> = [
  { us: 'kitchen-remodel-cost', uk: 'kitchen-cost', ca: 'kitchen-renovation-cost' },
  { us: 'small-kitchen-remodel-cost', uk: 'small-kitchen-cost', ca: 'small-kitchen-renovation-cost' },
];

/** Reverse index: "us:kitchen-remodel-cost" → group entry */
const slugToGroup = new Map<string, Partial<Record<Locale, string>>>();
for (const group of CROSS_LOCALE_GROUPS) {
  for (const [locale, slug] of Object.entries(group)) {
    slugToGroup.set(`${locale}:${slug}`, group);
  }
}

/**
 * Given a page's locale and slug, return the equivalent slug in the target locale,
 * or undefined if no equivalent exists.
 */
export function getCrossLocaleSlug(
  fromLocale: Locale,
  fromSlug: string,
  targetLocale: Locale,
): string | undefined {
  const group = slugToGroup.get(`${fromLocale}:${fromSlug}`);
  return group?.[targetLocale];
}
