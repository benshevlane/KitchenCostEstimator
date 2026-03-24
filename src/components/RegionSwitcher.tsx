'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { localeData, type LocaleKey } from '@/lib/localeData';

const locales: LocaleKey[] = ['uk', 'us', 'ca'];
const LOCALE_COOKIE = 'kce-locale';

export default function RegionSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const current: LocaleKey = (locales.find((l) => pathname.startsWith(`/${l}`)) ?? 'uk');
  const currentLocale = localeData[current];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function switchLocale(key: LocaleKey) {
    document.cookie = `${LOCALE_COOKIE}=${key};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
    router.push(localeData[key].slug);
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative" style={{ zIndex: 9999 }}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-dark shadow-sm transition-colors hover:border-gray-300"
      >
        <span>{currentLocale.flag}</span>
        <span className="hidden sm:inline">{currentLocale.label}</span>
        <svg
          className={`h-3.5 w-3.5 text-muted transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-1.5 w-52 rounded-[10px] border border-gray-200 bg-white shadow-lg">
          {locales.map((key) => {
            const locale = localeData[key];
            const isActive = key === current;
            return (
              <button
                key={key}
                onClick={() => switchLocale(key)}
                className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors first:rounded-t-[10px] last:rounded-b-[10px] ${
                  isActive
                    ? 'bg-teal-pale font-medium text-teal-primary'
                    : 'text-dark hover:bg-gray-50'
                }`}
              >
                <span>{locale.flag}</span>
                <span className="flex-1 text-left">{locale.label}</span>
                {isActive && (
                  <svg className="h-4 w-4 text-teal-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
