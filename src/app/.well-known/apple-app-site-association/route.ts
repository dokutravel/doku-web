import { headers } from 'next/headers';

import { appIdsForHost } from '@/lib/site-app-ids';

/**
 * The Apple App Site Association file, per domain.
 *
 * Served from a route rather than `public/` because its contents depend on
 * which site is being asked: production vouches for the production app alone,
 * and dev.dokutravel.com for the dev one. A single static file would have had
 * the dev site claiming `com.dokutravel.app`, so on a phone with both
 * installed a dev invitation could open the production app.
 *
 * `applinks` only, and only `/invite/*`: nothing else on the site is meant to
 * leave the browser.
 */
export async function GET() {
  const { appleAppId } = appIdsForHost((await headers()).get('host'));

  return Response.json(
    {
      applinks: {
        details: [
          {
            appIDs: [appleAppId],
            components: [
              {
                '/': '/invite/*',
                comment: 'Invitation links open the app straight on the accept screen.',
              },
            ],
          },
        ],
      },
    },
    // Apple fetches this through its CDN and caches it; a short max-age keeps a
    // corrected file from being pinned for days.
    { headers: { 'Cache-Control': 'public, max-age=3600' } },
  );
}
