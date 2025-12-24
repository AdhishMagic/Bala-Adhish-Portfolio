import React from 'react';
import Icon from '../../../components/AppIcon';

const ValuesSection = () => {
  const values = [
    {
      id: 1,
      title: "Intelligent Innovation",
      description: "I focus on solutions that are both technically sound and genuinely useful. Code should make systems smarter and more intuitive.",
      example: "Prototyped an AI‑assisted debugging helper that learns from code patterns to suggest fixes earlier.",
      icon: "Lightbulb",
      color: "primary",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Continuous Learning",
      description: "Technology evolves rapidly. I consistently invest time in learning, exploring emerging tools, and testing new ideas.",
      example: "Completed advanced ML coursework and practical projects, documenting lessons learned.",
      icon: "BookOpen",
      color: "secondary",
      gradient: "from-cyan-500 to-cyan-600"
    },
    {
      id: 3,
      title: "Collaborative Problem-Solving",
      description: "Strong outcomes come from diverse perspectives. I thrive in environments where ideas can be shared, challenged, and refined.",
      example: "Led cross‑functional hackathon teams, combining different expertise to build impactful prototypes.",
      icon: "Users",
      color: "accent",
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      id: 4,
      title: "Ethical Technology",
      description: "I’m committed to building AI systems that are fair, transparent, and privacy‑aware.",
      example: "Added bias checks and advocated for diverse datasets across ML projects.",
      icon: "Shield",
      color: "success",
      gradient: "from-green-500 to-green-600"
    },
    {
      id: 5,
      title: "User-Centric Design",
      description: "Technology should serve people. I prioritize user experience and accessibility in every solution.",
      example: "Iterated on a data visualization dashboard to streamline tasks and reduce friction.",
      icon: "Heart",
      color: "warning",
      gradient: "from-amber-500 to-amber-600"
    },
    {
      id: 6,
      title: "Quality Excellence",
      description: "Clean, maintainable code and robust systems are non‑negotiable.",
      example: "Established coding standards and tests to reduce regressions and improve reliability.",
      icon: "Award",
      color: "error",
      gradient: "from-red-500 to-red-600"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">Core Values & Philosophy</h2>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto">
            The principles that guide my approach to technology, problem-solving, and professional growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values?.map((value, index) => (
            <div
              key={value?.id}
              className="group relative bg-card rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value?.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${value?.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={value?.icon} size={24} sm:size={28} color="white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                  {value?.title}
                </h3>

                <p className="text-sm sm:text-base text-text-secondary mb-6 leading-relaxed">
                  {value?.description}
                </p>

                {/* Example */}
                <div className="bg-surface rounded-lg p-4 border-l-4 border-primary">
                  <h4 className="font-semibold text-text-primary text-sm mb-2 flex items-center">
                    <Icon name="Zap" size={14} className="mr-2 text-primary" />
                    Real Example:
                  </h4>
                  <p className="text-xs sm:text-sm text-text-secondary italic">
                    {value?.example}
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-accent/10 to-success/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>

        {/* Philosophy Statement */}
        <div className="mt-16">
          <div className="bg-card rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl border border-border relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <pattern id="philosophy-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#philosophy-pattern)" />
              </svg>
            </div>

            <div className="relative z-10 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Icon name="Quote" size={28} sm:size={32} color="white" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-gradient mb-6">My Philosophy</h3>

              <blockquote className="text-base sm:text-lg lg:text-xl text-text-primary leading-relaxed max-w-4xl mx-auto mb-8 italic">
                "Technology is not just about writing code or building systems—it's about creating possibilities.
                Every algorithm I design, every application I build, and every problem I solve is an opportunity
                to make the world a little bit smarter, more connected, and more human. I believe that the future
                belongs to those who can bridge the gap between human needs and technological capabilities."
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
                <span className="text-base sm:text-lg font-semibold text-primary">Bala Adhish</span>
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
