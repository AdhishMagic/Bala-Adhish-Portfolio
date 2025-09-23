import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { 
      name: 'Home', 
      path: '/homepage-ai-engineer-portfolio-hub',
      icon: 'Home'
    },
    { 
      name: 'About', 
      path: '/about-professional-journey',
      icon: 'User'
    },
    { 
      name: 'Projects', 
      path: '/technical-portfolio-project-showcase',
      icon: 'FolderOpen'
    },
    { 
      name: 'Skills', 
      path: '/skills-matrix-technical-competencies',
      icon: 'Code'
    },
    { 
      name: 'Achievements', 
      path: '/achievements-hub-recognition-gallery',
      icon: 'Award'
    }
  ];

  const secondaryItems = [
    { 
      name: 'Contact', 
      path: '/professional-connect-contact-hub',
      icon: 'Mail'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-width">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavigation('/homepage-ai-engineer-portfolio-hub')}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gradient">Adhish</h1>
              <p className="text-xs text-text-secondary -mt-1">AI Engineer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`nav-link flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 ${
                  isActivePath(item.path)
                    ? 'text-primary bg-primary/5' :'text-text-secondary hover:text-primary hover:bg-surface'
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNavigation('/professional-connect-contact-hub')}
              iconName="Mail"
              iconPosition="left"
              iconSize={16}
            >
              Contact
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => window.open('https://github.com/adhishview', '_blank')}
              iconName="Github"
              iconPosition="left"
              iconSize={16}
            >
              GitHub
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-text-secondary hover:text-primary hover:bg-surface transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' :'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <nav className="px-4 py-4 bg-background/95 backdrop-blur-md border-t border-border">
            <div className="space-y-2">
              {[...navigationItems, ...secondaryItems].map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                    isActivePath(item.path)
                      ? 'text-primary bg-primary/10 border border-primary/20' :'text-text-secondary hover:text-primary hover:bg-surface'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span className="font-medium">{item.name}</span>
                  {isActivePath(item.path) && (
                    <div className="ml-auto w-2 h-2 bg-primary rounded-full"></div>
                  )}
                </button>
              ))}
              
              <div className="pt-4 border-t border-border mt-4">
                <Button
                  variant="default"
                  fullWidth
                  onClick={() => window.open('https://github.com/adhishview', '_blank')}
                  iconName="Github"
                  iconPosition="left"
                  iconSize={16}
                >
                  View GitHub Profile
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Neural Network Background Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 100">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0" />
              <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Animated connection lines */}
          <line 
            x1="0" y1="50" x2="800" y2="50" 
            stroke="url(#connectionGradient)" 
            strokeWidth="1"
            className="animate-pulse"
          />
          
          {/* Neural nodes */}
          <circle cx="100" cy="50" r="2" className="neural-node" />
          <circle cx="300" cy="50" r="2" className="neural-node" style={{animationDelay: '0.5s'}} />
          <circle cx="500" cy="50" r="2" className="neural-node" style={{animationDelay: '1s'}} />
          <circle cx="700" cy="50" r="2" className="neural-node" style={{animationDelay: '1.5s'}} />
        </svg>
      </div>
    </header>
  );
};

export default Header;