import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import SkillsOverview from './components/SkillsOverview';
import SkillCategoryCard from './components/SkillCategoryCard';
import LearningTrajectory from './components/LearningTrajectory';
import CertificationBadges from './components/CertificationBadges';
import SkillsInAction from './components/SkillsInAction';
import RecentLearning from './components/RecentLearning';

const SkillsMatrixPage = () => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [activeView, setActiveView] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Expand first category by default
    setExpandedCategories({ 'AI/ML': true });
  }, []);

  const skillsData = [
    {
      category: 'AI/ML',
      skills: [
        {
          name: 'Python',
          proficiency: 92,
          level: 'Expert',
          experience: '3+ years',
          icon: 'Code',
          technologies: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
          projects: ['Sentiment Analysis Tool', 'Predictive Analytics Model', 'Data Pipeline'],
          certifications: [
            { name: 'Python for Data Science', issuer: 'IBM' }
          ]
        },
        {
          name: 'TensorFlow',
          proficiency: 88,
          level: 'Advanced',
          experience: '2+ years',
          icon: 'Brain',
          technologies: ['Keras', 'TensorBoard', 'TF Serving', 'TF Lite'],
          projects: ['Image Classification System', 'Neural Network Models'],
          certifications: [
            { name: 'TensorFlow Developer Certificate', issuer: 'Google' }
          ]
        },
        {
          name: 'PyTorch',
          proficiency: 82,
          level: 'Advanced',
          experience: '1.5+ years',
          icon: 'Zap',
          technologies: ['PyTorch Lightning', 'Torchvision', 'ONNX'],
          projects: ['Deep Learning Research', 'Computer Vision Models'],
          certifications: []
        },
        {
          name: 'Scikit-learn',
          proficiency: 90,
          level: 'Expert',
          experience: '2.5+ years',
          icon: 'BarChart',
          technologies: ['Preprocessing', 'Model Selection', 'Ensemble Methods'],
          projects: ['ML Classification Models', 'Feature Engineering Pipeline'],
          certifications: []
        },
        {
          name: 'Data Analysis',
          proficiency: 85,
          level: 'Advanced',
          experience: '2+ years',
          icon: 'TrendingUp',
          technologies: ['Pandas', 'NumPy', 'Matplotlib', 'Plotly'],
          projects: ['Business Intelligence Dashboard', 'Statistical Analysis'],
          certifications: []
        }
      ]
    },
    {
      category: 'Full-Stack Development',
      skills: [
        {
          name: 'JavaScript',
          proficiency: 90,
          level: 'Expert',
          experience: '3+ years',
          icon: 'Code',
          technologies: ['ES6+', 'TypeScript', 'Async/Await', 'Modules'],
          projects: ['E-commerce Platform', 'Real-time Chat App', 'Portfolio Website'],
          certifications: []
        },
        {
          name: 'React',
          proficiency: 88,
          level: 'Advanced',
          experience: '2.5+ years',
          icon: 'Layers',
          technologies: ['Hooks', 'Context API', 'Redux', 'Next.js'],
          projects: ['Interactive Dashboard', 'Social Media App', 'Portfolio Site'],
          certifications: [
            { name: 'React Developer Certification', issuer: 'Meta' }
          ]
        },
        {
          name: 'Node.js',
          proficiency: 85,
          level: 'Advanced',
          experience: '2+ years',
          icon: 'Server',
          technologies: ['Express.js', 'Fastify', 'Socket.io', 'Passport.js'],
          projects: ['RESTful API', 'Real-time Applications', 'Microservices'],
          certifications: []
        },
        {
          name: 'HTML/CSS',
          proficiency: 95,
          level: 'Expert',
          experience: '4+ years',
          icon: 'Layout',
          technologies: ['Tailwind CSS', 'SASS', 'CSS Grid', 'Flexbox'],
          projects: ['Responsive Websites', 'UI Component Library'],
          certifications: []
        },
        {
          name: 'REST APIs',
          proficiency: 87,
          level: 'Advanced',
          experience: '2+ years',
          icon: 'Globe',
          technologies: ['OpenAPI', 'Postman', 'Swagger', 'GraphQL'],
          projects: ['API Gateway', 'Microservices Architecture'],
          certifications: []
        }
      ]
    },
    {
      category: 'Databases',
      skills: [
        {
          name: 'MongoDB',
          proficiency: 83,
          level: 'Advanced',
          experience: '2+ years',
          icon: 'Database',
          technologies: ['Mongoose', 'Aggregation', 'Indexing', 'Sharding'],
          projects: ['E-commerce Database', 'Content Management System'],
          certifications: [
            { name: 'MongoDB Developer Path', issuer: 'MongoDB University' }
          ]
        },
        {
          name: 'PostgreSQL',
          proficiency: 78,
          level: 'Intermediate',
          experience: '1.5+ years',
          icon: 'Database',
          technologies: ['SQL', 'Joins', 'Stored Procedures', 'Triggers'],
          projects: ['Analytics Database', 'User Management System'],
          certifications: []
        },
        {
          name: 'Redis',
          proficiency: 72,
          level: 'Intermediate',
          experience: '1+ year',
          icon: 'Zap',
          technologies: ['Caching', 'Pub/Sub', 'Lua Scripts'],
          projects: ['Session Management', 'Real-time Features'],
          certifications: []
        }
      ]
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        {
          name: 'AWS',
          proficiency: 80,
          level: 'Advanced',
          experience: '1.5+ years',
          icon: 'Cloud',
          technologies: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudWatch'],
          projects: ['Serverless Applications', 'Cloud Infrastructure'],
          certifications: [
            { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services' }
          ]
        },
        {
          name: 'Docker',
          proficiency: 85,
          level: 'Advanced',
          experience: '2+ years',
          icon: 'Package',
          technologies: ['Docker Compose', 'Multi-stage builds', 'Volumes'],
          projects: ['Containerized Applications', 'Development Environment'],
          certifications: [
            { name: 'Docker Certified Associate', issuer: 'Docker Inc.' }
          ]
        },
        {
          name: 'Git',
          proficiency: 92,
          level: 'Expert',
          experience: '3+ years',
          icon: 'GitBranch',
          technologies: ['GitHub', 'GitLab', 'Branching', 'Merging'],
          projects: ['All Development Projects', 'Open Source Contributions'],
          certifications: []
        },
        {
          name: 'CI/CD',
          proficiency: 75,
          level: 'Intermediate',
          experience: '1+ year',
          icon: 'RefreshCw',
          technologies: ['GitHub Actions', 'Jenkins', 'Docker Hub'],
          projects: ['Automated Deployments', 'Testing Pipelines'],
          certifications: []
        }
      ]
    },
    {
      category: 'Supporting Technologies',
      skills: [
        {
          name: 'Linux',
          proficiency: 82,
          level: 'Advanced',
          experience: '2+ years',
          icon: 'Terminal',
          technologies: ['Ubuntu', 'CentOS', 'Shell Scripting', 'System Admin'],
          projects: ['Server Management', 'Development Environment'],
          certifications: []
        },
        {
          name: 'Agile/Scrum',
          proficiency: 78,
          level: 'Intermediate',
          experience: '1.5+ years',
          icon: 'Users',
          technologies: ['Jira', 'Trello', 'Sprint Planning', 'Retrospectives'],
          projects: ['Team Collaboration', 'Project Management'],
          certifications: []
        },
        {
          name: 'Testing',
          proficiency: 75,
          level: 'Intermediate',
          experience: '1+ year',
          icon: 'CheckCircle',
          technologies: ['Jest', 'Pytest', 'Unit Testing', 'Integration Testing'],
          projects: ['Test Automation', 'Quality Assurance'],
          certifications: []
        }
      ]
    }
  ];

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev?.[category]
    }));
  };

  const viewOptions = [
    { id: 'overview', label: 'Overview', icon: 'BarChart3' },
    { id: 'skills', label: 'Skills Matrix', icon: 'Grid3x3' },
    { id: 'trajectory', label: 'Learning Path', icon: 'TrendingUp' },
    { id: 'certifications', label: 'Certifications', icon: 'Award' },
    { id: 'action', label: 'Skills in Action', icon: 'Zap' },
    { id: 'learning', label: 'Recent Learning', icon: 'BookOpen' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Skills Matrix - Technical Competencies | Bala Adhish Portfolio</title>
        <meta name="description" content="Comprehensive technical skills matrix showcasing AI/ML expertise, full-stack development capabilities, and continuous learning journey of Bala Adhish." />
        <meta name="keywords" content="technical skills, AI ML, full-stack development, Python, React, TensorFlow, certifications, learning trajectory" />
      </Helmet>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-hero-gradient text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container-width relative">
            <div className={`text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Icon name="Code" size={32} color="white" />
                <Icon name="Brain" size={32} color="white" />
                <Icon name="Zap" size={32} color="white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technical Skills Matrix
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                A comprehensive visualization of technical competencies, proficiency levels, 
                and continuous learning journey in AI/ML and full-stack development
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="secondary"
                  size="lg"
                  iconName="Download"
                  iconPosition="left"
                  iconSize={20}
                >
                  Download Skills Summary
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="ExternalLink"
                  iconPosition="left"
                  iconSize={20}
                  onClick={() => window.open('https://github.com', '_blank')}
                >
                  View GitHub Profile
                </Button>
              </div>
            </div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-40 right-10 w-24 h-24 bg-white/10 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="section-padding bg-surface border-b border-border">
          <div className="container-width">
            <div className="flex flex-wrap justify-center gap-2">
              {viewOptions?.map((option) => (
                <button
                  key={option?.id}
                  onClick={() => setActiveView(option?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeView === option?.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-background text-text-secondary hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <Icon name={option?.icon} size={16} />
                  <span>{option?.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="section-padding">
          <div className="container-width">
            <div className="space-y-8">
              {activeView === 'overview' && <SkillsOverview skillsData={skillsData} />}
              
              {activeView === 'skills' && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-text-primary mb-4">Skills by Category</h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                      Explore detailed proficiency levels, technologies, and real-world applications 
                      across different technical domains
                    </p>
                  </div>
                  {skillsData?.map((categoryData) => (
                    <SkillCategoryCard
                      key={categoryData?.category}
                      category={categoryData?.category}
                      skills={categoryData?.skills}
                      isExpanded={expandedCategories?.[categoryData?.category]}
                      onToggle={() => toggleCategory(categoryData?.category)}
                    />
                  ))}
                </div>
              )}
              
              {activeView === 'trajectory' && <LearningTrajectory />}
              {activeView === 'certifications' && <CertificationBadges />}
              {activeView === 'action' && <SkillsInAction />}
              {activeView === 'learning' && <RecentLearning />}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-surface">
          <div className="container-width">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Ready to Collaborate?
              </h2>
              <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                Let's discuss how my technical skills can contribute to your next project. I'm always excited to work on challenging problems and learn new technologies.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Mail"
                  iconPosition="left"
                  iconSize={20}
                >
                  Get in Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={20}
                >
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-text-primary text-white py-8">
        <div className="container-width">
          <div className="text-center">
            <p className="text-white/80">
              © {new Date()?.getFullYear()} Bala Adhish. Continuously learning and growing in technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SkillsMatrixPage;