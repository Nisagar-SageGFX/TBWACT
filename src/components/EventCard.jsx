import { Link } from 'react-router-dom';
import Picture from './Picture';
import { IconCalendar, IconPin, IconBuilding } from './Icons';

export default function EventCard({ event, showBody = true }) {
  return (
    <article className="event" id={event.id}>
      <Picture
        src={event.image}
        webp={event.imageWebp}
        alt={event.imageAlt}
        className="event__img"
      />
      <div className="event__body">
        <span className={`pill${event.status === 'past' ? ' pill--cool' : ''}`}>
          {event.status === 'upcoming' ? 'Upcoming event' : 'Past event'}
        </span>
        <h2 style={{ marginTop: '0.9rem', marginBottom: '0.25rem' }}>{event.title}</h2>
        <p className="program__sub">{event.subtitle}</p>

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
          <li>
            <IconBuilding width="20" height="20" style={{ color: 'var(--orange)' }} />
            <span>Fund-raising programme for the TBWACT Trust Building</span>
          </li>
        </ul>

        {showBody ? (
          event.body.map((para) => <p key={para.slice(0, 24)}>{para}</p>)
        ) : (
          <p>{event.excerpt}</p>
        )}

        {event.highlights?.length ? (
          <div className="tag-row">
            {event.highlights.map((h) => (
              <span className="pill pill--cool" key={h}>
                {h}
              </span>
            ))}
          </div>
        ) : null}

        <div className="btn-row">
          <Link to="/contact" className="btn btn--primary">
            Become a sponsor
          </Link>
          {event.brochure ? (
            <a
              href={event.brochure}
              className="btn btn--ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download the brochure
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
