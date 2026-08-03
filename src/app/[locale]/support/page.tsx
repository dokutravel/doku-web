import type { Metadata } from 'next';
import Link from 'next/link';

import { LegalPage } from '@/components/legal-page';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { contactEmail, languageAlternates, localeUrl } from '@/lib/site';

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

export default async function SupportPage({ params }: PageProps<'/[locale]/support'>) {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  const es = locale === 'es';
  return (
    <LegalPage title={t.legal.supportTitle}>
      <p>
        {es
          ? '¿Encontraste un problema, tenés una idea o algo no funciona como esperabas? Escribinos — leemos todo.'
          : 'Found a problem, have an idea, or something is not working as expected? Write to us — we read everything.'}
      </p>
      <p>
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      </p>
      <p>
        {es ? 'Quizás tu duda ya esté respondida en las ' : 'Your question may already be answered in the '}
        <Link href={`/${locale}#faq`}>{es ? 'preguntas frecuentes' : 'FAQ'}</Link>.
      </p>
    </LegalPage>
  );
}
