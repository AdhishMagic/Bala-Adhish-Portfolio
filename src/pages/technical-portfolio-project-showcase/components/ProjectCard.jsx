import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getDifficultyColor = (level) => {
    switch (level) {
      case 'Beginner': return 'text-green-600 bg-green-50 border-green-200';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'Advanced': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'AI/ML': return 'text-purple-600 bg-purple-50 border-purple-200';
      case 'Web Development': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Mobile': return 'text-green-600 bg-green-50 border-green-200';
      case 'Data Science': return 'text-orange-600 bg-orange-50 border-orange-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div 
      className="project-card group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onViewDetails(project)}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-t-lg h-48">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
            project?.status === 'Completed' 
              ? 'text-green-600 bg-green-50 border-green-200' 
              : project?.status === 'In Progress' ?'text-blue-600 bg-blue-50 border-blue-200' :'text-orange-600 bg-orange-50 border-orange-200'
          }`}>
            {project?.status}
          </span>
        </div>

        {/* Live Demo Button */}
        {project?.liveDemo && (
          <div className={`absolute top-3 left-3 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}>
            <Button
              variant="secondary"
              size="sm"
              iconName="ExternalLink"
              iconPosition="left"
              iconSize={14}
              onClick={(e) => {
                e?.stopPropagation();
                window.open(project?.liveDemo, '_blank');
              }}
            >
              Live Demo
            </Button>
          </div>
        )}
      </div>
      {/* Project Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
              {project?.title}
            </h3>
            <div className="flex items-center space-x-2 mb-3">
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(project?.type)}`}>
                {project?.type}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(project?.difficulty)}`}>
                {project?.difficulty}
              </span>
            </div>
          </div>
          {project?.featured && (
            <div className="flex-shrink-0 ml-3">
              <Icon name="Star" size={20} className="text-yellow-500 fill-current" />
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm mb-4 line-clamp-3">
          {project?.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {project?.technologies?.slice(0, 4)?.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
            {project?.technologies?.length > 4 && (
              <span className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md font-medium">
                +{project?.technologies?.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-4 py-3 border-t border-border">
          <div className="text-center">
            <div className="text-lg font-semibold text-text-primary">{project?.metrics?.linesOfCode}</div>
            <div className="text-xs text-text-secondary">Lines of Code</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-text-primary">{project?.metrics?.duration}</div>
            <div className="text-xs text-text-secondary">Duration</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-text-primary">{project?.metrics?.teamSize}</div>
            <div className="text-xs text-text-secondary">Team Size</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {project?.githubUrl && (
              <button
                onClick={(e) => {
                  e?.stopPropagation();
                  window.open(project?.githubUrl, '_blank');
                }}
                className="flex items-center space-x-1 text-text-secondary hover:text-primary transition-colors duration-300"
              >
                <Icon name="Github" size={16} />
                <span className="text-sm">Code</span>
              </button>
            )}
            {project?.awards && project?.awards?.length > 0 && (
              <div className="flex items-center space-x-1 text-yellow-600">
                <Icon name="Award" size={16} />
                <span className="text-sm font-medium">{project?.awards?.[0]}</span>
              </div>
            )}
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={14}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;