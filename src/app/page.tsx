import EstimatorWizard from "@/components/EstimatorWizard";

export default function Home() {
  return (
    <main className="min-h-screen bg-light-bg">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-dark sm:text-4xl">
            Kitchen Cost Estimator
          </h1>
          <p className="mt-2 text-muted">
            Get an instant estimate for your kitchen renovation
          </p>
        </div>
        <EstimatorWizard />
      </div>
    </main>
  );
}
