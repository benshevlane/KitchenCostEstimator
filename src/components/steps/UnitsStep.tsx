"use client";

import { FinishTier } from "@/lib/types";
import StepCard from "../StepCard";

interface UnitsStepProps {
  value: FinishTier | null;
  onChange: (tier: FinishTier) => void;
}

const tiers: { id: FinishTier; label: string; desc: string; icon: string }[] = [
  {
    id: "budget",
    label: "Budget",
    desc: "Flatpack / self-assembly (e.g. IKEA, B&Q)",
    icon: "💰",
  },
  {
    id: "mid",
    label: "Mid-range",
    desc: "Rigid carcasses, trade-fitted (e.g. Howdens, semi-custom)",
    icon: "⭐",
  },
  {
    id: "premium",
    label: "Premium",
    desc: "Bespoke / handmade cabinetry",
    icon: "👑",
  },
];

export default function UnitsStep({ value, onChange }: UnitsStepProps) {
  return (
    <div className="animate-fade-in">
      <h2 className="mb-2 text-xl font-bold text-dark sm:text-2xl">
        Units & Finish Level
      </h2>
      <p className="mb-6 text-muted">
        What quality of kitchen units are you considering?
      </p>
      <div className="flex flex-col gap-3">
        {tiers.map((t) => (
          <StepCard
            key={t.id}
            label={t.label}
            description={t.desc}
            icon={<span>{t.icon}</span>}
            selected={value === t.id}
            onClick={() => onChange(t.id)}
          />
        ))}
      </div>
    </div>
  );
}
