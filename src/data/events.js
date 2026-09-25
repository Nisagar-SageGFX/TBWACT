// Events published by TBWACT. Add new entries at the top of the array.

export const events = [
  {
    id: 'elara-2026',
    title: 'ELARA 2026',
    subtitle: 'Elevating Futures \u2014 a mega cultural event',
    // status: 'upcoming',
    date: '2026-07-19',
    dateLabel: 'Sunday, 19 July 2026',
    timeLabel: '3:30 pm onwards',
    venue: 'Chennai Trade Centre, Nandambakkam, Chennai',
    excerpt:
      'A fund-raising cultural evening for the TBWACT Trust Building. One stage, live performances by a large line-up of artists, and proceeds that go directly into the Welfare & Service Centre.',
    body: [
      'ELARA 2026 is a mega cultural event organised by TBWACT as a fund-raising programme for the Trust Building. Proceeds from the event will be utilised for the development of the building and its future service activities.',
      'Every ticket purchased, sponsorship received and contribution made helps create educational opportunities, healthcare access, skill development, professional growth and community welfare.',
      'By supporting ELARA 2026, you become a partner in building a brighter future for generations to come.'
    ],
    highlights: [
      'Live performances',
      'Soulful music',
      'Talented artists',
      'Non-stop entertainment',
      'A cause that matters'
    ],
    image: '/assets/elara-2026-poster.jpeg',
    imageWebp: '/assets/elara-2026-poster.webp',
    imageAlt: 'ELARA 2026 event poster \u2014 19 July 2026 at Chennai Trade Centre',
    brochure: '/assets/ELARA-2026-Brochure.pdf'
  }
];

export const upcomingEvents = events.filter((e) => e.status === 'upcoming');
export const pastEvents = events.filter((e) => e.status === 'past');

// Sponsorship tiers for ELARA 2026, as published in the official brochure.
// NOT CURRENTLY PUBLISHED. The sponsorship section was removed from
// /news-events and replaced with the testimonial video, so nothing imports
// these two exports any more. They are kept rather than deleted because they
// are transcribed from the ELARA 2026 brochure and this repository has no
// version control to recover them from. Delete them once the trust confirms
// the categories are not going back on the site.
export const sponsorshipTiers = [
  {
    tier: 'Title Sponsor',
    amount: '\u20b910.00 lakhs',
    stall: 'Premium stall \u2014 4 m \u00d7 3 m',
    benefits: [
      'Prime logo placement in all event promotions',
      'Stage backdrop branding',
      'LED wall display throughout the event',
      'Special recognition during the inaugural ceremony',
      'Social media promotions',
      'A dedicated 40-minute product presentation at a TBWACT monthly meeting'
    ]
  },
  {
    tier: 'Co-Sponsor',
    amount: '\u20b97.50 lakhs',
    stall: 'Premium stall \u2014 4 m \u00d7 3 m',
    benefits: [
      'Prime logo placement in all event promotions',
      'Stage backdrop branding',
      'LED wall display throughout the event',
      'Special recognition during the inaugural ceremony',
      'Social media promotions'
    ]
  },
  {
    tier: 'Platinum Sponsor',
    amount: '\u20b95.00 lakhs',
    stall: 'Premium stall \u2014 4 m \u00d7 3 m',
    benefits: [
      'Product and company branding at the venue',
      'LED screen advertisement during the entire event',
      'Company logo in the event brochure',
      'Public announcements during the event'
    ]
  },
  {
    tier: 'Diamond Sponsor',
    amount: '\u20b93.00 lakhs',
    stall: 'Premium stall \u2014 3 m \u00d7 3 m',
    benefits: [
      'Product and company branding at the venue',
      'LED screen advertisement during the entire event',
      'Company logo in the event brochure'
    ]
  },
  {
    tier: 'Gold Sponsor',
    amount: '\u20b92.00 lakhs',
    stall: 'Premium stall \u2014 3 m \u00d7 3 m',
    benefits: [
      'LED screen advertisement during the entire event',
      'Company logo in the event brochure'
    ]
  },
  {
    tier: 'Silver Sponsor',
    amount: '\u20b91.00 lakh',
    stall: 'Branding benefits',
    benefits: [
      'LED screen advertisement during the entire event',
      'Public announcements during the event'
    ]
  }
];

export const sponsorshipNote = 'Terms and conditions apply.';

export default events;
