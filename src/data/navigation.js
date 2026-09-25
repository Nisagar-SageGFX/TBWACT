export const navigation = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'About TBWACT', path: '/about' },
      { label: 'Board of Trustees', path: '/board-of-trustees' },
      { label: 'Our Vision', path: '/our-vision' }
    ]
  },
  { label: 'Programs', path: '/programs' },
  { label: 'News & Events', path: '/news-events' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact' }
];

export const primaryCta = { label: 'Get Involved', path: '/contact' };

export default navigation;
