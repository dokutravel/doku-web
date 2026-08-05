'use client';

import { useActionState, useEffect } from 'react';

import { idleLeadState } from '@/lib/actions/lead-state';
import { submitAgencyLead } from '@/lib/actions/submit-agency-lead';
import { captureEvent } from '@/lib/analytics';

export type AgencyFormLabels = {
  nameLabel: string;
  agencyLabel: string;
  emailLabel: string;
  messageLabel: string;
  submit: string;
  submitting: string;
  success: string;
  duplicate: string;
  invalidEmail: string;
  error: string;
};

const inputClass =
  'rounded-sm border border-input-border bg-surface px-4 py-3 text-body-large text-text placeholder:text-text-secondary focus:border-brand-strong focus:outline-none';

export function AgencyForm({ locale, labels }: { locale: string; labels: AgencyFormLabels }) {
  const [state, formAction, pending] = useActionState(submitAgencyLead, idleLeadState);

  useEffect(() => {
    if (state.status === 'ok') captureEvent('agency_lead_submitted', { locale });
  }, [state.status, locale]);

  if (state.status === 'ok' || state.status === 'duplicate') {
    return (
      <div
        role="status"
        className="rounded-md border border-card-border bg-success-soft px-4 py-3 text-body-large text-success"
      >
        {state.status === 'ok' ? labels.success : labels.duplicate}
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <input type="hidden" name="locale" value={locale} />
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      <div className="grid gap-3 sm:grid-cols-2">
        <input type="text" name="name" required placeholder={labels.nameLabel} aria-label={labels.nameLabel} className={inputClass} />
        <input type="text" name="agency" required placeholder={labels.agencyLabel} aria-label={labels.agencyLabel} className={inputClass} />
      </div>
      <input type="email" name="email" required placeholder={labels.emailLabel} aria-label={labels.emailLabel} className={inputClass} />
      <textarea name="message" rows={4} placeholder={labels.messageLabel} aria-label={labels.messageLabel} className={inputClass} />
      <button
        type="submit"
        disabled={pending}
        className="h-12 self-start rounded-pill bg-brand px-6 text-button-large text-on-brand transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {pending ? labels.submitting : labels.submit}
      </button>
      {state.status === 'invalid' && (
        <p role="alert" className="text-body-medium text-danger">
          {labels.invalidEmail}
        </p>
      )}
      {state.status === 'error' && (
        <p role="alert" className="text-body-medium text-danger">
          {labels.error}
        </p>
      )}
    </form>
  );
}
