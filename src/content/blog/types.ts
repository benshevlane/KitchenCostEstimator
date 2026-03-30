export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  content: string; // markdown
  date: string; // ISO date string e.g. "2026-01-15"
  author: {
    name: string;
    role: string;
  };
  tags: string[];
  readingTime: number; // minutes
  canonicalUrl?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown>;
}
