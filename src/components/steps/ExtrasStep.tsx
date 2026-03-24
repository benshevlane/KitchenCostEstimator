"use client";

import { InstallationType, ContingencyLevel } from "@/lib/types";
import StepCard from "../StepCard";

interface ExtrasStepProps {
  installation: InstallationType | null;
  contingency: ContingencyLevel | null;
  onInstallationChange: (type: InstallationType) => void;
  onContingencyChange: (level: ContingencyLevel) => void;
}

const installOptions: {
  id: InstallationType;
  label: string;
  desc: string;
  icon: string;
}[] = [
  { id: "diy", label: "DIY", desc: "Self-install — reduces labour costs by ~60%", icon: "🔨" },
  {
    id: "trade",
    label: "Trade-fitted",
    desc: "Professional installation by qualified tradespeople",
    icon: "👷",
  },
];

const contingencyOptions: {
  id: ContingencyLevel;
  label: string;
  desc: string;
}[] = [
  { id: "none", label: "None (0%)", desc: "No buffer — not recommended" },
  { id: "10", label: "10%", desc: "Simple project or new build" },
  { id: "15", label: "15% (Recommended)", desc: "Industry standard for most projects" },
  { id: "20", label: "20%", desc: "Older home or structural work" },
];

export default function ExtrasStep({
  installation,
  contingency,
  onInstallationChange,
  onContingencyChange,
}: ExtrasStepProps) {
  return (
    <div className="animate-fade-in">
      <h2 className="mb-2 text-xl font-bold text-dark sm:text-2xl">
        Trade Work & Extras
      </h2>
      <p className="mb-6 text-muted">
        Choose installation type and contingency budget.
      </p>

      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
        Installation
      </h3>
      <div className="mb-8 flex flex-col gap-3">
        {installOptions.map((opt) => (
          <StepCard
            key={opt.id}
            label={opt.label}
            description={opt.desc}
            icon={<span>{opt.icon}</span>}
            selected={installation === opt.id}
            onClick={() => onInstallationChange(opt.id)}
          />
        ))}
      </div>

      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
        Contingency Budget
      </h3>
      <div className="flex flex-col gap-3">
        {contingencyOptions.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => onContingencyChange(opt.id)}
            className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all duration-200 ${
              contingency === opt.id
                ? "border-teal-primary bg-teal-pale"
                : "border-gray-200 bg-white hover:border-teal-border"
            }`}
          >
            <div
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                contingency === opt.id
                  ? "border-teal-primary bg-teal-primary"
                  : "border-gray-300 bg-white"
              }`}
            >
              {contingency === opt.id && (
                <div className="h-2 w-2 rounded-full bg-white" />
              )}
            </div>
            <div>
              <div
                className={`font-medium ${
                  contingency === opt.id ? "text-teal-primary" : "text-dark"
                }`}
              >
                {opt.label}
              </div>
              <div className="text-sm text-muted">{opt.desc}</div>
            </div>
          </button>
        ))}
      </div>

      {contingency === "none" && (
        <div className="mt-4 flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3">
          <span className="text-lg">⚠️</span>
          <p className="text-sm text-amber-800">
            We strongly recommend adding at least 10% contingency. Unexpected
            costs arise in almost every kitchen renovation.
          </p>
        </div>
      )}
    </div>
  );
}
