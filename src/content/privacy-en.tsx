import { IoSparkles } from 'react-icons/io5';

import { Callout } from '@/components/callout';
import { contactEmail } from '@/lib/site';

export function PrivacyEn() {
  return (
    <>
      <Callout tone="brand" icon={IoSparkles}>
        <p>
          In short: your documents are yours. We do not sell your data or use it for
          advertising.
        </p>
      </Callout>
      <p>
        This policy explains what data we collect, what we use it for, and what your rights
        are.
      </p>

      <h2>Who is responsible</h2>
      <p>
        The data controller is the Doku team. For any question about your data, write to{' '}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Account data:</strong> your name, email and profile photo, when you sign in
          with Google or Apple. We never see your password.
        </li>
        <li>
          <strong>Your documents:</strong> the files you upload or share with Doku (PDF
          bookings, screenshots, tickets, vouchers, insurance policies) and the data extracted
          from them (dates, booking codes, times, passengers, destinations).
        </li>
        <li>
          <strong>Shared trips and invitations:</strong> the trip, who invited whom, the role
          assigned, the invitation&apos;s expiry date and the invited person&apos;s email, if
          the invitation is sent by email. When an invitation is accepted, we record the
          trip&apos;s members and their roles.
        </li>
        <li>
          <strong>Purchases:</strong> what you bought (Trip Pass or annual subscription), when,
          which trip it applies to and the store transaction identifier. We neither receive
          nor store your payment details.
        </li>
        <li>
          <strong>Notifications:</strong> your device&apos;s notification token and its
          platform (iOS or Android), if you turn notifications on.
        </li>
        <li>
          <strong>Technical data:</strong> error and crash reports (Sentry), per-trip AI usage
          counters used to enforce the fair use limits, and product-usage metrics (PostHog)
          tied to a random internal identifier, never to your name, your email or the content
          of your documents.
        </li>
        <li>
          <strong>On this website:</strong> if you join the waitlist, we store your email only
          to let you know about the launch. The site uses no tracking cookies.
        </li>
      </ul>

      <h2>What we use it for</h2>
      <ul>
        <li>Providing the service: storing your documents, organizing them by trip and syncing them across your devices.</li>
        <li>Processing your documents with artificial intelligence when your trip has a Trip Pass or you have the annual plan.</li>
        <li>Sharing trips with the people you invite, who only see that trip&apos;s documents.</li>
        <li>Sending you notifications about activity in your shared trips and changes to your plan, if you turned them on.</li>
        <li>Recording your purchases and enabling paid features.</li>
        <li>Keeping the app stable and diagnosing errors.</li>
      </ul>
      <p>We do not sell your data or use it for advertising.</p>

      <h2>Legal bases</h2>
      <ul>
        <li>
          <strong>Performance of the contract:</strong> storing, processing, syncing and
          sharing your documents, and recording your purchases.
        </li>
        <li>
          <strong>Legitimate interest:</strong> keeping the app stable and understanding how
          the product is used, with metrics that do not identify you.
        </li>
        <li>
          <strong>Consent:</strong> notifications, the waitlist and optional communications.
          You can withdraw it at any time.
        </li>
        <li>
          <strong>Legal obligation:</strong> keeping purchase records for as long as tax and
          accounting rules require.
        </li>
      </ul>

      <h2>Artificial intelligence processing</h2>
      <p>
        If your trip has an active Trip Pass or you have the annual Frequent Traveler plan,
        the documents you upload or share with Doku are sent securely and automatically to
        Google&apos;s Gemini API to extract and organize their information. In a trip with
        no pass and no subscription, documents are stored and organized by hand, with no AI
        processing.
      </p>
      <p>
        Under the terms of Google&apos;s paid API, processed documents are not used to train
        their models. We only process the documents you upload or share with the app.
      </p>

      <h2>Sensitive documents</h2>
      <p>
        Doku is designed to organize travel-related documents such as tickets, accommodation
        bookings, vouchers, admission tickets and insurance policies. It is not designed to
        store identity documents (passports, national ID cards, driver&apos;s licenses, visas)
        or sensitive data such as health or financial information.
      </p>
      <p>
        For that reason, we ask you not to upload them. If you do, that data is treated like
        any other document, including automatic AI processing when your plan includes it.
      </p>

      <h2>Where and how it is stored</h2>
      <p>
        Your data is stored in Supabase, encrypted in transit (TLS) and at rest. Row-level
        security rules restrict access so that each document can only be seen by its owner
        and by members of the trips it was explicitly shared with.
      </p>
      <p>
        <strong>Security incidents.</strong> If we detect a security incident affecting your
        personal data, we will tell you without undue delay, along with the measures taken and
        any relevant recommendations.
      </p>

      <h2>Providers that help us run the service</h2>
      <p>
        We do not share your data with third parties for their own purposes. We use these
        providers to run the service:
      </p>
      <ul>
        <li>
          <strong>Supabase:</strong> database, authentication and file storage.
        </li>
        <li>
          <strong>Google (Gemini API):</strong> AI processing of documents in trips with a
          Trip Pass or the annual plan.
        </li>
        <li>
          <strong>RevenueCat:</strong> purchase and subscription management. It receives an
          account identifier and the state of your purchases, never your documents.
        </li>
        <li>
          <strong>Apple and Google:</strong> process payments through the App Store and Google
          Play, as independent controllers under their own policies.
        </li>
        <li>
          <strong>Expo:</strong> delivers notifications. The text of a notification may
          include a trip&apos;s name and the name of the person who performed an activity.
        </li>
        <li>
          <strong>Sentry:</strong> app error and crash reports.
        </li>
        <li>
          <strong>PostHog:</strong> product-usage metrics. It only receives the internal
          identifier and usage events.
        </li>
        <li>
          <strong>Vercel:</strong> hosting of the website.
        </li>
      </ul>

      <h2>International transfers</h2>
      <p>
        Some of these providers process data in the United States or in countries other than
        yours. These transfers rely on contractual safeguards, such as standard contractual
        clauses or applicable adequacy frameworks.
      </p>

      <h2>How long we keep it</h2>
      <ul>
        <li>We keep your data for as long as your account exists.</li>
        <li>If you delete a document, it is removed from storage.</li>
        <li>
          If you delete your account, we delete your account, documents, trips, invitations,
          notification tokens and extracted data within 30 days.
        </li>
        <li>
          Purchase records (product, date and transaction identifier) are kept unlinked from
          your account for as long as tax and accounting rules require.
        </li>
      </ul>

      <h2>Your rights</h2>
      <ul>
        <li>
          You can view and correct your data directly in the app, where every extracted field
          can be edited.
        </li>
        <li>
          You can turn notifications off at any time from your device or app settings.
        </li>
        <li>
          You can delete your account and all your data by following the instructions on the{' '}
          <a href="./account-deletion">account deletion page</a>, or by writing to{' '}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </li>
        <li>
          For other requests, such as access, portability or restriction of processing, write
          to <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </li>
      </ul>
      <p>
        You can exercise your rights of access, rectification, updating and deletion of your
        data under Argentina&apos;s Personal Data Protection Law No. 25,326. The Agency for
        Access to Public Information (AAIP), the authority that enforces that law, handles
        complaints and claims from anyone who believes their rights have been affected.
      </p>

      <h2>Minors</h2>
      <p>
        Doku is not directed at anyone under 18 and we do not knowingly collect their
        data. If you believe a minor has given us their data, write to{' '}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a> and we will delete it.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If we make substantial changes to this policy, we will let you know in the app or by
        email before they take effect.
      </p>

      <h2>Who is behind Doku</h2>
      <p>
        The Doku team is made up of Manuel Bolla Agrelo and María Celeste Palacios, based in
        the Argentine Republic.
      </p>
    </>
  );
}
