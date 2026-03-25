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
