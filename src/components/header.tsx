import Link from 'next/link';

import { ButtonLink } from '@/components/button-link';
import { Container } from '@/components/container';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Logo } from '@/components/logo';
import { MobileMenu, type NavLink } from '@/components/mobile-menu';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/en';

export function Header({ locale, t }: { locale: Locale; t: Dictionary }) {
  const home = `/${locale}`;
  const links: NavLink[] = [
    { href: `${home}#how`, label: t.nav.how },
    { href: `${home}#features`, label: t.nav.features },
    { href: `${home}#faq`, label: t.nav.faq },
    { href: `${home}/agencias`, label: t.nav.agencies },
  ];
  const cta: NavLink = { href: `${home}#waitlist`, label: t.nav.joinWaitlist };

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href={home} aria-label="Doku">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-label-large text-text-secondary hover:text-text">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <div className="hidden md:block">
            <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
          </div>
          <MobileMenu links={links} cta={cta} openLabel={t.nav.openMenu} closeLabel={t.nav.closeMenu} />
        </div>
      </Container>
    </header>
  );
}
