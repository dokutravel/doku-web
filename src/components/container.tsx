import type { ReactNode } from 'react';

/** The content column: gutters at Spacing.three (16) and a cap wider than the
 * app's 800 — a marketing page breathes more than an app screen. */
export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-5xl px-4 sm:px-6 ${className}`}>{children}</div>;
}
