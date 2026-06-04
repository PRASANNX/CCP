export type MetricCard = {
  id: string;
  label: string;
  value: string;
  trend?: string;
  trendDirection?: "up" | "down" | "neutral";
  description: string;
  chartLabel: string;
  chartData: number[];
};

export const metrics: MetricCard[] = [
  {
    id: "reach",
    label: "Total Reach",
    value: "[INSERT: total reach]",
    trend: "↑ [INSERT: reach growth %]",
    trendDirection: "up",
    description:
      "People reached across campaign, event, and social content distribution.",
    chartLabel: "Reach",
    chartData: [3, 4, 5, 6, 5, 8, 7, 22, 12, 9, 10, 8],
  },
  {
    id: "views",
    label: "Total Views",
    value: "[INSERT: total views]",
    trend: "↑ [INSERT: views growth %]",
    trendDirection: "up",
    description:
      "Video and reel views generated across published campaign assets.",
    chartLabel: "Views",
    chartData: [2, 2, 3, 5, 9, 14, 8, 28, 20, 16, 12, 10],
  },
  {
    id: "engagement",
    label: "Engagement",
    value: "[INSERT: engagement rate]",
    trend: "↑ [INSERT: engagement growth %]",
    trendDirection: "up",
    description:
      "Likes, comments, shares, saves, profile actions, and audience responses.",
    chartLabel: "Engagement",
    chartData: [1, 3, 2, 4, 7, 6, 10, 8, 12, 9, 11, 13],
  },
  {
    id: "output",
    label: "Content Output",
    value: "[INSERT: number of assets]",
    trend: "[INSERT: production timeline or output growth]",
    trendDirection: "neutral",
    description:
      "Reels, creatives, stories, event edits, ads, films, and campaign assets delivered.",
    chartLabel: "Assets",
    chartData: [1, 2, 3, 4, 4, 5, 7, 8, 9, 10, 11, 12],
  },
];
