import type { Metadata } from 'next';
import { localeData } from '@/lib/localeData';
import HomePage from '@/components/HomePage';

const locale = localeData.us;

export const metadata: Metadata = {
  title: locale.metaTitle,
  description: locale.metaDescription,
  alternates: { canonical: 'https://kitchencostestimator.com/us' },
};

export default function USPage() {
  return <HomePage localeKey="us" />;
}
