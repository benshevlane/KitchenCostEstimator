"use client";

import { WorktopMaterial } from "@/lib/types";
import StepCard from "../StepCard";

interface WorktopStepProps {
  value: WorktopMaterial | null;
  onChange: (material: WorktopMaterial) => void;
}

const materials: {
  id: WorktopMaterial;
  label: string;
  desc: string;
  icon: string;
}[] = [
  { id: "laminate", label: "Laminate", desc: "Budget-friendly, wide range of finishes", icon: "🟫" },
  { id: "solid-wood", label: "Solid Wood", desc: "Oak, walnut — warm, natural look", icon: "🪵" },
  { id: "quartz", label: "Quartz", desc: "Engineered stone — durable, low maintenance", icon: "💎" },
  { id: "granite", label: "Granite", desc: "Natural stone — unique patterns", icon: "🪨" },
  { id: "corian", label: "Corian / Composite", desc: "Seamless, can be shaped and curved", icon: "⬜" },
  {
    id: "porcelain-dekton",
    label: "Porcelain / Dekton",
    desc: "Ultra-durable sintered stone",
    icon: "🔲",
  },
];

export default function WorktopStep({ value, onChange }: WorktopStepProps) {
  return (
    <div className="animate-fade-in">
      <h2 className="mb-2 text-xl font-bold text-dark sm:text-2xl">
        Worktop Material
      </h2>
      <p className="mb-6 text-muted">
        Choose your preferred countertop material.
      </p>
      <div className="flex flex-col gap-3">
        {materials.map((m) => (
          <StepCard
            key={m.id}
            label={m.label}
            description={m.desc}
            icon={<span>{m.icon}</span>}
            selected={value === m.id}
            onClick={() => onChange(m.id)}
          />
        ))}
      </div>
    </div>
  );
}
