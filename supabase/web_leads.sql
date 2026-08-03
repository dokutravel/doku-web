-- Web leads: waitlist signups and travel-agency interest, submitted from
-- dokutravel.com (doku-web repo). Run this in the PROD Supabase project
-- (Dashboard > SQL editor), or add it as a migration in the app repo if you
-- prefer everything versioned there.
--
-- Security model: the site inserts with the anon key from the server only.
-- RLS allows INSERT and nothing else — leads are read from the Dashboard
-- (or with the service role), never from the site.

create table if not exists public.web_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  kind text not null check (kind in ('waitlist', 'agency')),
  email text not null check (char_length(email) <= 254),
  locale text check (char_length(locale) <= 5),
  name text check (char_length(name) <= 200),
  agency text check (char_length(agency) <= 200),
  message text check (char_length(message) <= 2000)
);

-- One signup per email per kind; the duplicate surfaces as HTTP 409 and the
-- site shows the friendly "already on the list" message.
create unique index if not exists web_leads_kind_email_key
  on public.web_leads (kind, lower(email));

alter table public.web_leads enable row level security;

drop policy if exists web_leads_insert on public.web_leads;
create policy web_leads_insert on public.web_leads
  for insert to anon
  with check (kind in ('waitlist', 'agency'));

-- No select/update/delete policies on purpose: inserts only.
