export type LeadStatus = 'idle' | 'ok' | 'duplicate' | 'invalid' | 'error';

export type LeadState = { status: LeadStatus };

export const idleLeadState: LeadState = { status: 'idle' };
