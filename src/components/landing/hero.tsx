import { Container } from '@/components/container';
import { PhoneMock } from '@/components/phone-mock';
import { WaitlistForm } from '@/components/waitlist-form';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/en';

export function Hero({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <section className="overflow-hidden py-16 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="flex max-w-xl flex-col items-start gap-6">
          <span className="rounded-pill bg-brand-soft px-3 py-1 text-label-medium uppercase text-brand-strong">
            {t.hero.badge}
          </span>
          <h1 className="text-display-small text-text sm:text-display-medium">{t.hero.title}</h1>
          <p className="text-body-large text-text-secondary">{t.hero.subtitle}</p>
          <div id="waitlist" className="w-full max-w-md scroll-mt-24">
            <p className="mb-3 text-body-medium text-text">{t.waitlist.intro}</p>
            <WaitlistForm locale={locale} labels={t.waitlist} />
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="lg:rotate-2 lg:transition-transform lg:hover:rotate-0">
            <PhoneMock t={t} />
          </div>
        </div>
      </Container>
    </section>
  );
}
