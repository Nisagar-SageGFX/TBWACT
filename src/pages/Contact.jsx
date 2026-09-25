import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import PageBanner from '../components/PageBanner';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { seo } from '../data/seo';
import site from '../data/site';
import { IconPhone, IconMail, IconPin } from '../components/Icons';

export default function Contact() {
  return (
    <>
      <SEO meta={seo.contact} />
      <PageBanner
        title="Contact Us"
        lead="Talk to the trust about sponsorship, partnerships, volunteering or any of our programmes."
      />
      <Breadcrumb trail={[{ label: 'Contact Us', path: '/contact' }]} />

      <section className="section">
        <div className="shell contact-grid">
          <div>
            <SectionHeading kicker="Reach us" title="Registered office" />
            <dl className="info-list">
              <div>
                <dt className="info-list__label">
                  <IconPin width="18" height="18" style={{ verticalAlign: '-3px', color: 'var(--orange)' }} />{' '}
                  Address
                </dt>
                <dd className="info-list__value" style={{ margin: 0 }}>
                  {site.contact.addressLines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="info-list__label">
                  <IconPhone width="18" height="18" style={{ verticalAlign: '-3px', color: 'var(--orange)' }} />{' '}
                  Phone
                </dt>
                <dd className="info-list__value" style={{ margin: 0 }}>
                  <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a>
                </dd>
              </div>
              <div>
                <dt className="info-list__label">
                  <IconMail width="18" height="18" style={{ verticalAlign: '-3px', color: 'var(--orange)' }} />{' '}
                  Email
                </dt>
                <dd className="info-list__value" style={{ margin: 0 }}>
                  <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                </dd>
              </div>
              <div>
                <dt className="info-list__label">Registration</dt>
                <dd className="info-list__value" style={{ margin: 0 }}>
                  Reg. No. {site.registrationNumber}
                </dd>
              </div>
            </dl>

            <iframe
              className="map-embed"
              style={{ marginTop: '2rem' }}
              title="Map showing the TBWACT registered office in Selaiyur, Chennai"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                site.contact.mapQuery
              )}&output=embed`}
            />
          </div>

          <div>
            <SectionHeading kicker="Send a message" title="Write to the trust" />
            <ContactForm />
          </div>
        </div>
      </section>

    </>
  );
}
