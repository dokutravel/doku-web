import { IoMailOutline } from 'react-icons/io5';

import { Container } from '@/components/container';
import type { Dictionary } from '@/i18n/en';
import { supportEmail } from '@/lib/site';

/** The landing's contact section — the store listings' support URL points at
 * its anchor. `scroll-mt-16` clears the sticky header (h-16). */
export function Support({ t }: { t: Dictionary }) {
  return (
    <section
      id={t.support.anchor}
      className="scroll-mt-16 border-t border-border py-16 sm:py-20"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-headline-medium text-text sm:text-headline-large">
            {t.support.title}
          </h2>
          <p className="mt-3 text-body-large text-text-secondary">
            {t.support.body}
          </p>
          <div className="mt-10 flex flex-col items-center rounded-lg border border-card-border bg-surface px-6 py-8 shadow-card sm:px-12 sm:py-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-soft text-brand-strong">
              <IoMailOutline size={20} />
            </span>
            <a
              href={`mailto:${supportEmail}`}
              className="mt-4 break-all text-title-large text-link underline-offset-4 hover:underline"
            >
              {supportEmail}
            </a>
            <p className="mt-2 text-body-medium text-text-secondary">
              {t.support.responseTime}
            </p>
          </div>
          <p className="mt-6 text-body-medium text-text-secondary">
            {t.support.tip}
          </p>
        </div>
      </Container>
    </section>
  );
}
