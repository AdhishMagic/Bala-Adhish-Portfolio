import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import ValuesSection from './components/ValuesSection';
import VisionSection from './components/VisionSection';
import PersonalSection from './components/PersonalSection';

import DownloadSection from './components/DownloadSection';

const AboutProfessionalJourney = () => {
  useEffect(() => {
    document.title = 'About - Professional Journey | Bala Adhish - AI Engineer Portfolio';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Timeline Section */}
        <TimelineSection />
        
        {/* Values Section */}
        <ValuesSection />
        
        {/* Vision Section */}
        <VisionSection />
        
        {/* Personal Section */}
        <PersonalSection />
        
        
      </main>
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <div className="mb-6">
              <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Bala Adhish</h3>
              <p className="text-slate-400">AI Engineer & Full-Stack Visionary</p>
            </div>
            
            <div className="border-t border-slate-700 pt-6">
              <p className="text-slate-400 text-sm">
                © {new Date()?.getFullYear()} Bala Adhish. All rights reserved. Built with passion for innovation and excellence.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutProfessionalJourney;