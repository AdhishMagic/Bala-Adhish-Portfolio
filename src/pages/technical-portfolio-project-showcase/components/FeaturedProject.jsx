import React, { useMemo, useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { getImageForProject } from '../../../utils/projectImages';

const FeaturedProject = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  // Compute the cover image source deterministically (no conditional hook calls)
  const coverSrc = useMemo(() => {
    if (project?.gallery && project?.gallery?.length > 0) {
      return project?.gallery?.[currentImageIndex];
    }
    return getImageForProject(project);
  }, [project, currentImageIndex]);

  const nextImage = () => {
    if (project?.gallery && project?.gallery?.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === project?.gallery?.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (project?.gallery && project?.gallery?.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project?.gallery?.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden mb-8 shadow-lg">
      {/* Header */}
      <div className="bg-hero-gradient text-white p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="Star" size={20} sm:size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-lg sm:text-2xl font-bold">Featured Project</h2>
              <p className="text-white/80 text-xs sm:text-sm">Showcasing technical excellence and innovation</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-2">
            <Icon name="TrendingUp" size={20} className="text-white/80" />
            <span className="text-white/80 text-sm">Most Popular</span>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="relative h-64 sm:h-80 lg:h-auto">
          <Image
            src={coverSrc}
            alt={project?.title}
            className="w-full h-full object-cover"
          />

          {/* Image Navigation */}
          {project?.gallery && project?.gallery?.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300"
              >
                <Icon name="ChevronLeft" size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300"
              >
                <Icon name="ChevronRight" size={20} />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {project?.gallery?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Status Badge */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
            <span className={`px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium border ${project?.status === 'Completed'
              ? 'text-green-600 bg-green-500/10 border-green-500/20'
              : project?.status === 'In Progress' ? 'text-blue-600 bg-blue-500/10 border-blue-500/20' : 'text-orange-600 bg-orange-500/10 border-orange-500/20'
              }`}>
              {project?.status}
            </span>
          </div>

          {/* Awards Badge */}
          {project?.awards && project?.awards?.length > 0 && (
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
              <div className="flex items-center space-x-1 px-2.5 py-1 bg-yellow-500/10 text-yellow-600 rounded-full border border-yellow-500/20">
                <Icon name="Award" size={14} />
                <span className="text-xs sm:text-sm font-medium">{project?.awards?.[0]}</span>
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
          <div>
            {/* Title and Type */}
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">{project?.title}</h3>
              <div className="flex items-center space-x-2 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium border ${project?.type === 'AI/ML' ? 'text-purple-600 bg-purple-500/10 border-purple-500/20' :
                  project?.type === 'Web Development' ? 'text-blue-600 bg-blue-500/10 border-blue-500/20' :
                    project?.type === 'Mobile' ? 'text-green-600 bg-green-500/10 border-green-500/20' : 'text-text-secondary bg-muted border-border'
                  }`}>
                  {project?.type}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium border ${project?.difficulty === 'Advanced' ? 'text-red-600 bg-red-500/10 border-red-500/20' :
                  project?.difficulty === 'Intermediate' ? 'text-yellow-600 bg-yellow-500/10 border-yellow-500/20' : 'text-green-600 bg-green-500/10 border-green-500/20'
                  }`}>
                  {project?.difficulty}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-text-secondary mb-6 leading-relaxed line-clamp-4">
              {project?.fullDescription || project?.description}
            </p>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="font-semibold text-text-primary mb-3">Key Highlights</h4>
              <div className="space-y-2">
                {project?.keyFeatures?.slice(0, 3)?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="font-semibold text-text-primary mb-3">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project?.technologies?.slice(0, 6)?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-surface text-text-secondary text-xs sm:text-sm rounded-md font-medium border border-border"
                  >
                    {tech}
                  </span>
                ))}
                {project?.technologies?.length > 6 && (
                  <span className="px-2 py-1 bg-surface text-text-secondary text-xs sm:text-sm rounded-md font-medium border border-border">
                    +{project?.technologies?.length - 6} more
                  </span>
                )}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-b border-border">
              <div className="text-center">
                <div className="text-base sm:text-lg font-bold text-primary">{project?.metrics?.linesOfCode}</div>
                <div className="text-xs text-text-secondary">Lines of Code</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-lg font-bold text-primary">{project?.metrics?.duration}</div>
                <div className="text-xs text-text-secondary">Duration</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-lg font-bold text-primary">{project?.metrics?.userImpact}</div>
                <div className="text-xs text-text-secondary">Impact</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex gap-2">
              {project?.liveDemo && (
                <Button
                  variant="outline"
                  size="default"
                  iconName="ExternalLink"
                  iconPosition="left"
                  iconSize={16}
                  onClick={() => window.open(project?.liveDemo, '_blank')}
                >
                  Live Demo
                </Button>
              )}
              {project?.githubUrl && (
                <Button
                  variant="ghost"
                  size="default"
                  iconName="Github"
                  iconPosition="left"
                  iconSize={16}
                  onClick={() => window.open(project?.githubUrl, '_blank')}
                >
                  Code
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;