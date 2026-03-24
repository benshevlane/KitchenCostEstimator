export type Country = 'uk' | 'us' | 'ca';

export type KitchenSize = 'small' | 'medium' | 'large' | 'very-large';

export type LayoutType = 'single-wall' | 'galley' | 'l-shape' | 'u-shape' | 'island';

export type FinishTier = 'budget' | 'mid' | 'premium';

export type WorktopMaterial = 'laminate' | 'solid-wood' | 'quartz' | 'granite' | 'composite' | 'marble';

export type ApplianceTier = 'budget' | 'mid' | 'premium';

export type ApplianceType = 'oven' | 'hob' | 'extractor' | 'fridge-freezer' | 'dishwasher' | 'washing-machine' | 'microwave';

export type ApplianceBudgetTier = 'budget' | 'mid' | 'premium';

export interface ApplianceSelection {
  type: ApplianceType;
  tier: ApplianceBudgetTier;
}

export type FlooringMaterial = 'vinyl' | 'lvt-lvp' | 'engineered-wood' | 'porcelain-tile' | 'natural-stone';

export type InstallationType = 'diy' | 'trade';

export type ContingencyLevel = 'none' | '10' | '15' | '20';

export type ScopeItem =
  | 'units'
  | 'worktops'
  | 'appliances'
  | 'flooring'
  | 'plumbing'
  | 'electrical'
  | 'lighting'
  | 'painting'
  | 'waste';

export interface EstimatorState {
  country: Country | null;
  kitchenSize: KitchenSize | null;
  layout: LayoutType | null;
  scope: ScopeItem[];
  finishTier: FinishTier | null;
  worktopMaterial: WorktopMaterial | null;
  applianceTier: ApplianceTier | null;
  appliances: ApplianceSelection[];
  flooringMaterial: FlooringMaterial | null;
  installation: InstallationType | null;
  contingency: ContingencyLevel | null;
}

export interface CostRange {
  low: number;
  mid: number;
  high: number;
}

export interface CostBreakdownItem {
  category: string;
  costs: CostRange;
}

export interface CostResult {
  total: CostRange;
  breakdown: CostBreakdownItem[];
}

export interface CostItemData {
  id: string;
  category: string;
  subCategory: string;
  description: string;
  unit: string;
  uk: CostRange;
  us: CostRange;
  ca: CostRange;
  notes: string;
  sources: string;
}

export interface MultiplierData {
  factor: string;
  setting: string;
  low: number;
  mid: number;
  high: number;
  notes: string;
  appliesTo: string;
}

export interface PricingData {
  costItems: CostItemData[];
  multipliers: MultiplierData[];
  quickEstimate: Record<string, unknown>[];
}

export const CURRENCY_MAP: Record<Country, string> = {
  uk: '£',
  us: '$',
  ca: 'CA$',
};

export const SIZE_AREA_MAP: Record<KitchenSize, number> = {
  small: 6,
  medium: 11,
  large: 17,
  'very-large': 22,
};
