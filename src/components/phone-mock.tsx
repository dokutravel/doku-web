import type { Dictionary } from '@/i18n/en';

/**
 * A stylized render of the app's trip screen, drawn with the design tokens —
 * deliberately an illustration, not a screenshot, so it never goes stale and
 * adapts to light/dark like the real app.
 */
export function PhoneMock({ t }: { t: Dictionary }) {
  return (
    <div
      aria-hidden="true"
      className="w-[300px] rounded-[44px] border border-card-border bg-surface p-3 shadow-card"
    >
      <div className="flex h-[560px] flex-col overflow-hidden rounded-[34px] bg-background">
        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pb-1 pt-3">
          <span className="text-label-small text-text">9:41</span>
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-pill bg-text-secondary" />
            <span className="h-1.5 w-1.5 rounded-pill bg-text-secondary" />
            <span className="h-1.5 w-1.5 rounded-pill bg-text-secondary" />
          </span>
        </div>

        {/* App header: avatar · title · add */}
        <div className="flex items-center justify-between px-5 py-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-pill bg-brand text-label-large text-on-brand">
            M
          </span>
          <span className="text-title-medium text-text">Trips</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-pill bg-background-element text-title-medium text-text">
            +
          </span>
        </div>

        <div className="flex flex-col gap-3 px-4">
          {/* Trip card: Barcelona */}
          <div className="rounded-md border border-card-border bg-surface p-3 shadow-card">
            <div className="flex items-center justify-between">
              <span className="text-title-medium text-text">Barcelona</span>
              <span className="rounded-pill bg-brand-soft px-2 py-0.5 text-label-small text-brand-strong">
                12 – 19 MAR
              </span>
            </div>
            <div className="mt-3 flex flex-col gap-2">
              <div className="flex items-center gap-2 rounded-sm bg-insurance-soft px-2.5 py-2">
                <span className="text-body-small">🛟</span>
                <span className="flex-1 text-label-medium text-insurance">
                  {t.categories.insurance} · AC 58291
                </span>
                <span className="text-body-small">📞</span>
              </div>
              <div className="flex items-center gap-2 rounded-sm bg-flight-soft px-2.5 py-2">
                <span className="text-body-small">✈️</span>
                <span className="flex-1 text-label-medium text-flight">
                  EZE → BCN · AR 1160
                </span>
                <span className="text-body-small text-flight">22:05</span>
              </div>
              <div className="flex items-center gap-2 rounded-sm bg-hotel-soft px-2.5 py-2">
                <span className="text-body-small">🏨</span>
                <span className="flex-1 text-label-medium text-hotel">Hotel Curious</span>
                <span className="text-body-small text-hotel">×7</span>
              </div>
              <div className="flex items-center gap-2 rounded-sm bg-activity-soft px-2.5 py-2">
                <span className="text-body-small">🎟️</span>
                <span className="flex-1 text-label-medium text-activity">Sagrada Família</span>
                <span className="text-body-small text-activity">15 MAR</span>
              </div>
            </div>
          </div>

          {/* Trip card: Bariloche (peeking) */}
          <div className="rounded-md border border-card-border bg-surface p-3 shadow-card">
            <div className="flex items-center justify-between">
              <span className="text-title-medium text-text">Bariloche</span>
              <span className="rounded-pill bg-background-element px-2 py-0.5 text-label-small text-text-secondary">
                2 – 9 JUL
              </span>
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-sm bg-transport-soft px-2.5 py-2">
              <span className="text-body-small">🚌</span>
              <span className="flex-1 text-label-medium text-transport">
                {t.categories.transport} · Vía Bariloche
              </span>
            </div>
          </div>
        </div>

        {/* Floating pill tab bar */}
        <div className="mt-auto flex justify-center pb-4">
          <div className="flex items-center gap-6 rounded-pill border border-card-border bg-surface px-6 py-2.5 shadow-card">
            <span className="h-2 w-2 rounded-pill bg-brand-strong" />
            <span className="h-2 w-2 rounded-pill bg-card-border" />
            <span className="h-2 w-2 rounded-pill bg-card-border" />
          </div>
        </div>
      </div>
    </div>
  );
}
