import { NextResponse, type NextRequest } from 'next/server';

import { defaultLocale, locales, type Locale } from '@/i18n/config';

const PREVIEW_COOKIE = 'doku-preview';

/** Picks the best locale from Accept-Language. Doku only distinguishes base
 * languages (es/en), so matching prefixes is enough — no negotiation library. */
function preferredLocale(request: NextRequest): Locale {
  const header = request.headers.get('accept-language') ?? '';
  for (const part of header.split(',')) {
    const base = part.split(';')[0].trim().toLowerCase().split('-')[0];
    const match = locales.find((l) => l === base);
    if (match) return match;
  }
  return defaultLocale;
}

function pathLocale(pathname: string): Locale | null {
  return locales.find((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)) ?? null;
}

/**
 * Coming-soon gate. With SITE_MODE=coming-soon every page rewrites to the
 * under-construction page (waitlist included), except for visitors holding the
 * preview cookie. The cookie is set by visiting any URL with ?preview=<PREVIEW_KEY>
 * (share `https://dokutravel.com/?preview=...` with testers); it lasts 30 days.
 * Flipping SITE_MODE (or unsetting it) in Vercel takes the real site live — no
 * redeploy needed beyond the env change.
 */
function gate(request: NextRequest, locale: Locale): NextResponse | null {
  if (process.env.SITE_MODE !== 'coming-soon') return null;
  const { pathname } = request.nextUrl;
  // OG images must stay reachable so shared links keep their card.
  if (pathname.includes('/opengraph-image')) return null;
  if (pathname.endsWith('/coming-soon')) return null;

  const key = process.env.PREVIEW_KEY;
  if (key && request.nextUrl.searchParams.get('preview') === key) {
    const url = request.nextUrl.clone();
    url.searchParams.delete('preview');
    if (!pathLocale(url.pathname)) {
      url.pathname = `/${locale}${url.pathname === '/' ? '' : url.pathname}`;
    }
    const res = NextResponse.redirect(url);
    res.cookies.set(PREVIEW_COOKIE, key, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });
    return res;
  }
  if (key && request.cookies.get(PREVIEW_COOKIE)?.value === key) return null;

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
  const locale = pathLocale(pathname) ?? preferredLocale(request);

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
