"use client";

import { FlooringMaterial } from "@/lib/types";
import StepCard from "../StepCard";

interface FlooringStepProps {
  value: FlooringMaterial | null;
  onChange: (material: FlooringMaterial) => void;
}

const materials: {
  id: FlooringMaterial;
  label: string;
  desc: string;
  icon: string;
}[] = [
  { id: "vinyl", label: "Vinyl / Sheet Vinyl", desc: "Budget waterproof option", icon: "🟩" },
  {
    id: "lvt-lvp",
    label: "LVT / LVP (Luxury Vinyl)",
    desc: "Most popular — click-lock, fully waterproof",
    icon: "✨",
  },
  {
    id: "engineered-wood",
    label: "Engineered Wood",
    desc: "Warm natural look, moisture protection needed",
    icon: "🪵",
  },
  {
    id: "porcelain-tile",
    label: "Porcelain Tile",
    desc: "Durable ceramic/porcelain, many styles",
    icon: "🔲",
  },
  {
    id: "natural-stone",
    label: "Natural Stone",
    desc: "Premium stone tile flooring",
    icon: "🪨",
  },
];

export default function FlooringStep({ value, onChange }: FlooringStepProps) {
  return (
    <div className="animate-fade-in">
      <h2 className="mb-2 text-xl font-bold text-dark sm:text-2xl">
        Flooring Material
      </h2>
      <p className="mb-6 text-muted">
        Choose your preferred flooring type.
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
