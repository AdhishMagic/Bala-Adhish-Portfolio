import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import ProjectStats from './components/ProjectStats';
import FeaturedProject from './components/FeaturedProject';
import projects from '../../data/projects';

const TechnicalPortfolioProjectShowcase = () => {
  const navigate = useNavigate();
  // Details modal removed as requested
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [activeFilters, setActiveFilters] = useState({
    type: [],
    technology: [],
    difficulty: [],
    status: []
  });
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [isFeaturedHovered, setIsFeaturedHovered] = useState(false);

  // Get available filter options
  const filterOptions = useMemo(() => {
    const types = [...new Set(projects.map(p => p.type))];
    const technologies = [...new Set(projects.flatMap(p => p.technologies))];
    const difficulties = [...new Set(projects.map(p => p.difficulty))];
    const statuses = [...new Set(projects.map(p => p.status))];

    return {
      types: types?.sort(),
      technologies: technologies?.sort(),
      difficulties: difficulties?.sort(),
      statuses: statuses?.sort()
    };
  }, [projects]);

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects?.filter(project => {
      // Search filter
      const matchesSearch = searchQuery === '' ||
        project?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.technologies?.some(tech => tech?.toLowerCase()?.includes(searchQuery?.toLowerCase()));

      // Type filter
      const matchesType = activeFilters?.type?.length === 0 ||
        activeFilters?.type?.includes(project?.type);

      // Technology filter
      const matchesTechnology = activeFilters?.technology?.length === 0 ||
        activeFilters?.technology?.some(tech => project?.technologies?.includes(tech));

      // Difficulty filter
      const matchesDifficulty = activeFilters?.difficulty?.length === 0 ||
        activeFilters?.difficulty?.includes(project?.difficulty);

      // Status filter
      const matchesStatus = activeFilters?.status?.length === 0 ||
        activeFilters?.status?.includes(project?.status);

      return matchesSearch && matchesType && matchesTechnology && matchesDifficulty && matchesStatus;
    });

    // Sort projects
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return b?.id - a?.id; // Assuming higher ID means more recent
        case 'popular':
          const aPopularity = (a?.awards?.length || 0) + parseInt(a?.metrics?.userImpact?.replace(/[^\d]/g, '') || '0');
          const bPopularity = (b?.awards?.length || 0) + parseInt(b?.metrics?.userImpact?.replace(/[^\d]/g, '') || '0');
          return bPopularity - aPopularity;
        case 'complexity':
          const complexityOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
          return complexityOrder?.[b?.difficulty] - complexityOrder?.[a?.difficulty];
        case 'alphabetical':
          return a?.title?.localeCompare(b?.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [projects, searchQuery, activeFilters, sortBy]);

  const featuredProjects = projects?.filter(p => p?.featured);

  useEffect(() => {
    // Keep index in range when featured list changes
    if (!featuredProjects || featuredProjects.length === 0) {
      setFeaturedIndex(0);
      return;
    }
    setFeaturedIndex((prev) => {
      if (prev < 0) return 0;
      if (prev >= featuredProjects.length) return featuredProjects.length - 1;
      return prev;
    });
  }, [featuredProjects?.length]);

  const nextFeatured = () => {
    if (!featuredProjects || featuredProjects.length <= 1) return;
    setFeaturedIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevFeatured = () => {
    if (!featuredProjects || featuredProjects.length <= 1) return;
    setFeaturedIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  // Auto-advance carousel when not hovered
  useEffect(() => {
    if (!featuredProjects || featuredProjects.length <= 1) return;
    if (isFeaturedHovered) return; // pause on hover

    const id = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 5000); // 5s interval

    return () => clearInterval(id);
  }, [featuredProjects?.length, isFeaturedHovered]);

  const handleFilterChange = (category, filters) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: filters
    }));
  };

  const handleClearFilters = () => {
    setActiveFilters({
      type: [],
      technology: [],
      difficulty: [],
      status: []
    });
    setSearchQuery('');
  };

  // Details modal handlers removed

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Technical Portfolio - Project Showcase | Bala Adhish</title>
        <meta name="description" content="Explore Bala Adhish's comprehensive technical portfolio featuring AI/ML projects, full-stack applications, and award-winning solutions with detailed case studies and code examples." />
        <meta name="keywords" content="technical portfolio, AI projects, machine learning, full-stack development, React, Python, project showcase" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-hero-gradient text-white py-16"
        >
          <div className="container-width">
            <div className="text-center max-w-4xl mx-auto px-4">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <Icon name="FolderOpen" size={32} className="text-white" />
                </div>
                <div className="text-left">
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Technical Portfolio</h1>
                  <p className="text-xl text-white/90">Project Showcase & Case Studies</p>
                </div>
              </div>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Explore my comprehensive collection of technical projects, from AI-powered solutions to full-stack applications.
                Each project demonstrates problem-solving approach, technical implementation, and measurable impact through detailed case studies.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center space-x-2 text-white/90">
                  <Icon name="Code" size={20} />
                  <span>{projects?.length} Projects</span>
                </div>
                <div className="flex items-center space-x-2 text-white/90">
                  <Icon name="Award" size={20} />
                  <span>{projects?.reduce((sum, p) => sum + (p?.awards ? p?.awards?.length : 0), 0)} Awards</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="container-width px-4 py-12">
          {/* Project Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ProjectStats projects={projects} />
          </motion.div>

          {/* Featured Project Carousel */}
          {featuredProjects && featuredProjects?.length > 0 && (
            <motion.section
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative"
              onMouseEnter={() => setIsFeaturedHovered(true)}
              onMouseLeave={() => setIsFeaturedHovered(false)}
            >
              <FeaturedProject
                project={featuredProjects[featuredIndex]}
              />

              {featuredProjects.length > 1 && (
                <>
                  <button
                    aria-label="Previous featured project"
                    onClick={prevFeatured}
                    className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-surface border border-border hover:bg-surface-hover rounded-full items-center justify-center shadow transition"
                  >
                    <Icon name="ChevronLeft" size={20} />
                  </button>
                  <button
                    aria-label="Next featured project"
                    onClick={nextFeatured}
                    className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-surface border border-border hover:bg-surface-hover rounded-full items-center justify-center shadow transition"
                  >
                    <Icon name="ChevronRight" size={20} />
                  </button>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    {featuredProjects.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-2 h-2 rounded-full ${idx === featuredIndex ? 'bg-primary' : 'bg-border'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </motion.section>
          )}

          {/* Project Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <ProjectFilter
              filters={filterOptions}
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </motion.div>

          {/* Projects Grid */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text-primary">
                All Projects ({filteredAndSortedProjects?.length})
              </h2>
              <div className="flex items-center space-x-2 text-text-secondary">
                <Icon name="Filter" size={16} />
                <span className="text-sm">
                  {Object.values(activeFilters)?.flat()?.length > 0 ? 'Filtered' : 'All Projects'}
                </span>
              </div>
            </div>

            {filteredAndSortedProjects?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {filteredAndSortedProjects?.map((project, idx) => (
                    <motion.div
                      key={project?.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      <ProjectCard
                        project={project}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-surface rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Search" size={32} className="text-text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">No Projects Found</h3>
                <p className="text-text-secondary mb-6">
                  Try adjusting your search criteria or clearing the filters to see more projects.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="btn-primary"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 bg-surface rounded-xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Interested in Collaboration?
            </h2>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              I'm always excited to work on innovative projects and collaborate with fellow developers. Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('/professional-connect-contact-hub')}
                className="btn-primary"
              >
                <Icon name="Mail" size={16} className="mr-2" />
                Get In Touch
              </button>
              <button
                onClick={() => window.open('https://github.com/AdhishMagic', '_blank')}
                className="btn-secondary"
              >
                <Icon name="Github" size={16} className="mr-2" />
                View GitHub Profile
              </button>
            </div>
          </motion.section>
        </div>
      </main>
      {/* Project Modal removed as requested */}
    </div>
  );
};

export default TechnicalPortfolioProjectShowcase;