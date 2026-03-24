"use client";

import { useState, useMemo, useCallback } from "react";
import {
  EstimatorState,
  Country,
  KitchenSize,
  LayoutType,
  ScopeItem,
  FinishTier,
  WorktopMaterial,
  ApplianceSelection,
  FlooringMaterial,
  InstallationType,
  ContingencyLevel,
} from "@/lib/types";
import { calculateCosts } from "@/lib/calculator";
import ProgressBar from "./ProgressBar";
import CountryStep from "./steps/CountryStep";
import SizeLayoutStep from "./steps/SizeLayoutStep";
import ScopeStep from "./steps/ScopeStep";
import UnitsStep from "./steps/UnitsStep";
import WorktopStep from "./steps/WorktopStep";
import AppliancesStep from "./steps/AppliancesStep";
import FlooringStep from "./steps/FlooringStep";
import ExtrasStep from "./steps/ExtrasStep";
import ResultsPage from "./ResultsPage";

const initialState: EstimatorState = {
  country: null,
  kitchenSize: null,
  layout: null,
  scope: [],
  finishTier: null,
  worktopMaterial: null,
  applianceTier: null,
  appliances: [],
  flooringMaterial: null,
  installation: null,
  contingency: null,
};

type StepId =
  | "country"
  | "size-layout"
  | "scope"
  | "units"
  | "worktops"
  | "appliances"
  | "flooring"
  | "extras"
  | "results";

export default function EstimatorWizard() {
  const [state, setState] = useState<EstimatorState>(initialState);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const update = useCallback(
    <K extends keyof EstimatorState>(key: K, value: EstimatorState[K]) => {
      setState((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  // Build the list of active steps based on scope selections
  const activeSteps: StepId[] = useMemo(() => {
    const steps: StepId[] = ["country", "size-layout", "scope"];
    if (state.scope.includes("units")) steps.push("units");
    if (state.scope.includes("worktops")) steps.push("worktops");
    if (state.scope.includes("appliances")) steps.push("appliances");
    if (state.scope.includes("flooring")) steps.push("flooring");
    steps.push("extras");
    steps.push("results");
    return steps;
  }, [state.scope]);

  const currentStep = activeSteps[currentStepIndex];
  const isResults = currentStep === "results";
  const totalQuestionSteps = activeSteps.length - 1; // exclude results

  const canContinue = useMemo(() => {
    switch (currentStep) {
      case "country":
        return state.country !== null;
      case "size-layout":
        return state.kitchenSize !== null && state.layout !== null;
      case "scope":
        return state.scope.length > 0;
      case "units":
        return state.finishTier !== null;
      case "worktops":
        return state.worktopMaterial !== null;
      case "appliances":
        return state.appliances.length > 0;
      case "flooring":
        return state.flooringMaterial !== null;
      case "extras":
        return state.installation !== null && state.contingency !== null;
      default:
        return true;
    }
  }, [currentStep, state]);

  const goNext = () => {
    if (currentStepIndex < activeSteps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const goBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const startOver = () => {
    setState(initialState);
    setCurrentStepIndex(0);
  };

  const results = useMemo(() => {
    if (isResults) {
      return calculateCosts(state);
    }
    return null;
  }, [isResults, state]);

  const renderStep = () => {
    switch (currentStep) {
      case "country":
        return (
          <CountryStep
            value={state.country}
            onChange={(v: Country) => update("country", v)}
          />
        );
      case "size-layout":
        return (
          <SizeLayoutStep
            size={state.kitchenSize}
            layout={state.layout}
            onSizeChange={(v: KitchenSize) => update("kitchenSize", v)}
            onLayoutChange={(v: LayoutType) => update("layout", v)}
          />
        );
      case "scope":
        return (
          <ScopeStep
            value={state.scope}
            onChange={(v: ScopeItem[]) => update("scope", v)}
          />
        );
      case "units":
        return (
          <UnitsStep
            value={state.finishTier}
            onChange={(v: FinishTier) => update("finishTier", v)}
          />
        );
      case "worktops":
        return (
          <WorktopStep
            value={state.worktopMaterial}
            onChange={(v: WorktopMaterial) => update("worktopMaterial", v)}
          />
        );
      case "appliances":
        return (
          <AppliancesStep
            value={state.appliances}
            onChange={(v: ApplianceSelection[]) => update("appliances", v)}
          />
        );
      case "flooring":
        return (
          <FlooringStep
            value={state.flooringMaterial}
            onChange={(v: FlooringMaterial) => update("flooringMaterial", v)}
          />
        );
      case "extras":
        return (
          <ExtrasStep
            installation={state.installation}
            contingency={state.contingency}
            onInstallationChange={(v: InstallationType) =>
              update("installation", v)
            }
            onContingencyChange={(v: ContingencyLevel) =>
              update("contingency", v)
            }
          />
        );
      case "results":
        return results && state.country ? (
          <ResultsPage
            results={results}
            country={state.country}
            onStartOver={startOver}
          />
        ) : null;
      default:
        return null;
    }
  };

  return (
    <div>
      {!isResults && (
        <ProgressBar
          currentStep={currentStepIndex + 1}
          totalSteps={totalQuestionSteps}
        />
      )}

      <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
        {renderStep()}
      </div>

      {!isResults && (
        <div className="mt-6 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={goBack}
            disabled={currentStepIndex === 0}
            className={`rounded-xl border-2 border-gray-200 px-6 py-3 font-medium transition-colors duration-200 ${
              currentStepIndex === 0
                ? "cursor-not-allowed text-gray-300"
                : "text-mid hover:border-gray-300 hover:bg-gray-50"
            }`}
          >
            Back
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={!canContinue}
            className={`rounded-xl px-8 py-3 font-semibold text-white transition-all duration-200 ${
              canContinue
                ? "cursor-pointer shadow-sm"
                : "cursor-not-allowed opacity-50"
            }`}
            style={{
              backgroundColor: canContinue ? "#0d9488" : "#94a3b8",
            }}
            onMouseOver={(e) => {
              if (canContinue)
                e.currentTarget.style.backgroundColor = "#14b8a6";
            }}
            onMouseOut={(e) => {
              if (canContinue)
                e.currentTarget.style.backgroundColor = "#0d9488";
            }}
          >
            {currentStepIndex === totalQuestionSteps - 1
              ? "See My Estimate"
              : "Continue"}
          </button>
        </div>
      )}
    </div>
  );
}
