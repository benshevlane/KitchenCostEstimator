"use client";

import { ScopeItem } from "@/lib/types";

interface ScopeStepProps {
  value: ScopeItem[];
  onChange: (scope: ScopeItem[]) => void;
}

const scopeOptions: { id: ScopeItem; label: string; icon: string }[] = [
  { id: "units", label: "Units & Cabinetry", icon: "🗄️" },
  { id: "worktops", label: "Worktops / Countertops", icon: "🪨" },
  { id: "appliances", label: "Appliances", icon: "🍳" },
  { id: "flooring", label: "Flooring", icon: "🏗️" },
  { id: "plumbing", label: "Plumbing", icon: "🔧" },
  { id: "electrical", label: "Electrical", icon: "⚡" },
  { id: "lighting", label: "Lighting", icon: "💡" },
  { id: "painting", label: "Painting & Decorating", icon: "🎨" },
  { id: "waste", label: "Waste Removal / Skip", icon: "🚛" },
];

export default function ScopeStep({ value, onChange }: ScopeStepProps) {
  const toggle = (id: ScopeItem) => {
    if (value.includes(id)) {
      onChange(value.filter((v) => v !== id));
    } else {
      onChange([...value, id]);
    }
  };

  const allSelected = value.length === scopeOptions.length;

  return (
    <div className="animate-fade-in">
      <h2 className="mb-2 text-xl font-bold text-dark sm:text-2xl">
        Scope of Works
      </h2>
      <p className="mb-6 text-muted">
        Select everything that&apos;s included in your renovation.
      </p>

      <button
        type="button"
        onClick={() =>
          onChange(allSelected ? [] : scopeOptions.map((o) => o.id))
        }
        className="mb-4 text-sm font-medium text-teal-primary hover:text-teal-hover"
      >
        {allSelected ? "Deselect All" : "Select All"}
      </button>

      <div className="flex flex-col gap-2">
        {scopeOptions.map((opt) => {
          const isSelected = value.includes(opt.id);
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => toggle(opt.id)}
              className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all duration-200 ${
                isSelected
                  ? "border-teal-primary bg-teal-pale"
                  : "border-gray-200 bg-white hover:border-teal-border"
              }`}
            >
              <div
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded border-2 transition-colors ${
                  isSelected
                    ? "border-teal-primary bg-teal-primary"
                    : "border-gray-300 bg-white"
                }`}
              >
                {isSelected && (
                  <svg
                    className="h-3.5 w-3.5 text-white"
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
              <span className="text-xl">{opt.icon}</span>
              <span
                className={`font-medium ${
                  isSelected ? "text-teal-primary" : "text-dark"
                }`}
              >
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
