import { Container } from '@/components/container';
import type { Dictionary } from '@/i18n/en';

export function HowItWorks({ t }: { t: Dictionary }) {
  return (
    <section id="how" className="scroll-mt-16 border-t border-border bg-surface py-16 sm:py-20 dark:bg-surface-sunken/40">
      <Container>
        <h2 className="text-headline-medium text-text sm:text-headline-large">{t.how.title}</h2>
        <p className="mt-2 text-body-large text-text-secondary">{t.how.subtitle}</p>
        <ol className="mt-10 grid gap-6 sm:grid-cols-3">
          {t.how.steps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-md border border-card-border bg-background p-6 shadow-card"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-pill bg-brand text-title-medium text-on-brand">
                {i + 1}
              </span>
              <h3 className="mt-4 text-title-medium text-text">{step.title}</h3>
              <p className="mt-2 text-body-medium text-text-secondary">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
