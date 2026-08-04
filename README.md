# doku-web

Marketing site + legal pages for [Doku](https://dokutravel.com), the travel-document
app. Next.js (App Router) · Tailwind CSS v4 · TypeScript. No database of its own —
waitlist/agency leads are inserted into the app's Supabase project.

## Pages

| Route | What |
| --- | --- |
| `/es` · `/en` | Landing: hero + waitlist, how it works, features, FAQ (with JSON-LD) |
| `/{locale}/agencias` | Travel-agency pitch + interest form |
| `/{locale}/privacy` | Privacy policy |
| `/{locale}/terms` | Terms of service |
| `/{locale}/account-deletion` | Account-deletion instructions (required by Google Play) |
| `/{locale}/support` | Contact |

`/` (and any path without a locale) is redirected by `src/proxy.ts` based on
`Accept-Language`. Locales: `es` (default), `en`.

## Setup

```bash
npm install
cp .env.example .env.local   # fill in Supabase URL + anon key (leads form)
npm run dev
```

Without the env vars the site works fully; the waitlist form returns the friendly
error message on submit.

### Leads table

Run `supabase/web_leads.sql` once in the PROD Supabase project (SQL editor).
RLS allows INSERT only; leads are read from the Supabase dashboard.

## Design system

The visual language is Doku's: cream background, one lime-green brand accent,
Manrope with size-based (not weight-based) hierarchy.

- **Source of truth**: `doku/src/constants/theme.ts` and `type-tokens.json` in the
  app repo. The tokens are ported by hand into `src/app/globals.css` (`@theme`).
  If the app palette changes, sync that file.
- Rules that carry over (from the app's DESIGN.md): `brand` green is **fill-only**
  (pair with `on-brand`); green text/icons use `brand-strong`; `link` is separate
  from brand; only Manrope 400 and 600 exist; every color works in light and dark
  (`prefers-color-scheme`).
- The brand icon is the app's `assets/images/doku-brand/icon.png`, copied — never
  redrawn.

## i18n

Hand-rolled: typed dictionaries in `src/i18n/{en,es}.ts`. English is the reference
catalog (`Dictionary` type) — a missing or extra key in Spanish is a **compile
error**, so `npm run typecheck` is the parity test.

## Checks

```bash
npm run typecheck && npm run lint && npm run build
```

Same three steps run in CI (`.github/workflows/ci.yml`).

## Coming-soon mode

`SITE_MODE=coming-soon` (set **only on Vercel's Production environment** until
launch) makes marketing routes show the under-construction page — waitlist
included, `X-Robots-Tag: noindex`. The **legal pages stay public**
(`/privacy`, `/terms`, `/account-deletion`, `/support`): the app and the store
listings link to them, so the web launches before the product does. Future
functional routes (e.g. `/invite/[token]`) join the public list in
`PUBLIC_PATHS` (`src/proxy.ts`). **Launching the site = removing the env var.**

## Environments

- **Production** — `main` → `dokutravel.com`: under construction + public legal
  pages (via `SITE_MODE=coming-soon`) until launch. Prod Supabase env vars.
- **Dev** — `dev` branch → `dev.dokutravel.com`: the full site, always (no
  `SITE_MODE`). Assign the domain to the branch in Vercel → Settings → Domains.
  Point the Preview environment's Supabase vars at DokuBE-dev so test leads never
  land in prod. Non-production deploys send `noindex` automatically.
- **PR previews** — every branch/PR gets an auto Vercel URL with the Preview env.

## Deploy

Vercel, `main` branch, domain `dokutravel.com`. Set `SUPABASE_URL` and
`SUPABASE_ANON_KEY` in the Vercel project env. Before going live:

- [ ] Review the privacy policy & terms wording (drafted, needs Manu's read)
- [ ] Create the `contact@dokutravel.com` mailbox (or forwarding)
- [ ] Run `supabase/web_leads.sql` in prod
- [ ] Point the app + store listings at `/{locale}/privacy` and `/{locale}/account-deletion`
