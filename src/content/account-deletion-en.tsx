import { IoAlertCircleOutline } from 'react-icons/io5';

import { Callout } from '@/components/callout';
import { NumberedStep } from '@/components/numbered-step';
import { contactEmail } from '@/lib/site';

export function AccountDeletionEn() {
  return (
    <>
      <p>
        You can request full deletion of your Doku account and all associated data at any
        time.
      </p>

      <h2>How to delete your account</h2>
      <p>Directly from the app:</p>
      <div className="mb-4 flex flex-col gap-3">
        <NumberedStep n={1}>
          <p>
            Open Doku → <strong>Profile → Delete account</strong>.
          </p>
        </NumberedStep>
        <NumberedStep n={2}>
          <p>
            Type the confirmation word the screen asks for and tap{' '}
            <strong>&quot;Delete my account&quot;</strong>. Deletion is processed immediately.
          </p>
        </NumberedStep>
      </div>
      <p>
        If you cannot access the app, email us at{' '}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a> with the subject{' '}
        <strong>&quot;Delete account&quot;</strong>, from the same address you use to sign in
        to Doku (your Google or Apple account). We confirm the request by email and process
        the deletion.
      </p>

      <h2>What gets deleted</h2>
      <ul>
        <li>Your account and profile (name, email, photo).</li>
        <li>All your documents and stored files.</li>
        <li>Your trips and the data extracted by the AI.</li>
        <li>Your usage counters and plan data.</li>
      </ul>
      <Callout tone="danger" icon={IoAlertCircleOutline}>
        <p>
          In-app deletion is immediate; by email it is completed within{' '}
          <strong>30 days</strong> of confirming the request. Either way it is{' '}
          <strong>irreversible</strong>. Trips you created also disappear for the people you
          shared them with, and documents you shared into other people&apos;s trips stop being
          available to them.
        </p>
      </Callout>
    </>
  );
}
