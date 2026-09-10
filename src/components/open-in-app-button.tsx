'use client';

import { useState } from 'react';

/**
 * Tries to hand the invitation to an installed Doku.
 *
 * Almost nobody needs this: when the app is installed and the domain verified,
 * the OS opens it directly and this page never renders. It is here for the
 * case where verification has not caught up — a fresh install, an Android
 * device that has not re-checked the domain, a link opened inside an in-app
 * browser that swallows universal links. Without it, someone who HAS the app
 * would be told to go and install it.
 *
 * The custom scheme is the fallback precisely because it cannot fail loudly:
 * a device without Doku does nothing visible, so the page stays as it was and
 * the store buttons are still there.
 */
export function OpenInAppButton({ token, label }: { token: string; label: string }) {
  const [tried, setTried] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        setTried(true);
        window.location.href = `doku://invite/${encodeURIComponent(token)}`;
      }}
      className="inline-flex items-center justify-center rounded-pill border border-card-border bg-surface px-6 py-3 text-button-large text-text transition-opacity hover:bg-background-element active:opacity-80"
      aria-live="polite"
    >
      {label}
      {tried ? <span className="sr-only"> — opening Doku</span> : null}
    </button>
  );
}
