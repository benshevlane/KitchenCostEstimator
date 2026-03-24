"use client";

import { ApplianceType, ApplianceBudgetTier, ApplianceSelection } from "@/lib/types";

interface AppliancesStepProps {
  value: ApplianceSelection[];
  onChange: (appliances: ApplianceSelection[]) => void;
}

const APPLIANCE_OPTIONS: {
  type: ApplianceType;
  label: string;
  icon: string;
}[] = [
  { type: "oven", label: "Oven", icon: "🔥" },
  { type: "hob", label: "Hob", icon: "♨️" },
  { type: "extractor", label: "Extractor Hood", icon: "💨" },
  { type: "fridge-freezer", label: "Fridge-Freezer", icon: "❄️" },
  { type: "dishwasher", label: "Dishwasher", icon: "🍽️" },
  { type: "washing-machine", label: "Washing Machine", icon: "👕" },
  { type: "microwave", label: "Microwave", icon: "📡" },
];

const TIER_OPTIONS: { id: ApplianceBudgetTier; label: string }[] = [
  { id: "budget", label: "Budget" },
  { id: "mid", label: "Mid-Range" },
  { id: "premium", label: "Premium" },
];

export default function AppliancesStep({ value, onChange }: AppliancesStepProps) {
  const selectedTypes = new Set(value.map((a) => a.type));

  const toggleAppliance = (type: ApplianceType) => {
    if (selectedTypes.has(type)) {
      onChange(value.filter((a) => a.type !== type));
    } else {
      onChange([...value, { type, tier: "mid" }]);
    }
  };

  const setTier = (type: ApplianceType, tier: ApplianceBudgetTier) => {
    onChange(value.map((a) => (a.type === type ? { ...a, tier } : a)));
  };

  const getTier = (type: ApplianceType): ApplianceBudgetTier => {
    return value.find((a) => a.type === type)?.tier ?? "mid";
  };

  return (
    <div className="animate-fade-in">
      <h2 className="mb-2 text-xl font-bold text-dark sm:text-2xl">
        Appliances
      </h2>
      <p className="mb-6 text-muted">
        Select the appliances you need, then choose a budget tier for each.
      </p>

      {/* Phase 1: Appliance toggle grid */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {APPLIANCE_OPTIONS.map((opt) => {
          const isSelected = selectedTypes.has(opt.type);
          return (
            <button
              key={opt.type}
              type="button"
              onClick={() => toggleAppliance(opt.type)}
              className={`flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 p-4 text-center transition-all duration-200 ${
                isSelected
                  ? "border-teal-primary bg-teal-pale shadow-sm"
                  : "border-gray-200 bg-white hover:border-teal-border hover:shadow-sm"
              }`}
            >
              <span className="text-2xl">{opt.icon}</span>
              <span
                className={`text-sm font-semibold ${
                  isSelected ? "text-teal-primary" : "text-dark"
                }`}
              >
                {opt.label}
              </span>
              <div
                className={`flex h-5 w-5 items-center justify-center rounded border-2 transition-colors ${
                  isSelected
                    ? "border-teal-primary bg-teal-primary"
                    : "border-gray-300 bg-white"
                }`}
              >
                {isSelected && (
                  <svg
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Phase 2: Budget tier per selected appliance */}
      {value.length > 0 && (
        <div>
          <h3 className="mb-3 text-base font-semibold text-dark">
            Set budget tier for each appliance
          </h3>
          <div className="flex flex-col gap-3">
            {APPLIANCE_OPTIONS.filter((opt) => selectedTypes.has(opt.type)).map(
              (opt) => (
                <div
                  key={opt.type}
                  className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{opt.icon}</span>
                    <span className="font-medium text-dark">{opt.label}</span>
                  </div>
                  <div className="flex gap-2">
                    {TIER_OPTIONS.map((tier) => {
                      const isActive = getTier(opt.type) === tier.id;
                      return (
                        <button
                          key={tier.id}
                          type="button"
                          onClick={() => setTier(opt.type, tier.id)}
                          className={`cursor-pointer rounded-lg border-2 px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
                            isActive
                              ? "border-teal-primary bg-teal-primary text-white"
                              : "border-gray-200 bg-white text-mid hover:border-teal-border"
                          }`}
                        >
                          {tier.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
