'use server';

import { isValidEmail } from '@/lib/email';
import { insertLead } from '@/lib/leads';

import type { LeadState } from './lead-state';

export async function submitWaitlist(_prev: LeadState, formData: FormData): Promise<LeadState> {
  // Honeypot: humans never see or fill this field. Pretend success to bots.
  if (String(formData.get('website') ?? '') !== '') return { status: 'ok' };

  const email = String(formData.get('email') ?? '')
    .trim()
    .toLowerCase();
  if (!isValidEmail(email)) return { status: 'invalid' };

  const locale = String(formData.get('locale') ?? 'es').slice(0, 5);
  return { status: await insertLead({ kind: 'waitlist', email, locale }) };
}
