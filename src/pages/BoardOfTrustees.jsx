import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import PageBanner from '../components/PageBanner';
import SectionHeading from '../components/SectionHeading';
import TrusteeCard from '../components/TrusteeCard';
import CTASection from '../components/CTASection';
import { seo } from '../data/seo';
import trustees from '../data/trustees';

export default function BoardOfTrustees() {
  return (
    <>
      <SEO meta={seo.boardOfTrustees} />
      <PageBanner
        title="Board of Trustees"
        lead="The office bearers who direct the work of Tambaram Builders Welfare and Charitable Trust."
      />
      <Breadcrumb
        trail={[
          { label: 'About', path: '/about' },
          { label: 'Board of Trustees', path: '/board-of-trustees' }
        ]}
      />

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Trust office bearers"
            title="Who runs TBWACT"
            lead="Written profiles will be added as each trustee supplies them."
          />
          <div className="trustee-grid">
            {trustees.map((t) => (
              <TrusteeCard trustee={t} key={t.id} />
            ))}
          </div>

          <p style={{ marginTop: '2.5rem' }}>
            <Link to="/about" className="link-strong">
              Learn about TBWACT
            </Link>
          </p>
        </div>
      </section>

      <CTASection
        title="Work with the trust"
        text="Sponsorship, partnership and volunteering enquiries all reach the board directly."
        primary={{ label: 'Get involved', to: '/contact' }}
        secondary={{ label: 'Our vision', to: '/our-vision' }}
      />
    </>
  );
}
