import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import ProjectModal from './components/ProjectModal';
import ProjectStats from './components/ProjectStats';
import FeaturedProject from './components/FeaturedProject';

const TechnicalPortfolioProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [activeFilters, setActiveFilters] = useState({
    type: [],
    technology: [],
    difficulty: [],
    status: []
  });

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "AI-Powered Code Review Assistant",
      type: "AI/ML",
      difficulty: "Advanced",
      status: "Completed",
      featured: true,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
      description: "An intelligent code review system that uses machine learning to identify potential bugs, security vulnerabilities, and code quality issues in real-time.",
      fullDescription: `This project represents a comprehensive AI-powered solution for automated code review and quality assurance. The system leverages advanced natural language processing and machine learning algorithms to analyze code patterns, identify potential issues, and provide intelligent suggestions for improvement.\n\nThe solution integrates seamlessly with popular version control systems and provides real-time feedback to developers, significantly reducing the time spent on manual code reviews while improving overall code quality and security.`,
      problemStatement: "Manual code reviews are time-consuming and often miss subtle bugs or security vulnerabilities, leading to decreased productivity and potential security risks in production environments.",
      solutionApproach: "Developed a machine learning pipeline that analyzes code syntax, patterns, and historical bug data to provide intelligent recommendations and automated quality checks.",
      keyFeatures: [
        "Real-time code analysis with ML-powered bug detection",
        "Integration with GitHub, GitLab, and Bitbucket",
        "Custom rule engine for organization-specific standards",
        "Automated security vulnerability scanning",
        "Performance optimization suggestions",
        "Team collaboration features with comment threading"
      ],
      technologies: ["Python", "TensorFlow", "FastAPI", "React", "PostgreSQL", "Docker", "AWS", "Redis"],
      metrics: {
        linesOfCode: "15.2K",
        duration: "4 months",
        teamSize: "3",
        userImpact: "500+ devs"
      },
      awards: ["Best AI Innovation - TechHack 2024", "People\'s Choice Award"],
      githubUrl: "https://github.com/bala-adhish/ai-code-reviewer",
      liveDemo: "https://ai-code-reviewer-demo.vercel.app",
      gallery: [
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop"
      ],
      architectureDiagram: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      architectureDecisions: [
        {
          title: "Microservices Architecture",
          description: "Implemented a microservices-based architecture for better scalability and maintainability.",
          rationale: "Allows independent scaling of different components and easier deployment of updates."
        },
        {
          title: "TensorFlow for ML Pipeline",
          description: "Used TensorFlow for building and training the machine learning models.",
          rationale: "Provides robust tools for model development and has excellent production deployment support."
        }
      ],
      codeSnippets: [
        {
          title: "ML Model Training Pipeline",
          language: "Python",
          code: `def train_code_quality_model(training_data):\n    model = tf.keras.Sequential([\n        tf.keras.layers.Embedding(vocab_size, 128),\n        tf.keras.layers.LSTM(64, return_sequences=True),\n        tf.keras.layers.Dense(32, activation='relu'),\n        tf.keras.layers.Dense(1, activation='sigmoid')\n    ])\n    \n    model.compile(\n        optimizer='adam',\n        loss='binary_crossentropy',\n        metrics=['accuracy']\n    )\n    \n    return model.fit(training_data, epochs=50, validation_split=0.2)`
        }
      ]
    },
    {
      id: 2,
      title: "Smart Campus Navigation System",
      type: "Web Development",
      difficulty: "Intermediate",
      status: "Completed",
      featured: false,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
      description: "A comprehensive web application for university campus navigation with real-time location tracking, event integration, and accessibility features.",
      fullDescription: `The Smart Campus Navigation System is a full-stack web application designed to help students, faculty, and visitors navigate large university campuses efficiently. The system provides turn-by-turn directions, real-time location tracking, and integrates with campus events and services.\n\nBuilt with modern web technologies, the application offers a responsive design that works seamlessly across desktop and mobile devices, ensuring accessibility for all users including those with disabilities.`,
      problemStatement: "Large university campuses can be confusing to navigate, especially for new students and visitors, leading to missed classes and appointments.",
      solutionApproach: "Created an intuitive web-based navigation system with interactive maps, real-time directions, and integration with campus services and events.",
      keyFeatures: [
        "Interactive campus map with building details",
        "Real-time GPS navigation and directions",
        "Integration with campus event calendar",
        "Accessibility features for disabled users",
        "Multi-language support",
        "Offline map caching for poor connectivity areas"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Mapbox API", "Socket.io", "PWA"],
      metrics: {
        linesOfCode: "8.7K",
        duration: "3 months",
        teamSize: "2",
        userImpact: "2K+ users"
      },
      awards: [],
      githubUrl: "https://github.com/bala-adhish/campus-navigator",
      liveDemo: "https://smart-campus-nav.netlify.app",
      gallery: [
        "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800&h=600&fit=crop"
      ],
      architectureDiagram: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      architectureDecisions: [
        {
          title: "Progressive Web App (PWA)",
          description: "Implemented PWA features for offline functionality and native app-like experience.",
          rationale: "Ensures the app works even with poor internet connectivity, common in large campus areas."
        }
      ],
      codeSnippets: [
        {
          title: "Real-time Location Tracking",
          language: "JavaScript",
          code: `const trackUserLocation = () => {\n  if (navigator.geolocation) {\n    navigator.geolocation.watchPosition(\n      (position) => {\n        const { latitude, longitude } = position.coords;\n        socket.emit('locationUpdate', { lat: latitude, lng: longitude });\n        updateMapPosition(latitude, longitude);\n      },\n      (error) => console.error('Location error:', error),\n      { enableHighAccuracy: true, maximumAge: 10000 }\n    );\n  }\n};`
        }
      ]
    },
    {
      id: 3,
      title: "Predictive Analytics Dashboard",
      type: "Data Science",
      difficulty: "Advanced",
      status: "In Progress",
      featured: false,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description: "A comprehensive analytics platform that uses machine learning to predict business trends and provide actionable insights through interactive visualizations.",
      fullDescription: `This advanced analytics dashboard combines the power of machine learning with intuitive data visualization to help businesses make data-driven decisions. The platform processes large datasets, identifies patterns, and generates predictive models for various business metrics.\n\nThe system features real-time data processing, customizable dashboards, and automated report generation, making complex analytics accessible to non-technical stakeholders.`,
      problemStatement: "Businesses struggle to extract meaningful insights from large datasets and often rely on reactive rather than predictive analytics.",
      solutionApproach: "Developed a comprehensive analytics platform with ML-powered predictions and user-friendly visualizations for actionable business intelligence.",
      keyFeatures: [
        "Real-time data processing and visualization",
        "Machine learning-powered trend prediction",
        "Customizable dashboard layouts",
        "Automated report generation and scheduling",
        "Multi-source data integration",
        "Advanced filtering and drill-down capabilities"
      ],
      technologies: ["Python", "Pandas", "Scikit-learn", "React", "D3.js", "FastAPI", "PostgreSQL", "Apache Kafka"],
      metrics: {
        linesOfCode: "12.3K",
        duration: "5 months",
        teamSize: "4",
        userImpact: "In Dev"
      },
      awards: [],
      githubUrl: "https://github.com/bala-adhish/predictive-dashboard",
      liveDemo: null,
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
      ],
      architectureDiagram: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      architectureDecisions: [
        {
          title: "Apache Kafka for Data Streaming",
          description: "Used Kafka for handling real-time data streams from multiple sources.",
          rationale: "Provides reliable, scalable data streaming with fault tolerance for high-volume analytics."
        }
      ],
      codeSnippets: [
        {
          title: "Predictive Model Training",
          language: "Python",
          code: `from sklearn.ensemble import RandomForestRegressor\nfrom sklearn.model_selection import train_test_split\n\ndef train_prediction_model(data):\n    X = data.drop(['target'], axis=1)\n    y = data['target']\n    \n    X_train, X_test, y_train, y_test = train_test_split(\n        X, y, test_size=0.2, random_state=42\n    )\n    \n    model = RandomForestRegressor(n_estimators=100, random_state=42)\n    model.fit(X_train, y_train)\n    \n    return model, X_test, y_test`
        }
      ]
    },
    {
      id: 4,
      title: "E-Commerce Mobile App",
      type: "Mobile",
      difficulty: "Intermediate",
      status: "Completed",
      featured: false,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      description: "A feature-rich mobile e-commerce application with advanced search, personalized recommendations, and seamless payment integration.",
      fullDescription: `This mobile e-commerce application provides a complete shopping experience with advanced features like AI-powered product recommendations, augmented reality product preview, and seamless payment processing. The app is built with React Native for cross-platform compatibility.\n\nThe application includes comprehensive user management, order tracking, inventory management, and analytics dashboard for merchants, making it a complete e-commerce solution.`,
      problemStatement: "Small businesses need affordable, feature-rich mobile commerce solutions that can compete with major e-commerce platforms.",
      solutionApproach: "Built a comprehensive mobile app with modern features like AR preview and AI recommendations while keeping costs low through efficient architecture.",
      keyFeatures: [
        "Cross-platform mobile application (iOS & Android)",
        "AI-powered product recommendations",
        "Augmented Reality product preview",
        "Multiple payment gateway integration",
        "Real-time order tracking",
        "Push notifications for offers and updates"
      ],
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe API", "Firebase", "ARKit", "Redux"],
      metrics: {
        linesOfCode: "9.8K",
        duration: "4 months",
        teamSize: "3",
        userImpact: "1.5K+ downloads"
      },
      awards: ["Best Mobile App - StartupWeekend 2024"],
      githubUrl: "https://github.com/bala-adhish/ecommerce-mobile",
      liveDemo: "https://play.google.com/store/apps/details?id=com.bala.ecommerce",
      gallery: [
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
      ],
      architectureDiagram: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      architectureDecisions: [
        {
          title: "React Native for Cross-Platform",
          description: "Chose React Native to build for both iOS and Android with a single codebase.",
          rationale: "Reduces development time and maintenance costs while providing native performance."
        }
      ],
      codeSnippets: [
        {
          title: "Product Recommendation Algorithm",
          language: "JavaScript",
          code: `const getRecommendations = async (userId, currentProduct) => {\n  const userHistory = await getUserPurchaseHistory(userId);\n  const similarUsers = await findSimilarUsers(userHistory);\n  \n  const recommendations = await db.products.aggregate([\n    { $match: { category: currentProduct.category } },\n    { $lookup: {\n        from: 'reviews',\n        localField: '_id',\n        foreignField: 'productId',\n        as: 'reviews'\n      }\n    },\n    { $sort: { 'reviews.rating': -1 } },\n    { $limit: 10 }\n  ]);\n  \n  return recommendations;\n};`
        }
      ]
    },
    {
      id: 5,
      title: "Blockchain Voting System",
      type: "Web Development",
      difficulty: "Advanced",
      status: "Completed",
      featured: false,
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
      description: "A secure, transparent voting system built on blockchain technology ensuring vote integrity and anonymity for democratic processes.",
      fullDescription: `This blockchain-based voting system addresses the critical need for secure, transparent, and tamper-proof digital voting. Built on Ethereum blockchain, the system ensures vote integrity while maintaining voter anonymity through advanced cryptographic techniques.\n\nThe platform includes comprehensive voter verification, real-time vote counting, and transparent audit trails, making it suitable for various democratic processes from student elections to municipal voting.`,
      problemStatement: "Traditional voting systems lack transparency and are vulnerable to manipulation, while digital systems often compromise voter privacy or security.",
      solutionApproach: "Leveraged blockchain technology to create an immutable, transparent voting system with cryptographic privacy protection and smart contract automation.",
      keyFeatures: [
        "Blockchain-based vote storage for immutability",
        "Smart contracts for automated vote counting",
        "Zero-knowledge proofs for voter privacy",
        "Multi-factor authentication for voter verification",
        "Real-time transparent vote tracking",
        "Comprehensive audit trail and reporting"
      ],
      technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js", "IPFS", "MetaMask"],
      metrics: {
        linesOfCode: "6.4K",
        duration: "3 months",
        teamSize: "2",
        userImpact: "500+ voters"
      },
      awards: ["Best Blockchain Innovation - CryptoHack 2024"],
      githubUrl: "https://github.com/bala-adhish/blockchain-voting",
      liveDemo: "https://blockchain-vote-demo.netlify.app",
      gallery: [
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop"
      ],
      architectureDiagram: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      architectureDecisions: [
        {
          title: "Ethereum Blockchain Platform",
          description: "Selected Ethereum for its mature smart contract ecosystem and developer tools.",
          rationale: "Provides robust smart contract functionality with extensive community support and security auditing tools."
        }
      ],
      codeSnippets: [
        {
          title: "Smart Contract for Voting",
          language: "Solidity",
          code: `pragma solidity ^0.8.0;\n\ncontract VotingSystem {\n    struct Candidate {\n        string name;\n        uint256 voteCount;\n    }\n    \n    mapping(address => bool) public hasVoted;\n    Candidate[] public candidates;\n    \n    function vote(uint256 candidateIndex) public {\n        require(!hasVoted[msg.sender], "Already voted");\n        require(candidateIndex < candidates.length, "Invalid candidate");\n        \n        candidates[candidateIndex].voteCount++;\n        hasVoted[msg.sender] = true;\n    }\n}`
        }
      ]
    },
    {
      id: 6,
      title: "IoT Home Automation Hub",
      type: "AI/ML",
      difficulty: "Advanced",
      status: "In Progress",
      featured: false,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      description: "An intelligent home automation system that learns user patterns and optimizes energy consumption through machine learning algorithms.",
      fullDescription: `This IoT-based home automation hub combines hardware sensors with machine learning algorithms to create an intelligent home management system. The platform learns from user behavior patterns to automatically optimize lighting, temperature, and energy consumption.\n\nThe system integrates with various smart home devices and provides a unified control interface through both web and mobile applications, making home automation accessible and energy-efficient.`,
      problemStatement: "Traditional home automation systems require manual programming and don't adapt to changing user preferences or optimize energy consumption intelligently.",
      solutionApproach: "Created an AI-powered hub that learns user patterns and automatically adjusts home settings for comfort and energy efficiency using IoT sensors and ML algorithms.",
      keyFeatures: [
        "Machine learning-based pattern recognition",
        "Automated energy optimization",
        "Integration with multiple IoT devices",
        "Voice control and mobile app interface",
        "Predictive maintenance alerts",
        "Security monitoring and alerts"
      ],
      technologies: ["Python", "Raspberry Pi", "TensorFlow", "MQTT", "React Native", "InfluxDB", "Grafana"],
      metrics: {
        linesOfCode: "11.2K",
        duration: "6 months",
        teamSize: "3",
        userImpact: "In Dev"
      },
      awards: [],
      githubUrl: "https://github.com/bala-adhish/iot-home-hub",
      liveDemo: null,
      gallery: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop"
      ],
      architectureDiagram: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      architectureDecisions: [
        {
          title: "MQTT Protocol for IoT Communication",
          description: "Used MQTT for lightweight, reliable communication between IoT devices.",
          rationale: "Provides efficient messaging for resource-constrained IoT devices with reliable delivery."
        }
      ],
      codeSnippets: [
        {
          title: "Pattern Learning Algorithm",
          language: "Python",
          code: `import tensorflow as tf\nfrom datetime import datetime\n\ndef learn_user_patterns(sensor_data):\n    # Prepare time-series data\n    features = prepare_features(sensor_data)\n    \n    model = tf.keras.Sequential([\n        tf.keras.layers.LSTM(50, return_sequences=True),\n        tf.keras.layers.LSTM(50),\n        tf.keras.layers.Dense(25),\n        tf.keras.layers.Dense(1)\n    ])\n    \n    model.compile(optimizer='adam', loss='mse')\n    return model.fit(features, epochs=100)`
        }
      ]
    }
  ];

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

  const featuredProject = projects?.find(p => p?.featured);

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

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
        <section className="bg-hero-gradient text-white py-16">
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
                <div className="flex items-center space-x-2 text-white/90">
                  <Icon name="Users" size={20} />
                  <span>10K+ Users Impacted</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container-width px-4 py-12">
          {/* Project Statistics */}
          <ProjectStats projects={projects} />

          {/* Featured Project */}
          {featuredProject && (
            <FeaturedProject 
              project={featuredProject} 
              onViewDetails={handleViewDetails}
            />
          )}

          {/* Project Filters */}
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
                {filteredAndSortedProjects?.map((project) => (
                  <ProjectCard
                    key={project?.id}
                    project={project}
                    onViewDetails={handleViewDetails}
                  />
                ))}
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
          <section className="mt-16 bg-surface rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Interested in Collaboration?
            </h2>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              I'm always excited to work on innovative projects and collaborate with fellow developers. Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => window.location.href = '/professional-connect-contact-hub'}
                className="btn-primary"
              >
                <Icon name="Mail" size={16} className="mr-2" />
                Get In Touch
              </button>
              <button
                onClick={() => window.open('https://github.com/bala-adhish', '_blank')}
                className="btn-secondary"
              >
                <Icon name="Github" size={16} className="mr-2" />
                View GitHub Profile
              </button>
            </div>
          </section>
        </div>
      </main>
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default TechnicalPortfolioProjectShowcase;