import Link from 'next/link';

import { ButtonLink } from '@/components/button-link';
import { Container } from '@/components/container';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Logo } from '@/components/logo';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/en';

export function Header({ locale, t }: { locale: Locale; t: Dictionary }) {
  const home = `/${locale}`;
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href={home} aria-label="Doku">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          <Link href={`${home}#how`} className="text-label-large text-text-secondary hover:text-text">
            {t.nav.how}
          </Link>
          <Link href={`${home}#features`} className="text-label-large text-text-secondary hover:text-text">
            {t.nav.features}
          </Link>
          <Link href={`${home}#faq`} className="text-label-large text-text-secondary hover:text-text">
            {t.nav.faq}
          </Link>
          <Link href={`${home}/agencias`} className="text-label-large text-text-secondary hover:text-text">
            {t.nav.agencies}
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <ButtonLink href={`${home}#waitlist`} size="md">
            {t.nav.joinWaitlist}
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
