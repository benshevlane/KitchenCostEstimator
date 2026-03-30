import type { SeoPageData } from '@/content/types';
import { categorize, type GuideCategory } from '@/lib/guideCategories';

const DOMAIN = 'https://www.kitchencostestimator.com';

// ── Helpers ──────────────────────────────────────────────────────────

function pageUrl(page: SeoPageData): string {
  return page.locale === 'us'
    ? `${DOMAIN}/${page.slug}`
    : `${DOMAIN}/${page.locale}/${page.slug}`;
}

/** Extract the first H1 from markdown content (e.g. "# My Title — ..."). */
function extractH1(content: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : '';
}

/** Extract the first paragraph after the H1. */
function extractOpeningParagraph(content: string): string {
  const lines = content.split('\n');
  let pastH1 = false;
  for (const line of lines) {
    if (line.startsWith('# ')) {
      pastH1 = true;
      continue;
    }
    if (pastH1 && line.trim().length > 0 && !line.startsWith('#') && !line.startsWith('[') && !line.startsWith('---')) {
      return line.replace(/\*\*/g, '').trim();
    }
  }
  return '';
}

/**
 * Derive city name from a geo slug.
 * E.g. "new-york-kitchen-remodel-cost" → "New York"
 */
function extractCityName(slug: string): string {
  const parts = slug.split('-kitchen-');
  if (parts.length < 2 || parts[0] === '') return '';
  return parts[0]
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function resolveCategory(page: SeoPageData): GuideCategory {
  if (page.category) {
    const map: Record<NonNullable<SeoPageData['category']>, GuideCategory> = {
      pillar: 'Pillar',
      size: 'Size',
      geo: 'Geo',
      informational: 'Informational',
    };
    return map[page.category];
  }
  return categorize(page);
}

// ── Schema builders ──────────────────────────────────────────────────

interface SchemaObject {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

function buildArticleSchema(page: SeoPageData): SchemaObject {
  const h1 = extractH1(page.content) || page.meta.title;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: h1,
    datePublished: page.publishedAt ?? '2026-01-01',
    dateModified: page.updatedAt ?? todayISO(),
    author: { '@type': 'Organization', name: 'KitchenCostEstimator' },
    publisher: {
      '@type': 'Organization',
      name: 'KitchenCostEstimator.com',
      url: DOMAIN,
    },
  };
}

function buildBreadcrumbSchema(page: SeoPageData, category: GuideCategory): SchemaObject {
  const items: Array<{ '@type': string; position: number; name: string; item: string }> = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN },
  ];

  if (category === 'Geo') {
    // Home > Locale guides > Page title
    const localeGuideNames: Record<SeoPageData['locale'], string> = {
      us: 'Kitchen Remodel Cost Guide',
      uk: 'UK Kitchen Cost Guide',
      ca: 'Canada Kitchen Cost Guide',
    };
    const localeGuideUrls: Record<SeoPageData['locale'], string> = {
      us: `${DOMAIN}/guides`,
      uk: `${DOMAIN}/uk/guides`,
      ca: `${DOMAIN}/ca/guides`,
    };
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: localeGuideNames[page.locale],
      item: localeGuideUrls[page.locale],
    });
    items.push({
      '@type': 'ListItem',
      position: 3,
      name: page.meta.title.split(':')[0] || page.meta.title,
      item: pageUrl(page),
    });
  } else {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: page.meta.title.split(':')[0] || page.meta.title,
      item: pageUrl(page),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

function buildFaqSchema(page: SeoPageData): SchemaObject | null {
  if (page.faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

function buildHowToSchema(page: SeoPageData): SchemaObject | null {
  const h1 = extractH1(page.content) || page.meta.title;
  const description = extractOpeningParagraph(page.content);

  if (page.steps && page.steps.length > 0) {
    return {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: h1,
      description,
      step: page.steps.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.name,
        text: s.text,
      })),
    };
  }

  // Fall back to FAQ items as steps
  if (page.faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: h1,
    description,
    step: page.faqs.map((faq, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: faq.question,
      text: faq.answer,
    })),
  };
}

function buildServiceSchema(page: SeoPageData): SchemaObject | null {
  const city = extractCityName(page.slug);
  if (!city) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Kitchen Remodel Cost Estimation',
    areaServed: { '@type': 'City', name: city },
    provider: {
      '@type': 'Organization',
      name: 'KitchenCostEstimator.com',
    },
  };
}

// ── Public API ───────────────────────────────────────────────────────

/**
 * Build an array of schema.org objects for a given page.
 * Each object should be injected as a separate <script type="application/ld+json"> tag.
 */
export function getSchemaMarkup(page: SeoPageData): SchemaObject[] {
  const category = resolveCategory(page);
  const schemas: SchemaObject[] = [];

  // 1. Article — all pages
  schemas.push(buildArticleSchema(page));

  // 2. BreadcrumbList — all pages
  schemas.push(buildBreadcrumbSchema(page, category));

  // 3. FAQPage — all pages with FAQs
  const faqSchema = buildFaqSchema(page);
  if (faqSchema) schemas.push(faqSchema);

  // 4. HowTo — informational pages only
  if (category === 'Informational') {
    const howTo = buildHowToSchema(page);
    if (howTo) schemas.push(howTo);
  }

  // 5. Service — geo pages only
  if (category === 'Geo') {
    const service = buildServiceSchema(page);
    if (service) schemas.push(service);
  }

  return schemas;
}
