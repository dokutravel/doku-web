'use client';

import { useEffect, useState } from 'react';


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

      {/* The code IS the button. Shown as plain text beside a separate action,
          it read as a label to retype by hand — people copied it character by
          character and brought the grouping hyphen along. Tapping the thing
          you want is the obvious gesture, so it is the one that works. */}
      <button
        type="button"
        onClick={copy}
        aria-label={`${labels.copy}: ${code}`}
        className="mt-6 flex w-full items-center justify-between gap-4 rounded-md border border-dashed border-brand-strong bg-brand-soft px-5 py-4 text-left transition-opacity hover:opacity-90 active:opacity-80"
      >
        <span className="font-mono text-headline-medium tracking-[0.2em] text-text">{code}</span>
        <span className="shrink-0 text-label-medium text-brand-strong">
          {copied ? labels.copied : labels.copy}
        </span>
      </button>
    </div>
  );
}
