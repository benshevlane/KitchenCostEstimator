import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPage, getAllSlugs } from '@/content';
import SeoPageTemplate from '@/components/SeoPageTemplate';

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllSlugs('ca').map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage('ca', slug);
  if (!page) return {};
  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: { canonical: `https://kitchencostestimator.com/ca/${slug}` },
  };
}

export default async function CASlugPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getPage('ca', slug);
  if (!page) notFound();
  return <SeoPageTemplate page={page} />;
}
