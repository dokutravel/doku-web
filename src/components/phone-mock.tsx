import Image from 'next/image';
import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';
import {
  IoAirplane,
  IoBed,
  IoChevronForward,
  IoCloudDone,
  IoDocuments,
  IoEllipsisVertical,
  IoLocationOutline,
  IoShieldCheckmark,
  IoTicket,
} from 'react-icons/io5';

import type { Dictionary } from '@/i18n/en';

/**
 * A stylized render of the app's trips screen, drawn with the design tokens —
 * deliberately an illustration, not a screenshot, so the copy follows the
 * locale and the rows can animate in.
 *
 * SOURCE OF TRUTH: the app's trips tab (doku/src/features/trips/screens/
 * trips-home-screen.tsx) and what it renders — AppHeader, SectionHeader,
 * TripCard, DocRow (compact), Pill, FloatingTabList. The screen is laid out in
 * the app's own dp at a 360-wide phone and scaled into the frame, so every size
 * below can be checked against those files one to one. When the trips screen
 * changes, redraw it here.
 */

// The frame's screen is 320 wide; the app is drawn at 360 and scaled down.
const APP_WIDTH = 360;
const SCALE = 320 / APP_WIDTH;

export function PhoneMock({ t }: { t: Dictionary }) {
  const p = t.phone;
  return (
    <div
      aria-hidden="true"
      className="relative w-[330px] rounded-[46px] bg-text p-[5px] shadow-phone"
    >
      <div className="relative flex h-[590px] w-[320px] flex-col overflow-hidden rounded-[42px] bg-background">
        {/* Camera cutout */}
        <div className="absolute left-1/2 top-3.5 z-20 h-[22px] w-[22px] -translate-x-1/2 rounded-pill bg-text" />

        {/* Status bar */}
        <div className="flex h-[38px] flex-none items-center justify-between px-6 pt-3.5 text-text">
          <span className="text-title-small">12:05</span>
          <span className="flex items-center gap-1.5">
            <svg width="15" height="12" viewBox="0 0 24 20" fill="currentColor">
              <path d="M12 3C7.5 3 3.7 4.9 1 8l11 12L23 8c-2.7-3.1-6.5-5-11-5z" />
            </svg>
            <svg width="19" height="12" viewBox="0 0 28 14" fill="currentColor">
              <rect x="1" y="1" width="24" height="12" rx="3" />
              <rect x="26" y="4.5" width="2" height="5" rx="1" />
            </svg>
          </span>
        </div>

        {/* The app screen, in app dp, scaled to the frame. */}
        <div className="relative flex-1 overflow-hidden">
          <div
            className="absolute left-0 top-0 h-[621px] origin-top-left"
            style={{ width: APP_WIDTH, transform: `scale(${SCALE})` }}
          >
            <div className="px-4">
              <AppHeader title={p.title} />

              <section className="flex flex-col gap-4">
                <SectionHeader title={p.sectionLabel} count={3} />

                <div className="flex flex-col gap-6">
                  {/* Featured trip: the next one, with its inline preview. */}
                  <TripCard
                    pass={p.tripPass}
                    title={p.trip1Title}
                    status={p.upcoming}
                    places={p.trip1Places}
                    dates={p.trip1Dates}
                  >
                    <DocRow
                      icon={IoAirplane}
                      tone="flight"
                      title={p.flightTitle}
                      when={p.flightWhen}
                      divider
                      className="animate-doc-in [animation-delay:0.3s]"
                    />
                    <DocRow
                      icon={IoBed}
                      tone="hotel"
                      title={p.hotelTitle}
                      when={p.hotelWhen}
                      className="animate-doc-in [animation-delay:0.6s]"
                    />
                    <CardFooter
                      types={[IoShieldCheckmark, IoAirplane, IoBed]}
                      count={p.trip1Docs}
                      seeAll={p.seeAll}
                      className="animate-doc-in [animation-delay:0.9s]"
                    />
                  </TripCard>

                  <TripCard
                    pass={p.tripPass}
                    title={p.trip2Title}
                    status={p.upcoming}
                    places={p.trip2Places}
                    dates={p.trip2Dates}
                    className="animate-doc-in [animation-delay:1.2s]"
                  >
                    <CardFooter
                      types={[IoShieldCheckmark, IoAirplane, IoBed, IoTicket]}
                      count={p.trip2Docs}
                    />
                  </TripCard>
                </div>
              </section>
            </div>

            <TabBar trips={p.tabTrips} documents={p.tabDocuments} />
          </div>
        </div>
      </div>
    </div>
  );
}

