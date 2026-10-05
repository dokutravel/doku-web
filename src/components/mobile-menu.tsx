'use client';

import Link from 'next/link';
import { useEffect, useId, useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';

import { ButtonLink } from '@/components/button-link';
import { Container } from '@/components/container';

export type NavLink = { href: string; label: string };

/**
 * The header's nav below `md`: the section links and the waitlist CTA fold into
 * a panel that drops under the header, so the bar itself only carries the logo,
 * the language switcher and this toggle.
 *
 * The panel is positioned against the sticky <header>, so it spans the full
 * width and scrolls with it.
 */
export function MobileMenu({
  links,
  cta,
  openLabel,
  closeLabel,
}: {
  links: NavLink[];
  cta: NavLink;
  openLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? closeLabel : openLabel}
        className="flex h-11 w-11 items-center justify-center rounded-sm text-text transition-colors hover:bg-background-element"
      >
        {open ? <IoClose size={24} aria-hidden /> : <IoMenu size={24} aria-hidden />}
      </button>

      {open ? (
        <div id={panelId} className="absolute inset-x-0 top-full border-b border-border bg-background shadow-card">
          <Container className="flex flex-col gap-1 py-4">
            <nav aria-label="Main" className="flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="rounded-sm px-2 py-3 text-title-medium text-text hover:bg-background-element"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <ButtonLink href={cta.href} className="mt-3 w-full" onClick={close}>
              {cta.label}
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </div>
  );
}
