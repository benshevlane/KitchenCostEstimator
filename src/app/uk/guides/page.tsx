import type { Metadata } from 'next';
import GuidesPage from '@/components/GuidesPage';

export const metadata: Metadata = {
  title: 'Kitchen Remodel Cost Guides | KitchenCostEstimator.com',
  description:
    'Browse all kitchen remodel and renovation cost guides for the UK, US, and Canada. City-specific pricing, size breakdowns, and more.',
  alternates: { canonical: 'https://kitchencostestimator.com/uk/guides' },
};

export default function UKGuidesPage() {
  return <GuidesPage currentLocale="uk" />;
}
