import {
  IoAdd,
  IoAirplane,
  IoBed,
  IoChevronForward,
  IoCloudDone,
  IoCloudDownloadOutline,
  IoDocuments,
  IoEllipsisVertical,
  IoLocationOutline,
  IoPeople,
  IoPerson,
  IoShieldCheckmark,
} from 'react-icons/io5';

import type { Dictionary } from '@/i18n/en';

/**
 * A stylized render of the app's trips screen, drawn with the design tokens —
 * deliberately an illustration, not a screenshot, so it never goes stale and
 * adapts to light/dark like the real app.
 */
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

        <div className="flex-1 overflow-hidden px-3.5">
          {/* Screen header */}
          <div className="flex items-center gap-2 px-0.5 pb-4 pt-3">
            <span className="flex-1 text-title-large text-text">{p.title}</span>
            <span className="flex h-[34px] w-[34px] items-center justify-center rounded-pill bg-brand">
              <IoAdd size={20} className="text-on-brand" />
            </span>
          </div>
          <div className="flex items-center justify-between px-1 pb-3">
            <span className="text-label-large text-text-secondary">{p.sectionLabel}</span>
            <span className="min-w-5 rounded-pill bg-background-element px-2 py-px text-center text-body-small text-text-secondary">
              2
            </span>
          </div>

          {/* Ongoing trip card */}
          <div className="overflow-hidden rounded-md border border-card-border bg-surface">
            <div className="flex flex-col gap-1 px-3.5 pb-2 pt-3.5">
              <div className="flex items-center gap-2">
                <span className="flex-1 text-title-large text-text">{p.trip1City}</span>
                <IoPeople size={14} className="text-brand-strong" />
                <span className="rounded-pill bg-success-soft px-2 py-0.5 text-label-small text-success">
                  {p.ongoing}
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-body-medium text-text-secondary">
                <IoLocationOutline size={13} />
                {p.trip1Meta}
              </span>
            </div>
            {/* Assistance is always surfaced first, with the pinned-doc wash. */}
            <div className="animate-doc-in flex items-center gap-3 border-t border-border bg-insurance-wash px-3.5 py-2.5 [animation-delay:0.3s]">
              <span className="relative flex-none">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-insurance-soft">
                  <IoShieldCheckmark size={18} className="text-insurance" />
                </span>
                <span className="absolute -bottom-0.5 -right-0.5 flex h-[18px] w-[18px] items-center justify-center rounded-pill bg-surface">
                  <IoCloudDone size={12} className="text-success" />
                </span>
              </span>
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-title-small text-text">{p.insuranceTitle}</span>
                <span className="truncate text-body-medium text-text-secondary">
                  {p.insuranceMeta}
                </span>
              </span>
              <span className="flex flex-none flex-col items-end gap-1">
                <span className="whitespace-nowrap text-label-small text-text">
                  {p.insuranceDate}
                </span>
                <IoEllipsisVertical size={14} className="text-text-secondary" />
              </span>
            </div>
            <div className="animate-doc-in flex items-center gap-3 border-t border-border px-3.5 py-2.5 [animation-delay:0.6s]">
              <span className="relative flex-none">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-flight-soft">
                  <IoAirplane size={18} className="text-flight" />
                </span>
                <span className="absolute -bottom-0.5 -right-0.5 flex h-[18px] w-[18px] items-center justify-center rounded-pill bg-surface">
                  <IoCloudDone size={12} className="text-success" />
                </span>
              </span>
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-title-small text-text">{p.flightTitle}</span>
                <span className="truncate text-body-medium text-text-secondary">
                  {p.flightMeta}
                </span>
              </span>
              <span className="flex flex-none flex-col items-end gap-1">
                <span className="whitespace-nowrap text-label-small text-text">
                  {p.flightDate}
                </span>
                <IoEllipsisVertical size={14} className="text-text-secondary" />
              </span>
            </div>
            <div className="animate-doc-in flex items-center gap-3 border-t border-border px-3.5 py-2.5 [animation-delay:0.9s]">
              <span className="relative flex-none">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-hotel-soft">
                  <IoBed size={18} className="text-hotel" />
                </span>
                <span className="absolute -bottom-0.5 -right-0.5 flex h-[18px] w-[18px] items-center justify-center rounded-pill bg-surface">
                  <IoCloudDownloadOutline size={12} className="text-brand-strong" />
                </span>
              </span>
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-title-small text-text">{p.hotelTitle}</span>
                <span className="truncate text-body-medium text-text-secondary">{p.hotelMeta}</span>
              </span>
              <span className="flex flex-none flex-col items-end gap-1">
                <span className="whitespace-nowrap text-label-small text-text">
                  {p.hotelDate}
                </span>
                <IoEllipsisVertical size={14} className="text-text-secondary" />
              </span>
            </div>
            <div className="animate-doc-in flex items-center justify-between border-t border-border px-3.5 py-2.5 [animation-delay:1.2s]">
              <span className="flex items-center gap-1.5 text-body-medium text-text-secondary">
                <span className="flex items-center gap-1">
                  <IoShieldCheckmark size={14} className="text-insurance" />
                  <IoAirplane size={14} className="text-flight" />
                  <IoBed size={14} className="text-hotel" />
                </span>
                {p.trip1Docs}
              </span>
              <span className="flex items-center gap-1">
                <span className="text-title-small text-brand-strong">{p.seeAll}</span>
                <IoChevronForward size={15} className="text-text-secondary" />
              </span>
            </div>
          </div>

          {/* Upcoming trip card */}
          <div className="animate-doc-in mt-3 overflow-hidden rounded-md border border-card-border bg-surface [animation-delay:1.5s]">
            <div className="flex flex-col gap-1 px-3.5 pb-2 pt-3.5">
              <div className="flex items-center gap-2">
                <span className="flex-1 text-title-large text-text">{p.trip2City}</span>
                <span className="rounded-pill bg-flight-soft px-2 py-0.5 text-label-small text-flight">
                  {p.upcoming}
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-body-medium text-text-secondary">
                <IoLocationOutline size={13} />
                {p.trip2Meta}
              </span>
            </div>
            <div className="flex items-center justify-between border-t border-border px-3.5 py-2.5">
              <span className="flex items-center gap-1.5 text-body-medium text-text-secondary">
                <span className="flex items-center gap-1">
                  <IoAirplane size={14} className="text-flight" />
                  <IoBed size={14} className="text-hotel" />
                </span>
                {p.trip2Docs}
              </span>
              <IoChevronForward size={15} className="text-text-secondary" />
            </div>
          </div>
        </div>

        {/* Floating pill tab bar */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center pb-3">
          <div className="flex items-center rounded-pill border border-border bg-surface p-1 shadow-card">
            <span className="flex h-12 w-[82px] flex-col items-center justify-center gap-0.5 rounded-pill bg-brand">
              <IoAirplane size={17} className="text-on-brand" />
              <span className="text-label-small text-on-brand">{p.tabTrips}</span>
            </span>
            <span className="flex h-12 w-[82px] flex-col items-center justify-center gap-0.5">
              <IoDocuments size={17} className="text-text-secondary" />
              <span className="text-label-small text-text-secondary">{p.tabDocuments}</span>
            </span>
            <span className="flex h-12 w-[82px] flex-col items-center justify-center gap-0.5">
              <IoPerson size={17} className="text-text-secondary" />
              <span className="text-label-small text-text-secondary">{p.tabProfile}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
