import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillsInAction = () => {
  const [selectedSkill, setSelectedSkill] = useState('Python');

  const skillProjects = {
    'Python': [
      {
        project: 'AI-Powered Sentiment Analysis Tool',
        description: 'Built a comprehensive sentiment analysis system using Python, NLTK, and scikit-learn to analyze social media data.',
        technologies: ['Python', 'NLTK', 'Scikit-learn', 'Pandas', 'Flask'],
        impact: '94% accuracy on test dataset',
        role: 'Lead Developer',
        duration: '3 months'
      },
      {
        project: 'Automated Data Pipeline',
        description: 'Developed ETL pipeline for processing large datasets using Python, Apache Airflow, and PostgreSQL.',
        technologies: ['Python', 'Apache Airflow', 'PostgreSQL', 'Docker'],
        impact: 'Reduced processing time by 60%',
        role: 'Backend Developer',
        duration: '2 months'
      }
    ],
    'React': [
      {
        project: 'Interactive Portfolio Dashboard',
        description: 'Created a dynamic portfolio website with React, featuring interactive visualizations and responsive design.',
        technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
        impact: '40% increase in user engagement',
        role: 'Frontend Developer',
        duration: '1 month'
      },
      {
        project: 'E-commerce Platform',
        description: 'Built a full-featured e-commerce application with React, Redux, and Node.js backend integration.',
        technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
        impact: 'Supports 1000+ concurrent users',
        role: 'Full-Stack Developer',
        duration: '4 months'
      }
    ],
    'TensorFlow': [
      {
        project: 'Image Classification System',
        description: 'Developed CNN model using TensorFlow for medical image classification with 96% accuracy.',
        technologies: ['TensorFlow', 'Keras', 'Python', 'OpenCV'],
        impact: '96% classification accuracy',
        role: 'ML Engineer',
        duration: '3 months'
      },
      {
        project: 'Predictive Analytics Model',
        description: 'Created time-series forecasting model for business metrics using TensorFlow and LSTM networks.',
        technologies: ['TensorFlow', 'LSTM', 'Pandas', 'NumPy'],
        impact: '15% improvement in forecast accuracy',
        role: 'Data Scientist',
        duration: '2 months'
      }
    ],
    'Node.js': [
      {
        project: 'Real-time Chat Application',
        description: 'Built scalable chat application with Node.js, Socket.io, and MongoDB for real-time messaging.',
        technologies: ['Node.js', 'Socket.io', 'MongoDB', 'Express'],
        impact: 'Handles 500+ concurrent connections',
        role: 'Backend Developer',
        duration: '2 months'
      },
      {
        project: 'RESTful API Gateway',
        description: 'Developed microservices architecture with Node.js, implementing authentication and rate limiting.',
        technologies: ['Node.js', 'Express', 'JWT', 'Redis'],
        impact: '99.9% uptime achieved',
        role: 'API Developer',
        duration: '3 months'
      }
    ],
    'Docker': [
      {
        project: 'Containerized Microservices',
        description: 'Containerized full-stack application using Docker, implementing CI/CD pipeline with GitHub Actions.',
        technologies: ['Docker', 'Docker Compose', 'GitHub Actions', 'AWS'],
        impact: '50% faster deployment cycles',
        role: 'DevOps Engineer',
        duration: '1 month'
      }
    ],
    'AWS': [
      {
        project: 'Serverless Data Processing',
        description: 'Built serverless architecture using AWS Lambda, S3, and DynamoDB for automated data processing.',
        technologies: ['AWS Lambda', 'S3', 'DynamoDB', 'CloudWatch'],
        impact: '70% cost reduction in infrastructure',
        role: 'Cloud Developer',
        duration: '2 months'
      }
    ]
  };

  const skillsList = Object.keys(skillProjects);

  const getSkillIcon = (skill) => {
    const iconMap = {
      'Python': 'Code',
      'React': 'Layers',
      'TensorFlow': 'Brain',
      'Node.js': 'Server',
      'Docker': 'Package',
      'AWS': 'Cloud'
    };
    return iconMap?.[skill] || 'Code';
  };

  const getSkillColor = (skill) => {
    const colorMap = {
      'Python': 'from-green-500 to-blue-500',
      'React': 'from-blue-500 to-cyan-500',
      'TensorFlow': 'from-orange-500 to-red-500',
      'Node.js': 'from-green-600 to-green-400',
      'Docker': 'from-blue-600 to-blue-400',
      'AWS': 'from-orange-600 to-yellow-500'
    };
    return colorMap?.[skill] || 'from-blue-500 to-cyan-500';
  };

  return (
    <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Skills in Action</h2>
          <p className="text-sm text-text-secondary mt-1">Real-world applications and project implementations</p>
        </div>
        <Icon name="Zap" size={24} className="text-primary mt-2 sm:mt-0" />
      </div>
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Skills Navigation */}
        <div className="lg:col-span-1">
          <h3 className="font-semibold text-text-primary mb-4">Select Skill</h3>
          <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible space-x-2 lg:space-x-0 lg:space-y-2 pb-2 lg:pb-0">
            {skillsList?.map((skill) => (
              <button
                key={skill}
                onClick={() => setSelectedSkill(skill)}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-300 flex-shrink-0 lg:flex-shrink-1 ${
                  selectedSkill === skill
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-surface hover:bg-surface-hover text-text-secondary hover:text-text-primary'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  selectedSkill === skill ? 'bg-white/20' : 'bg-primary/10'
                }`}>
                  <Icon 
                    name={getSkillIcon(skill)} 
                    size={16} 
                    className={selectedSkill === skill ? 'text-white' : 'text-primary'} 
                  />
                </div>
                <span className="font-medium text-sm sm:text-base">{skill}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Display */}
        <div className="lg:col-span-3">
          <div className="flex items-center space-x-3 mb-6">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${getSkillColor(selectedSkill)} rounded-xl flex items-center justify-center flex-shrink-0`}>
              <Icon name={getSkillIcon(selectedSkill)} size={20} sm:size={24} color="white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-text-primary">{selectedSkill} Projects</h3>
              <p className="text-sm text-text-secondary">{skillProjects?.[selectedSkill]?.length || 0} implementations</p>
            </div>
          </div>

          <div className="space-y-6">
            {skillProjects?.[selectedSkill]?.map((project, index) => (
              <div key={index} className="bg-surface border border-border rounded-lg p-4 sm:p-6 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-semibold text-text-primary mb-2">{project?.project}</h4>
                    <p className="text-sm text-text-secondary mb-4">{project?.description}</p>
                  </div>
                  <div className="ml-0 sm:ml-4 text-left sm:text-right flex-shrink-0 mt-2 sm:mt-0">
                    <div className="text-xs sm:text-sm text-text-secondary">{project?.duration}</div>
                    <div className="text-xs text-primary font-medium">{project?.role}</div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h5 className="font-medium text-text-primary mb-2 text-sm">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {project?.technologies?.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact & Actions */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between">
                  <div className="flex items-center space-x-2 mb-3 sm:mb-0">
                    <Icon name="TrendingUp" size={16} className="text-success" />
                    <span className="text-sm font-medium text-success">{project?.impact}</span>
                  </div>
                  <div className="flex items-center space-x-2 self-end sm:self-center">
                    <Button
                      variant="outline"
                      size="xs"
                      iconName="Github"
                      iconPosition="left"
                      iconSize={14}
                    >
                      View Code
                    </Button>
                    <Button
                      variant="ghost"
                      size="xs"
                      iconName="ExternalLink"
                      iconPosition="left"
                      iconSize={14}
                    >
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            )) || (
              <div className="text-center py-8">
                <Icon name="Code" size={48} className="text-text-secondary mx-auto mb-4" />
                <p className="text-text-secondary">No projects available for this skill yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Quick Stats */}
      <div className="border-t border-border pt-6 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-primary">
              {Object.values(skillProjects)?.flat()?.length}
            </div>
            <div className="text-xs sm:text-sm text-text-secondary">Total Projects</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-secondary">
              {skillsList?.length}
            </div>
            <div className="text-xs sm:text-sm text-text-secondary">Skills Applied</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-accent">
              {Object.values(skillProjects)?.flat()?.filter(p => p?.impact?.includes('%'))?.length}
            </div>
            <div className="text-xs sm:text-sm text-text-secondary">Measurable Impact</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-success">
              {new Set(Object.values(skillProjects).flat().flatMap(p => p.technologies))?.size}
            </div>
            <div className="text-xs sm:text-sm text-text-secondary">Technologies Used</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsInAction;