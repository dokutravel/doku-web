'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { locales, type Locale } from '@/i18n/config';

/** Swaps the locale segment of the current path, keeping the rest of the URL. */
export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? `/${locale}`;
  const rest = pathname.replace(/^\/(es|en)(?=\/|$)/, '');

  return (
    <nav aria-label="Language" className="flex items-center gap-1">
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}${rest}`}
          aria-current={l === locale ? 'true' : undefined}
          className={`rounded-pill px-2 py-1 text-label-medium uppercase transition-colors ${
            l === locale
              ? 'bg-background-selected text-brand-strong'
              : 'text-text-secondary hover:text-text'
          }`}
        >
          {l}
        </Link>
      ))}
    </nav>
  );
}
