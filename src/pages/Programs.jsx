import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import PageBanner from '../components/PageBanner';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import Picture from '../components/Picture';
import { seo } from '../data/seo';
import programs from '../data/programs';

export default function Programs() {
  return (
    <>
      <SEO meta={seo.programs} />
      <PageBanner
        title="Programs"
        lead="Five programme areas, each planned around the Welfare & Service Centre the trust is building."
      />
      <Breadcrumb trail={[{ label: 'Programs', path: '/programs' }]} />

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Status"
            title="Planned and in development"
            lead="TBWACT describes each of these programmes as planned or proposed. The website reflects that status exactly, and will be updated as activities begin."
          />

          {programs.map((program, i) => (
            <article
              className={`program${i % 2 ? ' program--flip' : ''}`}
              id={program.id}
              key={program.id}
            >
              <div>
                <div className="program__head">
                  <h2>{program.title}</h2>
                  <span className="pill">{program.status}</span>
                </div>
                <p className="program__sub">{program.subtitle}</p>
                <p>{program.summary}</p>

                <p className="list-label">{program.listLabel}</p>
                <ul className="list-check">
                  {program.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {program.secondaryItems ? (
                  <>
                    <p className="list-label">{program.secondaryLabel}</p>
                    <ul className="list-check">
                      {program.secondaryItems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                ) : null}

                <div className="callout">
                  <strong>{program.outcomeLabel}</strong>
                  <p>{program.outcome}</p>
                </div>
              </div>

              <div className="program__media">
                <Picture
                  src={program.image}
                  webp={program.imageWebp}
                  alt={program.imageAlt}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Help one of these programmes start sooner"
        text="Sponsorship of ELARA 2026 goes straight into the Trust Building that will house all five programmes."
        primary={{ label: 'Sponsor ELARA 2026', to: '/news-events' }}
        secondary={{ label: 'Contact the trust', to: '/contact' }}
      />
    </>
  );
}
