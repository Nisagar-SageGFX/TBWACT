// The four technical awareness themes shown on the home page.
//
// These are a regrouping of the Technical Awareness Programme's topic list in
// programs.js — the programme itself, with its full list and its "Planned"
// status, still lives on /programs. Nothing here claims completed work.
//
// `alt` describes what each image visibly shows. Three are stock illustrations
// or renders rather than photographs of TBWACT's own work, and the alt says so
// by describing them as illustrations — do not reword it to imply otherwise.
// `focus` maps to object-position for a photo whose subject sits off-centre in
// the 4:3 card frame.

export const technicalTopics = [
  {
    id: 'technical-knowledge',
    title: 'Technical Knowledge & Awareness',
    description:
      'Seminars and awareness programmes that strengthen knowledge among construction professionals.',
    image: '/assets/technical/technical-knowledge.jpg',
    alt: 'Illustration of three people working around a large head with a circuit-board brain, surrounded by gears and charts',
    focus: ''
  },
  {
    id: 'modern-construction',
    title: 'Modern Construction Technologies',
    description:
      'Exploring modern construction technologies, digital construction management and evolving industry practices.',
    image: '/assets/technical/modern-construction-technologies.jpg',
    alt: 'An engineer in a hard hat and high-visibility vest using a laptop, with digital engineering diagrams overlaid on the scene',
    focus: ''
  },
  {
    id: 'sustainable-construction',
    title: 'Sustainable & Safe Construction',
    description:
      'Focus on green building concepts, sustainable development and construction safety standards.',
    image: '/assets/technical/sustainable-safe-construction.jpg',
    alt: 'Miniature tower crane and trees on a model construction site, with tall buildings blurred behind',
    focus: ''
  },
  {
    id: 'industry-standards',
    title: 'Industry Standards & Regulatory Compliance',
    description:
      'Keeping builders, engineers, architects, developers and contractors updated on regulatory requirements and industry standards.',
    image: '/assets/technical/industry-standards.jpg',
    alt: 'A smiling engineer in a hard hat holding rolled construction drawings beside large glass windows',
    focus: ''
  }
];

export default technicalTopics;
