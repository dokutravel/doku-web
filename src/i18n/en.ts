export const en = {
  common: {
    appName: 'Doku',
    tagline: 'Your travel documents, organized',
  },
  nav: {
    how: 'How it works',
    features: 'Features',
    faq: 'FAQ',
    agencies: 'For agencies',
    joinWaitlist: 'Join the waitlist',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    title: 'Land with all your bookings right at your fingertips.',
    subtitle:
      'Stop digging through screenshots or emails. Doku organizes your documents into a travel itinerary, ready to use offline.',
    badge: 'Private beta — join early',
    chips: {
      platforms: 'iOS & Android',
      offline: 'Works offline',
      free: 'Your first trip is free',
    },
  },
  waitlist: {
    intro: 'Doku is in private beta. Leave your email and we will let you know the moment it launches.',
    placeholder: 'you@email.com',
    submit: 'Notify me',
    submitting: 'Sending…',
    privacyNote: 'One email when we launch. No spam, ever.',
    success: 'Done! We will email you as soon as Doku is available.',
    duplicate: 'That email is already on the list — thanks for the enthusiasm!',
    invalidEmail: 'That does not look like a valid email.',
    error: 'Something went wrong. Please try again in a minute.',
  },
  how: {
    label: 'How it works',
    title: 'Three steps. Zero folders.',
    steps: [
      {
        title: 'Share your bookings',
        body: 'Tap "Share" directly from your email, WhatsApp, or photo gallery and select Doku. Works with PDFs, screenshots, or booking confirmations—no need to open the app.',
        chip: 'From anywhere',
      },
      {
        title: 'Doku organizes everything for you',
        body: 'Doku recognizes flights, hotels, transport, activities, and insurance. It organizes them by itinerary, summarizes the key details, and keeps your voucher ready for whenever you need to show your booking.',
        chip: 'Reads any format',
      },
      {
        title: 'Your trip, ready to go',
        body: 'Each document is assigned to the right trip—organized and available 100% offline. Show your bookings at immigration, airports, or hotel check-ins without searching through emails or WhatsApp chats. All you have to do is enjoy the journey.',
        chip: 'Works offline',
      },
    ],
  },
  features: {
    label: 'Features',
    title: "Made for the moment you're actually traveling",
    subtitle: "Doku isn't another file drawer — it's your trip, organized.",
    items: [
      {
        key: 'categories',
        title: 'Every booking, understood',
        body: 'Flights, hotels, transport, activities and insurance — each type gets its own color, layout and key details.',
      },
      {
        key: 'offline',
        title: 'Offline when it counts',
        body: 'Download your trip before takeoff and open any document without a connection. No roaming required.',
      },
      {
        key: 'shared',
        title: "One trip, everyone's pocket",
        body: 'Invite your travel companions and everyone sees every document. No more "can you resend the voucher?".',
      },
      {
        key: 'insurance',
        title: 'Assistance one tap away',
        body: 'Your insurance emergency number is pinned to the top of every trip — call it without digging.',
      },
      {
        key: 'edit',
        title: 'You have the final say',
        body: 'Fix any field Doku got wrong, or add documents entirely by hand. You can change whatever you need.',
      },
      {
        key: 'privacy',
        title: 'Private by default',
        body: 'Encrypted in transit and at rest. Only you — and the people you invite — can see a trip.',
      },
    ],
  },
  categories: {
    flight: 'Flight',
    hotel: 'Hotel',
    transport: 'Transport',
    activity: 'Activity',
    insurance: 'Insurance',
    other: 'Other',
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        q: 'What is Doku?',
        a: 'Doku is a mobile app that organizes your travel documents. You share it your booking confirmations — flights, hotels, transport, activities, insurance — and it extracts the key details and groups everything by trip.',
      },
      {
        q: 'How does Doku organize my bookings?',
        a: 'When you share a PDF, screenshot or photo, Doku detects the document type and extracts dates, booking codes, times and passengers. Documents whose dates fall inside a trip are attached to it automatically; you can also assign anything by hand.',
      },
      {
        q: 'Does it work offline?',
        a: 'Yes. Travel mode downloads a whole trip to your phone, so boarding passes, vouchers and policies open instantly with no connection — exactly when you tend to have none.',
      },
      {
        q: 'What kinds of documents does it understand?',
        a: 'Flights, hotel bookings, ground transport (bus, train, ferry, transfers), activities and tours, and travel insurance or assistance policies. Anything else can be stored and organized manually.',
      },
      {
        q: 'Are my documents safe?',
        a: 'Your documents are stored encrypted and are only visible to your account and to people you explicitly share a trip with. See our privacy policy for the full picture.',
      },
      {
        q: 'How much does Doku cost?',
        a: [
          'Your first trip is 100% free: every new account automatically includes a free Trip Pass.',
          "A Trip Pass unlocks Doku's full potential: automatic voucher and document organization, seamless sharing with travel companions, and full offline access.",
          "Once you've used your free pass, you can choose the option that best fits your travel style:",
          '- Single Trip Pass (US$ 4.99): unlocks one specific trip forever.',
          '- Frequent Traveler - Annual Subscription (US$ 29.99): unlimited Trip Passes all year round.',
          "Want to use Doku for free forever? You can! The free version allows you to keep all your travel documents organized in one place. The only difference is that you'll enter your booking details manually instead of automatically.",
        ].join('\n'),
      },
      {
        q: 'iPhone or Android?',
        a: 'Both. Doku is built for iOS and Android from day one, in English and Spanish.',
      },
    ],
  },
  finalCta: {
    title: 'Your next trip, already organized',
    body: 'Join the waitlist and be first in when Doku launches.',
  },
  phone: {
    title: 'Trips',
    sectionLabel: 'Upcoming and ongoing',
    upcoming: 'Upcoming',
    tripPass: 'Trip Pass',
    trip1Title: 'Caribbean',
    trip1Places: 'Argentina · Aruba',
    trip1Dates: 'Jan 10 – Jan 17',
    flightTitle: 'Buenos Aires → Aruba',
    flightWhen: 'Sun, Jan 10, 08:40',
    hotelTitle: 'Barceló Aruba',
    hotelWhen: 'Jan 10 – Jan 17  ·  Palm Beach',
    trip1Docs: '4 documents',
    seeAll: 'See all',
    trip2Title: 'Barcelona conference',
    trip2Places: 'Spain',
    trip2Dates: 'Mar 03 – Mar 07',
    trip2Docs: '5 documents',
    tabTrips: 'Trips',
    tabDocuments: 'Documents',
  },
  footer: {
    product: 'Product',
    legal: 'Legal',
    privacy: 'Privacy policy',
    terms: 'Terms of service',
    deletion: 'Delete your account',
    support: 'Support',
    agencies: 'For travel agencies',
    copyright: '© 2026 Doku. All rights reserved.',
  },
  agencies: {
    underConstructionBadge: 'Under construction',
    underConstructionBody:
      "We haven't started building the agency product yet — this page shows where we're headed. The form below is for early interest only.",
    metaTitle: 'Doku for travel agencies',
    metaDescription:
      'Deliver organized trips to your clients: every voucher, ticket and policy in one app, offline, with your service behind it.',
    title: 'Doku for travel agencies',
    subtitle:
      'You already put the trip together. Deliver it like it deserves: every voucher, ticket and policy organized in one app your client opens at the airport — with your agency behind it.',
    bullets: [
      {
        title: 'Deliver trips, not attachments',
        body: 'Instead of a chain of emails and PDFs, your client gets one organized trip: flights, hotels, transfers and insurance in order.',
      },
      {
        title: 'Fewer "can you resend that?" messages',
        body: 'Everything lives in the trip, available offline. Your client stops digging through their inbox — and stops calling you for it.',
      },
      {
        title: 'Built on a real product',
        body: 'Doku is the same technology travelers use to organize their own documents, with AI extraction and shared trips.',
      },
    ],
    formTitle: 'We are building this with a small group of partner agencies',
    formIntro:
      'Interested? Tell us about your agency and we will get in touch as the agency product takes shape.',
    nameLabel: 'Your name',
    agencyLabel: 'Agency name',
    emailLabel: 'Work email',
    messageLabel: 'Anything you want to tell us (optional)',
    submit: 'I want to know more',
    submitting: 'Sending…',
    success: 'Thanks! We will be in touch soon.',
    duplicate: 'We already have your contact — we will reach out soon!',
    error: 'Something went wrong. Please try again in a minute.',
  },
  comingSoon: {
    title: 'Something good is being built here.',
    body: 'Doku will organize your travel documents and bookings — share a booking and your trip builds itself. All your booking confirmations, in one place. We are putting on the finishing touches.',
  },
  legal: {
    badgeLegal: 'Legal',
    badgeAccount: 'Account',
    privacyTitle: 'Privacy policy',
    termsTitle: 'Terms of service',
    deletionTitle: 'Delete your account',
    supportTitle: 'Support',
    lastUpdated: 'Last updated',
  },
  invite: {
    badge: 'Trip invitation',
    title: 'You have been invited to a trip on Doku',
    subtitle:
      'Doku keeps a trip’s documents in one place — flights, hotels, transport and insurance — and everyone invited sees the same thing, offline included.',
    hasApp: 'If you already have Doku, this opens in the app. If not, read on.',
    openApp: 'Open in Doku',
    getApp: 'Get Doku to accept it',
    storesSoon: 'Doku is in private beta. Leave your email and we will send you the link as soon as it is available.',
    whatIsIt: 'What you get',
    point1: 'Every booking for the trip in one place, filed by day.',
    point2: 'Available offline, for the moments with no connection.',
    point3: 'Nothing to pay: the person who invited you already covered this trip.',
    keepsWaiting: 'The invitation waits for you. Open it on the phone where you install Doku.',
    codeHeading: 'Your invitation code',
    codeHint: 'Tap the code to copy it. Doku asks for it under “Join a trip”, the first time you open the app.',
    codeCopy: 'Tap to copy',
    codeCopied: 'Copied',
    stepsHeading: 'How to join',
    step1: 'Copy the code above.',
    step2: 'Install Doku on your phone.',
    step3: 'Open the app, go to “Join a trip” and enter the code.',
  },
  meta: {
    inviteTitle: 'You have been invited to a trip',
    inviteDescription:
      'Someone shared a trip with you on Doku. Install the app to see every document for the trip, offline included.',
    homeTitle: 'Doku — Your travel documents, organized into an itinerary',
    ogImageAlt: 'Doku — All your bookings organized.',
    homeDescription:
      'Share a booking PDF and Doku reads it, classifies it and files it in your trip. Flights, hotels, transport and insurance — available offline, in English and Spanish.',
    privacyDescription: 'How Doku collects, uses and protects your data.',
    termsDescription: 'The terms that govern your use of Doku.',
    deletionDescription: 'How to delete your Doku account and all associated data.',
    supportDescription: 'Get help with Doku or contact the team.',
  },
};

/** English is the reference catalog: `es` must match this shape exactly, so a
 * missing or extra key in either language is a compile error. */
export type Dictionary = typeof en;
