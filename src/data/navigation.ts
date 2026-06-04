export interface NavItem {
  label: string;
  href: string;
  rel: string;
  children?: { label: string; href: string }[];
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '#top', rel: 'top' },
  { label: 'Showreel', href: '#showreel-title', rel: 'showreel' },
  { label: 'Founder', href: '#founder-chacha-title', rel: 'founder' },
  { label: 'Methodology', href: '#methodology-title', rel: 'methodology' },
  { label: 'Logos', href: '#logo-carousel-title', rel: 'logos' },
  { label: 'Brands', href: '#brands-worked-with-title', rel: 'brands' },
  { label: 'What makes CCP different', href: '#feature-title', rel: 'features' },
  { label: 'Proof', href: '#kpi-proof-title', rel: 'proof' },
  { label: 'Cases', href: '#cases-title', rel: 'cases' },
  { label: 'Composition', href: '#composition-title', rel: 'composition' },
  { label: 'Contact', href: '#contact', rel: 'contact' },
];
