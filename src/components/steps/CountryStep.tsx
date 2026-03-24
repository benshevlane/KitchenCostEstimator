"use client";

import { Country } from "@/lib/types";
import StepCard from "../StepCard";

interface CountryStepProps {
  value: Country | null;
  onChange: (country: Country) => void;
}

const countries: { id: Country; label: string; flag: string; currency: string }[] = [
  { id: "uk", label: "United Kingdom", flag: "🇬🇧", currency: "£ GBP" },
  { id: "us", label: "United States", flag: "🇺🇸", currency: "$ USD" },
  { id: "ca", label: "Canada", flag: "🇨🇦", currency: "CA$ CAD" },
];

export default function CountryStep({ value, onChange }: CountryStepProps) {
  return (
    <div className="animate-fade-in">
      <h2 className="mb-2 text-xl font-bold text-dark sm:text-2xl">
        Where is your kitchen?
      </h2>
      <p className="mb-6 text-muted">
        This sets the currency and regional pricing for your estimate.
      </p>
      <div className="flex flex-col gap-3">
        {countries.map((c) => (
          <StepCard
            key={c.id}
            label={c.label}
            description={c.currency}
            icon={<span>{c.flag}</span>}
            selected={value === c.id}
            onClick={() => onChange(c.id)}
          />
        ))}
      </div>
    </div>
  );
}
