// Gallery items. Drop new images into /public/assets/gallery/ and add an entry here.
// Every item needs descriptive alt text.
//
// `ratio` is optional and sets the thumbnail frame for that one image. The grid
// defaults to 3/4 portrait, which fits the brochure scans; landscape photographs
// would lose half their width in that frame, so they declare their own shape and
// nothing is cropped. Give it the image's own aspect ratio to crop nothing at all.

export const galleryItems = [
  {
    id: 'trust-building',
    src: '/assets/trust-building.jpg',
    webp: '/assets/trust-building.webp',
    alt: 'Architectural render of the proposed TBWACT Welfare & Service Centre',
    caption: 'The proposed Welfare & Service Centre',
    category: 'Trust Building'
  },
  {
    id: 'elara-poster',
    src: '/assets/elara-2026-poster.jpeg',
    webp: '/assets/elara-2026-poster.webp',
    alt: 'ELARA 2026 announcement poster with event date, time and venue',
    caption: 'ELARA 2026 \u2014 the stage is set',
    category: 'ELARA 2026'
  },
  {
    id: 'elara-page-1',
    src: '/assets/brochure/elara-page-1.jpg',
    webp: '/assets/brochure/elara-page-1.webp',
    alt: 'ELARA 2026 brochure cover listing the performing artists',
    caption: 'One stage, endless talent',
    category: 'ELARA 2026'
  },
  // {
  //   id: 'elara-page-3',
  //   src: '/assets/brochure/elara-page-3.jpg',
  //   webp: '/assets/brochure/elara-page-3.webp',
  //   alt: 'Brochure page describing the TBWACT education support programme',
  //   caption: 'Education support programme',
  //   category: 'Programmes'
  // },
  // {
  //   id: 'elara-page-4',
  //   src: '/assets/brochure/elara-page-4.jpg',
  //   webp: '/assets/brochure/elara-page-4.webp',
  //   alt: 'Brochure page describing planned TBWACT healthcare camps',
  //   caption: 'Healthcare for all',
  //   category: 'Programmes'
  // },
  // {
  //   id: 'elara-page-5',
  //   src: '/assets/brochure/elara-page-5.jpg',
  //   webp: '/assets/brochure/elara-page-5.webp',
  //   alt: 'Brochure page describing the planned skill development training centre',
  //   caption: 'Skill development training centre',
  //   category: 'Programmes'
  // },
  // {
  //   id: 'elara-page-6',
  //   src: '/assets/brochure/elara-page-6.jpg',
  //   webp: '/assets/brochure/elara-page-6.webp',
  //   alt: 'Brochure page describing technical awareness programmes for industry professionals',
  //   caption: 'Technical awareness programmes',
  //   category: 'Programmes'
  // },
  {
    id: 'elara-page-7',
    src: '/assets/brochure/elara-page-7.jpg',
    webp: '/assets/brochure/elara-page-7.webp',
    alt: 'Brochure page explaining why ELARA 2026 matters',
    caption: 'A celebration with a purpose',
    category: 'ELARA 2026'
  },
  {
    id: 'elara-page-8',
    src: '/assets/brochure/elara-page-8.jpg',
    webp: '/assets/brochure/elara-page-8.webp',
    alt: 'Brochure page listing ELARA 2026 sponsorship categories and benefits',
    caption: 'Sponsorship categories',
    category: 'ELARA 2026'
  },
  {
    id: 'office-bearers',
    src: '/assets/tbwact-banner.jpeg',
    webp: '/assets/tbwact-banner.webp',
    alt: 'TBWACT banner listing the registered office address and trust office bearers',
    caption: 'Trust office bearers',
    category: 'Trust',
    // This banner is 1178x271. In the default 3/4 portrait frame it loses over 80%
    // of its width and the thumbnail reads as gibberish, so it gets its own shape.
    ratio: '1178 / 271'
  },

  // ---------------------------------------------------------------------------
  // Five images supplied as f-1 … f-5 with no accompanying description. The
  // captions and alt text below are PLACEHOLDERS — they are not descriptions of
  // what is in the photographs, because the photographs have not been described.
  // Caption text is visible on the page and alt text is read aloud, so both need
  // replacing before this goes live.
  //
  // `category` is a placeholder too; renaming it here renames it in the filter
  // row, which is generated from this data.
  //
  // Note: f-3 is a Canva export ("Untitled design - 4"), so it is a graphic
  // rather than a photograph and may want a different caption style.
  // ---------------------------------------------------------------------------
  {
    id: 'gallery-f-1',
    src: '/assets/gallery/f-1.jpeg',
    alt: 'A row of men in garlands and formal wear standing in front of a screen showing the Builders Association of India, Tambaram Centre logo',
    caption: '[Caption to be added]',
    category: 'Trust Activities',
    ratio: '3 / 2'
  },
  {
    id: 'gallery-f-2',
    src: '/assets/gallery/f-2.jpg',
    alt: 'Men in grey suits and garlands on a stage with sparklers, gathered around two men shaking hands in front of a Builders Association of India, Tambaram Centre backdrop',
    caption: '[Caption to be added]',
    category: 'Trust Activities',
    ratio: '16 / 9'
  },
  {
    id: 'gallery-f-3',
    src: '/assets/gallery/f-3.jpg',
    alt: 'Men on a red-carpeted stage clapping as two men shake hands, in front of a Builders Association of India, Tambaram Centre installation banner',
    caption: '[Caption to be added]',
    category: 'Trust Activities',
    ratio: '16 / 9'
  },
  {
    id: 'gallery-f-4',
    src: '/assets/gallery/f-4.jpg',
    alt: 'A large group of men in formal wear and waistcoats posing together in front of the Builders Association of India logo',
    caption: '[Caption to be added]',
    category: 'Trust Activities',
    ratio: '16 / 9'
  },
  {
    id: 'gallery-f-5',
    src: '/assets/gallery/f-5.jpg',
    alt: 'Men seated around steel tables at an Executive Committee Meeting of the Builders Association of India, Tambaram Centre',
    caption: '[Caption to be added]',
    category: 'Trust Activities',
    ratio: '16 / 9'
  }
];

export const galleryCategories = [
  'All',
  ...Array.from(new Set(galleryItems.map((i) => i.category)))
];

export default galleryItems;
