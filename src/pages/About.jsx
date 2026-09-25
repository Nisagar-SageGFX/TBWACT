import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import PageBanner from '../components/PageBanner';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import Picture from '../components/Picture';
import { seo } from '../data/seo';
import site from '../data/site';
import { founder } from '../data/trustees';

const initials = (name) =>
  name
    .replace(/^(Dr\.|Thiru|Tmt\.|Mr\.|Mrs\.|Ms\.)\s*/i, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

const history = [
  {
    title: 'Establishment',
    body: `Tambaram Builders Welfare and Charitable Trust was registered under number ${site.registrationNumber}, with a registered office at Selaiyur, Chennai.`
  },
  {
    title: 'Purpose',
    body: 'The trust was formed to serve society through education, healthcare, skill development and community welfare initiatives.'
  },
  {
    title: 'Community initiatives',
    body: 'Five programme areas were defined: education support, healthcare camps, skill development for construction workers, technical awareness for industry professionals, and broader community welfare.'
  },
  {
    title: 'Current activity',
    body: 'The trust has embarked on constructing a dedicated Welfare & Service Centre, and is raising funds for it through ELARA 2026.',
    current: true
  },
  {
    title: 'Future direction',
    body: 'Once the centre is operational it will host the trust\u2019s programmes under one roof, benefiting thousands of people every year.'
  }
];

export default function About() {
  return (
    <>
      <SEO meta={seo.about} />
      <PageBanner
        title="About TBWACT"
        lead="A charitable trust founded by the builders of Tambaram to serve the community they build in."
      />
      <Breadcrumb trail={[{ label: 'About', path: '/about' }]} />

      <section className="section">
        <div className="shell about-grid">
          <div className="prose">
            <SectionHeading
              kicker="Introduction"
              title="Who we are"
              as="h2"
            />
            <p>{site.intro}</p>
            <p>{site.buildingNote}</p>
            <p>{site.fundraisingNote}</p>

            <h2>Why the trust was established</h2>
            <p>
              The construction industry employs a large workforce whose training,
              health and families rarely get institutional support. TBWACT was
              established so that the builders of Tambaram could organise that
              support properly: scholarships for students who have talent but not
              the means, regular medical camps open to the public, certified
              training for site workers, and technical seminars that keep
              professionals current.
            </p>

            <h2>What we focus on</h2>
            <ul className="list-check">
              <li>Education support for deserving students</li>
              <li>Accessible healthcare through regular camps</li>
              <li>Skill development for construction industry workers</li>
              <li>Technical awareness for builders and professionals</li>
              <li>Community welfare initiatives</li>
            </ul>

            <p style={{ marginTop: '1.5rem' }}>
              <Link to="/our-vision" className="link-strong">
                Explore our vision
              </Link>
            </p>
          </div>

          {/* Sticky on desktop so the render stays in view for the whole read.
              The column is much shorter than the copy beside it; parked at the
              top it would leave the same empty space lower down that this
              change is meant to remove. */}
          <figure className="about-grid__media">
            <Picture
              src="/assets/trust-building.jpg"
              webp="/assets/trust-building.webp"
              alt="Architectural render of the Welfare &amp; Service Centre that TBWACT is building in Selaiyur, Chennai"
              className="about-figure"
              width="1067"
              height="1193"
            />
          </figure>
        </div>
      </section>

      {/* Founder */}
      <section className="section section--tint" aria-labelledby="founder-heading">
        <div className="shell">
          <SectionHeading kicker="Founder" title="Founder Chairman" id="founder-heading" />
          <div className="founder">
            {founder.image ? (
              <img
                className="founder__photo"
                src={founder.image}
                alt={`${founder.name}, ${founder.designation} of TBWACT`}
                loading="lazy"
              />
            ) : (
              <div className="founder__monogram" role="img" aria-label={founder.name}>
                {initials(founder.name)}
              </div>
            )}
            <div>
              <h3>{founder.name}</h3>
              <p className="founder__role">
                {founder.designation}
                {founder.professionalDesignation ? `, ${founder.professionalDesignation}` : ''}
              </p>
              {founder.affiliation ? (
                <p className="founder__affiliation">{founder.affiliation}</p>
              ) : null}
              {founder.profile.map((para) => (
                <p key={para.slice(0, 32)}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section" aria-labelledby="history-heading">
        <div className="shell">
          <SectionHeading
            kicker="Trust history"
            title="How the trust has progressed"
            lead="Only milestones confirmed by TBWACT appear here. Dates will be added as the trust supplies them."
            id="history-heading"
          />
          <ol className="timeline narrow">
            {history.map((item) => (
              <li key={item.title} className={item.current ? 'is-current' : ''}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        title="Meet the people behind the trust"
        text="The office bearers of TBWACT are builders and professionals from Tambaram who run the trust alongside their own work."
        primary={{ label: 'Meet our Board of Trustees', to: '/board-of-trustees' }}
        secondary={{ label: 'Explore our vision', to: '/our-vision' }}
      />
    </>
  );
}
