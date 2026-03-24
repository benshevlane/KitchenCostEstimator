"use client";

import { ApplianceTier } from "@/lib/types";
import StepCard from "../StepCard";

interface AppliancesStepProps {
  value: ApplianceTier | null;
  onChange: (tier: ApplianceTier) => void;
}

const tiers: { id: ApplianceTier; label: string; desc: string; icon: string }[] = [
  {
    id: "budget",
    label: "Budget",
    desc: "Basic branded oven, hob & hood package",
    icon: "💰",
  },
  {
    id: "mid",
    label: "Mid-range",
    desc: "Full suite including fridge-freezer & dishwasher",
    icon: "⭐",
  },
  {
    id: "premium",
    label: "Premium",
    desc: "Miele, Gaggenau, Siemens iQ900 — top of the line",
    icon: "👑",
  },
];

export default function AppliancesStep({ value, onChange }: AppliancesStepProps) {
  return (
    <div className="animate-fade-in">
      <h2 className="mb-2 text-xl font-bold text-dark sm:text-2xl">
        Appliance Budget
      </h2>
      <p className="mb-6 text-muted">
        What level of appliances are you considering?
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
