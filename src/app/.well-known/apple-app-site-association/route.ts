/**
 * The Apple App Site Association file, per environment.
 *
 * Served from a route rather than `public/` because its contents differ by
 * deployment and the file itself is shared by every branch. Production must
 * vouch for the production app alone: if dev.dokutravel.com also listed
 * `com.dokutravel.app`, a dev invitation would open the production app on a
 * phone that has both installed — the exact confusion the two variants exist
 * to avoid.
 *
 * `applinks` only, and only `/invite/*`: nothing else on the site is meant to
 * leave the browser.
 */
const IS_PRODUCTION = process.env.VERCEL_ENV === 'production';

const APP_ID = IS_PRODUCTION
  ? 'Q7ZYGDKFH6.com.dokutravel.app'
  : 'Q7ZYGDKFH6.com.dokutravel.app.dev';

export function GET() {
  return Response.json(
    {
      applinks: {
        details: [
          {
            appIDs: [APP_ID],
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
