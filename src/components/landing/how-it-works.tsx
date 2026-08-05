import type { IconType } from 'react-icons';
import {
  IoCheckmarkCircleOutline,
  IoCloudOfflineOutline,
  IoDocumentTextOutline,
  IoLogoWhatsapp,
  IoShareOutline,
  IoSparkles,
} from 'react-icons/io5';

import { Container } from '@/components/container';
import type { Dictionary } from '@/i18n/en';

const stepStyle: { icon: IconType; chipIcon: IconType; chipClass: string }[] = [
  { icon: IoShareOutline, chipIcon: IoLogoWhatsapp, chipClass: 'bg-hotel-soft text-hotel' },
  { icon: IoSparkles, chipIcon: IoDocumentTextOutline, chipClass: 'bg-flight-soft text-flight' },
  {
    icon: IoCheckmarkCircleOutline,
    chipIcon: IoCloudOfflineOutline,
    chipClass: 'bg-brand-soft text-brand-strong',
  },
];

export function HowItWorks({ t }: { t: Dictionary }) {
  return (
    <section id="how" className="scroll-mt-16 border-t border-border bg-surface py-16 sm:py-20">
      <Container>
        <span className="text-label-medium uppercase text-brand-strong">{t.how.label}</span>
        <h2 className="mt-3 text-headline-medium text-text sm:text-headline-large">{t.how.title}</h2>
        <ol className="mt-10 grid gap-6 sm:grid-cols-3">
          {t.how.steps.map((step, i) => {
            const style = stepStyle[i] ?? stepStyle[0];
            const StepIcon = style.icon;
            const ChipIcon = style.chipIcon;
            return (
              <li
                key={step.title}
                className="flex flex-col gap-4 rounded-md border border-card-border bg-background p-6 shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-pill bg-brand text-title-medium text-on-brand">
                    {i + 1}
                  </span>
                  <StepIcon size={22} className="text-brand-strong" />
                </div>
                <div>
                  <h3 className="text-title-medium text-text">{step.title}</h3>
                  <p className="mt-2 text-body-medium text-text-secondary">{step.body}</p>
                </div>
                <span
                  className={`mt-auto flex items-center gap-1.5 self-start rounded-pill px-3 py-1 text-label-medium ${style.chipClass}`}
                >
                  <ChipIcon size={13} />
                  {step.chip}
                </span>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
