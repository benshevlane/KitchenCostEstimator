import type { Metadata } from 'next';
import { localeData } from '@/lib/localeData';
import HomePage from '@/components/HomePage';

const locale = localeData.ca;

export const metadata: Metadata = {
  title: locale.metaTitle,
  description: locale.metaDescription,
  alternates: { canonical: 'https://kitchencostestimator.com/ca' },
};

export default function CAPage() {
  return <HomePage localeKey="ca" />;
}
