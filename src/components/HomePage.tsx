'use client';

import EstimatorWizard from '@/components/EstimatorWizard';
import RegionSwitcher from '@/components/RegionSwitcher';
import type { LocaleConfig } from '@/lib/localeData';

function TealCheck() {
  return (
    <svg className="h-5 w-5 shrink-0 text-teal-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function HomePage({ locale }: { locale: LocaleConfig }) {
  return (
    <main className="min-h-screen bg-light-bg">
      <RegionSwitcher />

      {/* Hero Section */}
      <section aria-label="Introduction" className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:py-20">
          <span className="inline-block rounded-full bg-teal-pale px-4 py-1.5 text-sm font-medium text-teal-primary border border-teal-border mb-6">
            {locale.badge}
          </span>
          <h1 className="text-4xl font-bold text-dark sm:text-5xl lg:text-6xl">
            {locale.heroTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-mid sm:text-xl">
            {locale.heroSub}
          </p>
        </div>
      </section>

      {/* Cost Range Strip */}
      <section aria-label="Cost Overview">
        <div className="mx-auto max-w-3xl px-4 -mt-6 relative z-10">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {/* Budget */}
              <div className="p-6 text-center">
                <p className="text-sm font-medium text-muted uppercase tracking-wide">Budget</p>
                <p className="mt-2 text-2xl font-bold text-dark" style={{ fontFamily: 'DM Mono, monospace' }}>
                  {locale.costLow}
                </p>
                <p className="mt-1 text-sm text-mid">{locale.costLowDesc}</p>
              </div>
              {/* Average — highlighted */}
              <div className="bg-teal-pale p-6 text-center">
                <p className="text-sm font-medium text-teal-primary uppercase tracking-wide">{locale.avgLabel}</p>
                <p className="mt-2 text-2xl font-bold text-teal-primary" style={{ fontFamily: 'DM Mono, monospace' }}>
                  {locale.costAvg}
                </p>
                <p className="mt-1 text-sm text-mid">{locale.costAvgDesc}</p>
              </div>
              {/* Premium */}
              <div className="p-6 text-center">
                <p className="text-sm font-medium text-muted uppercase tracking-wide">Premium</p>
                <p className="mt-2 text-2xl font-bold text-dark" style={{ fontFamily: 'DM Mono, monospace' }}>
                  {locale.costHigh}
                </p>
                <p className="mt-1 text-sm text-mid">{locale.costHighDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Trust Signals */}
      <section aria-label="Get your estimate" className="py-10">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <a
            href="#estimator"
            className="inline-block rounded-xl px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 hover:opacity-90"
            style={{ backgroundColor: '#0d9488' }}
          >
            Get My Personalised Estimate &rarr;
          </a>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-mid">
            <span className="flex items-center gap-1.5"><TealCheck /> Completely free</span>
            <span className="flex items-center gap-1.5"><TealCheck /> No email required</span>
            <span className="flex items-center gap-1.5"><TealCheck /> Takes 2 minutes</span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-4xl px-4"><hr className="border-gray-200" /></div>

      {/* Calculator Section */}
      <section id="estimator" aria-label="Kitchen Cost Estimator Tool" className="scroll-mt-4">
        <div className="mx-auto max-w-2xl px-4 py-10 sm:py-14">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-dark sm:text-3xl">
              Kitchen Cost Estimator
            </h2>
            <p className="mt-2 text-muted">
              Answer a few questions to get your personalised estimate
            </p>
          </div>
          <EstimatorWizard />
          <p className="mt-4 text-center text-sm text-muted">{locale.calcFooterNote}</p>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-4xl px-4"><hr className="border-gray-200" /></div>

      {/* How It Works */}
      <section aria-label="How it works" className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-dark sm:text-3xl">
            How It Works
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <article className="rounded-2xl border border-gray-200 p-6 text-center">
              <span
                className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: '#0d9488' }}
              >
                1
              </span>
              <h3 className="text-lg font-bold text-dark">Answer 4 quick questions</h3>
              <p className="mt-2 text-sm text-mid">
                Kitchen size, location, budget tier, and what&apos;s included.
              </p>
            </article>
            <article className="rounded-2xl border border-gray-200 p-6 text-center">
              <span
                className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: '#0d9488' }}
              >
                2
              </span>
              <h3 className="text-lg font-bold text-dark">We apply 2026 data</h3>
              <p className="mt-2 text-sm text-mid">
                {locale.howItWorksDataLine}
              </p>
            </article>
            <article className="rounded-2xl border border-gray-200 p-6 text-center">
              <span
                className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: '#0d9488' }}
              >
                3
              </span>
              <h3 className="text-lg font-bold text-dark">Get your breakdown instantly</h3>
              <p className="mt-2 text-sm text-mid">
                No email, no waiting, no catch.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <div className="flex flex-col items-center gap-4 text-center text-sm text-muted sm:flex-row sm:justify-between sm:text-left">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              <a
                href="https://freeroomplanner.com?utm_source=kitchencostestimator&utm_medium=footer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-primary hover:underline"
              >
                Free Room Planner
              </a>
              <a
                href="https://kitchensdirectory.co.uk?utm_source=kitchencostestimator&utm_medium=footer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-primary hover:underline"
              >
                Kitchens Directory
              </a>
            </div>
            <a
              href="https://www.perplexity.ai/computer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-mid"
            >
              Created with Perplexity Computer
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
