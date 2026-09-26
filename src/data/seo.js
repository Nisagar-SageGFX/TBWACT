// One entry per route. The SEO team can edit titles and descriptions here
// without touching any component.
//
// The `home` title and description are ALSO written out by hand in index.html,
// for crawlers that never run JavaScript. Change them in both places.

import site from './site';

export const seoDefaults = {
  siteName: 'TBWACT',
  domain: site.domain,
  image: '/assets/tbwact-logo.jpeg',
  // 'summary', not 'summary_large_image': the share image is the square logo,
  // and the large card would crop it top and bottom. Switch back once a
  // 1200x630 share image exists.
  twitterCard: 'summary',
  locale: 'en_IN'
};

export const seo = {
  home: {
    path: '/',
    title: 'TBWACT | Tambaram Builders Welfare and Charitable Trust',
    description:
      'TBWACT serves society through education, healthcare, skill development and community welfare, and is building a Welfare & Service Centre in Selaiyur, Chennai.'
  },
  about: {
    path: '/about',
    title: 'About TBWACT | Tambaram Builders Welfare and Charitable Trust',
    description:
      'How Tambaram Builders Welfare and Charitable Trust began, what it was established to do, and the Welfare & Service Centre it is building for the community.'
  },
  boardOfTrustees: {
    path: '/board-of-trustees',
    title: 'Board of Trustees | TBWACT',
    description:
      'Meet the office bearers of Tambaram Builders Welfare and Charitable Trust, the people responsible for its welfare and service initiatives.'
  },
  ourVision: {
    path: '/our-vision',
    title: 'Our Vision | TBWACT',
    description:
      'Education for all, skilled workforce development, community welfare and professional excellence \u2014 the four pillars of the TBWACT vision.'
  },
  programs: {
    path: '/programs',
    title: 'Programs | TBWACT',
    description:
      'Education support, healthcare camps, a skill development training centre, technical awareness programmes and the Welfare & Service Centre planned by TBWACT.',
    image: '/assets/trust-building.jpg'
  },
  newsEvents: {
    path: '/news-events',
    title: 'News & Events | TBWACT',
    description:
      'ELARA 2026, the TBWACT mega cultural event on 19 July 2026 at Chennai Trade Centre, plus trust announcements.',
    image: '/assets/elara-2026-poster.jpeg'
  },
  gallery: {
    path: '/gallery',
    title: 'Gallery | TBWACT',
    description:
      'Photographs and material from TBWACT initiatives, the proposed Welfare & Service Centre and the ELARA 2026 cultural event.'
  },
  contact: {
    path: '/contact',
    title: 'Contact Us | TBWACT',
    description:
      'Reach Tambaram Builders Welfare and Charitable Trust at Raja Iyer Street, Selaiyur, Chennai, or ask about sponsoring, volunteering or supporting a programme.'
  },
  privacy: {
    path: '/privacy-policy',
    title: 'Privacy Policy | TBWACT',
    description:
      'What information the TBWACT website handles: no cookies or tracking, a contact form that opens your own email app, and the Google and YouTube services it loads.'
  },
  notFound: {
    path: '/404',
    title: 'Page not found | TBWACT',
    description: 'The page you are looking for is not available on the TBWACT website.',
    noindex: true
  }
};

export default seo;
