/**
 * The invitation code carried in the URL.
 *
 * Deliberately duplicated from the app's `invite-code.ts` rather than shared:
 * these are two repositories with two deployment cycles, and the alternative
 * is a package that both would have to version in step to change eight
 * characters. What matters is that the ALPHABET and the length stay identical
 * — the app generates these codes and this only reads them back.
 */
const ALPHABET = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';

const CODE_LENGTH = 8;

/**
 * The code from a URL segment, or null when it is not one.
 *
 * The path is public and anything can be typed into it, so this decides
 * whether the page has a code worth displaying at all. Showing an arbitrary
 * path segment styled as a code would invite someone to type nonsense into the
 * app and be told, correctly but confusingly, that it does not exist.
 */
export function parseInviteCode(segment: string): string | null {
  const upper = decodeURIComponent(segment).toUpperCase();
  if (upper.length !== CODE_LENGTH) return null;
  for (const char of upper) {
    if (!ALPHABET.includes(char)) return null;
  }
  return upper;
}

/** Groups the code the way the app shows it: `K7M4-P2QX`. */
export function formatInviteCode(code: string): string {
  const half = CODE_LENGTH / 2;
  return `${code.slice(0, half)}-${code.slice(half)}`;
}
