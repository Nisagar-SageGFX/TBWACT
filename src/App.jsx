import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import BoardOfTrustees from './pages/BoardOfTrustees';
import OurVision from './pages/OurVision';
import Programs from './pages/Programs';
import NewsEvents from './pages/NewsEvents';
import GalleryPage from './pages/GalleryPage';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollToTop />
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/board-of-trustees" element={<BoardOfTrustees />} />
          <Route path="/our-vision" element={<OurVision />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
