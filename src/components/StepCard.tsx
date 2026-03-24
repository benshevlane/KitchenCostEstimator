"use client";

interface StepCardProps {
  label: string;
  description?: string;
  icon?: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

export default function StepCard({
  label,
  description,
  icon,
  selected,
  onClick,
}: StepCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full cursor-pointer items-center gap-4 rounded-xl border-2 p-4 text-left transition-all duration-200 sm:p-5 ${
        selected
          ? "border-teal-primary bg-teal-pale shadow-sm"
          : "border-gray-200 bg-white hover:border-teal-border hover:shadow-sm"
      }`}
    >
      {icon && (
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-2xl ${
            selected ? "bg-white" : "bg-gray-50"
          }`}
        >
          {icon}
        </div>
      )}
      <div className="min-w-0 flex-1">
        <div
          className={`font-semibold ${
            selected ? "text-teal-primary" : "text-dark"
          }`}
        >
          {label}
        </div>
        {description && (
          <div className="mt-0.5 text-sm text-muted">{description}</div>
        )}
      </div>
      <div
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
          selected
            ? "border-teal-primary bg-teal-primary"
            : "border-gray-300 bg-white"
        }`}
      >
        {selected && (
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
    </button>
  );
}
