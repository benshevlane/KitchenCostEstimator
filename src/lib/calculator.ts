import { costItems } from './pricing-data';
import {
  EstimatorState,
  CostRange,
  CostBreakdownItem,
  CostResult,
  Country,
  KitchenSize,
  LayoutType,
  FinishTier,
  ScopeItem,
  ApplianceSelection,
  ApplianceType,
  ApplianceBudgetTier,
  SIZE_AREA_MAP,
} from './types';

function zeroCost(): CostRange {
  return { low: 0, mid: 0, high: 0 };
}

function addCosts(a: CostRange, b: CostRange): CostRange {
  return { low: a.low + b.low, mid: a.mid + b.mid, high: a.high + b.high };
}

function multiplyCost(cost: CostRange, mult: CostRange): CostRange {
  return {
    low: Math.round(cost.low * mult.low),
    mid: Math.round(cost.mid * mult.mid),
    high: Math.round(cost.high * mult.high),
  };
}

function scalarMultiply(cost: CostRange, n: number): CostRange {
  return {
    low: Math.round(cost.low * n),
    mid: Math.round(cost.mid * n),
    high: Math.round(cost.high * n),
  };
}

function getItemCost(id: string, country: Country): CostRange {
  const item = costItems.find((i) => i.id === id);
  if (!item) return zeroCost();
  return { ...item[country] };
}

function getSizeMultiplier(size: KitchenSize): CostRange {
  switch (size) {
    case 'small':
      return { low: 0.7, mid: 0.75, high: 0.8 };
    case 'medium':
      return { low: 1.0, mid: 1.0, high: 1.0 };
    case 'large':
      return { low: 1.28, mid: 1.35, high: 1.4 };
    case 'very-large':
      return { low: 1.55, mid: 1.7, high: 1.9 };
  }
}

function getLayoutMultiplier(layout: LayoutType): CostRange {
  switch (layout) {
    case 'single-wall':
      return { low: 0.7, mid: 0.72, high: 0.75 };
    case 'galley':
      return { low: 0.85, mid: 0.88, high: 0.9 };
    case 'l-shape':
      return { low: 1.0, mid: 1.0, high: 1.0 };
    case 'u-shape':
      return { low: 1.2, mid: 1.25, high: 1.3 };
    case 'island':
      return { low: 1.2, mid: 1.3, high: 1.4 };
  }
}

function getFinishMultiplier(tier: FinishTier): CostRange {
  switch (tier) {
    case 'budget':
      return { low: 0.5, mid: 0.55, high: 0.65 };
    case 'mid':
      return { low: 1.0, mid: 1.0, high: 1.0 };
    case 'premium':
      return { low: 2.0, mid: 2.5, high: 3.5 };
  }
}

function getContingencyMultiplier(level: string): number {
  switch (level) {
    case '10':
      return 1.1;
    case '15':
      return 1.15;
    case '20':
      return 1.2;
    default:
      return 1.0;
  }
}

function calculateUnits(
  country: Country,
  size: KitchenSize,
  layout: LayoutType,
  finishTier: FinishTier,
  installation: string
): CostRange {
  let unitsCost: CostRange;

  // Pick the correct unit items based on finish tier
  // Use project-level costs: U07 for small, U08 for medium+
  // Plus unit supply costs
  if (finishTier === 'budget') {
    // Budget base + wall units: ~10 units for medium kitchen
    const baseUnit = getItemCost('U01', country);
    const wallUnit = getItemCost('U02', country);
    unitsCost = addCosts(scalarMultiply(baseUnit, 6), scalarMultiply(wallUnit, 4));
  } else if (finishTier === 'mid') {
    const baseUnit = getItemCost('U03', country);
    const wallUnit = getItemCost('U04', country);
    unitsCost = addCosts(scalarMultiply(baseUnit, 6), scalarMultiply(wallUnit, 4));
  } else {
    const baseUnit = getItemCost('U05', country);
    unitsCost = scalarMultiply(baseUnit, 10);
  }

  // Add fitting labour
  if (installation !== 'diy') {
    const labourId = size === 'small' ? 'U07' : 'U08';
    const labour = getItemCost(labourId, country);
    unitsCost = addCosts(unitsCost, labour);
  } else {
    // DIY reduces labour by ~60% but still some cost for tools/fixings
    const labourId = size === 'small' ? 'U07' : 'U08';
    const labour = getItemCost(labourId, country);
    unitsCost = addCosts(unitsCost, scalarMultiply(labour, 0.4));
  }

  // Apply size and layout multipliers
  unitsCost = multiplyCost(unitsCost, getSizeMultiplier(size));
  unitsCost = multiplyCost(unitsCost, getLayoutMultiplier(layout));

  return unitsCost;
}

