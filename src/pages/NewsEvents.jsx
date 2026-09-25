import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import PageBanner from '../components/PageBanner';
import SectionHeading from '../components/SectionHeading';
import EventCard from '../components/EventCard';
import TestimonialVideo from '../components/TestimonialVideo';
import CTASection from '../components/CTASection';
import { seo, seoDefaults } from '../data/seo';
import events, { upcomingEvents, pastEvents } from '../data/events';
import site from '../data/site';

const eventJsonLd = (event) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: event.title,
  startDate: event.date,
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  description: event.excerpt,
  image: seoDefaults.domain + event.image,
  location: {
    '@type': 'Place',
    name: 'Chennai Trade Centre',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nandambakkam, Chennai',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN'
    }
  },
  organizer: {
    '@type': 'Organization',
    name: site.name,
    url: site.domain
  }
});

export default function NewsEvents() {
  const featured = upcomingEvents[0] || events[0];

  return (
    <>
      <SEO meta={seo.newsEvents} jsonLd={featured ? eventJsonLd(featured) : null} />
      <PageBanner
        title="News & Events"
        lead="What the trust has coming up, and how you can be part of it."
      />
      <Breadcrumb trail={[{ label: 'News & Events', path: '/news-events' }]} />

      <section className="section">
        <div className="shell">
          <SectionHeading  title="ELARA 2026" />
          {featured ? <EventCard event={featured} /> : <p>No events are scheduled right now.</p>}
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="why-heading">
        <div className="shell">
          <SectionHeading
            kicker="Why this event matters"
            title="A celebration with a purpose"
            lead="Every ticket purchased, sponsorship received and contribution made helps create:"
            id="why-heading"
          />
          {/* `alt` is empty because each image sits directly above a heading and
              paragraph that already say what it represents — repeating that in
              alt text only makes a screen reader read the same thing twice.
              Fill it in if a photograph shows something specific worth
              describing in its own right.
              `focus` maps to object-position: the four sources range from 1.00
              to 1.73 in aspect, so the 4:3 frame crops each one differently.
              Use it if a face or subject gets clipped. */}
          <div className="impact-grid">
            {[
              {
                title: 'Educational opportunities',
                body: 'Scholarships, higher education assistance and coaching support for students who have talent but not the means.',
                image: '/assets/impact/education.jpg',
                alt: '',
                focus: ''
              },
              // {
              //   title: 'Healthcare access',
              //   body: 'Screening camps and general health programmes run from the Welfare & Service Centre.'
              // },
              {
                title: 'Skill development',
                body: 'Certified training for masons, carpenters, electricians, plumbers, painters and technicians.',
                image: '/assets/impact/skill-development.jpg',
                alt: '',
                focus: ''
              },
              {
                title: 'Professional growth',
                body: 'Technical seminars that keep builders, engineers and architects current.',
                image: '/assets/impact/professional-growth.jpg',
                alt: '',
                focus: ''
              },
              {
                title: 'Community welfare',
                body: 'Initiatives that support community development across Tambaram and beyond.',
                image: '/assets/impact/community-welfare.jpg',
                alt: '',
                focus: ''
              }
            ].map((item) => (
              <article className="impact-card" key={item.title}>
                <img
                  className="impact-card__img"
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  style={item.focus ? { objectPosition: item.focus } : undefined}
                />
                <div className="impact-card__body">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="testimonial-heading">
        <div className="shell">
          <SectionHeading kicker="Watch" title="Testimonial" id="testimonial-heading" />
          <TestimonialVideo />
        </div>
      </section>

      {pastEvents.length ? (
        <section className="section section--tint">
          <div className="shell">
            <SectionHeading kicker="Archive" title="Past events" />
            <div className="stack-lg">
              {pastEvents.map((e) => (
                <EventCard event={e} key={e.id} showBody={false} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTASection
        title="Sponsor ELARA 2026"
        text="Sponsorship proceeds go directly into the Welfare & Service Centre and the programmes it will host."
        primary={{ label: 'Talk to the trust', to: '/contact' }}
        secondary={{ label: 'See our programmes', to: '/programs' }}
      />
    </>
  );
}
