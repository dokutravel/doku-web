'use client';

import { useActionState } from 'react';

import { idleLeadState } from '@/lib/actions/lead-state';
import { submitWaitlist } from '@/lib/actions/submit-waitlist';

export type WaitlistLabels = {
  placeholder: string;
  submit: string;
  submitting: string;
  privacyNote: string;
  success: string;
  duplicate: string;
  invalidEmail: string;
  error: string;
};

export function WaitlistForm({ locale, labels }: { locale: string; labels: WaitlistLabels }) {
  const [state, formAction, pending] = useActionState(submitWaitlist, idleLeadState);

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
    <form action={formAction} className="flex w-full flex-col gap-2">
      <input type="hidden" name="locale" value={locale} />
      {/* Honeypot — hidden from humans, tempting for bots. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          name="email"
          required
          placeholder={labels.placeholder}
          aria-label={labels.placeholder}
          className="h-12 flex-1 rounded-pill border border-input-border bg-surface px-5 text-body-large text-text placeholder:text-text-secondary focus:border-brand-strong focus:outline-none"
        />
        <button
          type="submit"
          disabled={pending}
          className="h-12 rounded-pill bg-brand px-6 text-button-large text-on-brand transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {pending ? labels.submitting : labels.submit}
        </button>
      </div>
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
      <p className="text-body-small text-text-secondary">{labels.privacyNote}</p>
    </form>
  );
}
