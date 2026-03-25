'use client';

import EstimatorWizard from '@/components/EstimatorWizard';
import Navbar from '@/components/Navbar';
import { localeData, type LocaleKey } from '@/lib/localeData';
import { guidesPath } from '@/lib/guideCategories';

function TealCheck() {
  return (
    <svg className="h-5 w-5 shrink-0 text-teal-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const faqItems = [
  {
    q: 'How much does a kitchen renovation cost?',
    a: 'A kitchen renovation typically costs between £5,000 and £30,000 in the UK, $15,000 to $75,000 in the US, or CA$20,000 to CA$80,000 in Canada. The final price depends on kitchen size, material choices, appliance quality, and whether you hire professionals or DIY. A small budget kitchen starts around £5,000, while a large premium kitchen with high-end appliances and stone worktops can exceed £50,000.',
  },
  {
    q: 'What is the biggest cost in a kitchen renovation?',
    a: 'Kitchen units and cabinetry are typically the largest expense, accounting for 30-40% of the total budget. Custom or semi-custom cabinets can cost significantly more than flat-pack options. Worktops are the second largest cost, especially if you choose natural stone like granite or marble. Appliances, plumbing, and electrical work make up the remainder.',
  },
  {
    q: 'How long does a kitchen renovation take?',
    a: 'A straightforward kitchen renovation takes 4-8 weeks on average. A simple refresh with new doors and worktops might take 2-3 weeks, while a full gut renovation involving layout changes, new plumbing, and electrical work can take 10-16 weeks. Planning and lead times for materials often add another 4-8 weeks before work begins.',
  },
  {
    q: 'Can I renovate a kitchen on a tight budget?',
    a: 'Yes. Focus on cosmetic updates like repainting cabinets, replacing doors and handles, fitting new worktops, and upgrading lighting. Keep the existing layout to avoid plumbing and electrical costs. Budget laminate worktops and mid-range appliances offer good value. Our estimator can help you see exactly where the money goes so you can prioritise effectively.',
  },
  {
    q: 'Is it cheaper to DIY a kitchen installation?',
    a: 'DIY installation can save 20-40% on labour costs, but only if you have the skills. Fitting units, plumbing, and electrical work require competence to meet building regulations. Gas and certain electrical work must legally be done by certified professionals in the UK. A common middle ground is to install the units yourself and hire trades for plumbing, gas, and electrics.',
  },
  {
    q: 'How accurate is this kitchen cost estimator?',
    a: 'Our estimates are based on 2024-2025 pricing data from trusted UK, US, and Canadian sources. We provide low, mid, and high ranges to reflect market variation. While no online estimator can replace a detailed quote from a kitchen fitter, our tool gives you a reliable ballpark figure to help you plan your budget before speaking to professionals.',
  },
  {
    q: 'What worktop material offers the best value?',
    a: 'Laminate worktops offer the best value, starting from around £20-40 per linear metre. They come in a wide range of finishes including realistic stone and wood effects. For a mid-range option, quartz offers excellent durability and low maintenance at £200-500 per m\u00B2. Granite and marble are premium choices that add significant value to your kitchen but come at a higher price point.',
  },
  {
    q: 'Should I get a kitchen from IKEA or a specialist?',
    a: 'IKEA kitchens offer excellent value with a wide range of styles and good quality for the price. They work well for standard layouts and budget-conscious renovations. Specialist kitchen companies (like Howdens, Wren, or independent makers) offer more customisation, better build quality, and professional design services. For complex layouts or high-end finishes, a specialist is usually worth the extra investment.',
  },
];

const tipItems = [
  { tip: 'Keep the existing layout', detail: 'Avoiding plumbing and electrical moves can save £2,000–£5,000 in labour and materials.' },
  { tip: 'Mix budget and premium choices', detail: 'Splurge on the worktops you see and touch every day, but save on cabinet interiors and less visible elements.' },
  { tip: 'Consider ex-display or end-of-line kitchens', detail: 'Kitchen showrooms regularly clear stock at 40-60% discounts. Timing your purchase around sales events can yield big savings.' },
  { tip: 'Do what you can yourself', detail: 'Painting, tiling backsplashes, and assembling flat-pack units are achievable DIY tasks that save on labour costs.' },
  { tip: 'Plan for contingency', detail: 'Set aside 10-15% of your budget for unexpected costs. Older homes often reveal surprises behind walls and under floors.' },
  { tip: 'Get at least three quotes', detail: 'Prices vary significantly between fitters. Getting multiple quotes ensures you find fair pricing for your area.' },
];

const comparisonRows = [
  { category: 'Units', budget: 'Flatpack / stock', mid: 'Rigid / semi-custom', premium: 'Bespoke / handmade' },
  { category: 'Worktops', budget: 'Laminate', mid: 'Quartz', premium: 'Granite / Marble' },
  { category: 'Appliances', budget: 'Basic branded', mid: 'Mid-range integrated', premium: 'Premium brand suite' },
  { category: 'Flooring', budget: 'Vinyl / LVT', mid: 'Engineered wood', premium: 'Natural stone' },
  { category: 'Installation', budget: 'DIY / local fitter', mid: 'Professional fitting', premium: 'Fully project-managed' },
];

export default function HomePage({ localeKey }: { localeKey: LocaleKey }) {
  const locale = localeData[localeKey];

  return (
    <main className="min-h-screen bg-light-bg">
      {/* Navbar */}
      <Navbar navGuideLabel={locale.navGuideLabel} />

      {/* Hero Section */}
      <section aria-label="Introduction" className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:py-20">
          <span className="inline-block rounded-full bg-teal-pale px-4 py-1.5 text-sm font-medium text-teal-primary border border-teal-border mb-6">
            {locale.badge}
          </span>
          <h1 className="text-4xl font-bold text-dark sm:text-5xl lg:text-6xl" style={{ fontFamily: 'var(--font-sans)' }}>
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
                <p className="mt-2 text-2xl font-bold text-dark font-mono">
                  {locale.costLow}
                </p>
                <p className="mt-1 text-sm text-mid">{locale.costLowDesc}</p>
              </div>
              {/* Average — highlighted */}
              <div className="bg-teal-pale p-6 text-center">
                <p className="text-sm font-medium text-teal-primary uppercase tracking-wide">{locale.avgLabel}</p>
                <p className="mt-2 text-2xl font-bold text-teal-primary font-mono">
                  {locale.costAvg}
                </p>
                <p className="mt-1 text-sm text-mid">{locale.costAvgDesc}</p>
              </div>
              {/* Premium */}
              <div className="p-6 text-center">
                <p className="text-sm font-medium text-muted uppercase tracking-wide">Premium</p>
                <p className="mt-2 text-2xl font-bold text-dark font-mono">
                  {locale.costHigh}
                </p>
                <p className="mt-1 text-sm text-mid">{locale.costHighDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data credibility line */}
      <p className="mt-4 text-center text-sm text-muted px-4">
        Estimates based on 70+ cost items from Checkatrade, HomeAdvisor, Fixr, and HomeStars
      </p>

      {/* CTA + Trust Signals */}
      <section aria-label="Get your estimate" className="py-10">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <a
            href="#estimator"
            className="inline-block rounded-xl bg-teal-primary px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 hover:bg-teal-hover"
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
      <section id="estimator" aria-label="Kitchen Cost Estimator Tool" className="scroll-mt-20">
        <div className="mx-auto max-w-2xl px-4 py-10 sm:py-14">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-dark sm:text-3xl">
              Kitchen Cost Calculator
            </h2>
            <p className="mt-2 text-muted">
              {locale.calcFooterNote}
            </p>
          </div>
          <EstimatorWizard />
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
              <span className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-primary text-sm font-bold text-white">
                1
              </span>
              <h3 className="text-lg font-bold text-dark">Answer 4 quick questions</h3>
              <p className="mt-2 text-sm text-mid">
                Kitchen size, layout, budget tier, and what&apos;s included.
              </p>
            </article>
            <article className="rounded-2xl border border-gray-200 p-6 text-center">
              <span className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-primary text-sm font-bold text-white">
                2
              </span>
              <h3 className="text-lg font-bold text-dark">We apply 2026 data</h3>
              <p className="mt-2 text-sm text-mid">
                {locale.howItWorksDataLine}
              </p>
            </article>
            <article className="rounded-2xl border border-gray-200 p-6 text-center">
              <span className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-primary text-sm font-bold text-white">
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

      {/* Comparison Table */}
      <section id="costs" aria-label="Cost Comparison" className="scroll-mt-20">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-dark sm:text-3xl">
            What Do You Get at Each Price Point?
          </h2>

          {/* Desktop table */}
          <div className="hidden sm:block overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-3 text-left font-semibold text-dark">Category</th>
                  <th className="px-6 py-3 text-left font-semibold text-dark">Budget</th>
                  <th className="px-6 py-3 text-left font-semibold text-dark">Mid-Range</th>
                  <th className="px-6 py-3 text-left font-semibold text-dark">Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.category} className={i < comparisonRows.length - 1 ? 'border-b border-gray-200' : ''}>
                    <td className="px-6 py-3 font-medium text-dark">{row.category}</td>
                    <td className="px-6 py-3 text-mid">{row.budget}</td>
                    <td className="px-6 py-3 text-mid">{row.mid}</td>
                    <td className="px-6 py-3 text-mid">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="grid gap-4 sm:hidden">
            {['Budget', 'Mid-Range', 'Premium'].map((tier, ti) => (
              <div key={tier} className={`rounded-2xl border p-5 ${ti === 1 ? 'border-teal-border bg-teal-pale' : 'border-gray-200 bg-white'}`}>
                <h3 className={`mb-3 text-lg font-bold ${ti === 1 ? 'text-teal-primary' : 'text-dark'}`}>{tier}</h3>
                <dl className="space-y-2 text-sm">
                  {comparisonRows.map((row) => (
                    <div key={row.category} className="flex justify-between">
                      <dt className="font-medium text-dark">{row.category}</dt>
                      <dd className="text-mid">{ti === 0 ? row.budget : ti === 1 ? row.mid : row.premium}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Saving Tips */}
      <section id="tips" aria-label="Kitchen Cost Saving Tips" className="scroll-mt-20 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-dark sm:text-3xl">
            Kitchen Cost Saving Tips
          </h2>
          <div className="mx-auto max-w-2xl space-y-4">
            {tipItems.map((item, i) => (
              <article key={i} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="font-semibold text-dark">{item.tip}</h3>
                <p className="mt-1 text-sm text-mid">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" aria-label="Frequently Asked Questions" className="scroll-mt-20">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-dark sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-2xl space-y-3">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group rounded-xl border border-gray-200 bg-white"
              >
                <summary className="flex cursor-pointer select-none items-center justify-between px-5 py-4 font-semibold text-dark transition-colors hover:text-teal-primary">
                  <span>{item.q}</span>
                  <ChevronDown className="faq-chevron h-5 w-5 shrink-0 text-muted" />
                </summary>
                <div className="faq-content">
                  <div>
                    <div className="px-5 pb-4 text-sm leading-relaxed text-mid">
                      {item.a}
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section aria-label="Plan your kitchen" className="bg-teal-primary">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:py-16">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to plan your layout?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-white/90">
            Use our free room planner to design your kitchen
          </p>
          <a
            href="https://freeroomplanner.com?utm_source=kitchencostestimator&utm_medium=cta"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-xl bg-white px-8 py-4 text-lg font-semibold text-teal-primary transition-colors duration-200 hover:bg-gray-50"
          >
            Plan My Kitchen &rarr;
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white/80">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-8 sm:grid-cols-3">
            {/* Col 1: Brand */}
            <div>
              <p className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-sans)' }}>KitchenCostEstimator</p>
              <p className="mt-2 text-sm text-white/60">
                Free kitchen renovation cost calculator for the UK, US, and Canada. Get instant estimates based on real project data.
              </p>
            </div>
            {/* Col 2: Quick Links */}
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/50">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#estimator" className="transition-colors hover:text-white">Calculator</a></li>
                <li><a href="#costs" className="transition-colors hover:text-white">Cost Guide</a></li>
                <li><a href="#tips" className="transition-colors hover:text-white">Tips</a></li>
                <li><a href="#faq" className="transition-colors hover:text-white">FAQ</a></li>
                <li><a href={guidesPath(localeKey)} className="transition-colors hover:text-white">Guides</a></li>
              </ul>
            </div>
            {/* Col 3: Tools */}
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/50">Tools</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://freeroomplanner.com?utm_source=kitchencostestimator&utm_medium=footer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    Free Room Planner
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/40 sm:flex-row">
            <p>&copy; 2026 KitchenCostEstimator</p>
            <a
              href="https://www.perplexity.ai/computer"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white/60"
            >
              Created with Perplexity Computer
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
