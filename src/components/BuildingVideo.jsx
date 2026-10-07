import { useCallback, useEffect, useRef, useState } from 'react';
import { IconPlay, IconPause, IconSound, IconMuted } from './Icons';

const SRC = '/assets/video/Trust Building.mp4';

export default function BuildingVideo() {
  const videoRef = useRef(null);
  const pausedByUser = useRef(false);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    video.muted = true;
    // Attempt immediate autoplay — the video is near the top of the page so
    // it may already be in the viewport before the IntersectionObserver fires.
    video.play().catch(() => {});

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
    <figure className="building-video">
      <video
        ref={videoRef}
        className="building-video__player"
        src={SRC}
        muted
        playsInline
        loop
        preload="metadata"
      />

      <div className="building-video__controls">
        <button
          type="button"
          className="building-video__btn"
          onClick={togglePlay}
          aria-label={playing ? 'Pause video' : 'Play video'}
        >
          {playing ? <IconPause /> : <IconPlay />}
        </button>
        <button
          type="button"
          className="building-video__btn"
          onClick={toggleMute}
          aria-pressed={!muted}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
        >
          {muted ? <IconMuted /> : <IconSound />}
        </button>
      </div>
    </figure>
  );
}
