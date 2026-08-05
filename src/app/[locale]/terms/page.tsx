import type { Metadata } from 'next';
import { IoDocumentTextOutline } from 'react-icons/io5';

import { LegalPage } from '@/components/legal-page';
import { TermsEn } from '@/content/terms-en';
import { TermsEs } from '@/content/terms-es';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { languageAlternates, localeUrl } from '@/lib/site';

const UPDATED = { es: '3 de agosto de 2026', en: 'August 3, 2026' };

export async function generateMetadata({ params }: PageProps<'/[locale]/terms'>): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  return {
    title: t.legal.termsTitle,
    description: t.meta.termsDescription,
    alternates: {
      canonical: localeUrl(locale as Locale, '/terms'),
      languages: languageAlternates('/terms'),
    },
  };
}

export default async function TermsPage({ params }: PageProps<'/[locale]/terms'>) {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  return (
    <LegalPage
      title={t.legal.termsTitle}
      badgeLabel={t.legal.badgeLegal}
      badgeIcon={IoDocumentTextOutline}
      updatedLabel={t.legal.lastUpdated}
      updatedDate={UPDATED[locale as Locale]}
    >
      {locale === 'es' ? <TermsEs /> : <TermsEn />}
    </LegalPage>
  );
}
