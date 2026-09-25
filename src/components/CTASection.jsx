import { Link } from 'react-router-dom';

export default function CTASection({
  title = 'Support the Welfare & Service Centre',
  text = 'Sponsor ELARA 2026, partner on a programme, or simply talk to the trust about how you can help.',
  primary = { label: 'Get involved', to: '/contact' },
  secondary = { label: 'See our programmes', to: '/programs' },
  tint = 'section--tint'
}) {
  return (
    <section className={`section ${tint}`}>
      <div className="shell">
        <div className="cta-band">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="btn-row">
            {primary ? (
              <Link to={primary.to} className="btn btn--primary">
                {primary.label}
              </Link>
            ) : null}
            {secondary ? (
              <Link to={secondary.to} className="btn btn--onDark">
                {secondary.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
