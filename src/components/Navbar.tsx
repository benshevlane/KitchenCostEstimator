'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import RegionSwitcher from './RegionSwitcher';
import { getPagesByLocale } from '@/content';
import { categorize, guidesPath, pageHref, type GuideCategory } from '@/lib/guideCategories';
import type { LocaleKey } from '@/lib/localeData';

interface NavbarProps {
  navGuideLabel: string;
}

const navLinks = [
  { label: 'costs', href: '#costs' },
  { label: 'Calculator', href: '#estimator' },
  { label: 'Tips', href: '#tips' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: '/blog' },
];

/** Pick the top guides to feature in the dropdown (pillar first, then geo, then size). */
function getTopGuides(locale: LocaleKey) {
  const pages = getPagesByLocale(locale);
  const order: GuideCategory[] = ['Pillar', 'Size', 'Geo'];
  const sorted = pages
    .filter((p) => order.includes(categorize(p)))
    .sort((a, b) => order.indexOf(categorize(a)) - order.indexOf(categorize(b)));
  return sorted.slice(0, 8);
}

function detectLocale(pathname: string): LocaleKey {
  if (pathname.startsWith('/uk')) return 'uk';
  if (pathname.startsWith('/ca')) return 'ca';
  return 'us';
}

export default function Navbar({ navGuideLabel }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const pathname = usePathname();
  const locale = detectLocale(pathname);

  const links = navLinks.map((l) =>
    l.label === 'costs' ? { ...l, label: navGuideLabel } : l
  );

  const topGuides = getTopGuides(locale);
  const guidesHref = guidesPath(locale);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <a href="#" className="text-lg font-bold text-dark" style={{ fontFamily: 'var(--font-sans)' }}>
          KitchenCostEstimator
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-mid transition-colors hover:text-teal-primary"
            >
              {link.label}
            </a>
          ))}

          {/* Guides dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setGuidesOpen(true)}
            onMouseLeave={() => setGuidesOpen(false)}
          >
            <a
              href={guidesHref}
              className="text-sm font-medium text-mid transition-colors hover:text-teal-primary"
            >
              Guides
            </a>
            {guidesOpen && (
              <div className="absolute right-0 top-full mt-1 w-72 rounded-lg border border-gray-200 bg-white p-3 shadow-lg">
                <ul className="space-y-1">
                  {topGuides.map((page) => (
                    <li key={page.slug}>
                      <a
                        href={pageHref(page)}
                        className="block rounded-md px-3 py-2 text-sm text-dark transition-colors hover:bg-gray-50 hover:text-teal-primary"
                      >
                        {page.meta.title.split('|')[0].trim()}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 border-t border-gray-100 pt-2">
                  <a
                    href={guidesHref}
                    className="block px-3 py-2 text-sm font-medium text-teal-primary hover:underline"
                  >
                    View all guides &rarr;
                  </a>
                </div>
              </div>
            )}
          </div>

          <RegionSwitcher />
        </div>

        {/* Mobile: region + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <RegionSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-1.5 text-mid hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white px-4 pb-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm font-medium text-mid transition-colors hover:text-teal-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={guidesHref}
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 text-sm font-medium text-mid transition-colors hover:text-teal-primary"
          >
            Guides
          </a>
        </div>
      )}
    </nav>
  );
}
