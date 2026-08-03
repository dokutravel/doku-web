export type LeadKind = 'waitlist' | 'agency';

export type Lead = {
  kind: LeadKind;
  email: string;
  locale: string;
  name?: string;
  agency?: string;
  message?: string;
};

export type LeadResult = 'ok' | 'duplicate' | 'error';

/**
 * Inserts a lead into Supabase's `web_leads` table over PostgREST — no client
 * library needed for a single INSERT. The anon key lives server-side only
 * (plain env vars, not NEXT_PUBLIC_*), and RLS on the table allows INSERT and
 * nothing else, so the worst a leaked request can do is add a row.
 * Schema + policies: supabase/web_leads.sql.
 */
export async function insertLead(lead: Lead): Promise<LeadResult> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) {
    console.error('[leads] SUPABASE_URL / SUPABASE_ANON_KEY not configured');
    return 'error';
  }

  try {
    const res = await fetch(`${url}/rest/v1/web_leads`, {
      method: 'POST',
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(lead),
      cache: 'no-store',
    });
    if (res.ok) return 'ok';
    if (res.status === 409) return 'duplicate';
    console.error('[leads] insert failed', res.status, await res.text());
    return 'error';
  } catch (err) {
    console.error('[leads] insert failed', err);
    return 'error';
  }
}
