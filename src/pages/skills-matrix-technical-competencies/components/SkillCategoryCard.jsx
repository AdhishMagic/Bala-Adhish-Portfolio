import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const SkillCategoryCard = ({ category, skills, isExpanded, onToggle }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const getCategoryIcon = (categoryName) => {
    const iconMap = {
      'AI/ML': 'Brain',
      'Full-Stack Development': 'Code',
      'Supporting Technologies': 'Settings',
      'Cloud & DevOps': 'Cloud',
      'Databases': 'Database'
    };
    return iconMap?.[categoryName] || 'Code';
  };

  const getCategoryColor = (categoryName) => {
    const colorMap = {
      'AI/ML': 'from-purple-500 to-pink-500',
      'Full-Stack Development': 'from-blue-500 to-cyan-500',
      'Supporting Technologies': 'from-green-500 to-teal-500',
      'Cloud & DevOps': 'from-orange-500 to-red-500',
      'Databases': 'from-indigo-500 to-purple-500'
    };
    return colorMap?.[categoryName] || 'from-blue-500 to-cyan-500';
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Category Header */}
      <div 
        className={`bg-gradient-to-r ${getCategoryColor(category)} p-6 cursor-pointer`}
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Icon name={getCategoryIcon(category)} size={24} color="white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{category}</h3>
              <p className="text-white/80 text-sm">{skills?.length} skills</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-white/80 text-sm">
              {Math.round(skills?.reduce((acc, skill) => acc + skill?.proficiency, 0) / skills?.length)}% avg
            </div>
            <Icon 
              name={isExpanded ? 'ChevronUp' : 'ChevronDown'} 
              size={20} 
              color="white" 
            />
          </div>
        </div>
      </div>
      {/* Skills List */}
      <div className={`transition-all duration-500 ease-in-out ${
        isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="p-6 space-y-4">
          {skills?.map((skill, index) => (
            <div
              key={skill?.name}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(skill?.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-surface rounded-lg flex items-center justify-center">
                    <Icon name={skill?.icon} size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">{skill?.name}</h4>
                    <p className="text-xs text-text-secondary">{skill?.experience} experience</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-text-primary">{skill?.proficiency}%</div>
                  <div className="text-xs text-text-secondary">{skill?.level}</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${getCategoryColor(category)} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${skill?.proficiency}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              </div>

              {/* Hover Details */}
              {hoveredSkill === skill?.name && (
                <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-background border border-border rounded-lg shadow-lg z-10 animate-fade-in">
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-text-primary mb-1">Technologies & Frameworks</h5>
                      <div className="flex flex-wrap gap-1">
                        {skill?.technologies?.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-text-primary mb-1">Recent Projects</h5>
                      <ul className="text-sm text-text-secondary space-y-1">
                        {skill?.projects?.map((project) => (
                          <li key={project} className="flex items-center space-x-2">
                            <Icon name="ArrowRight" size={12} />
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {skill?.certifications && skill?.certifications?.length > 0 && (
                      <div>
                        <h5 className="font-medium text-text-primary mb-1">Certifications</h5>
                        <div className="flex flex-wrap gap-2">
                          {skill?.certifications?.map((cert) => (
                            <div key={cert?.name} className="flex items-center space-x-1">
                              <Icon name="Award" size={12} className="text-accent" />
                              <span className="text-xs text-text-secondary">{cert?.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCategoryCard;