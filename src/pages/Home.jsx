import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import Gallery from '../components/Gallery';
import YoutubeVideo from '../components/YoutubeVideo';
import CTASection from '../components/CTASection';
import Picture from '../components/Picture';
import { seo } from '../data/seo';
import site from '../data/site';
import technicalTopics from '../data/technical';
import visionPillars from '../data/vision';
import galleryItems from '../data/gallery';
import { upcomingEvents } from '../data/events';
import { pillarIcons, IconCalendar, IconPin } from '../components/Icons';

export default function Home() {
  const event = upcomingEvents[0];

  return (
    <>
      <SEO meta={seo.home} />
      <Hero />

      {/* About */}
      <section className="section" aria-labelledby="about-heading">
        <div className="shell">
          <div className="grid grid--2" style={{ alignItems: 'start', gap: '3rem' }}>
            <div>
              <SectionHeading
                kicker="About the trust"
                title="Serving society through education, healthcare, skills and welfare"
                id="about-heading"
              />
              <p>{site.intro}</p>
              <p>{site.buildingNote}</p>
              <div className="btn-row" style={{ marginTop: '1.5rem' }}>
                <Link to="/about" className="btn btn--secondary">
                  Learn more about TBWACT
                </Link>
                <Link to="/board-of-trustees" className="btn btn--ghost">
                  Board of Trustees
                </Link>
                <Link to="/our-vision" className="btn btn--ghost">
                  Our Vision
                </Link>
              </div>
            </div>
            <div className="callout callout--warm">
              <strong>Why the building matters</strong>
              <p>{site.fundraisingNote}</p>
              <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>&ldquo;{site.quote}&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section section--tint" aria-labelledby="vision-heading">
        <div className="shell">
          <SectionHeading
            kicker="Our vision"
            title="Five pillars guide everything the trust takes on"
            lead="Each pillar turns into a programme that the Welfare & Service Centre will host."
            id="vision-heading"
          />
          <div className="pillars">
            {visionPillars.map((pillar) => {
              const Icon = pillarIcons[pillar.id];
              return (
                <article className="pillar" key={pillar.id}>
                  {Icon ? <Icon className="pillar__icon" /> : null}
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              );
            })}
          </div>
          <div className="btn-row" style={{ marginTop: '2rem' }}>
            <Link to="/our-vision" className="btn btn--secondary">
              Read the full vision
            </Link>
          </div>
        </div>
      </section>

      {/* Technical awareness */}
      <section className="section" aria-labelledby="technical-heading">
        <div className="shell">
          <SectionHeading
            kicker="Technical awareness"
            title="Knowledge that keeps the industry current"
            lead="Seminars and awareness programmes planned for builders, engineers, architects, developers and contractors. Nothing here is claimed as completed work."
            id="technical-heading"
          />
          {/* Same .impact-card grid as /our-vision and /news-events, so the
              photo cards across the site stay one system. */}
          <div className="impact-grid">
            {technicalTopics.map((topic) => (
              <article className="impact-card" key={topic.id}>
                <img
                  className="impact-card__img"
                  src={topic.image}
                  alt={topic.alt}
                  loading="lazy"
                  decoding="async"
                  style={topic.focus ? { objectPosition: topic.focus } : undefined}
                />
                <div className="impact-card__body">
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="btn-row" style={{ marginTop: '2rem' }}>
            <Link to="/programs" className="btn btn--secondary">
              See all five programmes
            </Link>
          </div>
        </div>
      </section>

      {/* Welfare & Service Centre feature */}
      <section className="section section--cool" aria-labelledby="centre-heading">
        <div className="shell">
          <div className="grid grid--2" style={{ alignItems: 'center', gap: '3rem' }}>
            <Picture
              src="/assets/trust-building.jpg"
              webp="/assets/trust-building.webp"
              alt="Render of the proposed TBWACT Welfare & Service Centre"
              className="media-block"
            />
            <div>
              <SectionHeading
                kicker="Welfare & Service Centre"
                title="One address for every programme"
                id="centre-heading"
              />
              <p>{site.buildingNote}</p>
              <ul className="list-check">
                <li>Education support and coaching activities</li>
                <li>Monthly free medical camps</li>
                <li>A skill development training centre</li>
                <li>Technical seminars for industry professionals</li>
                <li>Community welfare activities</li>
              </ul>
              <Link to="/programs#welfare-service-centre" className="link-strong">
                How the centre will be used
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News & events */}
      {event ? (
        <section className="section" aria-labelledby="event-heading">
          <div className="shell">
            <SectionHeading kicker="News & events" title="Coming up" id="event-heading" />
            <div className="grid grid--2" style={{ alignItems: 'center', gap: '3rem' }}>
              <Picture
                src={event.image}
                webp={event.imageWebp}
                alt={event.imageAlt}
                className="media-block"
              />
              <div>
                {/* <span className="pill">Upcoming event</span> */}
                <h3 style={{ marginTop: '0.9rem' }}>{event.title}</h3>
                <p className="program__sub">{event.subtitle}</p>
                <p>{event.excerpt}</p>
                <ul className="event__meta">
                  <li>
                    <IconCalendar width="20" height="20" style={{ color: 'var(--orange)' }} />
                    <span>
                      {event.dateLabel}, {event.timeLabel}
                    </span>
                  </li>
                  <li>
                    <IconPin width="20" height="20" style={{ color: 'var(--orange)' }} />
                    <span>{event.venue}</span>
                  </li>
                </ul>
                <div className="btn-row">
                  <Link to="/news-events" className="btn btn--primary">
                    Event details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Gallery */}
      <section className="section section--tint" aria-labelledby="gallery-heading">
        <div className="shell">
          <SectionHeading kicker="Gallery" title="A look at the trust" id="gallery-heading" />
          <Gallery items={galleryItems.slice(0, 4)} showFilters={false} />
          <div className="btn-row" style={{ marginTop: '2rem' }}>
            <Link to="/gallery" className="btn btn--secondary">
              Open the full gallery
            </Link>
          </div>
        </div>
      </section>

      <CTASection />

      {/* Video sits immediately above the footer */}
      <YoutubeVideo />
    </>
  );
}
