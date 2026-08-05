import { IoSparkles } from 'react-icons/io5';

import { Callout } from '@/components/callout';
import { contactEmail } from '@/lib/site';

export function PrivacyEn() {
  return (
    <>
      <Callout tone="brand" icon={IoSparkles}>
        <p>
          The short version: your documents are yours, we do not sell your data, and we do
          not use it for advertising.
        </p>
      </Callout>
      <p>
        Doku is an app for organizing travel documents. This policy explains what data we
        collect, what we use it for, and the rights you have over it.
      </p>

      <h2>Who is responsible</h2>
      <p>
        The data controller is the Doku team. For any question about your data, write to{' '}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Account data.</strong> When you sign in with Google or Apple we receive your
          name, email and profile photo. We never see your password.
        </li>
        <li>
          <strong>Your documents.</strong> The files you upload or share into the app (PDFs,
          screenshots or photos of bookings, tickets, vouchers, policies) and the data the AI
          extracts from them (dates, booking codes, times, passengers, destinations).
        </li>
        <li>
          <strong>Technical data.</strong> Error and crash reports (via Sentry), AI-analysis
          usage counters — used to enforce plan limits — and product-usage metrics (via
          PostHog): which screens and features are used, tied to a random internal
          identifier, never to your name, your email or the content of your documents.
        </li>
        <li>
          <strong>On this website.</strong> If you join the waitlist we store your email for
          the sole purpose of announcing the launch. This website uses no tracking cookies.
        </li>
      </ul>

      <h2>What we use it for</h2>
      <ul>
        <li>Providing the service: storing your documents, organizing them by trip and syncing them across your devices.</li>
        <li>Analyzing the documents you choose to analyze with AI, to extract their data.</li>
        <li>Sharing a trip with the people you invite — they only see that trip&apos;s documents.</li>
        <li>Keeping the app stable and diagnosing errors.</li>
      </ul>
      <p>We do not sell your data or use it for advertising. Full stop.</p>

      <h2>Legal bases</h2>
      <ul>
        <li>
          <strong>Performance of a contract:</strong> storing, organizing, analyzing and
          syncing your documents is the service you ask for by using Doku.
        </li>
        <li>
          <strong>Legitimate interest:</strong> keeping the app stable (error reports) and
          understanding how the product is used in order to improve it (metrics with no
          personal data beyond an internal identifier).
        </li>
        <li>
          <strong>Consent:</strong> joining the waitlist on this website and any
          communication you opt into. You can withdraw it at any time.
        </li>
      </ul>

      <h2>AI analysis</h2>
      <p>
        When you analyze a document, it is sent securely to Google&apos;s Gemini API to extract
        its data. Under the terms of Google&apos;s paid API, processed documents are not used
        to train their models. Analysis only happens when you request it (or when you share a
        file into the app), never on documents you did not upload.
      </p>

      <h2>Where and how it is stored</h2>
      <p>
        Your documents and data are stored in Supabase (database and file storage), encrypted
        in transit (TLS) and at rest. Access is restricted by row-level rules: each document is
        visible only to its owner and to members of trips it was explicitly shared with.
      </p>

      <h2>Providers that help us run the service</h2>
      <p>
        We do not share your data with third parties for their own purposes. We do use these
        providers (subprocessors), which process data solely to provide their service to us:
      </p>
      <ul>
        <li>
          <strong>Supabase</strong> — database, authentication and storage of your files.
        </li>
        <li>
          <strong>Google (Gemini API)</strong> — AI analysis of the documents you choose to
          analyze.
        </li>
        <li>
          <strong>Sentry</strong> — app error and crash reports.
        </li>
        <li>
          <strong>PostHog</strong> — product-usage metrics (it receives only the internal
          identifier and usage events, never your documents or your email).
        </li>
        <li>
          <strong>Vercel</strong> — hosting of this website.
        </li>
      </ul>

      <h2>International transfers</h2>
      <p>
        Some of these providers process data in the United States or other countries outside
        your own. When that happens, the transfer relies on contractual safeguards such as
        standard contractual clauses or applicable adequacy frameworks.
      </p>

      <h2>How long we keep it</h2>
      <p>
        For as long as your account exists. If you delete a document, it is removed from our
        storage. If you delete your account, your account, documents, trips and extracted data
        are deleted within 30 days.
      </p>

      <h2>Your rights</h2>
      <p>
        You can access your data and correct it directly in the app (every extracted field is
        editable). You can request full deletion of your account and data — see{' '}
        <a href="./account-deletion">how to delete your account</a>. For any other request
        (access, portability, restriction), write to{' '}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>

      <h2>Children</h2>
      <p>
        Doku is not directed at children under 13 and we do not knowingly collect their
        data. If you believe a child has given us their data, write to{' '}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a> and we will delete it.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If we change this policy in a substantial way, we will announce it in the app or by
        email before the change takes effect.
      </p>
    </>
  );
}
