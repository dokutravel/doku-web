import type { MetadataRoute } from 'next';

import { siteUrl } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    // An invitation URL is the credential that joins a trip, passed around in
    // private. The page also sends `noindex`, but a crawler has to fetch it to
    // read that — this keeps well-behaved ones from requesting it at all.
    rules: { userAgent: '*', allow: '/', disallow: '/*/invite/' },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
