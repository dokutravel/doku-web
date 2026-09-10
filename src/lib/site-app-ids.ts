/**
 * Which app a given host is allowed to open.
 *
 * Keyed on the HOST of the request rather than on `VERCEL_ENV`, because the
 * environment does not distinguish these domains: dev.dokutravel.com is served
 * by Vercel's Production environment too (it is a branch domain of the same
 * project), so an env check hands the dev site production's identity.
 *
 * The host is also the honest answer to the question being asked. Apple and
 * Android fetch these files from one specific domain to learn which app may
 * claim its links, so the domain in the request is exactly the subject of the
 * reply — and a phone with both variants installed must never be told that the
 * dev site speaks for the production app.
 */
const PRODUCTION_HOST = 'dokutravel.com';

export type AppVariantIds = { appleAppId: string; androidPackage: string };

const PRODUCTION_IDS: AppVariantIds = {
  appleAppId: 'Q7ZYGDKFH6.com.dokutravel.app',
  androidPackage: 'com.dokutravel.app',
};

const DEV_IDS: AppVariantIds = {
  appleAppId: 'Q7ZYGDKFH6.com.dokutravel.app.dev',
  androidPackage: 'com.dokutravel.app.dev',
};

/** The production site is the apex domain and its `www` alias, nothing else —
 * every preview URL and `dev.` subdomain belongs to the dev app. */
export function appIdsForHost(host: string | null): AppVariantIds {
  const hostname = (host ?? '').split(':')[0].toLowerCase();
  const isProduction = hostname === PRODUCTION_HOST || hostname === `www.${PRODUCTION_HOST}`;
  return isProduction ? PRODUCTION_IDS : DEV_IDS;
}
