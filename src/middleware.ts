import { NextRequest, NextResponse } from 'next/server';

function detectLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language') || '';
  const languages = acceptLanguage.toLowerCase();

  if (languages.includes('en-us')) return 'us';
  if (languages.includes('en-ca') || languages.includes('fr-ca')) return 'ca';
  if (languages.includes('en-gb') || languages.includes('en-uk')) return 'uk';

  // Check broader patterns
  if (languages.startsWith('en-us') || languages.includes(',en-us')) return 'us';
  if (languages.startsWith('en-ca') || languages.includes(',en-ca')) return 'ca';

  // Default to UK
  return 'uk';
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only redirect from the root path
  if (pathname === '/') {
    const locale = detectLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url, 302);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
