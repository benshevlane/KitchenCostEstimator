"use client";

import { CostResult, Country, CURRENCY_MAP } from "@/lib/types";

interface ResultsPageProps {
  results: CostResult;
  country: Country;
  onStartOver: () => void;
}

function formatCurrency(amount: number, country: Country): string {
  const symbol = CURRENCY_MAP[country];
  const formatted = amount.toLocaleString("en", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return `${symbol}${formatted}`;
}

const BAR_COLORS = [
  "#0d9488",
  "#14b8a6",
  "#2dd4bf",
  "#5eead4",
  "#99f6e4",
  "#f59e0b",
  "#fb923c",
  "#a78bfa",
  "#f472b6",
];

export default function ResultsPage({
  results,
  country,
  onStartOver,
}: ResultsPageProps) {
  const { total, breakdown } = results;

  const totalMid = breakdown.reduce((sum, item) => sum + item.costs.mid, 0);

  return (
    <div className="animate-fade-in">
      {/* Hero Total */}
      <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mb-1 text-center text-sm font-semibold uppercase tracking-wide text-muted">
          Estimated Total Cost
        </h2>
        <div className="mb-4 text-center">
          <span
            className="text-4xl font-bold sm:text-5xl"
            style={{ color: "#0d9488", fontFamily: "DM Mono, monospace" }}
          >
            {formatCurrency(total.mid, country)}
          </span>
        </div>
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="text-center">
            <div className="text-muted">Low</div>
            <div
              className="font-semibold text-mid"
              style={{ fontFamily: "DM Mono, monospace" }}
            >
              {formatCurrency(total.low, country)}
            </div>
          </div>
          <div
            className="h-8 w-px"
            style={{ backgroundColor: "#99f6e4" }}
          />
          <div className="text-center">
            <div className="font-medium" style={{ color: "#0d9488" }}>
              Mid
            </div>
            <div
              className="font-bold"
              style={{
                color: "#0d9488",
                fontFamily: "DM Mono, monospace",
              }}
            >
              {formatCurrency(total.mid, country)}
            </div>
          </div>
          <div
            className="h-8 w-px"
            style={{ backgroundColor: "#99f6e4" }}
          />
          <div className="text-center">
            <div className="text-muted">High</div>
            <div
              className="font-semibold text-mid"
              style={{ fontFamily: "DM Mono, monospace" }}
            >
              {formatCurrency(total.high, country)}
            </div>
          </div>
        </div>
      </div>

      {/* Stacked Bar Chart */}
      {breakdown.length > 0 && (
        <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-bold text-dark">
            Cost Proportions
          </h3>
          <div className="mb-4 flex h-10 w-full overflow-hidden rounded-lg">
            {breakdown.map((item, i) => {
              const pct =
                totalMid > 0 ? (item.costs.mid / totalMid) * 100 : 0;
              if (pct < 1) return null;
              return (
                <div
                  key={item.category}
                  className="relative h-full transition-all duration-500"
                  style={{
                    width: `${pct}%`,
                    backgroundColor: BAR_COLORS[i % BAR_COLORS.length],
                  }}
                  title={`${item.category}: ${Math.round(pct)}%`}
                />
              );
            })}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {breakdown.map((item, i) => {
              const pct =
                totalMid > 0 ? (item.costs.mid / totalMid) * 100 : 0;
              if (pct < 1) return null;
              return (
                <div
                  key={item.category}
                  className="flex items-center gap-1.5 text-sm"
                >
                  <div
                    className="h-3 w-3 rounded-sm"
                    style={{
                      backgroundColor: BAR_COLORS[i % BAR_COLORS.length],
                    }}
                  />
                  <span className="text-muted">
                    {item.category} ({Math.round(pct)}%)
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Itemised Breakdown Table */}
      <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-bold text-dark">
          {country === 'uk' ? 'Itemised Breakdown' : 'Itemized Breakdown'}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pb-3 text-left font-semibold text-muted">
                  Category
                </th>
                <th className="pb-3 text-right font-semibold text-muted">
                  Low
                </th>
                <th className="pb-3 text-right font-semibold text-muted">
                  Mid
                </th>
                <th className="pb-3 text-right font-semibold text-muted">
                  High
                </th>
              </tr>
            </thead>
            <tbody>
              {breakdown.map((item) => (
                <tr
                  key={item.category}
                  className="border-b border-gray-100"
                >
                  <td className="py-3 font-medium text-dark">
                    {item.category}
                  </td>
                  <td
                    className="py-3 text-right text-muted"
                    style={{ fontFamily: "DM Mono, monospace" }}
                  >
                    {formatCurrency(item.costs.low, country)}
                  </td>
                  <td
                    className="py-3 text-right font-semibold text-mid"
                    style={{ fontFamily: "DM Mono, monospace" }}
                  >
                    {formatCurrency(item.costs.mid, country)}
                  </td>
                  <td
                    className="py-3 text-right text-muted"
                    style={{ fontFamily: "DM Mono, monospace" }}
                  >
                    {formatCurrency(item.costs.high, country)}
                  </td>
                </tr>
              ))}
              <tr className="font-bold">
                <td className="pt-4 text-dark">Total</td>
                <td
                  className="pt-4 text-right"
                  style={{ fontFamily: "DM Mono, monospace" }}
                >
                  {formatCurrency(total.low, country)}
                </td>
                <td
                  className="pt-4 text-right"
                  style={{
                    color: "#0d9488",
                    fontFamily: "DM Mono, monospace",
                  }}
                >
                  {formatCurrency(total.mid, country)}
                </td>
                <td
                  className="pt-4 text-right"
                  style={{ fontFamily: "DM Mono, monospace" }}
                >
                  {formatCurrency(total.high, country)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mb-8 rounded-xl border border-gray-200 bg-gray-50 p-4">
        <p className="text-xs leading-relaxed text-muted">
          <strong>Disclaimer:</strong> These estimates are for guidance only and
          are based on average UK, US, and Canadian pricing data from 2025–2026
          sources. Actual costs will vary based on your location, specific
          products chosen, contractor rates, and site conditions. Always obtain
          multiple quotes from qualified tradespeople before committing to a
          kitchen renovation.
        </p>
      </div>

      {/* CTA */}
      <a
        href="https://freeroomplanner.com?utm_source=kitchencostestimator&utm_medium=cta"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-center text-lg font-semibold text-white transition-colors duration-200"
        style={{ backgroundColor: "#0d9488" }}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = "#14b8a6")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = "#0d9488")
        }
      >
        Now plan your kitchen layout — free in freeroomplanner.com
        <span aria-hidden="true">&rarr;</span>
      </a>

      {/* Start Over */}
      <button
        type="button"
        onClick={onStartOver}
        className="w-full rounded-xl border-2 border-gray-200 bg-white px-6 py-3 font-medium text-mid transition-colors duration-200 hover:border-gray-300 hover:bg-gray-50"
      >
        Start Over
      </button>
    </div>
  );
}
