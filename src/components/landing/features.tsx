import { Container } from '@/components/container';
import type { Dictionary } from '@/i18n/en';

const featureIcon: Record<string, { glyph: string; tint: string }> = {
  categories: { glyph: '✈️', tint: 'bg-flight-soft' },
  offline: { glyph: '🧳', tint: 'bg-transport-soft' },
  shared: { glyph: '👥', tint: 'bg-activity-soft' },
  insurance: { glyph: '🛟', tint: 'bg-insurance-soft' },
  edit: { glyph: '✏️', tint: 'bg-hotel-soft' },
  privacy: { glyph: '🔒', tint: 'bg-other-soft' },
};

export function Features({ t }: { t: Dictionary }) {
  return (
    <section id="features" className="scroll-mt-16 py-16 sm:py-20">
      <Container>
        <h2 className="text-headline-medium text-text sm:text-headline-large">{t.features.title}</h2>
        <p className="mt-2 text-body-large text-text-secondary">{t.features.subtitle}</p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((item) => {
            const icon = featureIcon[item.key] ?? featureIcon.categories;
            return (
              <li
                key={item.key}
                className="rounded-md border border-card-border bg-surface p-6 shadow-card"
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-sm text-body-large ${icon.tint}`}
                >
                  {icon.glyph}
                </span>
                <h3 className="mt-4 text-title-medium text-text">{item.title}</h3>
                <p className="mt-2 text-body-medium text-text-secondary">{item.body}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
