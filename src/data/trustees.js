// Office bearers as published by TBWACT.
// Add a photo by dropping the file into /public/assets/trustees/ and setting `image`.
// Add a bio by filling `bio`. Leave a field as an empty string and the card hides it.
//
// `focus` sets the CSS object-position on the photo. The supplied photographs are
// landscape and the card crops them, so a trustee whose face sits off-centre can be
// corrected here without touching the stylesheet — 'center' (default), 'top',
// '50% 30%', and so on.

export const trustees = [
  {
    id: 'ruby-r-manoharan',
    name: 'Dr. Ruby R. Manoharan',
    designation: 'Founder Chairman',
    professionalDesignation: 'Ex. M.L.A.',
    image: '/assets/trustees/ruby-r-manoharan.webp',
    focus: '',
    bio: ''
  },
  {
    id: 'a-subramanian',
    name: 'Thiru A. Subramanian',
    designation: 'Vice Chairman',
    professionalDesignation: '',
    image: '/assets/trustees/a-subramanian.webp',
    focus: '',
    bio: ''
  },
  {
    id: 'h-robert-livingston',
    name: 'Thiru H. Robert Livingston',
    designation: 'Founder Trustee & Building Committee Chairman',
    professionalDesignation: '',
    image: '/assets/trustees/h-robert-livingston.webp',
    focus: '',
    bio: ''
  },
  {
    id: 's-wilson-raj',
    name: 'Thiru S. Wilson Raj',
    designation: 'Secretary',
    professionalDesignation: '',
    image: '/assets/trustees/s-wilson-raj.webp',
    focus: '',
    bio: ''
  },
  {
    id: 'v-lavakumar',
    name: 'Thiru V. Lavakumar',
    designation: 'Treasurer',
    professionalDesignation: '',
    image: '/assets/trustees/v-lavakumar.webp',
    focus: '',
    bio: ''
  },
  {
    id: 'r-suresh',
    name: 'Thiru R. Suresh',
    designation: 'Founder Trustee',
    professionalDesignation: '',
    image: '/assets/trustees/r-suresh.webp',
    focus: '',
    bio: ''
  },
  {
    id: 't-benjamin-rajan',
    name: 'Thiru T. Benjamin Rajan',
    designation: 'Founder Trustee',
    professionalDesignation: '',
    image: '/assets/trustees/t-benjamin-rajan.webp',
    focus: '',
    bio: ''
  },

  // These three were supplied as photographs only. The trust has not stated their
  // roles, so the designation is a visible placeholder rather than a guess — the
  // card shows it as an unfilled field. Replace the placeholder with the real
  // designation and the card needs no other change.
  {
    id: 'g-dineshkumar',
    name: 'Thiru G. Dineshkumar',
    designation: '',
    professionalDesignation: '',
    image: '/assets/trustees/g-dineshkumar.webp',
    focus: '',
    bio: ''
  },
  {
    id: 'k-kandasamy',
    name: 'Thiru K. Kandasamy',
    designation: '',
    professionalDesignation: '',
    image: '/assets/trustees/k-kandasamy.webp',
    focus: '',
    bio: ''
  },
  {
    id: 's-rajasekar',
    name: 'Thiru S. Rajasekar',
    designation: '',
    professionalDesignation: '',
    image: '/assets/trustees/s-rajasekar.webp',
    focus: '',
    bio: ''
  }
];

// The founder profile shown on /about, as supplied by the trust.
//
// `designation` is his role in TBWACT, which is what the trust banner lists and
// what the photo's alt text says. `affiliation` is a separate office at a
// separate organisation — the two are kept apart rather than merged into one
// line, because "Founder Chairman" means something different in each.
export const founder = {
  name: 'Dr. Ruby R. Manoharan',
  designation: 'Founder Chairman',
  professionalDesignation: 'Ex. M.L.A.',
  affiliation:
    'Founder Chairman, Builders’ Association of India – Tambaram Centre',
  image: '/assets/trustees/ruby-r-manoharan.webp',
  profile: [
    'Dr. Ruby R. Manoharan is an entrepreneur and construction industry professional who has made significant contributions to the development of South Chennai and the Tambaram region. As the Founder Chairman of the Builders’ Association of India – Tambaram Centre, he helped establish a platform for builders and construction professionals to collaborate, address industry needs and support the growth of the construction sector.',
  ]
};

export default trustees;
