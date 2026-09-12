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
 *
 * The scheme comes from the host, like every other app identity on this site:
 * a hardcoded `doku://` made the dev site open the production app on a phone
 * carrying both, handing a dev invitation to the wrong backend.
 */
export function OpenInAppButton({
  token,
  label,
  scheme,
}: {
  token: string;
  label: string;
  scheme: string;
}) {
  const [tried, setTried] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        setTried(true);
        window.location.href = `${scheme}://invite/${encodeURIComponent(token)}`;
      }}
      className="inline-flex w-full items-center justify-center rounded-pill bg-brand px-8 py-4 text-button-large text-on-brand transition-opacity hover:opacity-90 active:opacity-80 sm:w-auto"
      aria-live="polite"
    >
      {label}
      {tried ? <span className="sr-only"> — opening Doku</span> : null}
    </button>
  );
}
