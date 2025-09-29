import React, { useState, useEffect, useMemo } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { getImageForProject } from '../../../utils/projectImages';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => { 
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setActiveTab('overview');
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'technical', label: 'Technical Details', icon: 'Code' },
    { id: 'architecture', label: 'Architecture', icon: 'Layers' },
    { id: 'gallery', label: 'Gallery', icon: 'Images' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project?.gallery?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project?.gallery?.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-surface">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center">
              <Icon name="FolderOpen" size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text-primary">{project?.title}</h2>
              <p className="text-text-secondary">{project?.type} • {project?.difficulty}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-surface-hover rounded-lg transition-colors duration-300"
          >
            <Icon name="X" size={24} className="text-text-secondary" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border bg-surface">
          {tabs?.map(tab => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all duration-300 ${
                activeTab === tab?.id
                  ? 'text-primary border-b-2 border-primary bg-background' :'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Hero Image */}
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={useMemo(() => getImageForProject(project), [project])}
                  alt={project?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {project?.liveDemo && (
                        <Button
                          variant="secondary"
                          size="sm"
                          iconName="ExternalLink"
                          iconPosition="left"
                          iconSize={14}
                          onClick={() => window.open(project?.liveDemo, '_blank')}
                        >
                          Live Demo
                        </Button>
                      )}
                      {project?.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          iconName="Github"
                          iconPosition="left"
                          iconSize={14}
                          onClick={() => window.open(project?.githubUrl, '_blank')}
                        >
                          View Code
                        </Button>
                      )}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project?.status === 'Completed' 
                        ? 'text-green-600 bg-green-50 border border-green-200' 
                        : project?.status === 'In Progress' ?'text-blue-600 bg-blue-50 border border-blue-200' :'text-orange-600 bg-orange-50 border border-orange-200'
                    }`}>
                      {project?.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Project Description</h3>
                <p className="text-text-secondary leading-relaxed">{project?.fullDescription}</p>
              </div>

              {/* Problem & Solution */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-surface rounded-lg p-4">
                  <h4 className="font-semibold text-text-primary mb-2 flex items-center">
                    <Icon name="AlertCircle" size={16} className="text-red-500 mr-2" />
                    Problem Statement
                  </h4>
                  <p className="text-text-secondary text-sm">{project?.problemStatement}</p>
                </div>
                <div className="bg-surface rounded-lg p-4">
                  <h4 className="font-semibold text-text-primary mb-2 flex items-center">
                    <Icon name="CheckCircle" size={16} className="text-green-500 mr-2" />
                    Solution Approach
                  </h4>
                  <p className="text-text-secondary text-sm">{project?.solutionApproach}</p>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {project?.keyFeatures?.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards */}
              {project?.awards && project?.awards?.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Awards & Recognition</h3>
                  <div className="flex flex-wrap gap-2">
                    {project?.awards?.map((award, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center space-x-1 px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full border border-yellow-200"
                      >
                        <Icon name="Award" size={14} />
                        <span className="text-sm font-medium">{award}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'technical' && (
            <div className="space-y-6">
              {/* Tech Stack */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">Technology Stack</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {project?.technologies?.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 p-3 bg-surface rounded-lg border border-border hover:border-primary/30 transition-colors duration-300"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Code" size={16} className="text-primary" />
                      </div>
                      <span className="text-sm font-medium text-text-primary">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Snippets */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">Code Highlights</h3>
                <div className="space-y-4">
                  {project?.codeSnippets?.map((snippet, index) => (
                    <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
                        <span className="text-gray-300 text-sm font-medium">{snippet?.title}</span>
                        <span className="text-gray-400 text-xs">{snippet?.language}</span>
                      </div>
                      <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                        <code>{snippet?.code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">Performance Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-surface rounded-lg">
                    <div className="text-2xl font-bold text-primary">{project?.metrics?.linesOfCode}</div>
                    <div className="text-sm text-text-secondary">Lines of Code</div>
                  </div>
                  <div className="text-center p-4 bg-surface rounded-lg">
                    <div className="text-2xl font-bold text-primary">{project?.metrics?.duration}</div>
                    <div className="text-sm text-text-secondary">Development Time</div>
                  </div>
                  <div className="text-center p-4 bg-surface rounded-lg">
                    <div className="text-2xl font-bold text-primary">{project?.metrics?.teamSize}</div>
                    <div className="text-sm text-text-secondary">Team Members</div>
                  </div>
                  <div className="text-center p-4 bg-surface rounded-lg">
                    <div className="text-2xl font-bold text-primary">{project?.metrics?.userImpact}</div>
                    <div className="text-sm text-text-secondary">User Impact</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">System Architecture</h3>
                <div className="bg-surface rounded-lg p-6 border border-border">
                  <Image
                    src={project?.architectureDiagram}
                    alt="System Architecture Diagram"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">Architecture Decisions</h3>
                <div className="space-y-4">
                  {project?.architectureDecisions?.map((decision, index) => (
                    <div key={index} className="bg-surface rounded-lg p-4 border border-border">
                      <h4 className="font-medium text-text-primary mb-2">{decision?.title}</h4>
                      <p className="text-text-secondary text-sm mb-2">{decision?.description}</p>
                      <div className="text-xs text-text-muted">
                        <strong>Rationale:</strong> {decision?.rationale}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="space-y-6">
              {/* Image Gallery */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">Project Gallery</h3>
                {project?.gallery && project?.gallery?.length > 0 && (
                  <div className="space-y-4">
                    {/* Main Image */}
                    <div className="relative h-96 rounded-lg overflow-hidden bg-surface">
                      <Image
                        src={project?.gallery?.[currentImageIndex]}
                        alt={`Gallery image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Navigation Arrows */}
                      {project?.gallery?.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300"
                          >
                            <Icon name="ChevronLeft" size={20} />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300"
                          >
                            <Icon name="ChevronRight" size={20} />
                          </button>
                        </>
                      )}

                      {/* Image Counter */}
                      <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 text-white text-sm rounded-full">
                        {currentImageIndex + 1} / {project?.gallery?.length}
                      </div>
                    </div>

                    {/* Thumbnail Strip */}
                    {project?.gallery?.length > 1 && (
                      <div className="flex space-x-2 overflow-x-auto pb-2">
                        {project?.gallery?.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                              index === currentImageIndex
                                ? 'border-primary' :'border-transparent hover:border-border'
                            }`}
                          >
                            <Image
                              src={image}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;