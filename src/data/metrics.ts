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
    value: "16M",
    trend: "↑ 100%",
    trendDirection: "up",
    description:
      "People reached across campaign, event, and social content distribution.",
    chartLabel: "Reach",
    chartData: [1, 1, 1, 1, 12, 40, 15, 8, 10, 6, 8, 5],
  },
  {
    id: "views",
    label: "Total Views",
    value: "26M",
    trend: "↑ 44.4%",
    trendDirection: "up",
    description:
      "Video and reel views generated across published campaign assets.",
    chartLabel: "Views",
    chartData: [2, 2, 2, 3, 2, 2, 1, 1, 60, 20, 15, 5],
  },
  {
    id: "engagement",
    label: "Engagement",
    value: "6M",
    trend: "↑ 88.2%",
    trendDirection: "up",
    description:
      "Likes, comments, shares, saves, profile actions, and audience responses.",
    chartLabel: "Engagement",
    chartData: [10, 12, 15, 14, 28, 45, 60, 85, 75, 95, 120, 130],
  },
  {
    id: "output",
    label: "Content Output",
    value: "840+ Assets",
    trend: "↑ 2.5x YoY",
    trendDirection: "up",
    description:
      "Reels, creatives, stories, event edits, ads, films, and campaign assets delivered.",
    chartLabel: "Assets",
    chartData: [10, 12, 15, 20, 25, 30, 45, 60, 70, 75, 80, 85],
  },
];
