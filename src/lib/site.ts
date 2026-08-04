import type { Locale } from '@/i18n/config';

export const siteUrl = 'https://dokutravel.com';

export const contactEmail = 'contact@dokutravel.com';

/** Absolute URL for a localized path, e.g. localeUrl('es', '/privacy'). */
export function localeUrl(locale: Locale, path = ''): string {
  return `${siteUrl}/${locale}${path}`;
}

/** hreflang alternates for a path, shared by every page's metadata. */
export function languageAlternates(path = '') {
  return {
    es: `${siteUrl}/es${path}`,
    en: `${siteUrl}/en${path}`,
    'x-default': `${siteUrl}/en${path}`,
  };
}
