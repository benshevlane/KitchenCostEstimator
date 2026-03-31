export interface FaqItem {
  question: string;
  answer: string;
}

export interface RelatedGuide {
  href: string;
  label: string;
}

export interface SeoPageData {
  slug: string;
  locale: 'us' | 'uk' | 'ca';
  meta: {
    title: string;
    description: string;
  };
  content: string;
  faqs: FaqItem[];
  relatedGuides: RelatedGuide[];
  /** ISO date string (e.g. "2026-01-15"). Falls back to "2026-01-01" in schema. */
  publishedAt?: string;
  /** ISO date string. Falls back to today's date in schema. */
  updatedAt?: string;
  /** Page category for schema selection. Derived from slug if omitted. */
  category?: 'pillar' | 'size' | 'geo' | 'informational';
  /** Explicit HowTo steps. If absent, FAQ items are used as steps for informational pages. */
  steps?: Array<{ name: string; text: string }>;
  /** 2–3 sentence local market snapshot rendered above the first cost table. */
  localMarketContext?: string;
}
