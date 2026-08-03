import type { Metadata } from 'next';
import Image from 'next/image';

import { Container } from '@/components/container';
import { WaitlistForm } from '@/components/waitlist-form';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function ComingSoonPage({ params }: PageProps<'/[locale]/coming-soon'>) {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);

  return (
    <section className="flex min-h-[70vh] items-center py-16">
      <Container className="flex max-w-xl flex-col items-center gap-6 text-center">
        <Image src="/brand/doku-icon.png" alt="Doku" width={72} height={72} priority />
        <span className="rounded-pill bg-brand-soft px-3 py-1 text-label-medium uppercase text-brand-strong">
          {t.hero.badge}
        </span>
        <h1 className="text-headline-large text-text">{t.comingSoon.title}</h1>
        <p className="text-body-large text-text-secondary">{t.comingSoon.body}</p>
        <div className="w-full max-w-md text-left">
          <p className="mb-3 text-body-medium text-text">{t.waitlist.intro}</p>
          <WaitlistForm locale={locale} labels={t.waitlist} />
        </div>
      </Container>
    </section>
  );
}
