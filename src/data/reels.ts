export type Reel = {
  id: string;
  title: string;
  url: string;
  shortcode: string;
  icon: string;
  color: string;
  caption?: string;
};

export const reels: Reel[] = [
  {
    id: "reel-1",
    title: "Content Strategy",
    url: "https://www.instagram.com/reel/DZJ_tX7D9OB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    shortcode: "DZJ_tX7D9OB",
    icon: "📋",
    color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    caption: "Content-led brand growth",
  },
  {
    id: "reel-2",
    title: "Event Coverage",
    url: "https://www.instagram.com/reel/DRSKqVyiOMf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    shortcode: "DRSKqVyiOMf",
    icon: "🎬",
    color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    caption: "Live event storytelling",
  },
  {
    id: "reel-3",
    title: "Corporate Film",
    url: "https://www.instagram.com/reel/DVBQo4hCGGh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    shortcode: "DVBQo4hCGGh",
    icon: "🎥",
    color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    caption: "Brand films that explain clearly",
  },
  {
    id: "reel-4",
    title: "Education Content",
    url: "https://www.instagram.com/reel/DY12e7TsA2r/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    shortcode: "DY12e7TsA2r",
    icon: "📚",
    color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    caption: "Campus and institution storytelling",
  },
];
