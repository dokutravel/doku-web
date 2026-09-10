import { headers } from 'next/headers';

import { appIdsForHost } from '@/lib/site-app-ids';

/**
 * Digital Asset Links, per domain — the Android half of the association files.
 *
 * Same reasoning as the AASA route next door: each site vouches for its own
 * app, so a dev invitation cannot open the production app on a phone carrying
 * both.
 *
 * The fingerprint below is EAS's UPLOAD key, which covers builds installed
 * directly (development, preview). Google Play DISCARDS that signature and
 * re-signs with a key that does not exist until the first upload, so before
 * the first Play release its SHA-256 (Play Console → Setup → App integrity →
 * App signing) has to be added to `PRODUCTION_FINGERPRINTS` — both must stay,
 * or the directly installed builds stop verifying. Until then, links open the
 * browser for anyone who installed from the store, silently and only for them.
 * Tracked in doku/docs/RELEASE-PROD.md → Pending manual ops.
 */
const EAS_UPLOAD_KEY =
  '92:0E:DE:46:EB:FD:A4:42:CB:89:42:5F:FA:2B:15:FD:38:3A:56:DF:74:9E:AE:D9:A6:35:51:18:30:82:D4:7A';

const PRODUCTION_FINGERPRINTS = [EAS_UPLOAD_KEY];
const DEV_FINGERPRINTS = [EAS_UPLOAD_KEY];

export async function GET() {
  const { androidPackage } = appIdsForHost((await headers()).get('host'));
  const fingerprints =
    androidPackage === 'com.dokutravel.app' ? PRODUCTION_FINGERPRINTS : DEV_FINGERPRINTS;

  return Response.json(
    [
      {
        relation: ['delegate_permission/common.handle_all_urls'],
        target: {
          namespace: 'android_app',
          package_name: androidPackage,
          sha256_cert_fingerprints: fingerprints,
        },
      },
    ],
    { headers: { 'Cache-Control': 'public, max-age=3600' } },
  );
}
