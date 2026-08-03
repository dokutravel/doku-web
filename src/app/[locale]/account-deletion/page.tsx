import type { Metadata } from 'next';

import { LegalPage } from '@/components/legal-page';
import { AccountDeletionEn } from '@/content/account-deletion-en';
import { AccountDeletionEs } from '@/content/account-deletion-es';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { languageAlternates, localeUrl } from '@/lib/site';

export async function generateMetadata({
  params,
}: PageProps<'/[locale]/account-deletion'>): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  return {
    title: t.legal.deletionTitle,
    description: t.meta.deletionDescription,
    alternates: {
      canonical: localeUrl(locale as Locale, '/account-deletion'),
      languages: languageAlternates('/account-deletion'),
    },
  };
}

export default async function AccountDeletionPage({
  params,
}: PageProps<'/[locale]/account-deletion'>) {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  return (
    <LegalPage title={t.legal.deletionTitle}>
      {locale === 'es' ? <AccountDeletionEs /> : <AccountDeletionEn />}
    </LegalPage>
  );
}
