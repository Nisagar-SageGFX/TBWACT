// Programme content taken directly from the official TBWACT material.
// All five programmes are described by the trust as planned / proposed, and that
// status is preserved in the copy below.

export const programs = [
  {
    id: 'education',
    slug: 'education',
    title: 'Education Support Programme',
    subtitle: 'Empowering young minds',
    status: 'Planned',
    summary:
      'One of the major objectives of TBWACT is to support deserving students who possess talent but lack financial resources.',
    listLabel: 'Planned initiatives',
    items: [
      'Educational scholarships',
      'Higher education assistance',
      'Career guidance programmes',
      'Skill development courses',
      'Competitive examination coaching support'
    ],
    outcomeLabel: 'Intended impact',
    outcome:
      'Helping students from government schools and economically weaker backgrounds pursue their dreams and build successful careers.',
    image: '/assets/brochure/elara-page-3.jpg',
    imageWebp: '/assets/brochure/elara-page-3.webp',
    imageAlt: 'TBWACT education support programme page from the ELARA 2026 brochure'
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    title: 'Healthcare for All',
    subtitle: 'Monthly free medical camps',
    status: 'Planned',
    summary:
      'The proposed Trust Building will host regular healthcare programmes for the public.',
    listLabel: 'Services planned',
    items: [
      'Eye screening camps',
      'Cardiac health check-ups',
      'Diabetes screening',
      "Women's wellness programmes",
      'Dental check-ups',
      'General health camps'
    ],
    outcomeLabel: 'Vision',
    outcome:
      'Providing accessible and affordable healthcare services for all sections of society.',
    image: '/assets/brochure/elara-page-4.jpg',
    imageWebp: '/assets/brochure/elara-page-4.webp',
    imageAlt: 'TBWACT healthcare programme page from the ELARA 2026 brochure'
  },
  {
    id: 'skill-development',
    slug: 'skill-development',
    title: 'Skill Development Training Centre',
    subtitle: 'Empowering construction workers',
    status: 'Planned',
    summary:
      'TBWACT plans to establish a dedicated training centre for construction industry professionals.',
    listLabel: 'Training programmes for',
    items: [
      'Masons',
      'Carpenters',
      'Electricians',
      'Plumbers',
      'Painters',
      'Construction technicians'
    ],
    secondaryLabel: 'Benefits',
    secondaryItems: [
      'Professional certification',
      'Government recognised training',
      'Employment enhancement',
      'Income growth opportunities',
      'Industry standard skills'
    ],
    outcomeLabel: 'Mission',
    outcome:
      'Creating a highly skilled workforce that contributes to nation-building.',
    image: '/assets/brochure/elara-page-5.jpg',
    imageWebp: '/assets/brochure/elara-page-5.webp',
    imageAlt: 'TBWACT skill development training centre page from the ELARA 2026 brochure'
  },
  {
    id: 'technical-awareness',
    slug: 'technical-awareness',
    title: 'Technical Awareness Programmes',
    subtitle: 'Knowledge creates excellence',
    status: 'Planned',
    summary:
      'TBWACT intends to organise regular technical seminars and awareness programmes for builders, developers, engineers, contractors, architects and industry professionals.',
    listLabel: 'Key topics',
    items: [
      'Modern construction technologies',
      'Green building concepts',
      'Sustainable development',
      'Regulatory compliance',
      'Digital construction management',
      'Safety standards'
    ],
    outcomeLabel: 'Objective',
    outcome:
      'Keeping industry professionals updated with evolving trends and technologies.',
    image: '/assets/brochure/elara-page-6.jpg',
    imageWebp: '/assets/brochure/elara-page-6.webp',
    imageAlt: 'TBWACT technical awareness programme page from the ELARA 2026 brochure'
  },
  {
    id: 'welfare-service-centre',
    slug: 'welfare-service-centre',
    title: 'Welfare & Service Centre',
    subtitle: 'A home for every programme',
    status: 'Under development',
    summary:
      'The Trust has embarked on constructing a dedicated Welfare & Service Centre that will become a hub for meaningful social activities benefiting thousands of people every year.',
    listLabel: 'What the centre will house',
    items: [
      'Education support and coaching activities',
      'Monthly free medical camps',
      'The skill development training centre',
      'Technical seminars for industry professionals',
      'Community welfare activities'
    ],
    outcomeLabel: 'Funding',
    outcome:
      'Proceeds from ELARA 2026 will be utilised for the development of the Trust Building and its future service activities.',
    image: '/assets/trust-building.jpg',
    imageWebp: '/assets/trust-building.webp',
    imageAlt: 'Architectural render of the proposed TBWACT Welfare & Service Centre'
  }
];

export const getProgram = (slug) => programs.find((p) => p.slug === slug);

export default programs;
