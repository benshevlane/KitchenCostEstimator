import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPage, getAllSlugs } from '@/content';
import { buildAlternates } from '@/lib/seoAlternates';
import SeoPageTemplate from '@/components/SeoPageTemplate';

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllSlugs('us').map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage('us', slug);
  if (!page) return {};
  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: buildAlternates('us', slug),
  };
}

export default async function USSlugPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getPage('us', slug);
  if (!page) notFound();
  return <SeoPageTemplate page={page} />;
}
