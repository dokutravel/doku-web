import { IoMailOutline } from 'react-icons/io5';

import type { Dictionary } from '@/i18n/en';
import { contactEmail } from '@/lib/site';

/** Everything under the support heading: the intro, the contact card and the
 * tip. Shared by the landing's support section and the /support page (the URL
 * the store listings point at), so both always say the same thing. */
export function SupportContent({ t }: { t: Dictionary }) {
  return (
    <>
      <p className="mt-3 text-body-large text-text-secondary">{t.support.body}</p>
      <div className="mt-10 flex flex-col items-center rounded-lg border border-card-border bg-surface px-6 py-8 shadow-card sm:px-12 sm:py-10">
        <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-soft text-brand-strong">
          <IoMailOutline size={20} />
        </span>
        <a
          href={`mailto:${contactEmail}`}
          className="mt-4 break-all text-title-large text-link underline-offset-4 hover:underline"
        >
          {contactEmail}
        </a>
        <p className="mt-2 text-body-medium text-text-secondary">{t.support.responseTime}</p>
      </div>
      <p className="mt-6 text-body-medium text-text-secondary">{t.support.tip}</p>
    </>
  );
}
