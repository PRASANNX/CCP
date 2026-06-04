export interface NavItem {
  label: string;
  href: string;
  rel: string;
  children?: { label: string; href: string }[];
}

export const navigation: NavItem[] = [
  {
    label: 'Segments',
    href: '#',
    rel: 'nav-1',
    children: [
      { label: 'Education & Institutions', href: '#' },
      { label: 'Corporate Brands', href: '#' },
    ],
  },
  {
    label: 'Offerings',
    href: '#',
    rel: 'nav-2',
    children: [
      { label: 'Content-Led Marketing', href: '#' },
      { label: 'Event Coverage & Films', href: '#' },
    ],
  },
];
