import type { Metadata } from 'next';
import { localeData } from '@/lib/localeData';
import { buildAlternates } from '@/lib/seoAlternates';
import HomePage from '@/components/HomePage';

const locale = localeData.uk;

export const metadata: Metadata = {
  title: locale.metaTitle,
  description: locale.metaDescription,
  alternates: buildAlternates('uk'),
};

export default function UKPage() {
  return <HomePage localeKey="uk" />;
}
