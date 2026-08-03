import { Manrope } from 'next/font/google';

/** The single Doku typeface. Only 400 (reading content) and 600 (interface)
 * exist — hierarchy is carried by size, never by other weights. */
export const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-manrope',
  display: 'swap',
});
