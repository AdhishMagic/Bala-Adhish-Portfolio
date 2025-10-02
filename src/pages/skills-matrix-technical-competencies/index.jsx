import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import SkillsOverview from './components/SkillsOverview';
import SkillCategoryCard from './components/SkillCategoryCard';
import LearningTrajectory from './components/LearningTrajectory';
// Removed Certifications and Skills in Action as requested
import RecentLearning from './components/RecentLearning';
import { generateSkillsSummaryPDF } from '../../utils/generateSkillsSummary';

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
          name: 'Python (DSA + ML basics)',
          proficiency: 95,
          level: 'Advanced',
          experience: 'Ongoing',
          icon: 'Code',
          technologies: ['DSA', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter'],
          projects: ['Sales Forecasting (SARIMA/Holt-Winters)', 'Wine Quality Classification', 'Medical Insurance Regression'],
          certifications: []
        },
        {
          name: 'TensorFlow (basics)',
          proficiency: 88,
          level: 'Proficient',
          experience: 'Basics',
          icon: 'Brain',
          technologies: ['Keras', 'Model Training', 'Evaluation'],
          projects: ['CNN-based Image Classification'],
          certifications: []
        },
        {
          name: 'PyTorch (learning phase)',
          proficiency: 82,
          level: 'Intermediate',
          experience: 'Learning phase',
          icon: 'Zap',
          technologies: ['Torchvision', 'Training Loops'],
          projects: ['Model experiments (notebook-based)'],
          certifications: []
        },
        {
          name: 'Hugging Face (beginner exploration)',
          proficiency: 80,
          level: 'Beginner',
          experience: 'Exploration',
          icon: 'BarChart',
          technologies: ['Transformers', 'Pipelines', 'Tokenizers'],
          projects: ['NLP experimentation'],
          certifications: []
        },
        {
          name: 'AI Model Integration',
          proficiency: 90,
          level: 'Advanced',
          experience: 'Project-based',
          icon: 'TrendingUp',
          technologies: ['Computer Vision', 'Inference', 'Edge/IoT concepts'],
          projects: ['Plant disease detection', 'Irrigation prediction (IoT-assisted)'],
          certifications: []
        }
      ]
    },
    {
      category: 'Generative AI',
      skills: [
        {
          name: 'LLMs (Large Language Models)',
          proficiency: 88,
          level: 'Advanced',
          experience: 'Projects & exploration',
          icon: 'Brain',
          technologies: ['Transformers', 'Tokenization', 'Inference'],
          projects: ['Chatbot prototypes', 'Content summarization'],
          certifications: []
        },
        {
          name: 'RAG Systems (Retrieval-Augmented Generation)',
          proficiency: 86,
          level: 'Advanced',
          experience: 'PoCs',
          icon: 'Layers',
          technologies: ['Vector Stores', 'Embeddings', 'Indexing'],
          projects: ['RAG knowledge assistant'],
          certifications: []
        },
        {
          name: 'Prompt Engineering',
          proficiency: 84,
          level: 'Proficient',
          experience: 'Daily practice',
          icon: 'Code',
          technologies: ['System prompts', 'Few-shot', 'Chain-of-thought'],
          projects: ['Task-specific prompt libraries'],
          certifications: []
        },
        {
          name: 'Fine-Tuning (basic level)',
          proficiency: 82,
          level: 'Intermediate',
          experience: 'Basics',
          icon: 'Settings',
          technologies: ['LoRA', 'Adapters', 'Data curation'],
          projects: ['Small domain-tuning experiments'],
          certifications: []
        }
      ]
    },
    {
      category: 'Full-Stack Development',
      skills: [
        {
          name: 'Django',
          proficiency: 88,
          level: 'Proficient',
          experience: 'Project-based',
          icon: 'Server',
          technologies: ['Django ORM', 'Templates', 'Auth'],
          projects: ['StudyBuddy (Django)'],
          certifications: []
        },
        {
          name: 'React',
          proficiency: 90,
          level: 'Proficient',
          experience: 'Projects & portfolio',
          icon: 'Layers',
          technologies: ['Hooks', 'Routing', 'State Mgmt (basic)'],
          projects: ['This portfolio', 'UI components'],
          certifications: []
        },
        {
          name: 'JavaScript',
          proficiency: 92,
          level: 'Advanced',
          experience: '2+ years',
          icon: 'FileCode',
          technologies: ['ES6+', 'Async/Await', 'Modules'],
          projects: ['Multiple web apps'],
          certifications: []
        },
        {
          name: 'HTML & CSS',
          proficiency: 88,
          level: 'Proficient',
          experience: '2+ years',
          icon: 'Code2',
          technologies: ['Semantic HTML', 'Flexbox/Grid', 'Responsive UI'],
          projects: ['Responsive landing pages', 'Portfolio layout'],
          certifications: []
        },
        {
          name: 'REST API',
          proficiency: 84,
          level: 'Proficient',
          experience: 'Project-based',
          icon: 'Globe',
          technologies: ['CRUD', 'Auth', 'JSON'],
          projects: ['Backend integrations', 'API consumption (frontend)'],
          certifications: []
        }
      ]
    },
    {
      category: 'Databases',
      skills: [
        {
          name: 'SQL (basic)',
          proficiency: 75,
          level: 'Beginner',
          experience: 'Basics',
          icon: 'Database',
          technologies: ['SELECT/WHERE', 'Joins', 'Aggregations'],
          projects: ['Practice queries', 'Reporting tasks'],
          certifications: []
        },
        {
          name: 'NoSQL (concepts)',
          proficiency: 80,
          level: 'Intermediate',
          experience: 'Conceptual',
          icon: 'Database',
          technologies: ['Key-Value', 'Document Models', 'Schema Design'],
          projects: ['Prototype schemas'],
          certifications: []
        },
        {
          name: 'MongoDB (concepts)',
          proficiency: 79,
          level: 'Intermediate',
          experience: 'Conceptual',
          icon: 'Database',
          technologies: ['CRUD', 'Indexing', 'Aggregation (basics)'],
          projects: ['Learning exercises'],
          certifications: []
        }
      ]
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        {
          name: 'Git/GitHub (version control)',
          proficiency: 90,
          level: 'Advanced',
          experience: '2+ years',
          icon: 'GitBranch',
          technologies: ['Branching', 'PRs', 'Issues'],
          projects: ['All repos in portfolio'],
          certifications: []
        },
        {
          name: 'Open Weaver',
          proficiency: 80,
          level: 'Intermediate',
          experience: 'Hackathons/PoCs',
          icon: 'Package',
          technologies: ['Project scaffolding', 'Boilerplates'],
          projects: ['Hackathon tooling'],
          certifications: []
        },
        {
          name: 'n8n (workflow automation)',
          proficiency: 78,
          level: 'Intermediate',
          experience: 'Automation',
          icon: 'RefreshCw',
          technologies: ['Triggers', 'Nodes', 'Integrations'],
          projects: ['Automation PoCs'],
          certifications: []
        },
        {
          name: 'Deployment & Integration (basic)',
          proficiency: 84,
          level: 'Proficient',
          experience: 'Basic deployments',
          icon: 'Cloud',
          technologies: ['Hosting', 'Env config', 'Builds'],
          projects: ['Portfolio deployments'],
          certifications: []
        }
      ]
    },
    {
      category: 'Supporting Technologies',
      skills: [
        {
          name: 'Java (inventory management project)',
          proficiency: 72,
          level: 'Intermediate',
          experience: 'Project-based',
          icon: 'Code',
          technologies: ['OOP', 'Collections', 'File IO'],
          projects: ['Inventory Management System'],
          certifications: []
        },
        {
          name: 'C (fundamentals + OS concepts)',
          proficiency: 70,
          level: 'Intermediate',
          experience: 'Academic',
          icon: 'Terminal',
          technologies: ['Pointers', 'Memory', 'Processes'],
          projects: ['Learning exercises'],
          certifications: []
        },
        {
          name: 'Excel (data handling/project)',
          proficiency: 85,
          level: 'Proficient',
          experience: 'Projects',
          icon: 'BarChart',
          technologies: ['Pivot Tables', 'Charts', 'Formulas'],
          projects: ['Data handling & reporting'],
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
  // Certifications and Skills in Action tabs removed
    { id: 'learning', label: 'Recent Learning', icon: 'BookOpen' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Skills Matrix - Technical Competencies | Bala Adhish Portfolio</title>
        <meta name="description" content="Comprehensive technical skills matrix showcasing AI/ML expertise, full-stack development capabilities, and continuous learning journey of Bala Adhish." />
  <meta name="keywords" content="technical skills, AI ML, Generative AI, Django, Python, React, TensorFlow, learning trajectory" />
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Technical Skills Matrix</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                A concise view of my technical competencies, proficiency levels, and continuous learning across AI/ML and full‑stack development.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="secondary"
                  size="lg"
                  iconName="Download"
                  iconPosition="left"
                  iconSize={20}
                  onClick={() => generateSkillsSummaryPDF(skillsData)}
                >
                  Download Skills Summary
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="ExternalLink"
                  iconPosition="left"
                  iconSize={20}
                  onClick={() => window.open('https://github.com/AdhishMagic', '_blank')}
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
              {/* Certifications and Skills in Action sections removed */}
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
                  asChild
                  variant="default"
                  size="lg"
                  iconName="Mail"
                  iconPosition="left"
                  iconSize={20}
                >
                  <Link to="/professional-connect-contact-hub">Get in Touch</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  iconName="Github"
                  iconPosition="left"
                  iconSize={20}
                >
                  <a href="https://github.com/AdhishMagic" target="_blank" rel="noopener noreferrer">GitHub</a>
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