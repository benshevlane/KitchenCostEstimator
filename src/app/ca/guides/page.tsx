import type { Metadata } from 'next';
import GuidesPage from '@/components/GuidesPage';

export const metadata: Metadata = {
  title: 'Kitchen Remodel Cost Guides | KitchenCostEstimator.com',
  description:
    'Browse all kitchen remodel and renovation cost guides for Canada, the US, and UK. City-specific pricing, size breakdowns, and more.',
  alternates: { canonical: 'https://kitchencostestimator.com/ca/guides' },
};

export default function CAGuidesPage() {
  return <GuidesPage currentLocale="ca" />;
}
