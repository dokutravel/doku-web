<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Language

All code — comments, identifiers, docs — is written in English. Spanish belongs only
in `src/i18n/es.ts` and the Spanish legal content in `src/content/*-es.tsx`.

# Design system

This site uses Doku's design system, ported from the app repo. Read the README's
"Design system" section before writing UI.

- Colors come from the tokens in `src/app/globals.css` (`bg-brand`, `text-text`,
  `border-card-border`, …). **Never hardcode a hex color in a component.**
- Text styles come from the type-scale utilities (`text-title-medium`,
  `text-body-large`, …). **Never set a raw font size/weight** — only Manrope 400
  and 600 exist, selected by the scale token.
- `brand` is fill-only, always paired with `on-brand`. Green as text/icon =
  `brand-strong`. Links use the `link` token, not brand.
- Radii: `rounded-sm|md|lg|pill` (10/16/22/999). Card elevation: `shadow-card` +
  `bg-surface` + `border-card-border`.
- The site is light-only by decision: no dark tokens, no `dark:` variants.
  `color-scheme: light` in `globals.css` keeps it light on dark systems.

# Structure

- One exported component per file. Screens/pages stay thin composition; anything
  reusable lives in `src/components/`.
- Copy lives in the typed dictionaries `src/i18n/{en,es}.ts` — English is the
  reference shape; TypeScript enforces key parity. Long legal prose lives in
  `src/content/` as per-locale TSX.
- All pages live under `src/app/[locale]/`; locale negotiation is in `src/proxy.ts`.
  New pages must set `alternates` metadata via `languageAlternates()` from
  `src/lib/site.ts` and be added to `src/app/sitemap.ts`.

# Checks

`npm run typecheck && npm run lint && npm run build` must pass before handing back.
