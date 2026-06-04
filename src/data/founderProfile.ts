export type FounderProfileData = {
  id: string;
  name: string;
  title?: string;
  company?: string;
  eyebrow?: string;
  quote?: string;
  headline?: string;
  bio?: string;
  photo?: {
    src: string;
    alt: string;
  };
  experience?: string;
  location?: string;
  highlights?: {
    icon?: string;
    label: string;
    description?: string;
  }[];
  cta?: {
    label: string;
    href: string;
  };
  links?: {
    label: string;
    href: string;
    ariaLabel?: string;
  }[];
};

export const founderProfile: FounderProfileData = {
  id: "founder-chacha",
  name: "Chacha Chatore",
  title: "Founder & Marketing Strategist",
  company: "CCP",
  eyebrow: "Leadership",
  headline: "Building content systems that drive visibility, trust, and growth.",
  quote:
    "Content should not just look good. It should move people to act.",
  bio:
    "For over a decade, Chacha Chatore has worked at the intersection of marketing, storytelling, and business growth. Through CCP, he helps institutions, brands, and organizations turn content into a strategic growth asset — rather than a creative expense.",
  photo: {
    src: "/images/founders/chacha-chatore.jpg",
    alt: "Chacha Chatore — Founder of CCP",
  },
  experience: "10+ Years",
  location: "Indore, Madhya Pradesh",
  highlights: [
    {
      icon: "01",
      label: "Marketing Strategy",
      description:
        "End-to-end marketing strategy across education, corporate, and local brand sectors.",
    },
    {
      icon: "02",
      label: "Content Systems",
      description:
        "Designed repeatable content pipelines that combine production, distribution, and performance.",
    },
    {
      icon: "03",
      label: "Business Growth",
      description:
        "Led content strategies focused on measurable outcomes — visibility, trust, and conversions.",
    },
  ],
  cta: {
    label: "Start a project",
    href: "mailto:hello@ccp.in",
  },
  links: [
    {
      label: "Instagram",
      href: "https://instagram.com/chachachatore",
      ariaLabel: "Chacha Chatore on Instagram",
    },
    {
      label: "Email",
      href: "mailto:hello@ccp.in",
      ariaLabel: "Email CCP",
    },
  ],
};
