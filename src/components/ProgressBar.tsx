"use client";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const percentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-mid">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-muted">{percentage}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${percentage}%`,
            backgroundColor: "#0d9488",
          }}
        />
      </div>
    </div>
  );
}
