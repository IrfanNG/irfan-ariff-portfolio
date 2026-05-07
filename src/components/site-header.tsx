'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Download, Menu, X } from 'lucide-react';

type HeaderLink = {
  label: string;
  href: string;
  external?: boolean;
};

type HeaderAction = {
  label: string;
  href: string;
  variant?: 'solid' | 'ghost';
  external?: boolean;
  download?: boolean;
};

type SiteHeaderProps = {
  brandLabel: string;
  brandHref: string;
  navLinks: HeaderLink[];
  actions: HeaderAction[];
};

function HeaderLinkItem({ link, onNavigate }: { link: HeaderLink; onNavigate?: () => void }) {
  const className = 'topbar-link';

  if (link.external) {
    return (
      <a className={className} href={link.href} onClick={onNavigate}>
        {link.label}
      </a>
    );
  }

  return (
    <Link className={className} href={link.href} onClick={onNavigate}>
      {link.label}
    </Link>
  );
}

function HeaderActionItem({
  action,
  onNavigate,
}: {
  action: HeaderAction;
  onNavigate?: () => void;
}) {
  const className = `button ${action.variant === 'solid' ? 'button-solid' : 'button-ghost'} topbar-action-button`;
  const content = (
    <>
      {action.download ? <Download size={16} strokeWidth={2} /> : null}
      {action.label}
    </>
  );

  if (action.external) {
    return (
      <a className={className} href={action.href} download={action.download} onClick={onNavigate}>
        {content}
      </a>
    );
  }

  return (
    <Link className={className} href={action.href} download={action.download} onClick={onNavigate}>
      {content}
    </Link>
  );
}

export default function SiteHeader({ brandLabel, brandHref, navLinks, actions }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    function onPointerDown(event: MouseEvent | TouchEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
    };
  }, []);

  return (
    <header ref={rootRef} className="topbar">
      <Link className="topbar-brand" href={brandHref} aria-label={brandLabel}>
        {brandLabel}
      </Link>

      <nav className="topbar-nav topbar-desktop-only" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <HeaderLinkItem key={`${link.label}-${link.href}`} link={link} />
        ))}
      </nav>

      <div className="topbar-actions topbar-desktop-only">
        {actions.map((action) => (
          <HeaderActionItem key={`${action.label}-${action.href}`} action={action} />
        ))}
      </div>

      <button
        type="button"
        className="topbar-menu-button topbar-mobile-only"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={18} strokeWidth={2} /> : <Menu size={18} strokeWidth={2} />}
        <span>{open ? 'Close' : 'Menu'}</span>
      </button>

      {open ? (
        <div id="mobile-menu" className="topbar-mobile-panel topbar-mobile-only">
          <nav className="topbar-mobile-group" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <HeaderLinkItem key={`${link.label}-${link.href}`} link={link} onNavigate={() => setOpen(false)} />
            ))}
          </nav>

          <div className="topbar-mobile-group">
            {actions.map((action) => (
              <HeaderActionItem
                key={`${action.label}-${action.href}`}
                action={action}
                onNavigate={() => setOpen(false)}
              />
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
