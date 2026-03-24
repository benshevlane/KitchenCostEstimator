'use client';

import { useState } from 'react';
import RegionSwitcher from './RegionSwitcher';

interface NavbarProps {
  navGuideLabel: string;
}

const navLinks = [
  { label: 'costs', href: '#costs' },
  { label: 'Calculator', href: '#estimator' },
  { label: 'Tips', href: '#tips' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar({ navGuideLabel }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = navLinks.map((l) =>
    l.label === 'costs' ? { ...l, label: navGuideLabel } : l
  );

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
        </div>
      )}
    </nav>
  );
}