function calculateWorktops(
  country: Country,
  size: KitchenSize,
  layout: LayoutType,
  material: string
): CostRange {
  // Use the project-level cost items (W02, W04, W06, W08 for medium kitchen)
  let materialId: string;
  switch (material) {
    case 'laminate':
      materialId = 'W02';
      break;
    case 'solid-wood':
      materialId = 'W04';
      break;
    case 'quartz':
      materialId = 'W06';
      break;
    case 'granite':
      materialId = 'W08';
      break;
    case 'composite': {
      // Use per-m² rate * approximate area
      const compositeCost = getItemCost('W09', country);
      const compositeProject = scalarMultiply(compositeCost, 3); // ~3m² worktop area
      return multiplyCost(multiplyCost(compositeProject, getSizeMultiplier(size)), getLayoutMultiplier(layout));
    }
    case 'marble': {
      // Use granite project pricing (W08) with 1.15x premium multiplier
      const graniteCost = getItemCost('W08', country);
      const marbleProject = scalarMultiply(graniteCost, 1.15);
      return multiplyCost(multiplyCost(marbleProject, getSizeMultiplier(size)), getLayoutMultiplier(layout));
    }
    default:
      materialId = 'W06';
  }

  let cost = getItemCost(materialId, country);
  cost = multiplyCost(cost, getSizeMultiplier(size));
  cost = multiplyCost(cost, getLayoutMultiplier(layout));
  return cost;
}

// Per-appliance pricing item IDs mapped by type and tier
const APPLIANCE_PRICING: Record<ApplianceType, Record<ApplianceBudgetTier, string>> = {
  'oven':            { budget: 'A01', mid: 'A02', premium: 'A03' },
  'hob':             { budget: 'A04', mid: 'A05', premium: 'A06' },
  'extractor':       { budget: 'A10', mid: 'A10', premium: 'A11' },
  'fridge-freezer':  { budget: 'A12', mid: 'A13', premium: 'A14' },
  'dishwasher':      { budget: 'A15', mid: 'A15', premium: 'A16' },
  'washing-machine': { budget: 'A15', mid: 'A15', premium: 'A16' }, // use dishwasher pricing as proxy
  'microwave':       { budget: 'A01', mid: 'A01', premium: 'A02' }, // use budget oven as proxy, scaled down
};

// Scaling factors for appliances that share pricing codes with others
const APPLIANCE_SCALE: Partial<Record<ApplianceType, Record<ApplianceBudgetTier, number>>> = {
  'washing-machine': { budget: 0.8, mid: 0.8, premium: 0.8 },
  'microwave':       { budget: 0.35, mid: 0.4, premium: 0.35 },
};

function calculateAppliancesPerItem(country: Country, appliances: ApplianceSelection[]): CostRange {
  let total = zeroCost();
  for (const appliance of appliances) {
    const itemId = APPLIANCE_PRICING[appliance.type]?.[appliance.tier];
    if (!itemId) continue;
    let cost = getItemCost(itemId, country);
    const scale = APPLIANCE_SCALE[appliance.type]?.[appliance.tier];
    if (scale) {
      cost = scalarMultiply(cost, scale);
    }
    total = addCosts(total, cost);
  }
  return total;
}

// Legacy function kept for backward compatibility
function calculateAppliances(country: Country, tier: string): CostRange {
  switch (tier) {
    case 'budget':
      return getItemCost('A17', country);
    case 'mid':
      return getItemCost('A18', country);
    case 'premium':
      return getItemCost('A19', country);
    default:
      return getItemCost('A18', country);
  }
}

