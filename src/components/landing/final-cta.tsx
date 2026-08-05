import { Container } from '@/components/container';
import { WaitlistForm } from '@/components/waitlist-form';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/en';

export function FinalCta({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="rounded-lg border border-card-border bg-brand-soft px-6 py-10 text-center sm:px-12 sm:py-16">
          <h2 className="text-headline-medium text-text sm:text-headline-large">
            {t.finalCta.title}
          </h2>
          <p className="mt-3 text-body-large text-text-secondary">{t.finalCta.body}</p>
          <div className="mx-auto mt-8 max-w-md text-left">
            <WaitlistForm locale={locale} labels={t.waitlist} />
          </div>
        </div>
      </Container>
    </section>
  );
}
