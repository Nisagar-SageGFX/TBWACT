import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import navigation, { primaryCta } from '../data/navigation';
import { IconChevron } from './Icons';

export default function MobileMenu({ onNavigate }) {
  const { pathname } = useLocation();
  const aboutPaths = ['/about', '/board-of-trustees', '/our-vision'];
  const [expanded, setExpanded] = useState(aboutPaths.includes(pathname) ? 'About' : null);

  return (
    <div className="shell mobile-menu" id="mobile-menu">
      <nav aria-label="Mobile">
        {navigation.map((item) => {
          if (!item.children) {
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={onNavigate}
                className={({ isActive }) =>
                  `mobile-menu__link${isActive ? ' is-active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            );
          }

          const open = expanded === item.label;
          const sectionActive = item.children.some((c) => c.path === pathname);

          return (
            <div key={item.label}>
              <button
                type="button"
                className={`mobile-menu__toggle${sectionActive ? ' is-active' : ''}`}
                aria-expanded={open}
                onClick={() => setExpanded(open ? null : item.label)}
              >
                {item.label}
                <IconChevron
                  style={{ transform: open ? 'rotate(180deg)' : 'none' }}
                />
              </button>
              {open ? (
                <div className="mobile-menu__sub">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.path}
                      to={child.path}
                      onClick={onNavigate}
                      className={({ isActive }) =>
                        `mobile-menu__link${isActive ? ' is-active' : ''}`
                      }
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </nav>

      <Link
        to={primaryCta.path}
        onClick={onNavigate}
        className="btn btn--primary mobile-menu__cta"
      >
        {primaryCta.label}
      </Link>
    </div>
  );
}
