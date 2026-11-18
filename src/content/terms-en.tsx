import { IoAlertCircleOutline } from 'react-icons/io5';

import { Callout } from '@/components/callout';
import { contactEmail } from '@/lib/site';

export function TermsEn() {
  return (
    <>
      <h2>Who we are</h2>
      <p>
        Doku is an app developed and operated by the Doku team, based in the Argentine Republic
        (&quot;Doku&quot; or &quot;we&quot;). By using Doku, you accept these Terms. Contact:{' '}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>

      <h2>The service</h2>
      <p>
        Doku lets you store, organize and share your travel documents, with data extraction
        assisted by artificial intelligence. Storing, opening, searching and organizing
        documents by hand is included in every plan.
      </p>
      <p>The service may change, be interrupted or be limited while it is still in development.</p>

      <h2>Your account</h2>
      <p>
        To use Doku you need a Google or Apple account. You are responsible for the activity on
        your account and for keeping access to your device secure.
      </p>

      <h2>Your content and your responsibility</h2>
      <p>
        The documents you upload are yours. You grant us a limited license to store, process
        and transmit them solely to provide the service to you.
      </p>
      <p>
        By uploading a document, you represent that you have the right to do so and that, if
        it contains other people&apos;s personal data (for example, other passengers on your
        booking), you have their consent or another legal basis to share it. Uploading forged,
        altered or illegal documents, or third parties&apos; documents without their
        authorization, is prohibited.
      </p>
      <p>
        <strong>Indemnification.</strong> You agree to hold Doku harmless from any claim,
        damage, fine or expense (including reasonable legal fees) that a third party brings
        against Doku because of the content you uploaded, because you shared third
        parties&apos; data without authorization, or because you breached these Terms.
      </p>

      <h2>Documents you should not upload</h2>
      <p>
        Doku is meant to organize travel booking documents: tickets, vouchers, accommodation
        confirmations, admission tickets and insurance policies. It is not designed to store
        identity documents (such as passports, national ID cards or driver&apos;s licenses) or
        other especially sensitive information, such as health data or financial data (card or
        bank account numbers).
      </p>
      <p>
        If you upload this kind of document anyway, you do so at your sole responsibility. To
        the extent permitted by law, Doku will not be liable for damages arising from storing
        that information.
      </p>

      <Callout tone="warning" icon={IoAlertCircleOutline}>
        <h3>Accuracy of information</h3>
        <p>
          Doku automatically extracts and organizes the data in your documents using artificial
          intelligence. This process can make mistakes: misreading a date, a time, a terminal,
          a flight number or a booking code, leaving information out, or assigning it to the
          wrong trip.
        </p>
        <p>
          The information Doku shows is an aid to help you get organized and does not replace
          the original documents or the provider&apos;s official information (airline,
          accommodation, insurer, etc.). Before traveling and before each step (check-in,
          boarding, arriving at your accommodation), it is your responsibility to check the
          important details against the original document or directly with the provider, and
          to watch for any changes they announce.
        </p>
        <p>
          To the extent permitted by law, Doku will not be liable for missed flights,
          connections or bookings, or for other damages arising from relying on incorrectly
          extracted, incomplete or outdated data without checking it.
        </p>
      </Callout>

      <h2>Acceptable use</h2>
      <p>
        You may not use Doku to store or distribute illegal content, try to access other
        users&apos; data or interfere with the operation of the service. We may suspend
        accounts that breach these Terms.
      </p>

      <h2>Plans and purchases</h2>
      <p>
        Pro features (automatic AI processing, sharing a trip and downloading for offline
        access) are enabled per trip, in two ways:
      </p>
      <ul>
        <li>
          <strong>Trip Pass:</strong> a one-time payment of US$4.99 that enables Pro features
          on one trip. It does not expire or renew. It is a consumable product.
        </li>
        <li>
          <strong>Frequent Traveler:</strong> an annual subscription of US$29.99 that enables
          Pro features on every trip you own while it is active.
        </li>
      </ul>
      <p>
        Dollar prices are for reference. The store shows you the final price in your local
        currency, including any applicable taxes, before you confirm the purchase, and that is
        the price that prevails.
      </p>

      <h3>The welcome pass</h3>
      <p>
        Every new account gets a free Trip Pass, which is applied automatically to the first
        trip you create. That is the free plan.
      </p>
      <p>
        A trip with no pass and no subscription runs no AI processing and cannot be shared or
        downloaded for offline access. Its documents can still be stored and organized by
        hand.
      </p>

      <h3>A pass unlocks a trip, not an account</h3>
      <p>
        A Trip Pass belongs to the trip, not to whoever bought it. Participants in a shared
        trip get the Pro features enabled by the person who organizes the trip. Accepting an
        invitation is free.
      </p>
      <p>
        A pass can only be applied to trips that have not ended. If you delete a trip with a
        pass, the pass is lost. The app warns you before deleting it.
      </p>

      <h3>Subscription renewal and cancellation</h3>
      <p>
        <strong>Frequent Traveler is an auto-renewing subscription.</strong> You are charged
        through the App Store or Google Play, and the charge repeats at the start of each
        annual period at the price in effect in your country.
      </p>
      <p>
        To stop it from renewing, you must cancel at least <strong>24 hours before</strong> the
        end of the period, from the store&apos;s subscription settings. Cancellation takes
        effect at the end of the period already paid. Deleting the app does not cancel the
        subscription.
      </p>
      <p>
        When the subscription expires, no new Pro features are enabled, but you keep your
        itinerary, accepted invitations and the files you already downloaded. Trips with a
        Trip Pass are not affected.
      </p>

      <h3>Fair use limit on AI processing</h3>
      <ul>
        <li>
          <strong>With a Trip Pass:</strong> at least 40 analyses per trip, for the whole life
          of the trip. It does not reset each month.
        </li>
        <li>
          <strong>With the annual subscription:</strong> at least 100 analyses per trip per
          month, while the subscription is active.
        </li>
      </ul>
      <p>
        Analyses that fail for reasons Doku detects, such as an AI provider error, an
        unreadable document or a file that is not a travel document, are not counted.
      </p>
      <p>
        Once the limit is reached, the trip accepts no new documents for processing, but all
        of its content remains available and you can create events by hand. We may raise these
        limits at any time. If we ever lower them, we will let you know in advance.
      </p>

      <h3>Payments and refunds</h3>
      <p>
        All purchases are processed through the App Store or Google Play. Doku does not
        process payments or access your payment details.
      </p>
      <p>
        Refunds are handled by Apple and Google under their own policies, and you request them
        from the store where you made the purchase. We can point you in the right direction,
        but the decision is the store&apos;s. If the store refunds a purchase, Doku may remove
        the features that purchase enabled.
      </p>

      <h2>Offline access and your device</h2>
      <p>
        To access your documents without internet, you first need to download them to your
        device with the offline access feature. Doku does not guarantee access to your
        documents, and will not be liable if you cannot open them, when that is due to
        circumstances of your device or beyond Doku&apos;s control, including:
      </p>
      <ul>
        <li>not having downloaded the documents beforehand;</li>
        <li>having cleared the cache, the app&apos;s data or the app itself;</li>
        <li>a dead battery, malfunction, loss or theft of the device;</li>
        <li>lack of storage space;</li>
        <li>operating system updates or device settings that prevent the app from opening;</li>
        <li>no internet connection when the documents had not been downloaded.</li>
      </ul>
      <p>
        We recommend always carrying a backup copy of your essential documents, printed or in
        another medium.
      </p>

      <h2>Shared trips</h2>
      <p>
        When you share a trip, participants can view and, depending on the role you assign
        them, add, edit or delete documents and data in that trip. The trip owner is
        responsible for choosing whom to invite and with what permissions, and can remove
        participants or delete the trip at any time. If the owner deletes the trip, all
        participants lose access to its documents, even while they are traveling.
      </p>
      <p>
        Doku is not a party to the relationships between a trip&apos;s participants. To the
        extent permitted by law, Doku will not be liable for the actions of other participants
        (such as deleting or modifying documents, changing data or deleting the trip) or for
        disagreements or claims that arise between them. We recommend that each participant
        keep their own copy of the documents they need to travel.
      </p>

      <h2>Third-party services and force majeure</h2>
      <p>
        Doku runs on third-party services, including Supabase (database and storage), Google
        Gemini (AI processing), the Apple App Store and Google Play (distribution and
        payments), Expo (notifications) and internet and hosting providers. We do not control
        those services.
      </p>
      <p>
        To the extent permitted by law, Doku will not be liable for interruptions, delays or
        failures of the service caused by outages or failures of those third parties, or by
        force majeure or unforeseeable events, such as power or internet outages, widespread
        infrastructure failures, natural disasters, conflicts, acts of authority or large-scale
        cyberattacks. This includes not being able to access your documents at a specific
        moment, such as check-in or boarding. That is why we recommend downloading them for
        offline access and carrying a backup copy.
      </p>

      <h2>Information security</h2>
      <p>
        We apply reasonable technical and organizational security measures to protect your
        data, such as encryption in transit and at rest and per-user access controls. However,
        no system connected to the internet is completely invulnerable, and we cannot
        guarantee absolute security.
      </p>
      <p>
        If a security incident affects your data, we will notify you without undue delay and
        take reasonable measures to contain and mitigate it. To the extent permitted by law,
        Doku will not be liable for unauthorized access, cyberattacks or leaks that occur
        despite reasonable security measures having been taken, or for those caused by the
        user, such as third parties accessing their device or their Google or Apple account.
      </p>

      <h2>Termination</h2>
      <p>
        You can stop using Doku and delete your account at any time. Deleting it erases your
        trips and the passes applied to them, with no right to a refund.
      </p>
      <p>
        We may suspend or terminate the service or an account for breaches of these Terms,
        with reasonable notice where possible.
      </p>

      <h2>Warranties and liability</h2>
      <p>
        The service is provided &quot;as is&quot; and &quot;as available&quot;, with no
        warranty of continuous availability or accuracy. To the fullest extent permitted by
        applicable law, Doku will not be liable for indirect damages, lost profits or lost
        opportunities, and its total liability to you is limited to the amount you paid for
        the service in the 12 months before the event giving rise to the claim.
      </p>
      <p>
        Nothing in these Terms limits the rights granted to you by applicable consumer
        protection law, or excludes Doku&apos;s liability for willful misconduct or gross
        negligence.
      </p>

      <h2>Governing law and jurisdiction</h2>
      <p>
        These Terms are governed by the laws of the Argentine Republic. Any dispute will be
        submitted to the competent ordinary courts of the Argentine Republic, without prejudice to the right
        of users who are consumers to bring claims before the courts of their place of
        residence, in accordance with applicable law.
      </p>

      <h2>Changes and contact</h2>
      <p>
        We may update these Terms. If we make substantial changes, we will announce them in the
        app before they take effect.
      </p>
      <p>
        For any question, write to <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>

      <h2>Who is behind Doku</h2>
      <p>
        The Doku team is made up of Manuel Bolla Agrelo and María Celeste Palacios, based in
        the Argentine Republic.
      </p>
    </>
  );
}
