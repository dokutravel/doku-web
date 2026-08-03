import type { Metadata } from 'next';

import { AgencyForm } from '@/components/agency-form';
import { Container } from '@/components/container';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { languageAlternates, localeUrl } from '@/lib/site';

export async function generateMetadata({ params }: PageProps<'/[locale]/agencias'>): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  return {
    title: t.agencies.metaTitle,
    description: t.agencies.metaDescription,
    alternates: {
      canonical: localeUrl(locale as Locale, '/agencias'),
      languages: languageAlternates('/agencias'),
    },
  };
}

export default async function AgenciesPage({ params }: PageProps<'/[locale]/agencias'>) {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);

  return (
    <>
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <h1 className="text-headline-large text-text sm:text-display-small">{t.agencies.title}</h1>
          <p className="mt-4 text-body-large text-text-secondary">{t.agencies.subtitle}</p>
        </Container>
      </section>
      <section className="border-t border-border bg-surface py-16 dark:bg-surface-sunken/40">
        <Container className="max-w-3xl">
          <ul className="grid gap-6 sm:grid-cols-3">
            {t.agencies.bullets.map((bullet) => (
              <li key={bullet.title} className="rounded-md border border-card-border bg-background p-5 shadow-card">
                <h2 className="text-title-medium text-text">{bullet.title}</h2>
                <p className="mt-2 text-body-medium text-text-secondary">{bullet.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container className="max-w-xl">
          <h2 className="text-headline-small text-text">{t.agencies.formTitle}</h2>
          <p className="mt-2 text-body-large text-text-secondary">{t.agencies.formIntro}</p>
          <div className="mt-8">
            <AgencyForm
              locale={locale}
              labels={{ ...t.agencies, invalidEmail: t.waitlist.invalidEmail }}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
