"use client";

import { KitchenSize, LayoutType } from "@/lib/types";
import StepCard from "../StepCard";

interface SizeLayoutStepProps {
  size: KitchenSize | null;
  layout: LayoutType | null;
  onSizeChange: (size: KitchenSize) => void;
  onLayoutChange: (layout: LayoutType) => void;
}

const sizes: { id: KitchenSize; label: string; desc: string; icon: string }[] = [
  { id: "small", label: "Small", desc: "Under 8m² / 90sqft", icon: "📐" },
  { id: "medium", label: "Medium", desc: "8–14m² / 90–150sqft", icon: "📏" },
  { id: "large", label: "Large", desc: "14–20m² / 150–215sqft", icon: "🏠" },
  { id: "very-large", label: "Very Large", desc: "20m²+ / 215sqft+", icon: "🏡" },
];

const layouts: { id: LayoutType; label: string; desc: string; icon: React.ReactNode }[] = [
  {
    id: "single-wall",
    label: "Single Wall",
    desc: "All units along one wall",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="4" y="18" width="40" height="12" rx="2" />
      </svg>
    ),
  },
  {
    id: "galley",
    label: "Galley",
    desc: "Two parallel runs",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="4" y="8" width="40" height="10" rx="2" />
        <rect x="4" y="30" width="40" height="10" rx="2" />
      </svg>
    ),
  },
  {
    id: "l-shape",
    label: "L-Shape",
    desc: "Two adjoining walls",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M4 8h10v32H4V8zM14 30h30v10H14V30z" />
      </svg>
    ),
  },
  {
    id: "u-shape",
    label: "U-Shape",
    desc: "Three walls",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M4 8h10v32h20V8h10v40H4V8z" />
      </svg>
    ),
  },
  {
    id: "island",
    label: "Island",
    desc: "L/U-shape with island",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M4 8h10v32H4V8zM14 30h30v10H14V30z" />
        <rect x="22" y="14" width="14" height="8" rx="1" />
      </svg>
    ),
  },
];

export default function SizeLayoutStep({
  size,
  layout,
  onSizeChange,
  onLayoutChange,
}: SizeLayoutStepProps) {
  return (
    <div className="animate-fade-in">
      <h2 className="mb-2 text-xl font-bold text-dark sm:text-2xl">
        Kitchen Size & Layout
      </h2>
      <p className="mb-6 text-muted">
        Choose your kitchen size and layout type.
      </p>

      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
        Size
      </h3>
      <div className="mb-8 grid grid-cols-2 gap-3">
        {sizes.map((s) => (
          <StepCard
            key={s.id}
            label={s.label}
            description={s.desc}
            icon={<span>{s.icon}</span>}
            selected={size === s.id}
            onClick={() => onSizeChange(s.id)}
          />
        ))}
      </div>

      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
        Layout
      </h3>
      <div className="flex flex-col gap-3">
        {layouts.map((l) => (
          <StepCard
            key={l.id}
            label={l.label}
            description={l.desc}
            icon={l.icon}
            selected={layout === l.id}
            onClick={() => onLayoutChange(l.id)}
          />
        ))}
      </div>
    </div>
  );
}
