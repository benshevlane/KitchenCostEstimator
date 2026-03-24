import MarkdownRenderer from '@/components/MarkdownRenderer';
import RegionSwitcher from '@/components/RegionSwitcher';
import type { SeoPageData } from '@/content/types';

function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `https://kitchencostestimator.com${item.url}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FaqSchema({ faqs }: { faqs: SeoPageData['faqs'] }) {
  if (faqs.length === 0) return null;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function SeoNavbar({ locale }: { locale: string }) {
  const calcHref = locale === 'us' ? '/us' : `/${locale}`;
  return (
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
            href={locale === 'us' ? '/kitchen-remodel-cost' : `/${locale}/kitchen-renovation-cost`}
            className="hidden text-sm font-medium text-mid transition-colors hover:text-teal-primary sm:block"
          >
            Cost Guide
          </a>
          <RegionSwitcher />
        </div>
      </div>
    </nav>
  );
}

function Breadcrumbs({ items }: { items: Array<{ name: string; url: string }> }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
        {items.map((item, i) => (
          <li key={item.url} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-gray-300">/</span>}
            {i < items.length - 1 ? (
              <a href={item.url} className="hover:text-teal-primary transition-colors">
                {item.name}
              </a>
            ) : (
              <span className="text-dark font-medium">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function buildBreadcrumbs(page: SeoPageData) {
  const items = [{ name: 'Home', url: '/' }];
  if (page.locale === 'uk') {
    items.push({ name: 'UK Kitchen Cost Guide', url: '/uk' });
    items.push({ name: page.meta.title.split(':')[0] || page.meta.title, url: `/uk/${page.slug}` });
  } else if (page.locale === 'ca') {
    items.push({ name: 'Canada Kitchen Cost Guide', url: '/ca' });
    items.push({ name: page.meta.title.split(':')[0] || page.meta.title, url: `/ca/${page.slug}` });
  } else {
    items.push({ name: 'Kitchen Remodel Cost Guide', url: '/us' });
    items.push({ name: page.meta.title.split(':')[0] || page.meta.title, url: `/${page.slug}` });
  }
  return items;
}

export default function SeoPageTemplate({ page }: { page: SeoPageData }) {
  const breadcrumbs = buildBreadcrumbs(page);

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FaqSchema faqs={page.faqs} />
      <SeoNavbar locale={page.locale} />

      <main className="mx-auto max-w-3xl px-4 pt-8 pb-16 sm:px-6">
        <Breadcrumbs items={breadcrumbs} />

        <article>
          <MarkdownRenderer content={page.content} />
        </article>

        {page.relatedGuides.length > 0 && (
          <nav className="mt-12 rounded-xl border border-teal-border bg-teal-pale p-6">
            <h2 className="text-lg font-bold text-dark mb-4">Related Guides</h2>
            <ul className="space-y-2">
              {page.relatedGuides.map((guide) => (
                <li key={guide.href}>
                  <a
                    href={guide.href}
                    className="text-teal-primary hover:text-teal-hover underline underline-offset-2"
                  >
                    {guide.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="mt-12 rounded-xl bg-dark p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Estimate Your Kitchen Cost?</h2>
          <p className="text-gray-300 mb-6">Get a personalised cost breakdown in under 2 minutes.</p>
          <a
            href={page.locale === 'us' ? '/us' : `/${page.locale}`}
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
