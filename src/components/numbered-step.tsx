import type { ReactNode } from 'react';

/** One step in an in-app instruction sequence, rendered as a card. */
export function NumberedStep({ n, children }: { n: number; children: ReactNode }) {
  return (
    <div className="flex items-start gap-3.5 rounded-md border border-card-border bg-surface px-5 py-4 [&_p:last-child]:mb-0">
      <span className="flex h-7 w-7 flex-none items-center justify-center rounded-pill bg-brand text-title-small text-on-brand">
        {n}
      </span>
      <div className="min-w-0 pt-0.5">{children}</div>
    </div>
  );
}
