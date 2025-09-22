import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillsMatrix = () => {
  const navigate = useNavigate();
  const [animatedSkills, setAnimatedSkills] = useState({});

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: "Brain",
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "Python", level: 90, icon: "Code" },
        { name: "TensorFlow", level: 85, icon: "Cpu" },
        { name: "PyTorch", level: 80, icon: "Zap" },
        { name: "Scikit-learn", level: 88, icon: "BarChart3" },
        { name: "OpenCV", level: 75, icon: "Eye" }
      ]
    },
    {
      title: "Full-Stack Development",
      icon: "Code",
      color: "from-green-500 to-green-600",
      skills: [
        { name: "JavaScript", level: 92, icon: "FileCode" },
        { name: "React", level: 90, icon: "Layers" },
        { name: "Node.js", level: 85, icon: "Server" },
        { name: "Express.js", level: 82, icon: "Globe" },
        { name: "MongoDB", level: 78, icon: "Database" }
      ]
    },
    {
      title: "Data Science & Analytics",
      icon: "BarChart3",
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "Pandas", level: 88, icon: "Table" },
        { name: "NumPy", level: 85, icon: "Calculator" },
        { name: "Matplotlib", level: 80, icon: "PieChart" },
        { name: "SQL", level: 87, icon: "Database" },
        { name: "R", level: 70, icon: "TrendingUp" }
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
    <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A comprehensive overview of my technical skills across AI/ML, full-stack development, and data science domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {skillCategories?.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category?.color} flex items-center justify-center`}>
                  <Icon name={category?.icon} size={24} color="white" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">
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
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon name={skill?.icon} size={16} color="#64748b" />
                          <span className="font-medium text-text-primary">
                            {skill?.name}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-text-secondary">
                          {skill?.level}%
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category?.color} rounded-full transition-all duration-1000 ease-out ${
                            isAnimated ? 'opacity-100' : 'opacity-0'
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
          ))}
        </div>

        {/* Overall Skills Summary */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-sm text-text-secondary">Programming Languages</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">25+</div>
              <div className="text-sm text-text-secondary">Frameworks & Libraries</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600">10+</div>
              <div className="text-sm text-text-secondary">AI/ML Models Built</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600">2+</div>
              <div className="text-sm text-text-secondary">Years Experience</div>
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