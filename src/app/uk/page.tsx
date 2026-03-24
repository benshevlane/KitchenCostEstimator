import type { Metadata } from 'next';
import { localeData } from '@/lib/localeData';
import HomePage from '@/components/HomePage';

const locale = localeData.uk;

export const metadata: Metadata = {
  title: locale.metaTitle,
  description: locale.metaDescription,
  alternates: { canonical: 'https://kitchencostestimator.com/uk' },
};

export default function UKPage() {
  return <HomePage localeKey="uk" />;
}
