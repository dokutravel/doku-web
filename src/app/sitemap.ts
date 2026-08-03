import type { MetadataRoute } from 'next';

import { locales } from '@/i18n/config';
import { siteUrl } from '@/lib/site';

const paths = ['', '/agencias', '/privacy', '/terms', '/account-deletion', '/support'];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      changeFrequency: path === '' ? ('weekly' as const) : ('monthly' as const),
      priority: path === '' ? 1 : 0.5,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}${path}`])),
      },
    })),
  );
}
