import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import navigation, { primaryCta } from '../data/navigation';
import site from '../data/site';
import MobileMenu from './MobileMenu';
import { IconChevron } from './Icons';

function AboutDropdown({ item }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const closeTimer = useRef(null);
  const { pathname } = useLocation();

  const childPaths = item.children.map((c) => c.path);
  const sectionActive = childPaths.includes(pathname);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onDocClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
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
      <button
        type="button"
        className={`nav__link${sectionActive ? ' is-active' : ''}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <IconChevron className="nav__caret" />
      </button>
      {open ? (
        <div className="dropdown" role="menu" aria-label={`${item.label} pages`}>
          {item.children.map((child) => (
            <NavLink
              key={child.path}
              to={child.path}
              role="menuitem"
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
  const { pathname } = useLocation();

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className="header">
      <div className="shell header__bar">
        <Link to="/" className="header__brand" aria-label={`${site.shortName} home`}>
          <img
            src="/assets/tbwact-logo.jpeg"
            alt=""
            className="header__logo"
            width="50"
            height="50"
          />
          <span>
            <span className="header__name">{site.shortName}</span>
            <span className="header__full">{site.name}</span>
          </span>
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
          className={`burger${menuOpen ? ' is-open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
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
