'use client';

import { useEffect, useState } from 'react';

import { formatInviteCode } from '@/lib/invite-code';

/**
 * The code, shown large and copyable.
 *
 * This is the half of the invitation that survives a trip through an app
 * store. The link on this page cannot: whoever installs Doku from a store
 * arrives with a fresh app that never saw it, so without the code they would
 * have to come back and tap the link a second time. Reading eight characters
 * off this card and typing them into the app is the shorter path, and it is
 * the reason the card sits above the install step rather than below it.
 */
export function InviteCodeCard({
  code,
  labels,
}: {
  code: string;
  labels: { heading: string; hint: string; copy: string; copied: string };
}) {
  const [copied, setCopied] = useState(false);

  // The confirmation is transient; a card left reading "Copied" forever stops
  // meaning anything.
  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch {
      // Clipboard access can be refused (an insecure context, a browser that
      // asks). The code is on screen and readable either way, which is the
      // point of a code — so this fails quietly rather than raising an error
      // about something the person can simply read.
    }
  };

  return (
    <div className="rounded-lg border border-card-border bg-surface p-6 shadow-card">
      <p className="text-title-medium text-text">{labels.heading}</p>
      <p className="mt-2 text-body-medium text-text-secondary">{labels.hint}</p>

      <p className="mt-6 font-mono text-headline-medium tracking-[0.2em] text-text">
        {formatInviteCode(code)}
      </p>

      <button
        type="button"
        onClick={copy}
        className="mt-6 inline-flex items-center justify-center rounded-pill bg-brand px-6 py-3 text-button-large text-on-brand transition-opacity hover:opacity-90 active:opacity-80"
      >
        {copied ? labels.copied : labels.copy}
      </button>
      {/* Announced separately so the confirmation reaches a screen reader
          without the button's own label changing under the focus. */}
      <span aria-live="polite" className="sr-only">
        {copied ? labels.copied : ''}
      </span>
    </div>
  );
}
