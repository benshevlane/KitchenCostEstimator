import { getCrossLocaleSlug } from '@/content';

const BASE = 'https://kitchencostestimator.com';

type Locale = 'us' | 'uk' | 'ca';

/** Build the absolute URL for a given locale + slug (or homepage if slug is undefined). */
function localeUrl(locale: Locale, slug?: string): string {
  if (!slug) {
    // Homepage
    return locale === 'us' ? `${BASE}/` : `${BASE}/${locale}/`;
  }
  return locale === 'us' ? `${BASE}/${slug}` : `${BASE}/${locale}/${slug}`;
}

/**
 * Build the `alternates` object for Next.js Metadata.
 * Includes self-referencing canonical + hreflang for all available locale variants.
 */
export function buildAlternates(
  currentLocale: Locale,
  currentSlug?: string,
): {
  canonical: string;
  languages: Record<string, string>;
} {
  const canonical = localeUrl(currentLocale, currentSlug);

  const languages: Record<string, string> = {};

  if (currentSlug) {
    // Slug page — resolve cross-locale equivalents
    const locales: Array<{ locale: Locale; hreflang: string }> = [
      { locale: 'us', hreflang: 'en-us' },
      { locale: 'uk', hreflang: 'en-gb' },
      { locale: 'ca', hreflang: 'en-ca' },
    ];

    for (const { locale, hreflang } of locales) {
      let targetSlug: string | undefined;
      if (locale === currentLocale) {
        targetSlug = currentSlug;
      } else {
        targetSlug = getCrossLocaleSlug(currentLocale, currentSlug, locale);
      }
      if (targetSlug) {
        languages[hreflang] = localeUrl(locale, targetSlug);
      }
    }

    // x-default points to the US variant if it exists, otherwise omit
    const usSlug =
      currentLocale === 'us'
        ? currentSlug
        : getCrossLocaleSlug(currentLocale, currentSlug, 'us');
    if (usSlug) {
      languages['x-default'] = localeUrl('us', usSlug);
    }
  } else {
    // Homepage — all three locale homepages always exist
    languages['en-us'] = `${BASE}/`;
    languages['en-gb'] = `${BASE}/uk/`;
    languages['en-ca'] = `${BASE}/ca/`;
    languages['x-default'] = `${BASE}/`;
  }

  return { canonical, languages };
}

/**
 * Build alternates for the /guides pages.
 * All three locale variants always exist.
 */
export function buildGuidesAlternates(currentLocale: Locale): {
  canonical: string;
  languages: Record<string, string>;
} {
  const canonical =
    currentLocale === 'us' ? `${BASE}/guides` : `${BASE}/${currentLocale}/guides`;

  return {
    canonical,
    languages: {
      'en-us': `${BASE}/guides`,
      'en-gb': `${BASE}/uk/guides`,
      'en-ca': `${BASE}/ca/guides`,
      'x-default': `${BASE}/guides`,
    },
  };
}
