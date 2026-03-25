import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPage, getAllSlugs } from '@/content';
import SeoPageTemplate from '@/components/SeoPageTemplate';

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllSlugs('uk').map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage('uk', slug);
  if (!page) return {};
  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: { canonical: `https://kitchencostestimator.com/uk/${slug}` },
  };
}

export default async function UKSlugPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getPage('uk', slug);
  if (!page) notFound();
  return <SeoPageTemplate page={page} />;
}
