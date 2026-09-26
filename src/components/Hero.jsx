import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import site from '../data/site';

const HERO_VIDEO = '/assets/video/hero-loop.mp4';
const HERO_POSTER = '/assets/trust-building.jpg';
const HERO_STILL = '/assets/trust-building.webp';

/**
 * Decides whether the background video should play for this visitor.
 *
 * It now plays at every screen size, phones included. It is still withheld in
 * two cases, where a still frame of the building is shown instead:
 *
 *   - prefers-reduced-motion, which the site honours everywhere else
 *   - a metered or slow connection the browser reports (Save-Data, 2G/3G) —
 *     the file is ~18 MB, which is a real cost on Indian mobile data
 */
function useBackgroundVideo() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const decide = () => {
      const conn = navigator.connection;
      const cheap =
        !conn || (!conn.saveData && !/(^|-)(2g|3g)$/.test(conn.effectiveType || ''));
      setEnabled(!motion.matches && cheap);
    };

    decide();
    motion.addEventListener('change', decide);
    navigator.connection?.addEventListener?.('change', decide);
    return () => {
      motion.removeEventListener('change', decide);
      navigator.connection?.removeEventListener?.('change', decide);
    };
  }, []);

  return enabled;
}

export default function Hero() {
  const videoOn = useBackgroundVideo();
  const [broken, setBroken] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoOn || !videoRef.current) return;
    const video = videoRef.current;
    // Set muted on the element itself rather than trusting the JSX attribute:
    // React does not always reflect it onto the DOM property, and an unmuted
    // video is refused autoplay by every browser.
    video.muted = true;
    // Autoplay can still be refused. The promise rejecting is not an error:
    // the poster frame stays up and the hero reads normally.
    const attempt = video.play();
    if (attempt?.catch) attempt.catch(() => {});
  }, [videoOn]);

  return (
    <section className="hero">
      {videoOn && !broken ? (
        <div className="hero__bg" aria-hidden="true">
          <video
            ref={videoRef}
            className="hero__video"
            src={HERO_VIDEO}
            poster={HERO_POSTER}
            autoPlay
            muted
            loop
            playsInline
            tabIndex={-1}
            onError={() => setBroken(true)}
          />
        </div>
      ) : (
        // Withheld or failed: a still of the same building, so the hero never
        // falls back to a flat block of colour.
        <div className="hero__bg" aria-hidden="true">
          <img className="hero__video" src={HERO_STILL} alt="" decoding="async" />
        </div>
      )}
      <div className="hero__scrim" aria-hidden="true" />

      <div className="shell hero__grid">
        {/* Single column. The render image that used to sit on the right was
            removed so the video reads as the background rather than being
            boxed in beside a photograph of the same building. The empty right
            half is deliberate: it is where the scrim falls away to nothing. */}
        <div className="hero__text">
          <p className="hero__reg">Reg. No. {site.registrationNumber}</p>
          <h1>A trust built by builders, for the community around them.</h1>
          <p className="hero__lead">{site.intro}</p>

          <div className="btn-row hero__buttons">
            <Link to="/programs" className="btn btn--primary">
              See what we are building
            </Link>
            <Link to="/news-events" className="btn btn--onDark">
              ELARA 2026 on 19 July
            </Link>
          </div>

          <p className="hero__motto">
            <span>Building communities</span>
            <span>Empowering lives</span>
            <span>Creating futures</span>
          </p>
        </div>
      </div>
    </section>
  );
}
