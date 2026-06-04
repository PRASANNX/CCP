export type FeatureCard = {
  title: string;
  subtitle: string;
  detail: string;
  instagramReel?: string;
};

export const featureCards: FeatureCard[] = [
  {
    title: "Hybrid model",
    subtitle: "Local delivery, global capability.",
    detail:
      "We combine local teams and on-the-ground knowledge with international networks to deliver campaigns that scale.",
  },
  {
    title: "Global reach. Local relevance.",
    subtitle: "Zurich, Singapore, Madrid, Istanbul, Tallinn, London.",
    detail:
      "Local insight for a global reach. With hubs across Europe and Asia, we combine deep understanding of local ecosystems with the reach of an international network.",
  },
  {
    title: "Fintech-first focus",
    subtitle: "Built for financial products.",
    detail:
      "We understand product-led growth, regulatory nuance and customer journeys specific to fintech and financial services.",
  },
  {
    title: "Execution discipline",
    subtitle: "Processes that deliver.",
    detail:
      "Operational rigor, clear timelines and measurable outcomes — we prioritise execution so ideas become impact.",
  },
];
