import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageBanner from '../components/PageBanner';
import { seo } from '../data/seo';

export default function NotFound() {
  return (
    <>
      <SEO meta={seo.notFound} />
      <PageBanner
        title="That page is not here"
        lead="The link may be out of date, or the page may have moved."
      />
      <section className="section">
        <div className="shell narrow">
          <p>Try one of these instead:</p>
          <ul className="list-check">
            <li><Link to="/about">About TBWACT</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/news-events">News &amp; Events</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
          <div className="btn-row" style={{ marginTop: '1.75rem' }}>
            <Link to="/" className="btn btn--primary">Back to the homepage</Link>
          </div>
        </div>
      </section>
    </>
  );
}
