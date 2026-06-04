export interface Metric {
  label: string;
  value: string;
  suffix?: string;
}

export const metrics: Metric[] = [
  { label: '[FILL: outcome metric 1 label]', value: '150', suffix: '+' },
  { label: '[FILL: outcome metric 2 label]', value: '98', suffix: '%' },
  { label: '[FILL: outcome metric 3 label]', value: '42', suffix: 'M' },
  { label: '[FILL: outcome metric 4 label]', value: '12', suffix: '+' },
];