/** AppHeader: avatar (opens the drawer), centered title, the brand "+". */
function AppHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 pb-7 pt-6">
      <div className="flex min-w-12">
        {/* InitialAvatar's photo inside DrawerTrigger's 1px cardBorder ring. */}
        <span className="flex h-12 w-12 overflow-hidden rounded-pill border border-card-border">
          <Image src="/landing/avatar.jpg" alt="" width={48} height={48} className="h-full w-full object-cover" />
        </span>
      </div>
      <span className="flex-1 truncate text-center text-headline-medium text-text">{title}</span>
      <div className="flex min-w-12 justify-end">
        <span className="flex h-12 w-12 items-center justify-center rounded-pill bg-brand">
          {/* PlusSignIcon, 32. */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-on-brand">
            <path d="M6 12H18M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}

/** SectionHeader + CountPill. */
function SectionHeader({ title, count }: { title: string; count: number }) {
  return (
    <div className="flex items-center justify-between px-1">
      <span className="text-label-large text-text-secondary">{title}</span>
      <span className="flex min-w-6 items-center justify-center rounded-pill bg-background-element px-2 py-px text-body-medium text-text-secondary">
        {count}
      </span>
    </div>
  );
}

/** Pill: labelSmall on a soft tint, optional leading icon. */
function Pill({ label, className, icon }: { label: string; className: string; icon?: ReactNode }) {
  return (
    <span
      className={`flex flex-none items-center gap-1 rounded-pill px-2.5 py-1 text-label-small ${className}`}
    >
      {icon}
      {label}
    </span>
  );
}

/** CrownIcon, 12 wide (ProTripPill). */
function Crown() {
  return (
    <svg width="12" height="9" viewBox="0 0 16 12" fill="currentColor">
      <path d="M7.99992 0.5C7.87322 0.500199 7.7487 0.531612 7.63835 0.591215C7.52799 0.650818 7.43551 0.736608 7.3698 0.840333L4.55395 5.52863L1.1385 2.53068C1.0191 2.45698 0.880032 2.41783 0.737973 2.41791C0.595914 2.41799 0.456895 2.45731 0.337587 2.53115C0.21828 2.60499 0.123748 2.71021 0.0653287 2.8342C0.00690918 2.9582 -0.0129182 3.09569 0.00822419 3.2302L1.21924 10.8976C1.24537 11.0648 1.33325 11.2176 1.46692 11.3281C1.60059 11.4386 1.7712 11.4996 1.94781 11.5H14.051C14.2276 11.4996 14.3983 11.4386 14.5319 11.3281C14.6656 11.2176 14.7535 11.0648 14.7796 10.8976L15.9916 3.23115C16.013 3.09656 15.9933 2.95893 15.935 2.83478C15.8767 2.71063 15.7821 2.60525 15.6628 2.53128C15.5434 2.45732 15.4043 2.41791 15.2622 2.41781C15.12 2.4177 14.9808 2.4569 14.8613 2.53068L11.4459 5.52863L8.63004 0.840333C8.56432 0.736608 8.47184 0.650818 8.36149 0.591215C8.25113 0.531612 8.12662 0.500199 7.99992 0.5Z" />
    </svg>
  );
}

/** TripCard: border-only card on the screen background. */
function TripCard({
  pass,
  title,
  status,
  places,
  dates,
  className = '',
  children,
}: {
  pass: string;
  title: string;
  status: string;
  places: string;
  dates: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`overflow-hidden rounded-md border border-card-border bg-background ${className}`}>
      <div className="flex flex-col gap-2 p-4 pb-2">
        <div className="flex">
          <Pill label={pass} className="bg-brand-soft text-brand-strong" icon={<Crown />} />
        </div>
        <div className="flex items-center gap-2">
          <span className="flex-1 truncate text-headline-small text-text">{title}</span>
          <Pill label={status} className="bg-flight-soft text-flight" />
        </div>
        <div className="flex items-center gap-2">
          <span className="flex min-w-0 items-center gap-1.5 text-body-medium text-text-muted">
            <IoLocationOutline size={14} className="flex-none" />
            <span className="truncate">{places}</span>
          </span>
          <span className="ml-auto flex-none text-body-medium text-text-muted">{dates}</span>
        </div>
      </div>
      {children}
    </div>
  );
}

