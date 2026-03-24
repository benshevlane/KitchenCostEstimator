"use client";

import { useState, useEffect } from "react";
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

const COUNTRY_CODE_MAP: Record<string, Country> = {
  GB: "uk",
  US: "us",
  CA: "ca",
};

export default function CountryStep({ value, onChange }: CountryStepProps) {
  const [detectedLabel, setDetectedLabel] = useState<string | null>(null);
  const [detecting, setDetecting] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function detectCountry() {
      try {
        const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(5000) });
        if (!res.ok) throw new Error("IP lookup failed");
        const data = await res.json();
        if (cancelled) return;

        const countryCode: string | undefined = data.country_code;
        const countryName: string | undefined = data.country_name;

        if (countryCode && COUNTRY_CODE_MAP[countryCode]) {
          const mapped = COUNTRY_CODE_MAP[countryCode];
          if (!value) {
            onChange(mapped);
          }
          setDetectedLabel(countryName || countryCode);
        } else {
          // Country not in our list — default to UK
          if (!value) {
            onChange("uk");
          }
          setDetectedLabel(countryName || null);
        }
      } catch {
        // On error, don't pre-select — just stop detecting
      } finally {
        if (!cancelled) setDetecting(false);
      }
    }

    detectCountry();
    return () => { cancelled = true; };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="animate-fade-in">
      <h2 className="mb-2 text-xl font-bold text-dark sm:text-2xl">
        Where is your kitchen?
      </h2>
      <p className="mb-6 text-muted">
        This sets the currency and regional pricing for your estimate.
      </p>

      {detecting && (
        <p className="mb-4 text-sm text-muted">Detecting your location...</p>
      )}
      {!detecting && detectedLabel && (
        <p className="mb-4 text-sm text-teal-primary">
          Detected: {detectedLabel}
        </p>
      )}

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
