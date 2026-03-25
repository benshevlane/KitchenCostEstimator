import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const LOCALE_COOKIE = 'kce-locale';

const COUNTRY_TO_LOCALE: Record<string, string> = {
  GB: 'uk', UK: 'uk',
  US: 'us',
  CA: 'ca',
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Don't redirect if already on a locale path or non-page routes
  if (
    pathname.startsWith('/uk') ||
    pathname.startsWith('/us') ||
    pathname.startsWith('/ca') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Only redirect the root path
  if (pathname !== '/') {
    return NextResponse.next();
  }

  // Check cookie first (user previously selected a region)
  const localeCookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (localeCookie && ['uk', 'us', 'ca'].includes(localeCookie)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${localeCookie}`;
    return NextResponse.redirect(url, { status: 301 });
  }

  // Try Vercel's geo headers first (most reliable on Vercel)
  let detectedLocale = 'uk'; // default
  const country = request.headers.get('x-vercel-ip-country') || '';
  if (COUNTRY_TO_LOCALE[country]) {
    detectedLocale = COUNTRY_TO_LOCALE[country];
  } else {
    // Fall back to Accept-Language header
    const acceptLang = request.headers.get('accept-language') || '';
    if (acceptLang.includes('en-US')) {
      detectedLocale = 'us';
    } else if (acceptLang.includes('en-CA') || acceptLang.includes('fr-CA')) {
      detectedLocale = 'ca';
    }
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${detectedLocale}`;
  return NextResponse.redirect(url, { status: 301 });
}

export const config = {
  matcher: ['/'],
};
