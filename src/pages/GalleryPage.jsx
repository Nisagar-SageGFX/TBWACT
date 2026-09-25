import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import PageBanner from '../components/PageBanner';
import Gallery from '../components/Gallery';
import CTASection from '../components/CTASection';
import { seo } from '../data/seo';

export default function GalleryPage() {
  return (
    <>
      <SEO meta={seo.gallery} />
      <PageBanner
        title="Gallery"
        lead="Material from the trust, the proposed Welfare & Service Centre and ELARA 2026."
      />
      <Breadcrumb trail={[{ label: 'Gallery', path: '/gallery' }]} />

      <section className="section">
        <div className="shell">
          <Gallery />
        </div>
      </section>

      <CTASection />
    </>
  );
}
