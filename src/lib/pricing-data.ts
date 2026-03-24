import pricingJson from '@/data/pricing.json';
import { PricingData, CostItemData, MultiplierData } from './types';

const data = pricingJson as PricingData;

export const costItems: CostItemData[] = data.costItems;
export const multipliers: MultiplierData[] = data.multipliers;

export function getItemById(id: string): CostItemData | undefined {
  return costItems.find((item) => item.id === id);
}

export function getItemsByCategory(category: string): CostItemData[] {
  return costItems.filter((item) => item.category === category);
}

export function getMultiplier(factor: string, setting: string): MultiplierData | undefined {
  return multipliers.find((m) => m.factor === factor && m.setting === setting);
}
