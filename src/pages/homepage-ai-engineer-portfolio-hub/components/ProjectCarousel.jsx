import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCarousel = () => {
  const navigate = useNavigate();
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "AI-Powered Code Review Assistant",
      description: "Machine learning model that analyzes code quality, suggests improvements, and detects potential bugs using natural language processing.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      techStack: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/bala/ai-code-review",
      liveUrl: "https://ai-code-review.demo.com",
      category: "AI/ML",
      status: "Completed",
      impact: "40% faster code reviews"
    },
    {
      id: 2,
      title: "Smart Campus Navigation System",
      description: "Full-stack web application with real-time indoor navigation using IoT sensors and machine learning for optimal route prediction.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
      techStack: ["React", "Express.js", "PostgreSQL", "Socket.io", "Python"],
      githubUrl: "https://github.com/bala/campus-navigation",
      liveUrl: "https://campus-nav.demo.com",
      category: "Full-Stack",
      status: "In Development",
      impact: "Used by 2000+ students"
    },
    {
      id: 3,
      title: "Predictive Maintenance Dashboard",
      description: "IoT-based system that predicts equipment failures using sensor data and machine learning algorithms, reducing downtime by 60%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      techStack: ["Python", "Scikit-learn", "React", "FastAPI", "InfluxDB"],
      githubUrl: "https://github.com/bala/predictive-maintenance",
      liveUrl: "https://pred-maintenance.demo.com",
      category: "Data Science",
      status: "Completed",
      impact: "60% reduction in downtime"
    },
    {
      id: 4,
      title: "Neural Style Transfer Web App",
      description: "Interactive web application that applies artistic styles to images using deep neural networks and provides real-time style transfer.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop",
      techStack: ["TensorFlow.js", "React", "Python", "Flask", "AWS"],
      githubUrl: "https://github.com/bala/neural-style-transfer",
      liveUrl: "https://style-transfer.demo.com",
      category: "AI/ML",
      status: "Completed",
      impact: "10K+ images processed"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects?.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects?.length) % projects?.length);
  };

  const handleViewAllProjects = () => {
    navigate('/technical-portfolio-project-showcase');
  };

  const getCategoryColor = (category) => {
    const colors = {
      'AI/ML': 'bg-blue-100 text-blue-800',
      'Full-Stack': 'bg-green-100 text-green-800',
      'Data Science': 'bg-purple-100 text-purple-800'
    };
    return colors?.[category] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status) => {
    const colors = {
      'Completed': 'bg-green-100 text-green-800',
      'In Development': 'bg-yellow-100 text-yellow-800',
      'Planning': 'bg-gray-100 text-gray-800'
    };
    return colors?.[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
            Explore my latest work in AI/ML, full-stack development, and data science. Each project represents a unique challenge solved with innovative technology.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Project Display */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-border">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={projects?.[currentProject]?.image}
                  alt={projects?.[currentProject]?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(projects?.[currentProject]?.category)}`}>
                    {projects?.[currentProject]?.category}
                  </span>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(projects?.[currentProject]?.status)}`}>
                    {projects?.[currentProject]?.status}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
                      {projects?.[currentProject]?.title}
                    </h3>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {projects?.[currentProject]?.description}
                    </p>
                  </div>

                  {/* Impact Metric */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-100">
                    <div className="flex items-center space-x-2">
                      <Icon name="TrendingUp" size={20} color="#2563eb" />
                      <span className="font-semibold text-blue-800">Impact:</span>
                      <span className="text-blue-700 text-sm sm:text-base">{projects?.[currentProject]?.impact}</span>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects?.[currentProject]?.techStack?.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-surface text-text-secondary rounded-full text-xs sm:text-sm font-medium border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Button
                    variant="default"
                    onClick={() => window.open(projects?.[currentProject]?.liveUrl, '_blank')}
                    iconName="ExternalLink"
                    iconPosition="right"
                    iconSize={16}
                    className="flex-1"
                  >
                    View Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open(projects?.[currentProject]?.githubUrl, '_blank')}
                    iconName="Github"
                    iconPosition="left"
                    iconSize={16}
                    className="flex-1"
                  >
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              iconName="ChevronLeft"
              iconSize={20}
              className="w-12 h-12 rounded-full order-2 sm:order-1"
            />

            {/* Project Indicators */}
            <div className="flex space-x-2 order-1 sm:order-2">
              {projects?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? 'bg-primary scale-125' :'bg-border hover:bg-text-secondary'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              iconName="ChevronRight"
              iconSize={20}
              className="w-12 h-12 rounded-full order-3 sm:order-3"
            />
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={handleViewAllProjects}
              iconName="ArrowRight"
              iconPosition="right"
              iconSize={16}
            >
              View All Projects ({projects?.length})
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;