import type { Metadata } from 'next';
import Link from 'next/link';

import { Container } from '@/components/container';
import { SupportContent } from '@/components/support-content';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { languageAlternates, localeUrl } from '@/lib/site';

export async function generateMetadata({ params }: PageProps<'/[locale]/support'>): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  return {
    title: t.legal.supportTitle,
    description: t.meta.supportDescription,
    alternates: {
      canonical: localeUrl(locale as Locale, '/support'),
      languages: languageAlternates('/support'),
    },
  };
}

/** The store listings' support URL (/es/support, /en/support). */
export default async function SupportPage({ params }: PageProps<'/[locale]/support'>) {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  return (
    <Container>
      <div className="mx-auto max-w-3xl pb-24 pt-16 text-center">
        <h1 className="text-display-small text-text">{t.support.title}</h1>
        <SupportContent t={t} />
        <p className="mt-10 text-body-medium text-text-secondary">
          {t.support.faqPrompt}
          <Link href={`/${locale}#faq`} className="text-link underline underline-offset-2">
            {t.support.faqLink}
          </Link>
          .
        </p>
      </div>
    </Container>
  );
}
