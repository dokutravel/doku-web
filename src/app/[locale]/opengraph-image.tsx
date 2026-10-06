import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { ImageResponse } from 'next/og';

import { isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';

const size = { width: 1200, height: 630 };

// The [locale] layout sets dynamicParams = false, and the image's id segment is
// not among the prerendered params, so without this the image 404s.
export const dynamicParams = true;

// One image per locale; generateImageMetadata is what lets its alt text follow
// the locale (a static `alt` export can only be one string).
export function generateImageMetadata({ params }: { params: { locale: string } }) {
  const t = getDictionary(isLocale(params.locale) ? params.locale : 'en');
  return [{ id: 'default', alt: t.meta.ogImageAlt, size, contentType: 'image/png' }];
}

export default async function OgImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getDictionary(isLocale(locale) ? locale : 'en');

  const [regular, semibold, logo] = await Promise.all([
    readFile(join(process.cwd(), 'src/assets/fonts/manrope-400.ttf')),
    readFile(join(process.cwd(), 'src/assets/fonts/manrope-600.ttf')),
    readFile(join(process.cwd(), 'public/brand/doku-logo.svg')),
  ]);
  const logoSrc = `data:image/svg+xml;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          backgroundColor: '#faf8f2',
          fontFamily: 'Manrope',
        }}
      >
        {/* The full logo, mark and wordmark as one asset (as in <Logo />);
            175×92 is its viewBox. */}
        <img src={logoSrc} width={175} height={92} alt="Doku" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 900 }}>
          <span style={{ fontSize: 64, lineHeight: 1.15, fontWeight: 400, color: '#141414' }}>
            {t.hero.title}
          </span>
          <span
            style={{
              alignSelf: 'flex-start',
              backgroundColor: '#aed951',
              color: '#141414',
              fontSize: 28,
              fontWeight: 600,
              padding: '12px 28px',
              borderRadius: 999,
            }}
          >
            dokutravel.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Manrope', data: regular, weight: 400, style: 'normal' },
        { name: 'Manrope', data: semibold, weight: 600, style: 'normal' },
      ],
    },
  );
}
