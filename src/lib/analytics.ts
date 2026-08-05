import posthog from 'posthog-js';

// Safe no-op when PostHog isn't initialized (local dev, previews).
export function captureEvent(name: string, properties?: Record<string, unknown>) {
  if (posthog.__loaded) posthog.capture(name, properties);
}
