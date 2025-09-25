import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ProjectCarousel from './components/ProjectCarousel';
import SkillsMatrix from './components/SkillsMatrix';
import AchievementHighlights from './components/AchievementHighlights';
import CurrentLearning from './components/CurrentLearning';
import SocialProof from './components/SocialProof';

const HomePage = () => {
  useEffect(() => {
    // Smooth scroll behavior for the page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Bala Adhish N D- AI Engineer & Full-Stack Developer | Portfolio</title>
        <meta 
          name="description" 
          content="Bala Adhish is an AI Engineer and Full-Stack Developer passionate about building intelligent solutions. Explore projects in machine learning, web development, and data science." 
        />
        <meta 
          name="keywords" 
          content="AI Engineer, Machine Learning, Full-Stack Developer, React, Python, TensorFlow, Data Science, Portfolio" 
        />
        <meta name="author" content="Bala Adhish" />
        <meta property="og:title" content="Bala Adhish - AI Engineer Portfolio" />
        <meta 
          property="og:description" 
          content="Building the future through intelligent code. Explore my journey in AI/ML and full-stack development." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bala-adhish.dev" />
        <link rel="canonical" href="https://bala-adhish.dev" />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <HeroSection />

          {/* Project Carousel */}
          <ProjectCarousel />

          {/* Skills Matrix */}
          <SkillsMatrix />

          {/* Achievement Highlights */}
          <AchievementHighlights />

          {/* Current Learning */}
          <CurrentLearning />

          {/* Social Proof */}
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12 sm:py-16">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
              {/* Brand */}
              <div className="lg:col-span-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">B</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Bala Adhish N D</h3>
                    <p className="text-slate-400 text-sm">AI Engineer & Full-Stack Developer</p>
                  </div>
                </div>
                <p className="text-slate-400 mb-4 max-w-md mx-auto sm:mx-0">
                  Building the future through intelligent code. Passionate about creating AI solutions that make a real-world impact.
                </p>
                <div className="flex space-x-4 justify-center sm:justify-start">
                  <a
                    href="https://github.com/adhishview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/bala-adhish4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="text-center sm:text-left">
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/about-professional-journey" className="text-slate-400 hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/technical-portfolio-project-showcase" className="text-slate-400 hover:text-white transition-colors">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="/skills-matrix-technical-competencies" className="text-slate-400 hover:text-white transition-colors">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="/achievements-hub-recognition-gallery" className="text-slate-400 hover:text-white transition-colors">
                      Achievements
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="text-center sm:text-left">
                <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/professional-connect-contact-hub" className="text-slate-400 hover:text-white transition-colors">
                      Contact Form
                    </a>
                  </li>
                  <li>
                    <a href="mailto:bala.adhish@example.com" className="text-slate-400 hover:text-white transition-colors">
                      Email
                    </a>
                  </li>
                  <li>
                    <span className="text-slate-400">Available for opportunities</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800 mt-8 pt-8 text-center">
              <p className="text-slate-400 text-sm">
                © {new Date()?.getFullYear()} Bala Adhish. All rights reserved. Built with React & Tailwind CSS.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;