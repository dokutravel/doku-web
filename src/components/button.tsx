import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { buttonClasses, type ButtonVariant } from '@/components/button-styles';

export function Button({
  variant = 'primary',
  icon,
  type = 'button',
  className = '',
  children,
  ...props
}: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
  variant?: ButtonVariant;
  /** Leading element rendered before the label, as in the app's `Button`. */
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button type={type} className={buttonClasses(variant, className)} {...props}>
      {icon}
      {children}
    </button>
  );
}
