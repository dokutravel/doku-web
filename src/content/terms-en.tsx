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
        extraction. Doku is currently in beta: the service may change, be interrupted or be
        limited while we build it.
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

      <h2>About AI extraction</h2>
      <p>
        <strong>AI can make mistakes.</strong> Extracted data (dates, times, codes, terminals)
        is an organizational aid, not an official document. Before traveling, always verify
        critical information against the original confirmation or with the provider (airline,
        hotel, insurer). Doku is not responsible for decisions made based on incorrectly
        extracted data.
      </p>

      <h2>Acceptable use</h2>
      <p>
        Do not use Doku to store or distribute illegal content, to attempt to access other
        users&apos; data, or to interfere with the service. We may suspend accounts that
        violate these terms.
      </p>

      <h2>Plans and pricing</h2>
      <p>
        During the beta, Doku is free. At launch there will be a free plan and paid plans;
        prices and limits will be communicated in the app before any charge.
      </p>

      <h2>Termination</h2>
      <p>
        You can stop using Doku and delete your account at any time. We may suspend or
        terminate the service (or an account) for violations of these terms, with reasonable
        notice when possible.
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
