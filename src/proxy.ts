import { NextResponse, type NextRequest } from 'next/server';

import { defaultLocale, locales, type Locale } from '@/i18n/config';

/** Routes that stay public even in coming-soon mode: the app and the store
 * listings link to these (privacy URL is required to publish), so launching
 * the WEB must not wait for launching the PRODUCT. Future functional routes
 * (e.g. /invite/[token]) belong in this list too. */
const PUBLIC_PATHS = ['/privacy', '/terms', '/account-deletion', '/support'];

function isPublicPath(pathname: string): boolean {
  const rest = pathname.replace(/^\/(es|en)(?=\/|$)/, '');
  return PUBLIC_PATHS.some((p) => rest === p || rest.startsWith(`${p}/`));
}

function pathLocale(pathname: string): Locale | null {
  return locales.find((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)) ?? null;
}

/**
 * Coming-soon gate, controlled by SITE_MODE=coming-soon (set on the PRODUCTION
 * environment until launch; the dev domain / previews don't set it and always
 * serve the full site). Marketing pages rewrite to the under-construction page
 * (waitlist included); legal pages stay public. Launching the site = removing
 * the env var in Vercel — no code change.
 */
function gate(request: NextRequest, locale: Locale): NextResponse | null {
  if (process.env.SITE_MODE !== 'coming-soon') return null;
  const { pathname } = request.nextUrl;
  // OG images must stay reachable so shared links keep their card.
  if (pathname.includes('/opengraph-image')) return null;
  if (pathname.endsWith('/coming-soon')) return null;
  if (isPublicPath(pathname)) return null;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}/coming-soon`;
  url.search = '';
  const res = NextResponse.rewrite(url);
  // The gated site must not get indexed as a wall of identical pages.
  res.headers.set('X-Robots-Tag', 'noindex');
  return res;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Unprefixed paths always resolve to English — the site defaults to EN and
  // Spanish is an explicit choice (language switcher or /es links).
  const locale = pathLocale(pathname) ?? defaultLocale;

  const gated = gate(request, locale);
  if (gated) return gated;

  if (pathLocale(pathname)) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Everything except Next internals, metadata routes and public files.
  matcher: ['/((?!_next|api|favicon.ico|icon|apple-icon|robots.txt|sitemap.xml|opengraph-image|.*\\..*).*)'],
};
