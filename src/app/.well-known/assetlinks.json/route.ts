import { headers } from 'next/headers';

import { appIdsForHost } from '@/lib/site-app-ids';

/**
 * Digital Asset Links, per domain — the Android half of the association files.
 *
 * Same reasoning as the AASA route next door: each site vouches for its own
 * app, so a dev invitation cannot open the production app on a phone carrying
 * both.
 *
 * A fingerprint here has to match the signature of the installed APK exactly,
 * so the production entry carries both keys that can produce one: Play's, for
 * anyone who installed from the store, and EAS's upload key, for a build
 * installed directly. Dropping either one breaks that half silently — the
 * link just opens the browser, and only for the people it affects.
 */
/**
 * The keystore EAS signs every build with — `eas credentials --platform
 * android` → Configuration: Build Credentials → SHA256 Fingerprint. This is
 * what a directly installed build (development, preview, an APK sent by hand)
 * carries, and for Play it is only the UPLOAD signature, which Play discards.
 */
const EAS_UPLOAD_KEY =
  'C5:94:42:CF:2C:B5:04:A5:08:EF:03:EE:BA:C0:49:D1:D5:37:9C:5F:B8:8C:DD:78:86:62:76:4B:BF:3E:94:2D';

/**
 * The key Play re-signs the production app with, from Play Console → Setup →
 * App integrity → App signing → *App signing key certificate*. It does not
 * exist until the first upload, which is why it could only be filled in after
 * 1.2.0 (29) reached the alpha track.
 *
 * Both must stay on the production entry: this one covers installs from Play,
 * the upload key covers builds installed directly.
 */
const PLAY_APP_SIGNING_KEY =
  'D7:76:D9:6A:C5:39:38:BD:FE:F0:35:9D:10:51:C2:EE:A6:11:8F:36:90:14:BA:B6:A8:CE:5A:9A:8E:EE:AC:E4';

/**
 * The same thing for the dev app, which has its own Play entry: we install it
 * from an internal testing track, so those builds carry Play's signature and
 * not the upload key either.
 */
const PLAY_APP_SIGNING_KEY_DEV =
  'BA:3F:FF:91:AA:3B:0F:13:C8:71:61:DB:60:F6:89:A9:9D:A2:5A:6C:43:38:AB:F7:77:E0:A6:59:35:41:C2:2C';

// Both variants reach a phone two ways — from a Play track, or installed
// directly from EAS — and the two routes carry different signatures.
const PRODUCTION_FINGERPRINTS = [PLAY_APP_SIGNING_KEY, EAS_UPLOAD_KEY];
const DEV_FINGERPRINTS = [PLAY_APP_SIGNING_KEY_DEV, EAS_UPLOAD_KEY];

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
