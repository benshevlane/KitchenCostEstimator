export type LocaleKey = 'uk' | 'us' | 'ca';

export interface LocaleConfig {
  slug: string;
  flag: string;
  label: string;
  currency: string;
  badge: string;
  heroTitle: string;
  heroSub: string;
  costLow: string;
  costAvg: string;
  costHigh: string;
  avgLabel: string;
  costLowDesc: string;
  costAvgDesc: string;
  costHighDesc: string;
  navGuideLabel: string;
  calcFooterNote: string;
  howItWorksDataLine: string;
  metaTitle: string;
  metaDescription: string;
}

export const localeData: Record<LocaleKey, LocaleConfig> = {
  uk: {
    slug: '/uk',
    flag: '\u{1F1EC}\u{1F1E7}',
    label: 'United Kingdom',
    currency: 'GBP (\u00A3)',
    badge: 'Based on UK kitchen projects completed in 2026',
    heroTitle: 'How Much Does a Kitchen Cost in the UK?',
    heroSub: 'Find out what a kitchen renovation should cost for your home \u2014 using real data from UK projects completed this year.',
    costLow: '\u00A34,000',
    costAvg: '\u00A38,500',
    costHigh: '\u00A325,000+',
    avgLabel: 'UK Average',
    costLowDesc: 'Basic refresh, smaller kitchens',
    costAvgDesc: 'Mid-range units, standard fit',
    costHighDesc: 'Bespoke cabinetry, high-end appliances',
    navGuideLabel: 'UK Cost Guide',
    calcFooterNote: '\uD83D\uDD12 Free \u00B7 No sign-up \u00B7 UK data 2026',
    howItWorksDataLine: 'Costs are based on real kitchen projects completed across the UK this year \u2014 not outdated guides.',
    metaTitle: 'How Much Does a Kitchen Cost in the UK? | 2026 Data',
    metaDescription: 'Get a free, instant kitchen cost estimate based on real UK project data from 2026. No email required.',
  },
  us: {
    slug: '/us',
    flag: '\u{1F1FA}\u{1F1F8}',
    label: 'United States',
    currency: 'USD ($)',
    badge: 'Based on US kitchen projects completed in 2026',
    heroTitle: 'How Much Does a Kitchen Remodel Cost in 2026?',
    heroSub: 'Find out what a kitchen renovation should cost for your home \u2014 using real data from US projects completed this year.',
    costLow: '$8,000',
    costAvg: '$22,000',
    costHigh: '$60,000+',
    avgLabel: 'US Average',
    costLowDesc: 'Basic refresh, smaller kitchens',
    costAvgDesc: 'Mid-range remodel, standard fit',
    costHighDesc: 'Custom cabinetry, premium appliances',
    navGuideLabel: 'US Cost Guide',
    calcFooterNote: '\uD83D\uDD12 Free \u00B7 No sign-up \u00B7 US data 2026',
    howItWorksDataLine: 'Costs are based on real kitchen projects completed across the US this year \u2014 not outdated national averages.',
    metaTitle: 'How Much Does a Kitchen Remodel Cost in 2026? | US Data',
    metaDescription: 'Get a free, instant kitchen remodel cost estimate based on real US project data from 2026. No email required.',
  },
  ca: {
    slug: '/ca',
    flag: '\u{1F1E8}\u{1F1E6}',
    label: 'Canada',
    currency: 'CAD ($)',
    badge: 'Based on Canadian kitchen projects completed in 2026',
    heroTitle: 'How Much Does a Kitchen Renovation Cost in Canada?',
    heroSub: 'Find out what a kitchen renovation should cost for your home \u2014 using real data from Canadian projects completed this year.',
    costLow: 'CA$10,000',
    costAvg: 'CA$28,000',
    costHigh: 'CA$75,000+',
    avgLabel: 'Canadian Average',
    costLowDesc: 'Basic refresh, smaller kitchens',
    costAvgDesc: 'Mid-range renovation, standard fit',
    costHighDesc: 'Custom cabinetry, premium appliances',
    navGuideLabel: 'Canada Cost Guide',
    calcFooterNote: '\uD83D\uDD12 Free \u00B7 No sign-up \u00B7 Canada data 2026',
    howItWorksDataLine: 'Costs are based on real kitchen projects completed across Canada this year \u2014 not outdated guides.',
    metaTitle: 'How Much Does a Kitchen Renovation Cost in Canada? | 2026 Data',
    metaDescription: 'Get a free, instant kitchen renovation cost estimate based on real Canadian project data from 2026. No email required.',
  },
};
