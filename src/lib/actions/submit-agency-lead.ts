'use server';

import { isValidEmail } from '@/lib/email';
import { insertLead } from '@/lib/leads';

import type { LeadState } from './lead-state';

export async function submitAgencyLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  if (String(formData.get('website') ?? '') !== '') return { status: 'ok' };

  const email = String(formData.get('email') ?? '')
    .trim()
    .toLowerCase();
  if (!isValidEmail(email)) return { status: 'invalid' };

  const locale = String(formData.get('locale') ?? 'es').slice(0, 5);
  const name = String(formData.get('name') ?? '').trim().slice(0, 200);
  const agency = String(formData.get('agency') ?? '').trim().slice(0, 200);
  const message = String(formData.get('message') ?? '').trim().slice(0, 2000);

  return {
    status: await insertLead({
      kind: 'agency',
      email,
      locale,
      name: name || undefined,
      agency: agency || undefined,
      message: message || undefined,
    }),
  };
}
