import { Container } from '@/components/container';
import { SupportContent } from '@/components/support-content';
import type { Dictionary } from '@/i18n/en';

/** The landing's contact section, anchored per locale (/es#soporte,
 * /en#support). `scroll-mt-16` clears the sticky header (h-16). */
export function Support({ t }: { t: Dictionary }) {
  return (
    <section id={t.support.anchor} className="scroll-mt-16 border-t border-border py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-headline-medium text-text sm:text-headline-large">{t.support.title}</h2>
          <SupportContent t={t} />
        </div>
      </Container>
    </section>
  );
}
