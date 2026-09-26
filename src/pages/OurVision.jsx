import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import PageBanner from '../components/PageBanner';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import Picture from '../components/Picture';
import { seo } from '../data/seo';
import site from '../data/site';
import visionPillars from '../data/vision';

export default function OurVision() {
  return (
    <>
      <SEO meta={seo.ourVision} />
      <PageBanner
        title="Our Vision"
        lead="Building communities. Empowering lives. Creating futures."
      />
      <Breadcrumb
        trail={[
          { label: 'About', path: '/about' },
          { label: 'Our Vision', path: '/our-vision' }
        ]}
      />

      <section className="section">
        <div className="shell">
          <div className="narrow">
            <SectionHeading
              kicker="The vision"
              title="A trust that serves the people who build the city"
            />
            <p>{site.intro}</p>
            <p>{site.buildingNote}</p>
            <p style={{ fontStyle: 'italic', color: 'var(--teal)' }}>
              &ldquo;{site.quote}&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="pillars-heading">
        <div className="shell">
          <SectionHeading
            kicker="Four pillars"
            title="What the vision commits us to"
            id="pillars-heading"
          />
          {/* Photograph cards rather than the icon cards used on the home page:
              same .impact-card grid as the /news-events section, so the two
              read as one system. The icon stays on the home page. */}
          <div className="impact-grid">
            {visionPillars.map((pillar) => (
              <article className="impact-card" key={pillar.id}>
                <img
                  className="impact-card__img"
                  src={pillar.image}
                  alt={pillar.alt}
                  loading="lazy"
                  decoding="async"
                  style={pillar.focus ? { objectPosition: pillar.focus } : undefined}
                />
                <div className="impact-card__body">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                  <Link to={pillar.link} className="link-strong impact-card__link">
                    See the programme
                    <span className="visually-hidden">: {pillar.title}</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="where-heading">
        <div className="shell">
          <div className="grid grid--2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <SectionHeading
                kicker="Where it happens"
                title="The Welfare & Service Centre"
                id="where-heading"
              />
              <p>{site.fundraisingNote}</p>
              <p>
                <Link to="/programs" className="link-strong">
                  Explore our programmes
                </Link>
              </p>
            </div>
            <Picture
              src="/assets/trust-building.jpg"
              webp="/assets/trust-building.webp"
              alt="Render of the proposed TBWACT Welfare & Service Centre"
              className="media-block"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
