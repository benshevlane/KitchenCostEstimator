import EstimatorWizard from "@/components/EstimatorWizard";

const faqItems = [
  {
    q: "How much does a kitchen renovation cost?",
    a: "A kitchen renovation typically costs between £5,000 and £30,000 in the UK, $15,000 to $75,000 in the US, or CA$20,000 to CA$80,000 in Canada. The final price depends on kitchen size, material choices, appliance quality, and whether you hire professionals or DIY. A small budget kitchen starts around £5,000, while a large premium kitchen with high-end appliances and stone worktops can exceed £50,000.",
  },
  {
    q: "What is the biggest cost in a kitchen renovation?",
    a: "Kitchen units and cabinetry are typically the largest expense, accounting for 30-40% of the total budget. Custom or semi-custom cabinets can cost significantly more than flat-pack options. Worktops are the second largest cost, especially if you choose natural stone like granite or marble. Appliances, plumbing, and electrical work make up the remainder.",
  },
  {
    q: "How long does a kitchen renovation take?",
    a: "A straightforward kitchen renovation takes 4-8 weeks on average. A simple refresh with new doors and worktops might take 2-3 weeks, while a full gut renovation involving layout changes, new plumbing, and electrical work can take 10-16 weeks. Planning and lead times for materials often add another 4-8 weeks before work begins.",
  },
  {
    q: "Can I renovate a kitchen on a tight budget?",
    a: "Yes. Focus on cosmetic updates like repainting cabinets, replacing doors and handles, fitting new worktops, and upgrading lighting. Keep the existing layout to avoid plumbing and electrical costs. Budget laminate worktops and mid-range appliances offer good value. Our estimator can help you see exactly where the money goes so you can prioritise effectively.",
  },
  {
    q: "Is it cheaper to DIY a kitchen installation?",
    a: "DIY installation can save 20-40% on labour costs, but only if you have the skills. Fitting units, plumbing, and electrical work require competence to meet building regulations. Gas and certain electrical work must legally be done by certified professionals in the UK. A common middle ground is to install the units yourself and hire trades for plumbing, gas, and electrics.",
  },
  {
    q: "How accurate is this kitchen cost estimator?",
    a: "Our estimates are based on 2024-2025 pricing data from trusted UK, US, and Canadian sources. We provide low, mid, and high ranges to reflect market variation. While no online estimator can replace a detailed quote from a kitchen fitter, our tool gives you a reliable ballpark figure to help you plan your budget before speaking to professionals.",
  },
  {
    q: "What worktop material offers the best value?",
    a: "Laminate worktops offer the best value, starting from around £20-40 per linear metre. They come in a wide range of finishes including realistic stone and wood effects. For a mid-range option, quartz offers excellent durability and low maintenance at £200-500 per m\u00B2. Granite and marble are premium choices that add significant value to your kitchen but come at a higher price point.",
  },
  {
    q: "Should I get a kitchen from IKEA or a specialist?",
    a: "IKEA kitchens offer excellent value with a wide range of styles and good quality for the price. They work well for standard layouts and budget-conscious renovations. Specialist kitchen companies (like Howdens, Wren, or independent makers) offer more customisation, better build quality, and professional design services. For complex layouts or high-end finishes, a specialist is usually worth the extra investment.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-light-bg">
      {/* Hero Section */}
      <section aria-label="Introduction" className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:py-20">
          <h1 className="text-4xl font-bold text-dark sm:text-5xl lg:text-6xl">
            How Much Does a Kitchen Cost?
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-mid sm:text-xl">
            Get a free, instant estimate for your kitchen renovation. Compare
            costs across the UK, US, and Canada with our detailed cost
            calculator.
          </p>
          <a
            href="#estimator"
            className="mt-8 inline-block rounded-xl px-8 py-4 text-lg font-semibold text-white transition-colors duration-200"
            style={{ backgroundColor: "#0d9488" }}
          >
            Estimate My Kitchen Cost
          </a>
        </div>
      </section>

      {/* Estimator Section */}
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
        </div>
      </section>

      {/* Average Kitchen Costs */}
      <section aria-label="Average Kitchen Costs" className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-dark sm:text-3xl">
            Average Kitchen Costs by Country
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <article className="rounded-2xl border border-gray-200 p-6 text-center">
              <h3 className="mb-1 text-lg font-bold text-dark">
                United Kingdom
              </h3>
              <p className="mb-3 text-sm text-muted">Prices in GBP</p>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-mid">Small kitchen</dt>
                  <dd className="font-semibold text-dark" style={{ fontFamily: "DM Mono, monospace" }}>£5,000 – £12,000</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-mid">Medium kitchen</dt>
                  <dd className="font-semibold text-dark" style={{ fontFamily: "DM Mono, monospace" }}>£10,000 – £25,000</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-mid">Large kitchen</dt>
                  <dd className="font-semibold text-dark" style={{ fontFamily: "DM Mono, monospace" }}>£20,000 – £50,000+</dd>
                </div>
              </dl>
            </article>
            <article className="rounded-2xl border border-gray-200 p-6 text-center">
              <h3 className="mb-1 text-lg font-bold text-dark">
                United States
              </h3>
              <p className="mb-3 text-sm text-muted">Prices in USD</p>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-mid">Small kitchen</dt>
                  <dd className="font-semibold text-dark" style={{ fontFamily: "DM Mono, monospace" }}>$10,000 – $25,000</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-mid">Medium kitchen</dt>
                  <dd className="font-semibold text-dark" style={{ fontFamily: "DM Mono, monospace" }}>$25,000 – $55,000</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-mid">Large kitchen</dt>
                  <dd className="font-semibold text-dark" style={{ fontFamily: "DM Mono, monospace" }}>$45,000 – $100,000+</dd>
                </div>
              </dl>
            </article>
            <article className="rounded-2xl border border-gray-200 p-6 text-center">
              <h3 className="mb-1 text-lg font-bold text-dark">Canada</h3>
              <p className="mb-3 text-sm text-muted">Prices in CAD</p>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-mid">Small kitchen</dt>
                  <dd className="font-semibold text-dark" style={{ fontFamily: "DM Mono, monospace" }}>CA$15,000 – CA$30,000</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-mid">Medium kitchen</dt>
                  <dd className="font-semibold text-dark" style={{ fontFamily: "DM Mono, monospace" }}>CA$25,000 – CA$60,000</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-mid">Large kitchen</dt>
                  <dd className="font-semibold text-dark" style={{ fontFamily: "DM Mono, monospace" }}>CA$50,000 – CA$120,000+</dd>
                </div>
              </dl>
            </article>
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section aria-label="Kitchen Renovation Cost Factors">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-dark sm:text-3xl">
            What Affects Kitchen Renovation Costs?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Units & Cabinetry",
                desc: "The largest single expense. Budget flat-pack starts at £1,000–£3,000, while bespoke cabinetry can exceed £15,000. Door style, material, and soft-close mechanisms all affect price.",
                icon: "🗄️",
              },
              {
                title: "Worktops",
                desc: "Ranges from £200 for laminate to £5,000+ for natural stone. Quartz and granite are popular mid-to-premium choices that add durability and resale value.",
                icon: "🪨",
              },
              {
                title: "Appliances",
                desc: "A budget oven, hob, and hood package starts around £600–£1,000. A full premium suite with integrated fridge, dishwasher, and brand-name appliances can cost £8,000–£15,000.",
                icon: "🍳",
              },
              {
                title: "Flooring",
                desc: "Vinyl and LVT offer affordable, waterproof options from £15–£40/m². Porcelain tiles and natural stone are premium choices at £40–£120/m².",
                icon: "🏗️",
              },
              {
                title: "Labour & Installation",
                desc: "Professional fitting typically costs £2,000–£6,000 depending on kitchen size and complexity. Plumbing, electrical, and gas work are usually separate costs.",
                icon: "🔧",
              },
              {
                title: "Layout Changes",
                desc: "Moving plumbing, gas, or electrical points adds significant cost. Island kitchens need extra plumbing and electrics. Keeping the existing layout saves money.",
                icon: "📐",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="text-lg font-bold text-dark">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-mid">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section aria-label="How to Use the Estimator" className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-dark sm:text-3xl">
            How to Use Our Kitchen Cost Estimator
          </h2>
          <ol className="mx-auto max-w-2xl space-y-4">
            {[
              { step: "Select your country", desc: "We auto-detect your location. Choose UK, US, or Canada to set regional pricing and currency." },
              { step: "Enter your kitchen size and layout", desc: "Pick from small to very-large and choose your layout type (single wall, galley, L-shape, U-shape, or island)." },
              { step: "Choose what you need", desc: "Select which elements are part of your renovation — units, worktops, appliances, flooring, plumbing, electrical, and more." },
              { step: "Set your preferences", desc: "For each element, choose your material and budget tier. Pick individual appliances and set budget levels for each." },
              { step: "Get your estimate", desc: "See a detailed breakdown with low, mid, and high ranges, plus a visual cost proportion chart." },
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: "#0d9488" }}
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-dark">{item.step}</h3>
                  <p className="mt-0.5 text-sm text-mid">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Saving Tips */}
      <section aria-label="Kitchen Cost Saving Tips">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-dark sm:text-3xl">
            Kitchen Cost Saving Tips
          </h2>
          <div className="mx-auto max-w-2xl space-y-4">
            {[
              { tip: "Keep the existing layout", detail: "Avoiding plumbing and electrical moves can save £2,000–£5,000 in labour and materials." },
              { tip: "Mix budget and premium choices", detail: "Splurge on the worktops you see and touch every day, but save on cabinet interiors and less visible elements." },
              { tip: "Consider ex-display or end-of-line kitchens", detail: "Kitchen showrooms regularly clear stock at 40-60% discounts. Timing your purchase around sales events can yield big savings." },
              { tip: "Do what you can yourself", detail: "Painting, tiling backsplashes, and assembling flat-pack units are achievable DIY tasks that save on labour costs." },
              { tip: "Plan for contingency", detail: "Set aside 10-15% of your budget for unexpected costs. Older homes often reveal surprises behind walls and under floors." },
              { tip: "Get at least three quotes", detail: "Prices vary significantly between fitters. Getting multiple quotes ensures you find fair pricing for your area." },
            ].map((item, i) => (
              <article key={i} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="font-semibold text-dark">{item.tip}</h3>
                <p className="mt-1 text-sm text-mid">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-label="Frequently Asked Questions" className="bg-white border-t border-gray-100">
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
                <summary className="cursor-pointer select-none px-5 py-4 font-semibold text-dark transition-colors hover:text-teal-primary">
                  {item.q}
                </summary>
                <div className="px-5 pb-4 text-sm leading-relaxed text-mid">
                  {item.a}
                </div>
              </details>
            ))}
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
