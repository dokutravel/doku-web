import Image from 'next/image';

/** The Doku mark + wordmark. The icon PNG comes from the app repo
 * (assets/images/doku-brand/icon.png) — same asset, never redrawn. */
export function Logo({ size = 28 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2">
      <Image src="/brand/doku-icon.png" alt="" width={size} height={size} priority />
      <span className="text-title-large text-text">doku</span>
    </span>
  );
}
