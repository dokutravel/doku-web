import type { IconType } from 'react-icons';
import {
  IoAirplane,
  IoCloudOfflineOutline,
  IoCreateOutline,
  IoLockClosed,
  IoPeople,
  IoShieldCheckmark,
} from 'react-icons/io5';

import { Container } from '@/components/container';
import type { Dictionary } from '@/i18n/en';

const featureIcon: Record<string, { icon: IconType; tint: string }> = {
  categories: { icon: IoAirplane, tint: 'bg-flight-soft text-flight' },
  offline: { icon: IoCloudOfflineOutline, tint: 'bg-transport-soft text-transport' },
  shared: { icon: IoPeople, tint: 'bg-activity-soft text-activity' },
  insurance: { icon: IoShieldCheckmark, tint: 'bg-insurance-soft text-insurance' },
  edit: { icon: IoCreateOutline, tint: 'bg-hotel-soft text-hotel' },
  privacy: { icon: IoLockClosed, tint: 'bg-other-soft text-other' },
};

export function Features({ t }: { t: Dictionary }) {
  return (
    <section id="features" className="scroll-mt-16 py-16 sm:py-20">
      <Container>
        <div className="max-w-xl">
          <span className="text-label-medium uppercase text-brand-strong">{t.features.label}</span>
          <h2 className="mt-3 text-headline-medium text-text sm:text-headline-large">
            {t.features.title}
          </h2>
          <p className="mt-3 text-body-large text-text-secondary">{t.features.subtitle}</p>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((item) => {
            const { icon: FeatureIcon, tint } = featureIcon[item.key] ?? featureIcon.categories;
            return (
              <li
                key={item.key}
                className="rounded-md border border-card-border bg-surface p-6 shadow-card transition-transform hover:-translate-y-1 motion-reduce:transform-none"
              >
                <span className={`flex h-11 w-11 items-center justify-center rounded-md ${tint}`}>
                  <FeatureIcon size={20} />
                </span>
                <h3 className="mt-4 text-title-medium text-text">{item.title}</h3>
                <p className="mt-2 text-body-medium text-text-secondary">{item.body}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
