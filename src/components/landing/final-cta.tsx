import { ButtonLink } from '@/components/button-link';
import { Container } from '@/components/container';
import type { Dictionary } from '@/i18n/en';
import { waitlistUrl } from '@/lib/site';

export function FinalCta({ t }: { t: Dictionary }) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="rounded-lg border border-card-border bg-brand-soft px-6 py-10 text-center sm:px-12 sm:py-16">
          <h2 className="text-headline-medium text-text sm:text-headline-large">
            {t.finalCta.title}
          </h2>
          <p className="mt-3 text-body-large text-text-secondary">{t.finalCta.body}</p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href={waitlistUrl}>{t.nav.joinWaitlist}</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
