import type { Metadata } from 'next';

import { JsonLd } from '@/components/json-ld';
import { Faq } from '@/components/landing/faq';
import { Features } from '@/components/landing/features';
import { FinalCta } from '@/components/landing/final-cta';
import { Hero } from '@/components/landing/hero';
import { HowItWorks } from '@/components/landing/how-it-works';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { languageAlternates, localeUrl, siteUrl } from '@/lib/site';

export async function generateMetadata({ params }: PageProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  return {
    title: { absolute: t.meta.homeTitle },
    description: t.meta.homeDescription,
    alternates: {
      canonical: localeUrl(locale as Locale),
      languages: languageAlternates(),
    },
    openGraph: {
      title: t.meta.homeTitle,
      description: t.meta.homeDescription,
      url: localeUrl(locale as Locale),
      siteName: 'Doku',
      type: 'website',
      locale: locale === 'es' ? 'es_AR' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.homeTitle,
      description: t.meta.homeDescription,
    },
  };
}

export default async function HomePage({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'MobileApplication',
          name: 'Doku',
          description: t.meta.homeDescription,
          applicationCategory: 'TravelApplication',
          operatingSystem: 'iOS, Android',
          url: siteUrl,
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: t.faq.items.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        }}
      />
      <Hero locale={locale as Locale} t={t} />
      <HowItWorks t={t} />
      <Features t={t} />
      <Faq t={t} />
      <FinalCta locale={locale as Locale} t={t} />
    </>
  );
}
