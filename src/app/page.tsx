import { redirect } from 'next/navigation';

// The middleware handles locale detection and redirects from / to /uk, /us, or /ca.
// This page exists as a fallback in case the middleware is bypassed.
export default function RootPage() {
  redirect('/uk');
}
