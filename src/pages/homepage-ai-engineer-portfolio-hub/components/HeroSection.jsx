import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import resumePdf from '../../../assets/resume/Resume.pdf';
import AdhishProfile from '../../../assets/images/AdhishProfile.jpeg';

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { icon: 'Brain', label: 'AI/ML', color: 'text-blue-500' },
    { icon: 'Code', label: 'Full-Stack', color: 'text-green-500' },
    { icon: 'Database', label: 'Data Science', color: 'text-purple-500' },
    { icon: 'Cpu', label: 'Deep Learning', color: 'text-orange-500' }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills?.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleViewPortfolio = () => {
    navigate('/technical-portfolio-project-showcase');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-20 pb-10 md:pt-0 md:pb-0">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
          {/* Content Section */}
          <div className={`space-y-6 md:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-text-secondary">Available for opportunities</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
                Building the Future Through{' '}
                <span className="text-gradient bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Intelligent Code
                </span>
              </h1>

              <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                AI Engineer & Full‑Stack Developer focused on building intelligent solutions that bridge cutting‑edge research and practical applications. Turning complex problems into elegant, scalable systems.
              </p>
            </div>

            {/* Dynamic Skills Display */}
            <div className="flex items-center space-x-4 p-4 bg-card/80 backdrop-blur-sm rounded-xl border border-border shadow-sm max-w-md mx-auto lg:max-w-none lg:mx-0">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex-shrink-0">
                <Icon
                  name={skills?.[currentSkillIndex]?.icon}
                  size={24}
                  color="white"
                />
              </div>
              <div>
                <p className="text-sm text-text-secondary">Currently specializing in</p>
                <p className={`font-semibold ${skills?.[currentSkillIndex]?.color} transition-all duration-500`}>
                  {skills?.[currentSkillIndex]?.label}
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                onClick={handleViewPortfolio}
                iconName="FolderOpen"
                iconPosition="left"
                iconSize={20}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 w-full sm:w-auto"
              >
                View Technical Portfolio
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <a
                  href={resumePdf}
                  download="Bala_Adhish_Resume.pdf"
                >
                  <Icon name="Download" size={20} className="mr-2" />
                  <span>Download Resume</span>
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border text-center">
              <div>
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-xs sm:text-sm text-text-secondary">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-xs sm:text-sm text-text-secondary">Mini Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-xs sm:text-sm text-text-secondary">GitHub Commits</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className={`relative transition-all duration-1000 delay-300 hidden lg:block ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse opacity-20"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src={AdhishProfile}
                    alt="Bala Adhish - AI Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-card rounded-full shadow-lg flex items-center justify-center animate-float">
                <Icon name="Brain" size={24} color="#2563eb" />
              </div>
              <div className="absolute top-1/2 -left-8 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Icon name="Code" size={20} color="#10b981" />
              </div>
              <div className="absolute -bottom-4 right-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <Icon name="Database" size={18} color="#8b5cf6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <Icon name="ChevronDown" size={24} color="#64748b" />
      </div>
    </section>
  );
};

export default HeroSection;