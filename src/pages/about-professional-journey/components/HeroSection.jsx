import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent rounded-full blur-3xl"></div>
      </div>
      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center shadow-lg">
                  <Icon name="User" size={24} color="white" />
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gradient">
                    About Bala Adhish N D
                  </h1>
                  <p className="text-lg text-text-secondary mt-2">AI Engineer & Full-Stack Visionary</p>
                </div>
              </div>
              
              <p className="text-xl text-text-primary leading-relaxed">
                Bridging the gap between cutting-edge AI research and practical full-stack solutions. 
                I'm passionate about building intelligent systems that solve real-world problems.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-text-secondary">Years Coding</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-text-secondary">Projects Built</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-text-secondary">Awards Won</div>
              </div>
            </div>

            {/* Core Values Preview */}
            <div className="flex flex-wrap gap-3">
              {['Innovation', 'Problem Solving', 'Continuous Learning', 'Collaboration']?.map((value) => (
                <span 
                  key={value}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white p-6 rounded-2xl shadow-2xl">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/assets/images/AdhishProfile.jpeg"
                    alt="Bala Adhish - AI Engineer and Full-Stack Developer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Status Indicator */}
                <div className="absolute top-8 right-8 flex items-center space-x-2 bg-success/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>Available for opportunities</span>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-1/4 -left-8 bg-white p-3 rounded-lg shadow-lg animate-float">
                <Icon name="Code" size={20} className="text-primary" />
              </div>
              <div className="absolute bottom-1/4 -right-8 bg-white p-3 rounded-lg shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <Icon name="Brain" size={20} className="text-secondary" />
              </div>
              <div className="absolute top-1/2 -right-12 bg-white p-3 rounded-lg shadow-lg animate-float" style={{animationDelay: '2s'}}>
                <Icon name="Lightbulb" size={20} className="text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;