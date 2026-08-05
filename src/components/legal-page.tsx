import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';

import { Container } from '@/components/container';

const badgeTones = {
  legal: 'bg-other-soft text-other',
  danger: 'bg-danger-soft text-danger',
};

export function LegalPage({
  title,
  badgeLabel,
  badgeIcon: BadgeIcon,
  badgeTone = 'legal',
  updatedLabel,
  updatedDate,
  children,
}: {
  title: string;
  badgeLabel?: string;
  badgeIcon?: IconType;
  badgeTone?: keyof typeof badgeTones;
  updatedLabel?: string;
  updatedDate?: string;
  children: ReactNode;
}) {
  return (
    <Container className="max-w-3xl pb-24 pt-16">
      {badgeLabel && (
        <span
          className={`inline-flex items-center gap-1.5 rounded-pill px-3.5 py-1 text-label-medium uppercase ${badgeTones[badgeTone]}`}
        >
          {BadgeIcon && <BadgeIcon size={12} />}
          {badgeLabel}
        </span>
      )}
      <h1 className="mt-5 text-display-small text-text">{title}</h1>
      {updatedLabel && updatedDate && (
        <p className="mt-3 text-body-small text-text-secondary">
          {updatedLabel}: {updatedDate}
        </p>
      )}
      <article className="prose-doku mt-6">{children}</article>
    </Container>
  );
}
