export interface CompositionCard {
  type: 'text' | 'number' | 'media';
  title?: string;
  color?: 'green' | 'black' | 'red' | 'blue';
  value?: string;
  alt?: string;
  span?: 'wide' | 'tall';
}

export const compositionCards: CompositionCard[] = [
  { type: 'text', title: '[FILL: Comp heading 1]', color: 'green' },
  { type: 'number', title: '[FILL: Comp metric label]', value: '99', color: 'black' },
  { type: 'text', title: '[FILL: Comp heading 2]', color: 'red', span: 'wide' },
  { type: 'media', alt: '[FILL: Media placeholder alt text]', span: 'tall' },
  { type: 'text', title: '[FILL: Comp heading 3]', color: 'blue' },
  { type: 'text', title: '[FILL: Comp heading 4]', color: 'black' },
];
