import type { Metadata } from 'next';
import { IoLockClosed } from 'react-icons/io5';

import { LegalPage } from '@/components/legal-page';
import { PrivacyEn } from '@/content/privacy-en';
import { PrivacyEs } from '@/content/privacy-es';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { languageAlternates, localeUrl } from '@/lib/site';

const UPDATED = { es: '4 de agosto de 2026', en: 'August 4, 2026' };

export async function generateMetadata({ params }: PageProps<'/[locale]/privacy'>): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  return {
    title: t.legal.privacyTitle,
    description: t.meta.privacyDescription,
    alternates: {
      canonical: localeUrl(locale as Locale, '/privacy'),
      languages: languageAlternates('/privacy'),
    },
  };
}

export default async function PrivacyPage({ params }: PageProps<'/[locale]/privacy'>) {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  return (
    <LegalPage
      title={t.legal.privacyTitle}
      badgeLabel={t.legal.badgeLegal}
      badgeIcon={IoLockClosed}
      updatedLabel={t.legal.lastUpdated}
      updatedDate={UPDATED[locale as Locale]}
    >
      {locale === 'es' ? <PrivacyEs /> : <PrivacyEn />}
    </LegalPage>
  );
}
