import type { ReactNode } from 'react';

import { Container } from '@/components/container';

export function LegalPage({
  title,
  updatedLabel,
  updatedDate,
  children,
}: {
  title: string;
  updatedLabel?: string;
  updatedDate?: string;
  children: ReactNode;
}) {
  return (
    <Container className="max-w-3xl py-16">
      <h1 className="text-headline-large text-text">{title}</h1>
      {updatedLabel && updatedDate && (
        <p className="mt-2 text-body-small text-text-secondary">
          {updatedLabel}: {updatedDate}
        </p>
      )}
      <article className="prose-doku mt-8">{children}</article>
    </Container>
  );
}
