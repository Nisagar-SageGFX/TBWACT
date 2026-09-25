// The four technical awareness themes shown on the home page.
//
// These are a regrouping of the Technical Awareness Programme's topic list in
// programs.js — the programme itself, with its full list and its "Planned"
// status, still lives on /programs. Nothing here claims completed work.
//
// `alt` was written from each topic and filename, not from looking at the
// photographs. Check it describes the actual image before launch.
// `focus` maps to object-position for a photo whose subject sits off-centre in
// the 4:3 card frame.

export const technicalTopics = [
  {
    id: 'technical-knowledge',
    title: 'Technical Knowledge & Awareness',
    description:
      'Seminars and awareness programmes that strengthen knowledge among construction professionals.',
    image: '/assets/technical/technical-knowledge.jpg',
    alt: 'A technical awareness seminar for construction professionals',
    focus: ''
  },
  {
    id: 'modern-construction',
    title: 'Modern Construction Technologies',
    description:
      'Exploring modern construction technologies, digital construction management and evolving industry practices.',
    image: '/assets/technical/modern-construction-technologies.png',
    alt: 'Modern construction technology and digital construction management',
    focus: ''
  },
  {
    id: 'sustainable-construction',
    title: 'Sustainable & Safe Construction',
    description:
      'Focus on green building concepts, sustainable development and construction safety standards.',
    image: '/assets/technical/sustainable-safe-construction.png',
    alt: 'Green building and construction site safety practices',
    focus: ''
  },
  {
    id: 'industry-standards',
    title: 'Industry Standards & Regulatory Compliance',
    description:
      'Keeping builders, engineers, architects, developers and contractors updated on regulatory requirements and industry standards.',
    image: '/assets/technical/industry-standards.jpg',
    alt: 'Reviewing construction industry standards and regulatory requirements',
    focus: ''
  }
];

export default technicalTopics;
