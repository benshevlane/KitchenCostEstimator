import type { Metadata } from 'next';
import { localeData } from '@/lib/localeData';
import { buildAlternates } from '@/lib/seoAlternates';
import HomePage from '@/components/HomePage';

const locale = localeData.ca;

export const metadata: Metadata = {
  title: locale.metaTitle,
  description: locale.metaDescription,
  alternates: buildAlternates('ca'),
};

export default function CAPage() {
  return <HomePage localeKey="ca" />;
}
