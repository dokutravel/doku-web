import { IoAlertCircleOutline } from 'react-icons/io5';

import { Callout } from '@/components/callout';
import { contactEmail } from '@/lib/site';

export function TermsEn() {
  return (
    <>
      <p>
        These terms govern your use of Doku, the app and its associated services. By creating
        an account or using the app you accept these terms.
      </p>

      <h2>The service</h2>
      <p>
        Doku lets you store, organize and share travel documents, with AI-assisted data
        extraction. Storing documents and trips, opening them, searching them and organizing
        them by hand is always included, on any plan. The service may change, be interrupted
        or be limited while we develop it.
      </p>

      <h2>Your account</h2>
      <p>
        You need a Google or Apple account to sign in. You are responsible for the activity on
        your account and for keeping access to your device secure.
      </p>

      <h2>Your content</h2>
      <p>
        The documents you upload are yours. You grant us a limited license to store, process
        and transmit them for the sole purpose of providing the service (including the AI
        analysis you request and the trip sharing you initiate). Do not upload documents you
        have no rights to.
      </p>

      <Callout tone="warning" icon={IoAlertCircleOutline}>
        <h3>About AI extraction</h3>
        <p>
          <strong>AI can make mistakes.</strong> Extracted data (dates, times, codes,
          terminals) is an organizational aid, not an official document. Before traveling,
          always verify critical information against the original confirmation or with the
          provider (airline, hotel, insurer). Doku is not responsible for decisions made based
          on incorrectly extracted data.
        </p>
      </Callout>

      <h2>Acceptable use</h2>
      <p>
        Do not use Doku to store or distribute illegal content, to attempt to access other
        users&apos; data, or to interfere with the service. We may suspend accounts that
        violate these terms.
      </p>

      <h2>Plans and purchases</h2>
      <p>
        The features Doku calls Pro — automatic AI analysis, sharing a trip, and downloading
        it for offline use — are enabled per trip. There are two ways to enable them:
      </p>
      <ul>
        <li>
          <strong>Trip Pass</strong> — a one-time payment of US$4.99 that enables the Pro
          features on one specific trip, with no expiry date and no renewal. It is a
          consumable product: it is not charged again and does not renew on its own.
        </li>
        <li>
          <strong>Frequent Traveler</strong> — an annual subscription of US$29.99 per year
          that enables the Pro features on every trip you own while the subscription is
          active. It renews automatically.
        </li>
      </ul>
      <p>
        The prices shown are the reference prices in US dollars. The stores apply regional
        pricing and currency conversion: the final price in your country, with any applicable
        taxes, is shown by the App Store or Google Play before you confirm the purchase, and
        that price prevails.
      </p>

      <h3>The welcome pass</h3>
      <p>
        Every new account receives one Trip Pass at no cost, which is applied automatically to
        the first trip you create. That is Doku&apos;s free plan: one trip with the Pro
        features enabled. A trip with no pass and no active subscription does not run AI
        analysis, cannot be shared and is not downloaded for offline use, but you can still
        store and organize its documents by hand.
      </p>

      <h3>A pass enables a trip, not an account</h3>
      <p>
        A Trip Pass is a property of the trip it is applied to, not of the person who bought
        it. Applying it to one trip does not enable the Pro features on your other trips.
        People taking part in a shared trip see it enabled because the trip organizer paid for
        it; accepting an invitation and taking part in a shared trip costs nothing.
      </p>
      <p>
        A pass is applied to a trip that has not ended yet. If you delete a trip you applied a
        pass to, the pass is lost along with the trip and does not become available again. The
        app warns you before you delete it.
      </p>

      <h3>Subscription renewal and cancellation</h3>
      <p>
        <strong>Frequent Traveler is an auto-renewing subscription.</strong> The period is one
        year and the reference price is US$29.99 per year. It is charged to your App Store or
        Google Play account when you confirm the purchase, and again automatically at the
        start of each new annual period, at the price then in effect in your country, unless
        you cancel first.
      </p>
      <p>
        To avoid renewal, cancel the subscription at least <strong>24 hours before</strong> the
        end of the current period, from the subscription settings of your App Store or Google
        Play account. The cancellation takes effect at the end of the period already paid for:
        you keep the Pro features until that date. Deleting the app does not cancel the
        subscription.
      </p>
      <p>
        When a subscription lapses, Doku stops enabling new Pro features, but it does not take
        back what has already been done: the itinerary already organized is kept, people who
        already accepted an invitation stay in the trip, and files already downloaded still
        open offline. Trips with a Trip Pass are unaffected by a subscription lapsing.
      </p>

      <h3>Fair use limit on AI analysis</h3>
      <p>
        Automatic AI analysis is subject to a fair use limit, meant to prevent abuse rather
        than to constrain normal use of a trip:
      </p>
      <ul>
        <li>
          <strong>With a Trip Pass:</strong> at least 40 analyses on that trip, for the whole
          life of the trip. It does not reset month to month.
        </li>
        <li>
          <strong>With the annual subscription:</strong> at least 100 analyses per trip per
          month, while the subscription is active.
        </li>
      </ul>
      <p>
        An analysis is the AI processing of one document. Analyses that fail for reasons Doku
        detects on its own are not counted: an error from the AI provider, an unreadable
        document, or a file that turns out not to be a travel document.
      </p>
      <p>
        When a trip reaches the limit, that trip stops accepting new documents for analysis;
        everything already there stays available and you can keep creating events by hand. We
        may raise these limits at any time. If we ever had to lower them, we will announce it
        before the change takes effect.
      </p>

      <h3>Payments and refunds</h3>
      <p>
        Purchases are processed entirely through the App Store or Google Play. Doku does not
        process payments directly and has no access to your payment details.
      </p>
      <p>
        Refunds are handled by Apple and Google under their own policies, and must be
        requested from the store where the purchase was made. If you need help with that,
        write to <a href={`mailto:${contactEmail}`}>{contactEmail}</a>; we can point you in the
        right direction, but the refund decision is the store&apos;s. If Apple or Google refund
        a purchase, Doku may withdraw the features that purchase enabled.
      </p>

      <h2>Termination</h2>
      <p>
        You can stop using Doku and delete your account at any time. Deleting your account
        deletes your trips and, with them, the passes applied to those trips; it does not
        create a right to a refund. We may suspend or terminate the service (or an account)
        for violations of these terms, with reasonable notice when possible.
      </p>

      <h2>Warranties and liability</h2>
      <p>
        The service is provided &quot;as is&quot;, without warranties of availability or
        accuracy. To the maximum extent permitted by law, our total liability to you is limited
        to the amount you paid for the service in the last 12 months.
      </p>

      <h2>Changes and contact</h2>
      <p>
        We may update these terms; substantial changes will be announced in the app.
        Questions: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
    </>
  );
}