const tones = {
  flight: { soft: 'bg-flight-soft', color: 'text-flight' },
  hotel: { soft: 'bg-hotel-soft', color: 'text-hotel' },
};

/** DocRow, compact: category tile with the offline badge, title, when · where. */
function DocRow({
  icon: Icon,
  tone,
  title,
  when,
  divider = false,
  className = '',
}: {
  icon: IconType;
  tone: keyof typeof tones;
  title: string;
  when: string;
  divider?: boolean;
  className?: string;
}) {
  const { soft, color } = tones[tone];
  return (
    <div className={`flex items-center gap-4 px-4 py-5 ${divider ? 'border-b border-border' : ''} ${className}`}>
      <span className="relative flex-none">
        <span className={`flex h-11 w-11 items-center justify-center rounded-md ${soft}`}>
          <Icon size={20} className={color} />
        </span>
        <span className="absolute -bottom-[3px] -right-[3px] flex h-[22px] w-[22px] items-center justify-center rounded-pill bg-surface">
          <IoCloudDone size={16} className="text-success" />
        </span>
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-2">
        <span className="flex min-h-6 items-center">
          <span className="truncate text-title-small text-text">{title}</span>
        </span>
        <span className="flex min-h-6 items-center justify-between gap-2">
          <span className="truncate text-body-medium text-text-muted">{when}</span>
          <IoEllipsisVertical size={18} className="flex-none text-text-secondary" />
        </span>
      </span>
    </div>
  );
}

const typeColor = new Map<IconType, string>([
  [IoShieldCheckmark, 'text-insurance'],
  [IoAirplane, 'text-flight'],
  [IoBed, 'text-hotel'],
  [IoTicket, 'text-activity'],
]);

/** The card's doc-type/count footer that opens the trip detail. */
function CardFooter({
  types,
  count,
  seeAll,
  className = '',
}: {
  types: IconType[];
  count: string;
  seeAll?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-between border-t border-border px-4 py-2.5 ${className}`}>
      <span className="flex items-center gap-1.5 text-body-medium text-text-secondary">
        <span className="flex items-center gap-1">
          {types.map((Icon, i) => (
            <Icon key={i} size={15} className={typeColor.get(Icon)} />
          ))}
        </span>
        {count}
      </span>
      <span className="flex items-center gap-1">
        {seeAll && <span className="text-title-small text-brand-strong">{seeAll}</span>}
        <IoChevronForward size={16} className="text-text-secondary" />
      </span>
    </div>
  );
}

/** FloatingTabList: surface pill, the brand indicator behind the active tab. */
function TabBar({ trips, documents }: { trips: string; documents: string }) {
  return (
    <div className="absolute inset-x-0 bottom-0 flex justify-center pb-4">
      <div className="flex items-center rounded-pill border border-border bg-surface p-1 shadow-card">
        <span className="flex h-[54px] w-[120px] flex-col items-center justify-center gap-[3px] rounded-pill bg-brand px-2">
          <IoAirplane size={20} className="text-on-brand" />
          <span className="text-label-medium text-on-brand">{trips}</span>
        </span>
        <span className="flex h-[54px] w-[120px] flex-col items-center justify-center gap-[3px] px-2">
          <IoDocuments size={20} className="text-text-secondary" />
          <span className="text-label-medium text-text-secondary">{documents}</span>
        </span>
      </div>
    </div>
  );
}
