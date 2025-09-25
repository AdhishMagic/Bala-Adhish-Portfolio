import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";

import AboutProfessionalJourney from './pages/about-professional-journey';
import ProfessionalConnectContactHub from './pages/professional-connect-contact-hub';
import SkillsMatrixPage from './pages/skills-matrix-technical-competencies';
import TechnicalPortfolioProjectShowcase from './pages/technical-portfolio-project-showcase';
import HomePage from './pages/homepage-ai-engineer-portfolio-hub';

const Routes = () => {
  return (
    <BrowserRouter basename="/Bala-Adhish-Portfolio">
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutProfessionalJourney />} />
        
        <Route path="/about-professional-journey" element={<AboutProfessionalJourney />} />
        <Route path="/professional-connect-contact-hub" element={<ProfessionalConnectContactHub />} />
        <Route path="/skills-matrix-technical-competencies" element={<SkillsMatrixPage />} />
        <Route path="/technical-portfolio-project-showcase" element={<TechnicalPortfolioProjectShowcase />} />
        <Route path="/homepage-ai-engineer-portfolio-hub" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
