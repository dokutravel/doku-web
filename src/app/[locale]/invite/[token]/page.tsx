import type { Metadata } from 'next';

import { Container } from '@/components/container';
import { InviteCodeCard } from '@/components/invite-code-card';
import { Logo } from '@/components/logo';
import { OpenInAppButton } from '@/components/open-in-app-button';
import { WaitlistForm } from '@/components/waitlist-form';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { parseInviteCode } from '@/lib/invite-code';

/**
 * Where an invitation link lands when the app did NOT open it.
 *
 * With the domain verified and Doku installed, the OS opens the app straight
 * on the accept screen and this page is never seen. So everyone who reads it
 * is in one of two situations: they do not have Doku, or their device has not
 * verified the domain yet. The page serves both — install first, and a button
 * that hands the token to an app that is already there.
 *
 * The token is deliberately NOT resolved here. Naming the trip, or whoever
 * sent it, would mean an unauthenticated endpoint that turns a guessed token
 * into somebody's travel plans; the invitation is claimed in the app, over an
 * authenticated call, by the person the invite is for.
 */
export async function generateMetadata({
  params,
}: PageProps<'/[locale]/invite/[token]'>): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  return {
    title: t.meta.inviteTitle,
    description: t.meta.inviteDescription,
    // An invitation is passed around in private, never indexed: the URL is the
    // credential, and a search engine holding it is a leak.
    robots: { index: false, follow: false },
    openGraph: {
      title: t.meta.inviteTitle,
      description: t.meta.inviteDescription,
    },
  };
}

export default async function InvitePage({ params }: PageProps<'/[locale]/invite/[token]'>) {
  const { locale, token } = await params;
  const t = getDictionary(locale as Locale);
  // Anything can be typed into a public path, so the code is shown only when
  // the URL actually holds one. A malformed segment styled as a code would
  // invite someone to type nonsense into the app.
  const code = parseInviteCode(token);

  return (
    <Container className="py-16 sm:py-24">
      <div className="mx-auto max-w-xl text-center">
        <Logo size={36} />

        <p className="mt-8 inline-flex items-center rounded-pill bg-brand-soft px-3 py-1 text-label-medium text-brand-strong">
          {t.invite.badge}
        </p>

        <h1 className="mt-4 text-headline-large text-text">{t.invite.title}</h1>
        <p className="mt-4 text-body-large text-text-secondary">{t.invite.subtitle}</p>

        <ul className="mt-10 space-y-3 text-left">
          {[t.invite.point1, t.invite.point2, t.invite.point3].map((point) => (
            <li key={point} className="flex gap-3 text-body-medium text-text">
              <span aria-hidden className="text-brand-strong">
                •
              </span>
              {point}
            </li>
          ))}
        </ul>

        {code ? (
          <div className="mt-12 text-left">
            <InviteCodeCard
              code={code}
              labels={{
                heading: t.invite.codeHeading,
                hint: t.invite.codeHint,
                copy: t.invite.codeCopy,
                copied: t.invite.codeCopied,
              }}
            />

            <p className="mt-10 text-title-medium text-text">{t.invite.stepsHeading}</p>
            <ol className="mt-4 space-y-3">
              {[t.invite.step1, t.invite.step2, t.invite.step3].map((step, i) => (
                <li key={step} className="flex gap-3 text-body-medium text-text">
                  <span
                    aria-hidden
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-pill bg-brand-soft text-label-medium text-brand-strong"
                  >
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        ) : null}

        <div className="mt-12 rounded-lg border border-card-border bg-surface p-6 shadow-card">
          <p className="text-title-medium text-text">{t.invite.getApp}</p>
          <p className="mt-2 text-body-medium text-text-secondary">{t.invite.storesSoon}</p>
          <div className="mt-6">
            <WaitlistForm
              locale={locale}
              labels={{
                placeholder: t.waitlist.placeholder,
                submit: t.waitlist.submit,
                submitting: t.waitlist.submitting,
                privacyNote: t.waitlist.privacyNote,
                success: t.waitlist.success,
                duplicate: t.waitlist.duplicate,
                invalidEmail: t.waitlist.invalidEmail,
                error: t.waitlist.error,
              }}
            />
          </div>
          <p className="mt-4 text-body-small text-text-secondary">{t.invite.keepsWaiting}</p>
        </div>

        <div className="mt-10">
          <p className="text-body-medium text-text-secondary">{t.invite.hasApp}</p>
          <div className="mt-3">
            <OpenInAppButton token={token} label={t.invite.openApp} />
          </div>
        </div>
      </div>
    </Container>
  );
}
