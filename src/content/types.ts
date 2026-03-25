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
}
