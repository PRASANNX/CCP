import { createBrowserRouter } from "react-router-dom";
import { SiteLayout } from "./components/layout/SiteLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { WorkPage } from "./pages/WorkPage/WorkPage";
import { CaseStudyPage } from "./pages/CaseStudyPage/CaseStudyPage";
import { SegmentsPage } from "./pages/SegmentsPage/SegmentsPage";
import { SegmentPage } from "./pages/SegmentPage/SegmentPage";
import { ServicesPage } from "./pages/ServicesPage/ServicesPage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "work",
        element: <WorkPage />,
      },
      {
        path: "work/:brandSlug",
        element: <CaseStudyPage />,
      },
      {
        path: "segments",
        element: <SegmentsPage />,
      },
      {
        path: "segments/:segmentSlug",
        element: <SegmentPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);
