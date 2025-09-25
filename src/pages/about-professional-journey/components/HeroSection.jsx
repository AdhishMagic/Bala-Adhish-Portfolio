import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import AdhishProfile from '../../../assets/images/AdhishProfile.jpeg';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16 sm:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent rounded-full blur-3xl"></div>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="relative w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0 lg:max-w-none lg:w-2/5">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white p-4 sm:p-6 rounded-2xl shadow-2xl">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={AdhishProfile}
                    alt="Bala Adhish - AI Engineer and Full-Stack Developer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Status Indicator */}
                <div className="absolute top-8 right-6 flex items-center space-x-2 bg-success/90 backdrop-blur-sm text-green-500 px-3 py-1 rounded-full text-xs font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available</span>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-1/4 -left-4 sm:-left-8 bg-white p-2 sm:p-3 rounded-lg shadow-lg animate-float">
                <Icon name="Code" size={16} sm:size={20} className="text-primary" />
              </div>
              <div className="absolute bottom-1/4 -right-4 sm:-right-8 bg-white p-2 sm:p-3 rounded-lg shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <Icon name="Brain" size={16} sm:size={20} className="text-secondary" />
              </div>
              <div className="absolute top-1/2 -right-6 sm:-right-12 bg-white p-2 sm:p-3 rounded-lg shadow-lg animate-float" style={{animationDelay: '2s'}}>
                <Icon name="Lightbulb" size={16} sm:size={20} className="text-accent" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-3">
                <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                  <Icon name="User" size={24} color="white" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient">
                    About Bala Adhish N D
                  </h1>
                  <p className="text-base sm:text-lg text-text-secondary mt-1">
                    AI Engineer & Full-Stack Visionary
                  </p>
                </div>
              </div>
              
              <p className="text-base sm:text-lg lg:text-xl text-text-primary leading-relaxed max-w-xl mx-auto lg:mx-0">
                Bridging the gap between cutting-edge AI research and practical full-stack solutions. 
                I'm passionate about building intelligent systems that solve real-world problems.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-border">
                <div className="text-xl sm:text-2xl font-bold text-primary">3+</div>
                <div className="text-xs sm:text-sm text-text-secondary">Years Coding</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-border">
                <div className="text-xl sm:text-2xl font-bold text-primary">10+</div>
                <div className="text-xs sm:text-sm text-text-secondary">Projects Built</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-border">
                <div className="text-xl sm:text-2xl font-bold text-primary">30+</div>
                <div className="text-xs sm:text-sm text-text-secondary">Certifications</div>
              </div>
            </div>

            {/* Core Values Preview */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              {['Innovation', 'Problem Solving', 'Continuous Learning', 'Collaboration']?.map((value) => (
                <span 
                  key={value}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium border border-primary/20"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;