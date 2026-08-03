import { Container } from '@/components/container';
import type { Dictionary } from '@/i18n/en';

export function Faq({ t }: { t: Dictionary }) {
  return (
    <section id="faq" className="scroll-mt-16 border-t border-border bg-surface py-16 sm:py-20 dark:bg-surface-sunken/40">
      <Container className="max-w-3xl">
        <h2 className="text-headline-medium text-text sm:text-headline-large">{t.faq.title}</h2>
        <div className="mt-8">
          {t.faq.items.map((item) => (
            <details key={item.q} className="group border-b border-border py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-title-medium text-text [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="text-text-secondary transition-transform group-open:rotate-90">›</span>
              </summary>
              <p className="mt-3 text-body-large text-text-secondary">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
