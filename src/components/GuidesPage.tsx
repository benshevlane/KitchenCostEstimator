import { getPagesByLocale } from '@/content';
import type { SeoPageData } from '@/content/types';
import RegionSwitcher from '@/components/RegionSwitcher';
import {
  categorize,
  categoryLabel,
  localeLabel,
  localePrefix,
  guidesPath,
  pageHref,
  type GuideCategory,
} from '@/lib/guideCategories';

const CATEGORY_ORDER: GuideCategory[] = ['Pillar', 'Size', 'Geo', 'Informational'];
const LOCALES: Array<'us' | 'uk' | 'ca'> = ['us', 'uk', 'ca'];

function groupByCategory(pages: SeoPageData[]) {
  const groups = new Map<GuideCategory, SeoPageData[]>();
  for (const page of pages) {
    const cat = categorize(page);
    const list = groups.get(cat) ?? [];
    list.push(page);
    groups.set(cat, list);
  }
  return groups;
}

interface GuidesPageProps {
  currentLocale: 'us' | 'uk' | 'ca';
}

export default function GuidesPage({ currentLocale }: GuidesPageProps) {
  const calcHref = currentLocale === 'us' ? '/us' : `/${currentLocale}`;

  // Order locales: current first, then the rest
  const orderedLocales = [currentLocale, ...LOCALES.filter((l) => l !== currentLocale)];

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href={calcHref} className="text-lg font-bold text-dark">
            KitchenCostEstimator
          </a>
          <div className="flex items-center gap-4">
            <a
              href={calcHref}
              className="text-sm font-medium text-mid transition-colors hover:text-teal-primary"
            >
              Calculator
            </a>
            <a
              href={guidesPath(currentLocale)}
              className="text-sm font-medium text-teal-primary"
            >
              Guides
            </a>
            <RegionSwitcher />
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-4 pt-8 pb-16 sm:px-6">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-sm text-muted">
            <li>
              <a href={calcHref} className="hover:text-teal-primary transition-colors">Home</a>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-gray-300">/</span>
              <span className="text-dark font-medium">Guides</span>
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-dark sm:text-4xl">Kitchen Remodel Cost Guides</h1>
        <p className="mt-3 text-lg text-muted">
          Browse all our kitchen renovation cost guides, {currentLocale === 'uk' ? 'organised' : 'organized'} by region and topic.
        </p>

        {orderedLocales.map((locale) => {
          const pages = getPagesByLocale(locale);
          if (pages.length === 0) return null;
          const groups = groupByCategory(pages);

          return (
            <section key={locale} className="mt-10">
              <h2 className="text-2xl font-bold text-dark border-b border-gray-200 pb-2">
                {localeLabel(locale)}
              </h2>

              {CATEGORY_ORDER.map((cat) => {
                const catPages = groups.get(cat);
                if (!catPages || catPages.length === 0) return null;

                return (
                  <div key={cat} className="mt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted mb-3">
                      {categoryLabel(cat)}
                    </h3>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {catPages.map((page) => (
                        <li key={page.slug}>
                          <a
                            href={pageHref(page)}
                            className="block rounded-lg border border-gray-200 px-4 py-3 text-sm font-medium text-dark transition-colors hover:border-teal-primary hover:text-teal-primary"
                          >
                            {page.meta.title.split('|')[0].trim()}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </section>
          );
        })}

        {/* CTA */}
        <div className="mt-12 rounded-xl bg-dark p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Estimate Your Kitchen Cost?</h2>
          <p className="text-gray-300 mb-6">Get a {currentLocale === 'uk' ? 'personalised' : 'personalized'} cost breakdown in under 2 minutes.</p>
          <a
            href={calcHref}
            className="inline-block rounded-lg bg-teal-primary px-8 py-3 text-white font-semibold hover:bg-teal-hover transition-colors"
          >
            Use the Free Calculator
          </a>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-8 text-center text-sm text-muted">
        <div className="mx-auto max-w-6xl px-4">
          <p>&copy; {new Date().getFullYear()} KitchenCostEstimator.com &mdash; Free kitchen renovation cost calculator</p>
        </div>
      </footer>
    </>
  );
}
