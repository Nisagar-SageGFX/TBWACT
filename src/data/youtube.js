// `id` is the YouTube video ID on its own, not the full URL — the part after
// `youtu.be/` or `watch?v=`. Clearing it makes the section fall back to the
// locally hosted testimonial video.

export const youtubeVideo = {
  id: '09RGLUWPYSA',
  // NOTE: the supplied video is "Mega Cultural Event | ELARA 2026 | Highlights
  // video", published by V Do Eventz — not footage of the trust itself. The
  // copy below describes what the video actually is; the previous wording
  // ("A short look at the people behind the trust") did not. Confirm with the
  // trust before launch, and confirm they have permission to embed it.
  title: 'ELARA 2026',
  description:
    'The mega cultural event TBWACT is holding to fund the Welfare & Service Centre. Video by V Do Eventz.',
  fallbackVideo: '/assets/video/tbwact-testimonial.mp4',
  poster: '/assets/trust-building.jpg'
};

export default youtubeVideo;
