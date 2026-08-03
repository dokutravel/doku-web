import Link from 'next/link';

import { Container } from '@/components/container';
import { Logo } from '@/components/logo';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/en';
import { contactEmail } from '@/lib/site';

export function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  const home = `/${locale}`;
  return (
    <footer className="border-t border-border bg-surface-sunken/40">
      <Container className="grid gap-10 py-12 sm:grid-cols-[1.5fr_1fr_1fr]">
        <div className="flex flex-col items-start gap-3">
          <Link href={home} aria-label="Doku">
            <Logo />
          </Link>
          <p className="text-body-medium text-text-secondary">{t.common.tagline}</p>
          <a href={`mailto:${contactEmail}`} className="text-body-medium text-link underline underline-offset-2">
            {contactEmail}
          </a>
        </div>
        <nav aria-label={t.footer.product} className="flex flex-col gap-2">
          <span className="text-label-small uppercase text-text-secondary">{t.footer.product}</span>
          <Link href={`${home}#how`} className="text-body-medium text-text hover:underline">
            {t.nav.how}
          </Link>
          <Link href={`${home}#faq`} className="text-body-medium text-text hover:underline">
            {t.nav.faq}
          </Link>
          <Link href={`${home}/agencias`} className="text-body-medium text-text hover:underline">
            {t.footer.agencies}
          </Link>
          <Link href={`${home}/support`} className="text-body-medium text-text hover:underline">
            {t.footer.support}
          </Link>
        </nav>
        <nav aria-label={t.footer.legal} className="flex flex-col gap-2">
          <span className="text-label-small uppercase text-text-secondary">{t.footer.legal}</span>
          <Link href={`${home}/privacy`} className="text-body-medium text-text hover:underline">
            {t.footer.privacy}
          </Link>
          <Link href={`${home}/terms`} className="text-body-medium text-text hover:underline">
            {t.footer.terms}
          </Link>
          <Link href={`${home}/account-deletion`} className="text-body-medium text-text hover:underline">
            {t.footer.deletion}
          </Link>
        </nav>
      </Container>
      <Container className="border-t border-border py-6">
        <p className="text-body-small text-text-secondary">{t.footer.copyright}</p>
      </Container>
    </footer>
  );
}
