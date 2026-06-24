import type { MediaAsset } from "./caseStudies";

export type SegmentPageData = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  heroStatement: string;
  problems: string[];
  solutions: string[];
  services: string[];
  deliverables: string[];
  featuredBrands: string[];
  featuredMedia?: MediaAsset[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  cta: {
    title: string;
    description: string;
    buttonLabel: string;
  };
};

export const segmentsData: SegmentPageData[] = [
  {
    id: "seg-1",
    slug: "hospitality",
    title: "Hospitality & Dining",
    shortTitle: "Hospitality",
    description: "Visual systems for hotels, restaurants, and cafes that turn viewers into guests.",
    heroStatement: "We make your menu look as good as it tastes.",
    problems: [
      "Inconsistent food photography across delivery apps.",
      "Lack of engaging social media reels to attract weekend crowds.",
      "Outdated interior shots that don't reflect the current ambiance."
    ],
    solutions: [
      "High-end, standardized food photography for all platforms.",
      "Monthly reel production capturing the kitchen energy and guest experience.",
      "Immersive virtual tours and cinematic ambiance videos."
    ],
    services: ["Food Photography", "Social Media", "Virtual Tours"],
    deliverables: ["Menu Shots", "Instagram Reels", "Ambiance Video"],
    featuredBrands: ["bapu-ki-kutia"],
    faqs: [
      {
        question: "Do you provide styling for food photography?",
        answer: "Yes, we work with professional food stylists to ensure every dish looks its best on camera."
      },
      {
        question: "Can you handle our monthly social media?",
        answer: "Absolutely. We offer retainer packages specifically for restaurants that include regular shoots and daily posting."
      }
    ],
    cta: {
      title: "Ready to fill your tables?",
      description: "Let's create content that makes people hungry.",
      buttonLabel: "Book a Shoot"
    }
  },
  {
    id: "seg-2",
    slug: "education",
    title: "Educational Institutions",
    shortTitle: "Education",
    description: "Marketing content for schools, colleges, and universities to drive admissions.",
    heroStatement: "Showcase campus life and academic excellence.",
    problems: [
      "Boring, text-heavy prospectuses that students don't read.",
      "Difficulty conveying the campus culture online.",
      "Low engagement on social platforms during admission season."
    ],
    solutions: [
      "Cinematic brand films highlighting student life and facilities.",
      "Visually-led digital and print prospectuses.",
      "Student and alumni testimonial videos."
    ],
    services: ["Videography", "Photography", "Print Design"],
    deliverables: ["Brand Film", "Prospectus", "Testimonial Reels"],
    featuredBrands: ["renaissance-university"],
    faqs: [
      {
        question: "How long does a campus shoot take?",
        answer: "Typically 3 to 5 days depending on the size of the campus and the number of facilities to be covered."
      }
    ],
    cta: {
      title: "Boost your next admission cycle.",
      description: "Let's show students why they belong at your institution.",
      buttonLabel: "Plan a Campaign"
    }
  },
  {
    id: "seg-3",
    slug: "real-estate",
    title: "Real Estate & Infrastructure",
    shortTitle: "Real Estate",
    description: "Premium property walkthroughs and corporate profiles for developers.",
    heroStatement: "Selling spaces before they are built.",
    problems: [
      "Buyers struggle to visualize under-construction projects.",
      "Standard photos fail to capture the scale of infrastructure.",
      "Lack of trust in new developers."
    ],
    solutions: [
      "Immersive 3D/VR tours and drone fly-throughs.",
      "Cinematic property walkthroughs highlighting premium finishes.",
      "Corporate documentaries building developer credibility."
    ],
    services: ["Drone Filming", "Virtual Tours", "Videography"],
    deliverables: ["Walkthrough Video", "Drone Photography", "Corporate Profile"],
    featuredBrands: ["realmakers"],
    cta: {
      title: "Elevate your property portfolio.",
      description: "Help buyers visualize their future home or investment.",
      buttonLabel: "Start a Project"
    }
  },
  {
    id: "seg-4",
    slug: "events",
    title: "Events & Entertainment",
    shortTitle: "Events",
    description: "High-energy coverage for concerts, corporate events, and festivals.",
    heroStatement: "Capturing the energy of the moment.",
    problems: [
      "Missing key moments during live events.",
      "Slow turnaround times for social media content during multi-day festivals.",
      "Boring recap videos that fail to sell tickets for the next year."
    ],
    solutions: [
      "Multi-camera setups with dedicated roaming photographers.",
      "Same-day edits for immediate social media hype.",
      "Cinematic aftermovies that capture the full experience."
    ],
    services: ["Event Photography", "Videography", "Live Streaming"],
    deliverables: ["Same-day Reels", "Aftermovie", "Photo Gallery"],
    featuredBrands: ["events-by-b3-food-park"],
    cta: {
      title: "Planning your next big event?",
      description: "Ensure every moment is captured and shared.",
      buttonLabel: "Book Coverage"
    }
  }
];
