export type MediaAsset = {
  id: string;
  type: "image" | "video" | "embed";
  src: string;
  poster?: string;
  alt?: string;
  title?: string;
  orientation?: "portrait" | "landscape" | "square";
  tags?: string[];
};

export type BrandCaseStudy = {
  id: string;
  slug: string;
  brandName: string;
  logo?: string;
  segment: string;
  location?: string;
  shortDescription: string;
  overview: string;
  challenge?: string;
  solution?: string;
  impact?: string;
  services: string[];
  deliverables: string[];
  metrics?: {
    label: string;
    value: string;
    note?: string;
  }[];
  heroMedia?: MediaAsset;
  gallery: MediaAsset[];
  testimonial?: {
    quote: string;
    name: string;
    role?: string;
  };
  featured?: boolean;
  year?: string;
  relatedBrands?: string[];
};

export const caseStudies: BrandCaseStudy[] = [
  {
    id: "cs-1",
    slug: "renaissance-university",
    brandName: "Renaissance University",
    segment: "education",
    location: "Indore, India",
    shortDescription: "Complete university prospectus and social media system.",
    overview: "We overhauled the visual identity and content strategy for Renaissance University to attract a new generation of students.",
    challenge: "The university struggled with outdated marketing materials that didn't reflect their modern campus and vibrant student life.",
    solution: "A 3-month comprehensive shoot capturing campus life, events, and academic excellence, packaged into a new prospectus and a year-long social media calendar.",
    impact: "40% increase in admissions inquiries and a 200% boost in social media engagement.",
    services: ["Photography", "Videography", "Social Media"],
    deliverables: ["Brand Film", "Prospectus Design", "Reels Series"],
    metrics: [
      { label: "Increase in Inquiries", value: "40%" },
      { label: "Assets Delivered", value: "500+" }
    ],
    gallery: [],
    featured: true,
  },
  {
    id: "cs-2",
    slug: "bapu-ki-kutia",
    brandName: "Bapu ki kutia",
    segment: "hospitality",
    location: "Indore, India",
    shortDescription: "Visual storytelling for an iconic local restaurant chain.",
    overview: "Capturing the essence and culinary heritage of Bapu ki kutia.",
    services: ["Food Photography", "Social Media"],
    deliverables: ["Menu Photography", "Instagram Reels"],
    gallery: [],
    featured: true,
  },
  {
    id: "cs-3",
    slug: "realmakers",
    brandName: "Realmakers",
    segment: "real-estate",
    location: "Indore, India",
    shortDescription: "High-end property walkthroughs and corporate films.",
    overview: "Elevating the real estate portfolio with cinematic visuals.",
    services: ["Videography", "Drone Filming"],
    deliverables: ["Property Walkthroughs", "Corporate Profile"],
    gallery: [],
    featured: true,
  },
  {
    id: "cs-4",
    slug: "events-by-b3-food-park",
    brandName: "Events By B3 Food park",
    segment: "events",
    location: "Indore, India",
    shortDescription: "Event coverage and promotional content.",
    overview: "Dynamic and energetic event coverage.",
    services: ["Event Photography", "Videography"],
    deliverables: ["Aftermovies", "Photo Gallery"],
    gallery: [],
    featured: true,
  }
];
