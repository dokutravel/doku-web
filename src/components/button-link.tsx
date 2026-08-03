import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary';
type Size = 'md' | 'lg';

const variants: Record<Variant, string> = {
  // brand is fill-only, always paired with on-brand (DESIGN.md rule 1).
  primary: 'bg-brand text-on-brand hover:opacity-90 active:opacity-80',
  secondary: 'border border-card-border bg-surface text-text hover:bg-background-element',
};

const sizes: Record<Size, string> = {
  md: 'px-4 py-2 text-button-medium',
  lg: 'px-6 py-3 text-button-large',
};

export function ButtonLink({
  href,
  variant = 'primary',
  size = 'lg',
  children,
  className = '',
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-pill transition-opacity ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
