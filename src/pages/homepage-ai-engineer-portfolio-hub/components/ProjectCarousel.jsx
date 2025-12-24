import React, { useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import allProjects from '../../../data/projects';
import { getImageForProject } from '../../../utils/projectImages';

const ProjectCarousel = () => {
  const navigate = useNavigate();
  const [currentProject, setCurrentProject] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  // Use the existing projects list; take those marked featured.
  const projects = useMemo(() => {
    const list = Array.isArray(allProjects) ? allProjects : [];
    const featured = list.filter(p => p?.featured);
    // Map to the shape expected by this component with sensible fallbacks
    return featured.map(p => ({
      id: p.id,
      title: p.title,
      description: p.description,
      image: getImageForProject(p) || p.image,
      techStack: p.technologies || [],
      githubUrl: p.githubUrl || undefined,
      liveUrl: p.liveDemo || undefined,
      category: p.type,
      status: p.status,
      impact: p.metrics?.userImpact || undefined,
    }));
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects?.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects?.length) % projects?.length);
  };

  // Auto-advance carousel with pause on hover
  useEffect(() => {
    if (!projects?.length) return;
    if (isHovered) return; // pause when hovered
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000); // 5s per slide
    return () => clearInterval(interval);
  }, [projects?.length, isHovered]);

  const handleViewAllProjects = () => {
    navigate('/technical-portfolio-project-showcase');
  };

  const getCategoryColor = (category) => {
    const colors = {
      'AI/ML': 'bg-blue-500/10 text-blue-500',
      'Full-Stack': 'bg-green-500/10 text-green-500',
      'Data Science': 'bg-purple-500/10 text-purple-500'
    };
    return colors?.[category] || 'bg-surface text-text-secondary';
  };

  const getStatusColor = (status) => {
    const colors = {
      'Completed': 'bg-green-500/10 text-green-500',
      'In Development': 'bg-yellow-500/10 text-yellow-500',
      'Planning': 'bg-muted text-text-secondary'
    };
    return colors?.[status] || 'bg-surface text-text-secondary';
  };

  // Swipe handlers for mobile
  const minSwipeDistance = 50; // px
  const onTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.changedTouches?.[0]?.clientX ?? 0);
  };
  const onTouchMove = (e) => setTouchEndX(e.changedTouches?.[0]?.clientX ?? 0);
  const onTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    if (Math.abs(distance) < minSwipeDistance) return;
    if (distance > 0) {
      // swipe left -> next
      nextProject();
    } else {
      // swipe right -> prev
      prevProject();
    }
  };

  return (
    <section
      className="py-16 sm:py-20 bg-background"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
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
          <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border transition-shadow duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-64 lg:h-auto transition-opacity duration-500" key={`img-${projects?.[currentProject]?.id ?? currentProject}`}>
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
              <div className="p-6 sm:p-8 flex flex-col justify-between transition-opacity duration-500" key={`info-${projects?.[currentProject]?.id ?? currentProject}`}>
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
                  <div className="bg-surface p-4 rounded-lg border border-border">
                    <div className="flex items-center space-x-2">
                      <Icon name="TrendingUp" size={20} color="#2563eb" />
                      <span className="font-semibold text-primary">Impact:</span>
                      <span className="text-text-secondary text-sm sm:text-base">{projects?.[currentProject]?.impact}</span>
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
                    variant="outline"
                    onClick={() => window.open(projects?.[currentProject]?.githubUrl, '_blank')}
                    iconName="Github"
                    iconPosition="left"
                    iconSize={16}
                    className="w-full"
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
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentProject
                    ? 'bg-primary scale-125' : 'bg-border hover:bg-text-secondary'
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
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;