import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";

// Lazy load page components to split the bundle and improve initial load time
const AboutProfessionalJourney = lazy(() => import('./pages/about-professional-journey'));
const ProfessionalConnectContactHub = lazy(() => import('./pages/professional-connect-contact-hub'));
const SkillsMatrixPage = lazy(() => import('./pages/skills-matrix-technical-competencies'));
const TechnicalPortfolioProjectShowcase = lazy(() => import('./pages/technical-portfolio-project-showcase'));
const HomePage = lazy(() => import('./pages/homepage-ai-engineer-portfolio-hub'));
const ExperienceTimeline = lazy(() => import('./pages/Experience/ExperienceTimeline'));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Routes = () => {
  return (
    <BrowserRouter basename="/Bala-Adhish-Portfolio">
      <ErrorBoundary>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <RouterRoutes>
            {/* Define your route here */}
            <Route path="/" element={<AboutProfessionalJourney />} />

            <Route path="/about-professional-journey" element={<AboutProfessionalJourney />} />
            <Route path="/professional-connect-contact-hub" element={<ProfessionalConnectContactHub />} />
            <Route path="/skills-matrix-technical-competencies" element={<SkillsMatrixPage />} />
            <Route path="/technical-portfolio-project-showcase" element={<TechnicalPortfolioProjectShowcase />} />
            <Route path="/homepage-ai-engineer-portfolio-hub" element={<HomePage />} />
            <Route path="/experience-timeline" element={<ExperienceTimeline />} />
            <Route path="*" element={<NotFound />} />
          </RouterRoutes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};


export default Routes;
