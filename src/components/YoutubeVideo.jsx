import { useState } from 'react';
import youtubeVideo from '../data/youtube';
import SectionHeading from './SectionHeading';
import { IconPlay } from './Icons';

/**
 * Loads nothing heavier than a poster image until the visitor clicks.
 * If the trust has supplied a YouTube ID the iframe is used; otherwise the
 * locally hosted testimonial video plays in place.
 */
export default function YoutubeVideo() {
  const [playing, setPlaying] = useState(false);
  // maxresdefault only exists if the video was uploaded at 1280px or wider;
  // otherwise YouTube 404s it. hqdefault is generated for every video.
  const [maxResMissing, setMaxResMissing] = useState(false);
  const { id, title, description, fallbackVideo, poster } = youtubeVideo;

  const thumbnail = id
    ? `https://i.ytimg.com/vi/${id}/${maxResMissing ? 'hqdefault' : 'maxresdefault'}.jpg`
    : poster;

  return (
    <section className="section section--dark" aria-labelledby="watch-heading">
      <div className="shell">
        <SectionHeading
          kicker="Watch our story"
          title={title}
          lead={description}
          align="center"
          id="watch-heading"
        />

        <div style={{ maxWidth: '920px', margin: '0 auto' }}>
          {playing ? (
            <div className="video-frame">
              {id ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video src={fallbackVideo} controls autoPlay playsInline poster={poster}>
                  <track kind="captions" />
                </video>
              )}
            </div>
          ) : (
            <button
              type="button"
              className="video-frame"
              onClick={() => setPlaying(true)}
              aria-label={`Play video: ${title}`}
            >
              {/* alt is empty on purpose: the button's aria-label is the
                  accessible name, and it would override this anyway. Giving
                  both would just be dead markup. */}
              <img
                src={thumbnail}
                alt=""
                loading="lazy"
                decoding="async"
                onError={() => setMaxResMissing(true)}
              />
              <span className="video-frame__veil">
                <span className="video-frame__play">
                  <IconPlay />
                </span>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
