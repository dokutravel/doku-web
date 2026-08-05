import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';

const tones = {
  brand: { bg: 'bg-brand-soft', icon: 'text-brand-strong' },
  warning: { bg: 'bg-warning-soft', icon: 'text-warning' },
  danger: { bg: 'bg-danger-soft', icon: 'text-danger' },
};

/** Highlighted aside for legal pages: an icon plus a short message that must
 * not get lost in the prose (summaries, warnings, irreversibility notices). */
export function Callout({
  tone,
  icon: Icon,
  children,
}: {
  tone: keyof typeof tones;
  icon: IconType;
  children: ReactNode;
}) {
  const t = tones[tone];
  return (
    <div
      className={`my-6 flex items-start gap-3.5 rounded-md border border-card-border px-6 py-5 ${t.bg} [&_h3:first-child]:mt-0 [&_p:last-child]:mb-0`}
    >
      <Icon size={18} className={`mt-1 flex-none ${t.icon}`} />
      <div className="min-w-0">{children}</div>
    </div>
  );
}
