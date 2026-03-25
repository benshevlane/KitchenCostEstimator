import type { Metadata } from 'next';
import GuidesPage from '@/components/GuidesPage';

export const metadata: Metadata = {
  title: 'Kitchen Remodel Cost Guides | KitchenCostEstimator.com',
  description:
    'Browse all kitchen remodel and renovation cost guides for the US, UK, and Canada. City-specific pricing, size breakdowns, and more.',
  alternates: { canonical: 'https://kitchencostestimator.com/guides' },
};

export default function USGuidesPage() {
  return <GuidesPage currentLocale="us" />;
}
