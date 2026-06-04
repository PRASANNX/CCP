export interface CompositionCard {
  type: 'text' | 'number' | 'media';
  title?: string;
  color?: 'green' | 'black' | 'red' | 'blue';
  value?: string;
  alt?: string;
  span?: 'wide' | 'tall';
}

export const compositionCards: CompositionCard[] = [
  { type: 'text', title: 'Content Lab', color: 'green' },
  { type: 'number', title: 'Assets built with purpose', value: '99', color: 'black' },
  { type: 'text', title: 'Events', color: 'red', span: 'wide' },
  { type: 'media', alt: 'Event production team documenting a live moment', span: 'tall' },
  { type: 'text', title: 'Corporate Films', color: 'blue' },
  { type: 'text', title: 'Education', color: 'black' },
];
