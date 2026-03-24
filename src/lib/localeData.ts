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
    flag: '🇬🇧',
    label: 'United Kingdom',
    currency: 'GBP (£)',
    badge: 'Based on UK kitchen projects completed in 2026',
    heroTitle: 'How Much Does a Kitchen Cost in the UK?',
    heroSub: 'Find out what a kitchen renovation should cost for your home — using real data from UK projects completed this year.',
    costLow: '£8,000',
    costAvg: '£20,000',
    costHigh: '£45,000+',
    avgLabel: 'UK Average',
    costLowDesc: 'Flatpack units, laminate worktop, basic appliances',
    costAvgDesc: 'Mid-range units, quartz worktop, branded appliances',
    costHighDesc: 'Bespoke cabinetry, stone worktop, premium appliances',
    navGuideLabel: 'UK Cost Guide',
    calcFooterNote: '🔒 Free · No sign-up · UK data 2026',
    howItWorksDataLine: 'Costs are based on real kitchen projects completed across the UK this year — not outdated guides.',
    metaTitle: 'How Much Does a Kitchen Cost in the UK? | 2026 Data',
    metaDescription: 'Get a free, instant kitchen cost estimate based on real UK project data from 2026. No email required.',
  },
  us: {
    slug: '/us',
    flag: '🇺🇸',
    label: 'United States',
    currency: 'USD ($)',
    badge: 'Based on US kitchen projects completed in 2026',
    heroTitle: 'How Much Does a Kitchen Remodel Cost in 2026?',
    heroSub: 'Find out what a kitchen renovation should cost for your home — using real data from US projects completed this year.',
    costLow: '$15,000',
    costAvg: '$40,000',
    costHigh: '$85,000+',
    avgLabel: 'US Average',
    costLowDesc: 'Stock cabinets, laminate countertop, basic appliances',
    costAvgDesc: 'Semi-custom cabinets, quartz countertop, name-brand appliances',
    costHighDesc: 'Custom cabinetry, stone countertop, premium appliances',
    navGuideLabel: 'US Cost Guide',
    calcFooterNote: '🔒 Free · No sign-up · US data 2026',
    howItWorksDataLine: 'Costs are based on real kitchen projects completed across the US this year — not outdated national averages.',
    metaTitle: 'How Much Does a Kitchen Remodel Cost in 2026? | US Data',
    metaDescription: 'Get a free, instant kitchen remodel cost estimate based on real US project data from 2026. No email required.',
  },
  ca: {
    slug: '/ca',
    flag: '🇨🇦',
    label: 'Canada',
    currency: 'CAD ($)',
    badge: 'Based on Canadian kitchen projects completed in 2026',
    heroTitle: 'How Much Does a Kitchen Renovation Cost in Canada?',
    heroSub: 'Find out what a kitchen renovation should cost for your home — using real data from Canadian projects completed this year.',
    costLow: 'CA$18,000',
    costAvg: 'CA$45,000',
    costHigh: 'CA$95,000+',
    avgLabel: 'Canadian Average',
    costLowDesc: 'Stock cabinets, laminate countertop, basic appliances',
    costAvgDesc: 'Semi-custom cabinets, quartz countertop, name-brand appliances',
    costHighDesc: 'Custom cabinetry, stone countertop, premium appliances',
    navGuideLabel: 'Canada Cost Guide',
    calcFooterNote: '🔒 Free · No sign-up · Canada data 2026',
    howItWorksDataLine: 'Costs are based on real kitchen projects completed across Canada this year — not outdated guides.',
    metaTitle: 'How Much Does a Kitchen Renovation Cost in Canada? | 2026 Data',
    metaDescription: 'Get a free, instant kitchen renovation cost estimate based on real Canadian project data from 2026. No email required.',
  },
};
