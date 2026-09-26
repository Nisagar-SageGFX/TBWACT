import { Link } from 'react-router-dom';
import site from '../data/site';
import programs from '../data/programs';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="shell footer__grid">
        <div>
          {/* Logo only. Not a link, and no text beside it now, so the image
              carries the trust's name for assistive technology. */}
          <div className="footer__brand">
            <img
              src="/assets/tbwact-logo-transparent.webp"
              alt={site.name}
              className="footer__logo"
              width="96"
              height="96"
            />
          </div>
          <p>{site.intro}</p>
        </div>

        <div>
          <h2 className="footer__heading">Pages</h2>
          <ul>
            <li>
              <Link to="/about">About TBWACT</Link>
            </li>
            <li>
              <Link to="/board-of-trustees">Board of Trustees</Link>
            </li>
            <li>
              <Link to="/our-vision">Our Vision</Link>
            </li>
            <li>
              <Link to="/programs">Programs</Link>
            </li>
            <li>
              <Link to="/news-events">News &amp; Events</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer__heading">Programmes</h2>
          <ul>
            {programs.map((p) => (
              <li key={p.id}>
                <Link to={`/programs#${p.id}`}>{p.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer__heading">Reach us</h2>
          <p>
            {site.contact.addressLines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <ul>
            <li>
              <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="shell footer__bottom">
        <span>
          &copy; {year} {site.name}. Reg. No. {site.registrationNumber}.
        </span>
        <span className="footer__links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <a
            href="https://sagegfx.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__credit"
          >
            Developed by Sage GFX Digital Solution
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </span>
      </div>
    </footer>
  );
}
