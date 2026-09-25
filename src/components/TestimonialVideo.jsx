import { useCallback, useEffect, useRef, useState } from 'react';
import { IconPlay, IconPause, IconSound, IconMuted } from './Icons';

const SRC = '/assets/video/tbwact-testimonial.mp4';

/**
 * The locally hosted testimonial, played in place — no external service.
 *
 * Two deliberate departures from a plain `autoplay` attribute:
 *
 * 1. Playback starts from an IntersectionObserver rather than on page load.
 *    The file is 13 MB for 112 seconds and sits well below the fold, so an
 *    unconditional autoplay would bill every visitor for it whether they ever
 *    scrolled this far or not. It still starts by itself; it just waits until
 *    it is on screen. It also pauses when scrolled away, which matters once
 *    the visitor has unmuted — otherwise audio keeps playing with no visible
 *    source.
 *
 * 2. There is a play/pause control as well as mute/unmute. Auto-starting
 *    content that runs longer than five seconds needs a pause mechanism
 *    (WCAG 2.2.2), and a 112-second video the visitor cannot stop is a real
 *    problem rather than a theoretical one.
 *
 * Mute is toggled on the element itself, so nothing reloads, nothing restarts
 * and currentTime is never touched.
 */
export default function TestimonialVideo() {
  const videoRef = useRef(null);
  // Tracks an explicit pause so scrolling back into view does not override the
  // visitor's decision to stop the video.
  const pausedByUser = useRef(false);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  // The element is the single source of truth; React state just mirrors it,
  // however the change was triggered.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    // Set muted imperatively: React does not reliably reflect the attribute
    // onto the DOM property, and autoplay is refused without it.
    video.muted = true;

    const sync = () => {
      setPlaying(!video.paused);
      setMuted(video.muted);
    };
    sync();

    video.addEventListener('play', sync);
    video.addEventListener('pause', sync);
    video.addEventListener('ended', sync);
    video.addEventListener('volumechange', sync);
    return () => {
      video.removeEventListener('play', sync);
      video.removeEventListener('pause', sync);
      video.removeEventListener('ended', sync);
      video.removeEventListener('volumechange', sync);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!pausedByUser.current) video.play().catch(() => {});
        } else if (!video.paused) {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      pausedByUser.current = false;
      video.play().catch(() => {});
    } else {
      pausedByUser.current = true;
      video.pause();
    }
  }, []);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
  }, []);

  return (
    <figure className="testimonial">
      <video
        ref={videoRef}
        className="testimonial__video"
        src={SRC}
        muted
        playsInline
        preload="metadata"
      />

      <div className="testimonial__controls">
        <button
          type="button"
          className="testimonial__btn"
          onClick={togglePlay}
          aria-label={playing ? 'Pause the testimonial video' : 'Play the testimonial video'}
        >
          {playing ? <IconPause /> : <IconPlay />}
        </button>
        <button
          type="button"
          className="testimonial__btn"
          onClick={toggleMute}
          aria-pressed={!muted}
          aria-label={muted ? 'Unmute the testimonial video' : 'Mute the testimonial video'}
        >
          {muted ? <IconMuted /> : <IconSound />}
        </button>
      </div>
    </figure>
  );
}
