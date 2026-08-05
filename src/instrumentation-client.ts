import posthog from 'posthog-js';

// Cookieless by design: memory persistence stores nothing on the visitor's
// device, which keeps the site free of a GDPR consent banner. The trade-off
// (visitors aren't recognized across visits) is acceptable for traffic stats.
// The key is only set on Vercel's Production environment, so dev/preview
// traffic never pollutes the data.
const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

if (key) {
  posthog.init(key, {
    api_host: 'https://us.i.posthog.com',
    defaults: '2025-05-24',
    persistence: 'memory',
  });
}
