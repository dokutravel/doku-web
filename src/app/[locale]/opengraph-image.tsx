import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { ImageResponse } from 'next/og';

import { isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Doku — travel documents, organized by AI';

export default async function OgImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getDictionary(isLocale(locale) ? locale : 'en');

  const [regular, semibold, icon] = await Promise.all([
    readFile(join(process.cwd(), 'src/assets/fonts/manrope-400.ttf')),
    readFile(join(process.cwd(), 'src/assets/fonts/manrope-600.ttf')),
    readFile(join(process.cwd(), 'public/brand/doku-icon.png')),
  ]);
  const iconSrc = `data:image/png;base64,${icon.toString('base64')}`;

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
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <img src={iconSrc} width={72} height={72} alt="" />
          <span style={{ fontSize: 44, fontWeight: 600, color: '#141414' }}>doku</span>
        </div>
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
