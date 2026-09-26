// The vision pillars published by TBWACT. Healthcare is commented out below,
// leaving four active.
//
// `image` is shared with the impact cards on /news-events rather than
// duplicated — the same four images cover the same four themes. They are stock
// illustrations, not photographs of TBWACT's activities, so `alt` describes
// them as illustrations and must not claim they show the trust's work. `alt` is
// used on /our-vision, where the cards carry photographs; the icon cards on the
// home page ignore both fields. `focus` maps to object-position for a photo
// whose subject sits off-centre in the 4:3 crop.

export const visionPillars = [
  {
    id: 'education',
    title: 'Education for All',
    description:
      'Creating educational opportunities and supporting deserving students who have talent but not the means.',
    link: '/programs#education',
    image: '/assets/impact/education.jpg',
    alt: 'Illustration of a person climbing a staircase of books, surrounded by icons for science, reading, graduation and the internet',
    focus: ''
  },
  // {
  //   id: 'healthcare',
  //   title: 'Better Healthcare',
  //   description:
  //     'Improving access to healthcare through regular camps, screenings and health awareness for the public.',
  //   link: '/programs#healthcare'
  // },
  {
    id: 'skills',
    title: 'Skilled Workforce Development',
    description:
      'Training masons, carpenters, electricians, plumbers, painters and technicians to industry standards.',
    link: '/programs#skill-development',
    image: '/assets/impact/skill-development.jpg',
    alt: 'Illustration of a head in profile with the word SKILLS and gears labelled Personal, Technical and People',
    focus: ''
  },
  {
    id: 'community',
    title: 'Community Welfare',
    description:
      'Running initiatives that support community development and social welfare across Tambaram and beyond.',
    link: '/programs#welfare-service-centre',
    image: '/assets/impact/community-welfare.jpg',
    alt: 'Illustration of many brightly coloured hands raised together',
    focus: ''
  },
  {
    id: 'professional',
    title: 'Professional Excellence',
    description:
      'Sharing technical knowledge with builders, engineers and architects through seminars and awareness programmes.',
    link: '/programs#technical-awareness',
    image: '/assets/impact/professional-growth.jpg',
    alt: 'Illustration of a businessman with a briefcase climbing a staircase against a city skyline',
    focus: ''
  }
];

export default visionPillars;
