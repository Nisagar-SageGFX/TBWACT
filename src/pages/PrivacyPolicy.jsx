import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import PageBanner from '../components/PageBanner';
import { seo } from '../data/seo';
import site from '../data/site';

/**
 * Every statement here describes how the site is actually built — checked in
 * the code, not assumed. It makes no legal claims (retention periods, lawful
 * bases, statutory rights) because those are the trust's to decide. If the
 * site gains analytics, cookies, a form backend or a new embed, this page must
 * be updated at the same time.
 */
export default function PrivacyPolicy() {
  const { email, phone, phoneHref } = site.contact;

  return (
    <>
      <SEO meta={seo.privacy} />
      <PageBanner
        title="Privacy Policy"
        lead="What information this website handles, and who it is shared with."
      />
      <Breadcrumb trail={[{ label: 'Privacy Policy', path: '/privacy-policy' }]} />

      <section className="section">
        <div className="shell narrow prose">
          <h2>Who we are</h2>
          <p>
            This website is run by {site.name} ({site.shortName}), Reg. No.{' '}
            {site.registrationNumber}, {site.contact.addressSingleLine}.
          </p>

          <h2>Cookies and tracking</h2>
          <p>
            This website does not set cookies, does not use analytics or advertising
            trackers, and does not store anything in your browser.
          </p>

          <h2>The contact form</h2>
          <p>
            The form on our <Link to="/contact">Contact</Link> page does not send
            anything to this website. When you submit it, it opens your own email
            app with your message already written, addressed to {email}. Nothing is
            sent until you send that email yourself, and the website keeps no copy
            of what you typed.
          </p>
          <p>
            If you do send it, we receive your name, email address, phone number if
            you gave one, and your message, the same as any other email to us. We
            use them only to reply to you.
          </p>

          <h2>Services from other companies</h2>
          <p>
            Some parts of the site are loaded from other companies. When they load,
            your browser connects to that company, which can see your IP address and
            the page you were on:
          </p>
          <ul className="list-check">
            <li>
              <strong>Google Fonts</strong>, on every page, for the typefaces.
            </li>
            <li>
              <strong>Google Maps</strong>, on the Contact page, for the map of our
              office.
            </li>
            <li>
              <strong>YouTube</strong>, on the home page. The preview image is loaded
              when the page opens. The video itself only loads if you press play,
              and it uses YouTube&rsquo;s privacy-enhanced mode.
            </li>
          </ul>
          <p>
            Those companies handle that information under their own privacy
            policies. Our website hosting provider may also keep standard server
            logs of requests to the site.
          </p>

          <h2>Questions</h2>
          <p>
            To ask about any of this, or about information you have sent us, email{' '}
            <a href={`mailto:${email}`}>{email}</a> or call{' '}
            <a href={`tel:${phoneHref}`}>{phone}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