function calculateFlooring(
  country: Country,
  size: KitchenSize,
  material: string
): CostRange {
  const area = SIZE_AREA_MAP[size];
  let materialId: string;
  switch (material) {
    case 'vinyl':
      materialId = 'F01';
      break;
    case 'lvt-lvp':
      materialId = 'F02';
      break;
    case 'engineered-wood':
      materialId = 'F05';
      break;
    case 'porcelain-tile':
      materialId = 'F04';
      break;
    case 'natural-stone':
      // Use engineered wood pricing with premium markup since there's no natural stone item
      const tileCost = getItemCost('F04', country);
      return scalarMultiply(tileCost, area * 1.5);
    default:
      materialId = 'F02';
  }

  const perSqm = getItemCost(materialId, country);
  return scalarMultiply(perSqm, area);
}

function calculatePlumbing(country: Country, size: KitchenSize): CostRange {
  // PL01 (sink+tap) + PL02 (connection labour)
  let cost = addCosts(getItemCost('PL01', country), getItemCost('PL02', country));
  cost = multiplyCost(cost, getSizeMultiplier(size));
  return cost;
}

function calculateElectrical(country: Country, size: KitchenSize, layout: LayoutType): CostRange {
  // E01 (general electrical) + E02 (dedicated circuit)
  let cost = addCosts(getItemCost('E01', country), getItemCost('E02', country));
  cost = multiplyCost(cost, getSizeMultiplier(size));
  if (layout === 'island') {
    cost = scalarMultiply(cost, 1.2);
  }
  return cost;
}

function calculateLighting(country: Country, size: KitchenSize): CostRange {
  // L03 (full package)
  let cost = getItemCost('L03', country);
  cost = multiplyCost(cost, getSizeMultiplier(size));
  return cost;
}

function calculatePainting(country: Country, size: KitchenSize): CostRange {
  // D01 (paint supply) + D02 (professional decoration)
  let cost = addCosts(getItemCost('D01', country), getItemCost('D02', country));
  cost = multiplyCost(cost, getSizeMultiplier(size));
  return cost;
}

function calculateWaste(country: Country): CostRange {
  return getItemCost('WR01', country);
}

export function calculateCosts(state: EstimatorState): CostResult {
  const {
    country,
    kitchenSize,
    layout,
    scope,
    finishTier,
    worktopMaterial,
    applianceTier,
    appliances,
    flooringMaterial,
    installation,
    contingency,
  } = state;

  if (!country || !kitchenSize || !layout || !installation || !contingency) {
    return { total: zeroCost(), breakdown: [] };
  }

  const breakdown: CostBreakdownItem[] = [];

  const scopeCalculators: Record<ScopeItem, () => CostRange> = {
    units: () =>
      calculateUnits(country, kitchenSize, layout, finishTier || 'mid', installation),
    worktops: () =>
      calculateWorktops(country, kitchenSize, layout, worktopMaterial || 'quartz'),
    appliances: () =>
      appliances && appliances.length > 0
        ? calculateAppliancesPerItem(country, appliances)
        : calculateAppliances(country, applianceTier || 'mid'),
    flooring: () =>
      calculateFlooring(country, kitchenSize, flooringMaterial || 'lvt-lvp'),
    plumbing: () => calculatePlumbing(country, kitchenSize),
    electrical: () => calculateElectrical(country, kitchenSize, layout),
    lighting: () => calculateLighting(country, kitchenSize),
    painting: () => calculatePainting(country, kitchenSize),
    waste: () => calculateWaste(country),
  };

  const categoryLabels: Record<ScopeItem, string> = {
    units: 'Units & Cabinetry',
    worktops: 'Worktops',
    appliances: 'Appliances',
    flooring: 'Flooring',
    plumbing: 'Plumbing',
    electrical: 'Electrical',
    lighting: 'Lighting',
    painting: 'Painting & Decorating',
    waste: 'Waste Removal',
  };

  let subtotal = zeroCost();

  for (const item of scope) {
    const calc = scopeCalculators[item];
    if (calc) {
      const costs = calc();
      breakdown.push({ category: categoryLabels[item], costs });
      subtotal = addCosts(subtotal, costs);
    }
  }

  // Apply contingency
  const contingencyMult = getContingencyMultiplier(contingency);
  const total: CostRange = {
    low: Math.round(subtotal.low * contingencyMult),
    mid: Math.round(subtotal.mid * contingencyMult),
    high: Math.round(subtotal.high * contingencyMult),
  };

  return { total, breakdown };
}
