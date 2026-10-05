import Image from 'next/image';

// Intrinsic size of public/brand/doku-logo.svg (its viewBox).
const LOGO_WIDTH = 175;
const LOGO_HEIGHT = 92;

/** The full Doku logo — mark and wordmark as one asset, so their proportions
 * never drift. `height` sets the rendered height; width follows the aspect ratio. */
export function Logo({ height = 40 }: { height?: number }) {
  return (
    <Image
      src="/brand/doku-logo.svg"
      alt="Doku"
      width={Math.round((height * LOGO_WIDTH) / LOGO_HEIGHT)}
      height={height}
      priority
    />
  );
}
