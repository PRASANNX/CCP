export interface NavItem {
  label: string;
  href: string;
  rel: string;
  children?: { label: string; href: string }[];
}

export const navigation: NavItem[] = [
  {
    label: '[FILL: Nav 1]',
    href: '#',
    rel: 'nav-1',
    children: [
      { label: '[FILL: Sub-link 1a]', href: '#' },
      { label: '[FILL: Sub-link 1b]', href: '#' },
    ],
  },
  {
    label: '[FILL: Nav 2]',
    href: '#',
    rel: 'nav-2',
    children: [
      { label: '[FILL: Sub-link 2a]', href: '#' },
      { label: '[FILL: Sub-link 2b]', href: '#' },
    ],
  },
];
