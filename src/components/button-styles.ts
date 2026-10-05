/*
 * The app's `Button`, ported. SOURCE OF TRUTH: `Button` in doku/src/shared/ui/kit.tsx
 * (see README "Design system"). A change there is synced here by hand.
 *
 * Every button on the site — link or <button> — takes its classes from here, so
 * none of them drifts into its own shape, height or pressed state.
 *
 * The one web-only addition is the hover: the app is touch-only and has none.
 */

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'plain' | 'danger';

// minHeight 52, Radius.md, gap Spacing.two, paddingHorizontal Spacing.four,
// opacity 0.65 when pressed, busy or disabled.
const base =
  'inline-flex min-h-13 items-center justify-center gap-2 rounded-md px-6 transition-opacity hover:opacity-90 active:opacity-65 disabled:pointer-events-none disabled:opacity-65';

const variants: Record<ButtonVariant, string> = {
  // brand is fill-only, always paired with on-brand (DESIGN.md rule 1).
  primary: 'bg-brand text-button-large text-on-brand',
  secondary: 'bg-background-element text-button-large text-text',
  ghost: 'border-2 border-border text-button-large text-text',
  plain: 'text-button-medium text-text-secondary',
  danger: 'bg-danger-soft text-button-large text-danger',
};

export function buttonClasses(variant: ButtonVariant = 'primary', className = '') {
  return `${base} ${variants[variant]} ${className}`.trim();
}
