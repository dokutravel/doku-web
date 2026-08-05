import {
  IoCloudOfflineOutline,
  IoGiftOutline,
  IoPhonePortraitOutline,
  IoSparkles,
} from 'react-icons/io5';

import { Container } from '@/components/container';
import { PhoneMock } from '@/components/phone-mock';
import { WaitlistForm } from '@/components/waitlist-form';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/en';

export function Hero({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <section className="overflow-hidden pt-12 sm:pt-20">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="flex max-w-xl flex-col items-start gap-6 lg:pb-20">
          <span className="flex items-center gap-1.5 rounded-pill bg-brand-soft px-3.5 py-1 text-label-medium uppercase text-brand-strong">
            <IoSparkles size={12} />
            {t.hero.badge}
          </span>
          <h1 className="text-display-small text-text sm:text-display-medium">{t.hero.title}</h1>
          <p className="text-body-large text-text-secondary">{t.hero.subtitle}</p>
          <div id="waitlist" className="w-full max-w-md scroll-mt-24">
            <WaitlistForm locale={locale} labels={t.waitlist} />
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="flex items-center gap-1.5 text-body-small text-text-secondary">
              <IoPhonePortraitOutline size={14} />
              {t.hero.chips.platforms}
            </span>
            <span className="flex items-center gap-1.5 text-body-small text-text-secondary">
              <IoCloudOfflineOutline size={14} />
              {t.hero.chips.offline}
            </span>
            <span className="flex items-center gap-1.5 text-body-small text-text-secondary">
              <IoGiftOutline size={14} />
              {t.hero.chips.free}
            </span>
          </div>
        </div>
        <div className="flex justify-center lg:self-end">
          <div className="-mb-52 lg:-mb-20">
            <PhoneMock t={t} />
          </div>
        </div>
      </Container>
    </section>
  );
}
