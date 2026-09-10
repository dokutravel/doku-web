/**
 * Digital Asset Links, per environment — the Android half of `assetlinks`.
 *
 * Same reasoning as the AASA route next door: production vouches for the
 * production package alone, so a dev invitation cannot open the production app
 * on a phone carrying both.
 *
 * The fingerprint below is EAS's UPLOAD key, which covers builds installed
 * directly (development, preview). Google Play DISCARDS that signature and
 * re-signs with a key that does not exist until the first upload, so before
 * the first Play release its SHA-256 (Play Console → Setup → App integrity →
 * App signing) has to be added to `PROD_FINGERPRINTS` — both must stay, or the
 * directly installed builds stop verifying. Until then, links open the browser
 * for anyone who installed from the store, silently and only for them.
 * Tracked in doku/docs/RELEASE-PROD.md → Pending manual ops.
 */
const IS_PRODUCTION = process.env.VERCEL_ENV === 'production';

const EAS_UPLOAD_KEY =
  '92:0E:DE:46:EB:FD:A4:42:CB:89:42:5F:FA:2B:15:FD:38:3A:56:DF:74:9E:AE:D9:A6:35:51:18:30:82:D4:7A';

const PROD_FINGERPRINTS = [EAS_UPLOAD_KEY];
const DEV_FINGERPRINTS = [EAS_UPLOAD_KEY];

export function GET() {
  const [packageName, fingerprints] = IS_PRODUCTION
    ? ['com.dokutravel.app', PROD_FINGERPRINTS]
    : ['com.dokutravel.app.dev', DEV_FINGERPRINTS];

  return Response.json(
    [
      {
        relation: ['delegate_permission/common.handle_all_urls'],
        target: {
          namespace: 'android_app',
          package_name: packageName,
          sha256_cert_fingerprints: fingerprints,
        },
      },
    ],
    { headers: { 'Cache-Control': 'public, max-age=3600' } },
  );
}
