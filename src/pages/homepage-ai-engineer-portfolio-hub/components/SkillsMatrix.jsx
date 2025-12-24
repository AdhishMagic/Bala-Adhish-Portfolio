import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillsMatrix = () => {
  const navigate = useNavigate();
  const [animatedSkills, setAnimatedSkills] = useState({});
  const [activeTab, setActiveTab] = useState(0); // 0: AI/ML, 1: Full Stack, 2: Gen AI

  const skillCategories = [
    {
      title: "AI/ML",
      icon: "Brain",
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "Python", level: 90, icon: "Code" },
        { name: "TensorFlow", level: 85, icon: "Cpu" },
        { name: "PyTorch", level: 82, icon: "Zap" },
        { name: "Scikit-learn", level: 88, icon: "BarChart3" },
        { name: "OpenCV", level: 75, icon: "Eye" }
      ]
    },
    {
      title: "Full Stack",
      icon: "Code",
      color: "from-green-500 to-green-600",
      skills: [
        { name: "Django", level: 85, icon: "Server" },
        { name: "React", level: 90, icon: "Layers" },
        { name: "JavaScript", level: 92, icon: "FileCode" },
        { name: "HTML & CSS", level: 88, icon: "Code2" },
        { name: "REST API", level: 84, icon: "Globe" }
      ]
    },
    {
      title: "Gen AI",
      icon: "Sparkles",
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "OpenAI API", level: 85, icon: "Globe" },
        { name: "LangChain", level: 80, icon: "Layers" },
        { name: "Prompt Engineering", level: 88, icon: "MessageSquare" },
        { name: "RAG Pipelines", level: 82, icon: "Database" },
        { name: "Transformers (HF)", level: 78, icon: "Zap" }
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated = {};
      skillCategories?.forEach((category, categoryIndex) => {
        category?.skills?.forEach((skill, skillIndex) => {
          const key = `${categoryIndex}-${skillIndex}`;
          animated[key] = true;
        });
      });
      setAnimatedSkills(animated);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleViewAllSkills = () => {
    navigate('/skills-matrix-technical-competencies');
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Technical Expertise
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
            Explore my skills across AI/ML, Full‑Stack, and Gen AI—organized in simple tabs.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {skillCategories?.map((tab, idx) => {
              const isActive = idx === activeTab;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all text-sm sm:text-base ${isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow'
                    : 'bg-card text-text-secondary border-border hover:border-primary hover:bg-surface'
                    }`}
                  aria-pressed={isActive}
                >
                  <Icon name={tab?.icon} size={18} className={isActive ? 'text-white' : 'text-text-primary'} />
                  <span className="font-medium">{tab?.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Tab Content */}
        <div className="mb-12">
          {(() => {
            const categoryIndex = activeTab;
            const category = skillCategories?.[categoryIndex];
            return (
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category?.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon name={category?.icon} size={24} color="white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary">
                    {category?.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category?.skills?.map((skill, skillIndex) => {
                    const skillKey = `${categoryIndex}-${skillIndex}`;
                    const isAnimated = animatedSkills?.[skillKey];

                    return (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex items-center justify-between text-sm sm:text-base">
                          <div className="flex items-center space-x-2">
                            <Icon name={skill?.icon} size={16} className="text-text-secondary" />
                            <span className="font-medium text-text-primary">
                              {skill?.name}
                            </span>
                          </div>
                          <span className="text-sm font-semibold text-text-secondary">
                            {skill?.level}%
                          </span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category?.color} rounded-full transition-all duration-1000 ease-out ${isAnimated ? 'opacity-100' : 'opacity-0'
                              }`}
                            style={{
                              width: isAnimated ? `${skill?.level}%` : '0%'
                            }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Category Stats */}
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Avg. Proficiency</span>
                    <span className="font-semibold text-text-primary">
                      {Math.round(category?.skills?.reduce((acc, skill) => acc + skill?.level, 0) / category?.skills?.length)}%
                    </span>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Overall Skills Summary */}
        <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">15+</div>
              <div className="text-xs sm:text-sm text-text-secondary">Programming Languages</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-green-600">25+</div>
              <div className="text-xs sm:text-sm text-text-secondary">Frameworks & Libraries</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600">10+</div>
              <div className="text-xs sm:text-sm text-text-secondary">AI/ML Models Built</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600">2+</div>
              <div className="text-xs sm:text-sm text-text-secondary">Years Experience</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            variant="default"
            size="lg"
            onClick={handleViewAllSkills}
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={16}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
          >
            Explore Complete Skills Matrix
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;