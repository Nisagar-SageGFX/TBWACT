import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import navigation, { primaryCta } from '../data/navigation';
import site from '../data/site';
import MobileMenu from './MobileMenu';
import { IconChevron } from './Icons';

function AboutDropdown({ item }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const btnRef = useRef(null);
  const closeTimer = useRef(null);
  const { pathname } = useLocation();

  const childPaths = item.children.map((c) => c.path);
  const sectionActive = childPaths.includes(pathname);
  const panelId = `nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`;

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onDocClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      // Closing from inside the panel would otherwise drop focus onto <body>.
      if (wrapRef.current?.contains(document.activeElement)) btnRef.current?.focus();
    };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const hoverOpen = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hoverClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  return (
    <div
      className={`nav__item${open ? ' is-open' : ''}`}
      ref={wrapRef}
      onMouseEnter={hoverOpen}
      onMouseLeave={hoverClose}
      onBlur={(e) => {
        // Keep the menu open while focus is still inside it (tabbing to a link).
        if (!wrapRef.current?.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      {/* A disclosure, not an ARIA menu. role="menu'/'menuitem" promises
          arrow-key traversal that this control does not implement, and screen
          readers would announce the links as menu commands. A button with
          aria-expanded over plain links matches what it actually does. */}
      <button
        type="button"
        ref={btnRef}
        className={`nav__link${sectionActive ? ' is-active' : ''}`}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <IconChevron className="nav__caret" />
      </button>
      {open ? (
        <div className="dropdown" id={panelId}>
          {item.children.map((child) => (
            <NavLink
              key={child.path}
              to={child.path}
              className={({ isActive }) =>
                `dropdown__link${isActive ? ' is-active' : ''}`
              }
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerRef = useRef(null);
  const headerRef = useRef(null);
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // On the home page the header floats over the hero video instead of pushing
  // it down. It is transparent while the hero is behind it and turns solid
  // once the page scrolls, because over the white sections below, white nav
  // text on a transparent bar would be unreadable.
  const overlay = pathname === '/';

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!overlay) return undefined;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [overlay]);

  // Publish the header height as --header-h so the hero can pad its content
  // clear of the floating bar. Measured rather than hard-coded, because the
  // logo (and therefore the bar) changes height across breakpoints.
  useEffect(() => {
    const el = headerRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(() => {
      document.documentElement.style.setProperty('--header-h', el.offsetHeight + 'px');
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // The mobile menu sits in normal flow rather than trapping focus, so Tab
  // already reaches it — but Escape still has to be a way out.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      setMenuOpen(false);
      burgerRef.current?.focus();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className={`header${overlay ? ' header--overlay' : ''}${overlay && !scrolled && !menuOpen ? ' is-top' : ''}`}
    >
      <div className="shell header__bar">
        <Link to='/' className="header__brand" aria-label={`${site.shortName} home`}>
          {/* The logo is the whole brand: no text beside it. The link's
              aria-label supplies its accessible name, so the image itself is
              marked decorative rather than announced twice. */}
          <img
            src="/assets/tbwact-logo-transparent.webp"
            alt=""
            className="header__logo"
            width="60"
            height="60"
          />
        </Link>

        <nav className="nav" aria-label="Main">
          {navigation.map((item) =>
            item.children ? (
              <AboutDropdown key={item.label} item={item} />
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
              >
                {item.label}
              </NavLink>
            )
          )}
          <Link to={primaryCta.path} className="btn btn--primary header__cta">
            {primaryCta.label}
          </Link>
        </nav>

        <button
          type="button"
          ref={burgerRef}
          className={`burger${menuOpen ? ' is-open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls={menuOpen ? 'mobile-menu' : undefined}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
          <span className="visually-hidden">
            {menuOpen ? 'Close menu' : 'Open menu'}
          </span>
        </button>
      </div>

      {menuOpen ? <MobileMenu onNavigate={() => setMenuOpen(false)} /> : null}
    </header>
  );
}
