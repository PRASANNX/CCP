export interface NavItem {
  label: string;
  href: string;
  rel: string;
  type?: 'page' | 'hash';
  children?: { label: string; href: string }[];
}

export const navigation: NavItem[] = [
  { label: 'Work', href: '/work', rel: 'work', type: 'page' },
  { label: 'Segments', href: '/segments', rel: 'segments', type: 'page' },
  { label: 'Services', href: '/services', rel: 'services', type: 'page' },
  { label: 'About', href: '/about', rel: 'about', type: 'page' },
];
