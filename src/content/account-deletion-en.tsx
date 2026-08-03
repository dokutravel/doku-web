import { contactEmail } from '@/lib/site';

export function AccountDeletionEn() {
  return (
    <>
      <p>
        You can request full deletion of your Doku account and all associated data at any
        time.
      </p>

      <h2>How to delete your account</h2>
      <ul>
        <li>
          Email us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a> with the subject{' '}
          <strong>&quot;Delete account&quot;</strong>, from the same address you use to sign in
          to Doku (your Google or Apple account).
        </li>
        <li>We confirm the request by email and process the deletion.</li>
      </ul>

      <h2>What gets deleted</h2>
      <ul>
        <li>Your account and profile (name, email, photo).</li>
        <li>All your documents and stored files.</li>
        <li>Your trips and the data extracted by the AI.</li>
        <li>Your usage counters and plan data.</li>
      </ul>
      <p>
        Deletion is completed within <strong>30 days</strong> of confirming the request and is{' '}
        <strong>irreversible</strong>. Documents you shared into other people&apos;s trips stop
        being available to them.
      </p>

      <h2>Note</h2>
      <p>
        We are working on letting you delete your account directly from the app (Profile →
        Delete account). Until then, the email process is the official channel.
      </p>
    </>
  );
}
