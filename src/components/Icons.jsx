/* Small inline icon set. No icon library dependency. */

const base = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false
};

export const IconEducation = (p) => (
  <svg {...base} {...p}>
    <path d="M12 4 2 9l10 5 10-5-10-5Z" />
    <path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" />
    <path d="M22 9v6" />
  </svg>
);

export const IconHealth = (p) => (
  <svg {...base} {...p}>
    <path d="M20.5 8.6c0 5-8.5 10.4-8.5 10.4S3.5 13.6 3.5 8.6a4.6 4.6 0 0 1 8.5-2.4 4.6 4.6 0 0 1 8.5 2.4Z" />
    <path d="M7 11h3l1.4-2.4L13 13l1-2h3" />
  </svg>
);

export const IconSkills = (p) => (
  <svg {...base} {...p}>
    <path d="m14.5 5.5 4 4L9 19H5v-4l9.5-9.5Z" />
    <path d="m13 7 4 4" />
    <path d="M17 3.5 20.5 7" />
  </svg>
);

export const IconCommunity = (p) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" />
    <path d="M16.5 6.2a3 3 0 0 1 0 5.6" />
    <path d="M17.5 14.4c2 .7 3.5 2.4 3.5 4.6" />
  </svg>
);

export const IconExcellence = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="9" r="5" />
    <path d="m8.5 13.5-1 7 4.5-2.5 4.5 2.5-1-7" />
  </svg>
);

export const IconBuilding = (p) => (
  <svg {...base} {...p}>
    <path d="M4 21V8l5-3v16" />
    <path d="M9 21V5l6-3v19" />
    <path d="M15 21V9l5 2.5V21" />
    <path d="M2 21h20" />
  </svg>
);

export const IconPhone = (p) => (
  <svg {...base} {...p}>
    <path d="M6 3h4l2 5-2.5 1.5a11 11 0 0 0 5 5L16 12l5 2v4a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4 5.2 2 2 0 0 1 6 3Z" />
  </svg>
);

export const IconMail = (p) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="5" width="19" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const IconPin = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const IconCalendar = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
);

export const IconChevron = (p) => (
  <svg {...base} width="16" height="16" strokeWidth="2.2" {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const IconPlay = (p) => (
  <svg viewBox="0 0 24 24" width="34" height="34" fill="#fff" aria-hidden focusable="false" {...p}>
    <path d="M8 5.5v13l11-6.5-11-6.5Z" />
  </svg>
);

/* Filled, to match IconPlay rather than the stroked set. */
export const IconPause = (p) => (
  <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor" aria-hidden focusable="false" {...p}>
    <rect x="7" y="5" width="4" height="14" rx="1" />
    <rect x="13" y="5" width="4" height="14" rx="1" />
  </svg>
);

export const IconSound = (p) => (
  <svg {...base} {...p}>
    <path d="M11 5 6.5 9H3v6h3.5L11 19V5Z" />
    <path d="M15.5 9.5a3.5 3.5 0 0 1 0 5" />
    <path d="M18 7a7 7 0 0 1 0 10" />
  </svg>
);

export const IconMuted = (p) => (
  <svg {...base} {...p}>
    <path d="M11 5 6.5 9H3v6h3.5L11 19V5Z" />
    <path d="m16 10 5 4" />
    <path d="m21 10-5 4" />
  </svg>
);

export const pillarIcons = {
  education: IconEducation,
  healthcare: IconHealth,
  skills: IconSkills,
  community: IconCommunity,
  professional: IconExcellence
};

export const programIcons = {
  education: IconEducation,
  healthcare: IconHealth,
  'skill-development': IconSkills,
  'technical-awareness': IconExcellence,
  'welfare-service-centre': IconBuilding
};
