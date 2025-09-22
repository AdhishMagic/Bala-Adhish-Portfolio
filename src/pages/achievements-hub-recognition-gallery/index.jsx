import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import AchievementCard from './components/AchievementCard';
import CategoryFilter from './components/CategoryFilter';
import TimelineView from './components/TimelineView';
import AchievementModal from './components/AchievementModal';
import StatsOverview from './components/StatsOverview';
import SearchAndSort from './components/SearchAndSort';

const AchievementsHub = () => {
  const [achievements, setAchievements] = useState([]);
  const [filteredAchievements, setFilteredAchievements] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date-desc');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock achievements data
  useEffect(() => {
    const mockAchievements = [
      {
        id: 1,
        title: "Smart Campus Navigation System - Winner",
        category: "Competition Success",
        description: "Developed an AI-powered indoor navigation system for university campuses using computer vision and machine learning algorithms.",
        fullDescription: `Led a team of 4 developers to create an innovative indoor navigation solution that combines computer vision, machine learning, and mobile app development. The system uses smartphone cameras to identify landmarks and provide real-time navigation assistance within complex building structures.

The solution addressed the common problem of getting lost in large university campuses and corporate buildings. Our approach used a combination of visual SLAM (Simultaneous Localization and Mapping) and deep learning models trained on campus imagery.`,
        projectDetails: `Technical Implementation:
• Developed using React Native for cross-platform mobile app
• Implemented TensorFlow Lite models for real-time object detection
• Created a custom dataset of 10,000+ campus images for training
• Built RESTful APIs using Node.js and MongoDB for backend services
• Integrated with university's existing infrastructure through APIs

Key Features:
• Real-time indoor positioning with 95% accuracy
• Voice-guided navigation in multiple languages
• Accessibility features for visually impaired users
• Integration with class schedules and room booking systems
• Offline mode for areas with poor connectivity`,
        impact: `The project received recognition from the university administration and is being considered for campus-wide implementation. The solution demonstrated potential to reduce navigation time by 60% and improve accessibility for students with disabilities. The project also contributed to my understanding of production-scale AI applications and user-centered design principles.`,
        date: "2024-03-15",
        organization: "TechFest 2024 - IIT Bombay",
        location: "Mumbai, India",
        participants: 150,
        rank: "1st Place",
        prize: "₹50,000 + Internship Opportunity",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        skills: ["React Native", "TensorFlow", "Computer Vision", "Node.js", "MongoDB", "Machine Learning"],
        teamMembers: ["Priya Sharma", "Arjun Patel", "Sneha Reddy"],
        verificationLink: "https://techfest.org/winners/2024",
        projectLink: "https://github.com/bala/smart-campus-nav",
        mediaLink: "https://youtube.com/watch?v=demo",
        featured: true
      },
      {
        id: 2,
        title: "AWS Certified Solutions Architect",
        category: "Certifications",
        description: "Achieved AWS Solutions Architect Associate certification demonstrating expertise in designing distributed systems on AWS.",
        fullDescription: `Successfully completed the AWS Certified Solutions Architect - Associate certification, demonstrating comprehensive knowledge of AWS services and best practices for designing scalable, highly available, and fault-tolerant systems on AWS.

The certification validates my ability to design and deploy well-architected solutions, implement cost-effective systems, and understand AWS security best practices.`,
        projectDetails: `Certification Coverage:
• Design resilient architectures (30% of exam)
• Design high-performing architectures (28% of exam)  
• Design secure applications and architectures (24% of exam)
• Design cost-optimized architectures (18% of exam)

Key AWS Services Mastered:
• Compute: EC2, Lambda, ECS, EKS
• Storage: S3, EBS, EFS, Storage Gateway
• Database: RDS, DynamoDB, ElastiCache, Redshift
• Networking: VPC, CloudFront, Route 53, API Gateway
• Security: IAM, KMS, CloudTrail, Config
• Monitoring: CloudWatch, X-Ray, Systems Manager`,
        impact: `This certification has significantly enhanced my cloud architecture skills and opened opportunities for cloud-focused projects. It demonstrates my commitment to staying current with industry-leading cloud technologies and best practices. The knowledge gained has been directly applied in subsequent projects involving cloud migration and serverless architectures.`,
        date: "2024-02-20",
        organization: "Amazon Web Services",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
        skills: ["AWS", "Cloud Architecture", "DevOps", "Security", "Cost Optimization"],
        verificationLink: "https://aws.amazon.com/verification/CERT123456",
        featured: false
      },
      {
        id: 3,
        title: "Dean\'s List - Academic Excellence",
        category: "Academic Excellence",
        description: "Achieved Dean's List recognition for maintaining GPA above 3.8 while taking advanced coursework in AI and machine learning.",
        fullDescription: `Earned Dean's List recognition for exceptional academic performance during Fall 2023 semester, maintaining a GPA of 3.9/4.0 while enrolled in challenging coursework including Advanced Machine Learning, Computer Vision, and Distributed Systems.

This recognition places me in the top 10% of students in the Computer Science program and reflects consistent academic excellence throughout my undergraduate studies.`,
        projectDetails: `Academic Achievements:
• Overall GPA: 3.9/4.0
• Major GPA: 4.0/4.0
• Completed 18 credit hours including:
  - Advanced Machine Learning (A+)
  - Computer Vision (A)
  - Distributed Systems (A+)
  - Database Systems (A)
  - Software Engineering (A+)
  - Research Methods in CS (A)

Notable Projects:
• Implemented neural network from scratch in Python
• Built distributed chat application using microservices
• Created computer vision system for medical image analysis
• Designed and optimized database for e-commerce platform`,
        impact: `This academic recognition demonstrates my ability to excel in rigorous technical coursework while maintaining high standards. The advanced courses have provided deep theoretical knowledge that complements my practical project experience. The achievement has also opened opportunities for research assistantships and graduate school recommendations.`,
        date: "2023-12-15",organization: "University of Technology",image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
        skills: ["Machine Learning", "Computer Vision", "Distributed Systems", "Database Design", "Software Engineering"],
        verificationLink: "https://university.edu/deans-list/fall2023",
        featured: false
      },
      {
        id: 4,
        title: "Open Source Contributor - React Native Community",category: "Community Contributions",description: "Active contributor to React Native ecosystem with 50+ merged pull requests and maintenance of popular community packages.",
        fullDescription: `Became an active contributor to the React Native open source ecosystem, contributing to core libraries and maintaining community packages used by thousands of developers worldwide. My contributions focus on performance optimizations, bug fixes, and developer experience improvements.

Started contributing to address issues I encountered in my own projects and gradually became a trusted community member with commit access to several popular repositories.`,
        projectDetails: `Contribution Highlights:
• 50+ merged pull requests across various repositories
• Maintained 3 popular npm packages with 100K+ weekly downloads
• Fixed critical performance issues in React Native navigation
• Contributed to React Native core documentation
• Created developer tools for debugging React Native apps

Key Repositories:
• react-native-navigation: Performance optimizations
• react-native-vector-icons: Icon library maintenance  
• react-native-async-storage: Bug fixes and improvements
• react-native-community/cli: Developer experience enhancements

Community Engagement:
• Answered 200+ questions on Stack Overflow
• Mentored 15+ new contributors through first contributions
• Spoke at 2 local React Native meetups
• Maintained comprehensive documentation for packages`,
        impact: `My open source contributions have helped thousands of developers build better React Native applications. The experience has significantly improved my code quality, collaboration skills, and understanding of large-scale software maintenance. It has also led to job opportunities and recognition within the React Native community.`,
        date: "2024-01-10",organization: "React Native Community",image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop",
        skills: ["React Native", "JavaScript", "TypeScript", "Open Source", "Community Management", "Documentation"],
        verificationLink: "https://github.com/bala",projectLink: "https://github.com/bala/contributions",
        featured: true
      },
      {
        id: 5,
        title: "AI Ethics Research Paper - Best Paper Award",category: "Academic Excellence",description: "Co-authored research paper on bias detection in machine learning models, awarded Best Paper at Student Research Symposium.",fullDescription: `Co-authored a comprehensive research paper titled "Automated Bias Detection in Machine Learning Models: A Multi-Modal Approach" which received the Best Paper Award at the Annual Student Research Symposium. The research addresses critical issues of fairness and bias in AI systems.

The paper presents novel techniques for automatically detecting various forms of bias in machine learning models across different domains including computer vision, natural language processing, and recommendation systems.`,
        projectDetails: `Research Contributions:
• Developed automated bias detection framework
• Tested on 15 different ML models across 5 domains
• Created comprehensive bias taxonomy for ML systems
• Implemented statistical and visual bias detection methods
• Conducted extensive experiments with real-world datasets

Methodology:
• Literature review of 100+ papers on AI bias
• Implementation of 8 different bias detection algorithms
• Statistical analysis using Python, R, and specialized ML libraries
• Validation through expert review and crowdsourced evaluation
• Development of open-source bias detection toolkit

Key Findings:
• 73% of tested models showed measurable bias
• Visual bias detection methods outperformed statistical approaches
• Bias patterns varied significantly across application domains
• Early detection during training phase most effective`,
        impact: `The research has been cited by 12 subsequent papers and the bias detection toolkit has been downloaded 500+ times by researchers and practitioners. The work contributed to ongoing discussions about responsible AI development and has influenced course curriculum in our university's AI ethics program.`,
        date: "2023-11-08",organization: "Student Research Symposium 2023",location: "University of Technology",participants: 85,rank: "Best Paper Award",image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        skills: ["Machine Learning", "AI Ethics", "Research", "Python", "Statistical Analysis", "Academic Writing"],
        teamMembers: ["Dr. Sarah Johnson (Advisor)", "Michael Chen (Co-author)"],
        verificationLink: "https://symposium.university.edu/2023/best-papers",projectLink: "https://github.com/bala/bias-detection-toolkit",
        featured: false
      },
      {
        id: 6,
        title: "Google Cloud Professional Developer",category: "Certifications",description: "Earned Google Cloud Professional Cloud Developer certification, demonstrating expertise in building scalable applications on GCP.",
        fullDescription: `Successfully achieved the Google Cloud Professional Cloud Developer certification, validating my skills in designing, building, testing, and deploying cloud-native applications using Google Cloud Platform services and tools.

The certification demonstrates proficiency in application development best practices, cloud-native architectures, and Google Cloud services integration.`,
        projectDetails: `Certification Domains:
• Designing highly scalable, available, and reliable cloud-native applications
• Building and testing applications using Google Cloud services
• Deploying applications to Google Cloud Platform
• Integrating Google Cloud services and APIs
• Managing application performance monitoring

Key Technologies Covered:
• Compute: App Engine, Cloud Functions, GKE, Compute Engine
• Storage: Cloud Storage, Cloud SQL, Firestore, Bigtable
• Networking: VPC, Load Balancers, Cloud CDN
• DevOps: Cloud Build, Container Registry, Cloud Deployment Manager
• Monitoring: Cloud Monitoring, Cloud Logging, Error Reporting
• Security: Cloud IAM, Cloud KMS, Security Command Center`,
        impact: `This certification has enhanced my ability to architect and develop cloud-native applications using Google Cloud Platform. The knowledge gained has been applied in building scalable web applications and microservices architectures. It has also opened opportunities for GCP-focused development roles and consulting projects.`,
        date: "2023-09-12",organization: "Google Cloud",image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=600&fit=crop",
        skills: ["Google Cloud Platform", "Cloud Development", "Microservices", "DevOps", "Kubernetes"],
        verificationLink: "https://cloud.google.com/certification/verify/GCP789012",
        featured: false
      },
      {
        id: 7,
        title: "Hackathon Winner - FinTech Innovation Challenge",category: "Competition Success",description: "Won first place in 48-hour FinTech hackathon by developing blockchain-based microfinance platform for underbanked communities.",
        fullDescription: `Led a team of 5 developers to victory in the FinTech Innovation Challenge, a 48-hour hackathon focused on creating financial solutions for underserved communities. Our solution addressed the challenge of providing microfinance services to underbanked populations using blockchain technology.

The hackathon attracted 200+ participants from universities and startups across the region, with judging based on innovation, technical implementation, business viability, and social impact.`,
        projectDetails: `Solution Overview:
• Blockchain-based microfinance platform
• Smart contracts for automated loan processing
• Mobile-first design for accessibility in rural areas
• Integration with mobile money services
• AI-powered credit scoring using alternative data

Technical Implementation:
• Frontend: React Native for cross-platform mobile app
• Backend: Node.js with Express framework
• Blockchain: Ethereum smart contracts using Solidity
• Database: MongoDB for off-chain data storage
• AI/ML: Python with scikit-learn for credit scoring
• Payment Integration: Mobile money APIs

Key Features:
• Peer-to-peer lending marketplace
• Automated loan approval using smart contracts
• Flexible repayment schedules
• Community-based credit scoring
• Multi-language support for local communities
• Offline functionality for areas with poor connectivity`,
        impact: `The winning solution caught attention from several FinTech investors and NGOs working in financial inclusion. The project demonstrated potential to serve millions of underbanked individuals and has led to discussions about pilot implementation in rural communities. The experience enhanced my understanding of blockchain applications and social impact technology.`,
        date: "2023-07-22",organization: "FinTech Innovation Challenge 2023",location: "Bangalore, India",participants: 200,rank: "1st Place",prize: "₹1,00,000 + Incubation Opportunity",image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
        skills: ["Blockchain", "React Native", "Node.js", "Solidity", "Machine Learning", "FinTech"],
        teamMembers: ["Rahul Kumar", "Anita Singh", "David Wilson", "Lisa Zhang"],
        verificationLink: "https://fintechchallenge.com/winners/2023",projectLink: "https://github.com/bala/microfinance-blockchain",mediaLink: "https://youtube.com/watch?v=fintech-demo",
        featured: true
      },
      {
        id: 8,
        title: "Teaching Assistant - Data Structures & Algorithms",category: "Community Contributions",description: "Served as Teaching Assistant for Data Structures & Algorithms course, mentoring 120+ students and improving course pass rates.",
        fullDescription: `Served as Teaching Assistant for the Data Structures & Algorithms course, one of the most challenging courses in the Computer Science curriculum. Responsible for conducting lab sessions, grading assignments, and providing one-on-one mentoring to struggling students.

The role involved working closely with the professor to improve course materials and develop new teaching methodologies to help students better understand complex algorithmic concepts.`,
        projectDetails: `Responsibilities:
• Conducted weekly lab sessions for 120+ students
• Graded assignments and exams with detailed feedback
• Held office hours for individual student consultations
• Created supplementary learning materials and tutorials
• Mentored students on coding best practices
• Assisted in curriculum development and improvement

Teaching Innovations:
• Developed interactive coding exercises using online judges
• Created visual algorithm demonstrations using animations
• Implemented peer programming sessions for collaborative learning
• Designed practice problems with varying difficulty levels
• Established study groups for exam preparation

Student Support:
• Provided one-on-one tutoring for struggling students
• Created comprehensive study guides for major topics
• Developed debugging workshops for common programming errors
• Organized review sessions before exams
• Maintained online discussion forum for Q&A`,
        impact: `Under my assistance, the course pass rate improved from 78% to 89%, and student satisfaction scores increased significantly. Many students credited the additional support and innovative teaching methods for their improved understanding of algorithms. The experience enhanced my communication skills and deepened my own understanding of fundamental computer science concepts.`,
        date: "2023-08-15",organization: "University of Technology - CS Department",image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        skills: ["Teaching", "Algorithms", "Data Structures", "Mentoring", "Curriculum Development", "Communication"],
        verificationLink: "https://university.edu/cs/teaching-assistants",
        featured: false
      }
    ];

    setAchievements(mockAchievements);
    setFilteredAchievements(mockAchievements);
  }, []);

  // Calculate categories with counts
  const categories = [
    { name: 'All', count: achievements?.length },
    { name: 'Academic Excellence', count: achievements?.filter(a => a?.category === 'Academic Excellence')?.length },
    { name: 'Competition Success', count: achievements?.filter(a => a?.category === 'Competition Success')?.length },
    { name: 'Certifications', count: achievements?.filter(a => a?.category === 'Certifications')?.length },
    { name: 'Community Contributions', count: achievements?.filter(a => a?.category === 'Community Contributions')?.length }
  ];

  // Filter and sort achievements
  useEffect(() => {
    let filtered = achievements;

    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered?.filter(achievement => achievement?.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered?.filter(achievement =>
        achievement?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        achievement?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        achievement?.skills?.some(skill => skill?.toLowerCase()?.includes(searchTerm?.toLowerCase())) ||
        achievement?.organization?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      );
    }

    // Sort achievements
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case 'date-desc':
          return new Date(b.date) - new Date(a.date);
        case 'date-asc':
          return new Date(a.date) - new Date(b.date);
        case 'title-asc':
          return a?.title?.localeCompare(b?.title);
        case 'title-desc':
          return b?.title?.localeCompare(a?.title);
        case 'category':
          return a?.category?.localeCompare(b?.category);
        default:
          return 0;
      }
    });

    setFilteredAchievements(filtered);
  }, [achievements, activeCategory, searchTerm, sortBy]);

  const handleViewDetails = (achievement) => {
    setSelectedAchievement(achievement);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAchievement(null);
  };

  return (
    <>
      <Helmet>
        <title>Achievements Hub - Recognition Gallery | Bala Adhish Portfolio</title>
        <meta name="description" content="Explore Bala Adhish's comprehensive achievements including competition wins, certifications, academic honors, and community contributions in AI and software development." />
        <meta name="keywords" content="achievements, awards, certifications, hackathon wins, academic excellence, AI engineer, software developer" />
        <meta property="og:title" content="Achievements Hub - Recognition Gallery | Bala Adhish" />
        <meta property="og:description" content="Comprehensive showcase of accomplishments in AI engineering, software development, and academic excellence." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/achievements-hub-recognition-gallery" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container-width px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-hero-gradient rounded-2xl mb-6 shadow-lg">
                <Icon name="Trophy" size={32} className="text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Achievements Hub
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                A comprehensive showcase of accomplishments, recognitions, and milestones that reflect my journey in AI engineering, software development, and academic excellence.
              </p>
            </div>

            {/* Stats Overview */}
            <StatsOverview achievements={achievements} />
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container-width px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            {/* Search and Sort */}
            <SearchAndSort
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              sortBy={sortBy}
              onSortChange={setSortBy}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />

            {/* Results Count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-text-secondary">
                Showing {filteredAchievements?.length} of {achievements?.length} achievements
                {activeCategory !== 'All' && ` in ${activeCategory}`}
                {searchTerm && ` matching "${searchTerm}"`}
              </p>
              
              {filteredAchievements?.length === 0 && (
                <div className="text-center py-12 w-full">
                  <Icon name="Search" size={48} className="text-text-muted mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-text-primary mb-2">No achievements found</h3>
                  <p className="text-text-secondary">
                    Try adjusting your search terms or category filter.
                  </p>
                </div>
              )}
            </div>

            {/* Achievements Display */}
            {filteredAchievements?.length > 0 && (
              <>
                {viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredAchievements?.map((achievement) => (
                      <AchievementCard
                        key={achievement?.id}
                        achievement={achievement}
                        onViewDetails={handleViewDetails}
                      />
                    ))}
                  </div>
                ) : (
                  <TimelineView achievements={filteredAchievements} />
                )}
              </>
            )}
          </div>
        </section>

        {/* Achievement Modal */}
        <AchievementModal
          achievement={selectedAchievement}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container-width px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Ready to Collaborate?
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              These achievements represent my commitment to excellence and continuous learning. 
              Let's work together to create something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/professional-connect-contact-hub'}
                className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base font-medium"
              >
                <Icon name="Mail" size={20} className="mr-2" />
                Get In Touch
              </button>
              <button
                onClick={() => window.location.href = '/technical-portfolio-project-showcase'}
                className="btn-secondary inline-flex items-center justify-center px-6 py-3 text-base font-medium"
              >
                <Icon name="FolderOpen" size={20} className="mr-2" />
                View Projects
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-8">
          <div className="container-width px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <div>
                  <p className="text-text-primary font-semibold">Bala Adhish</p>
                  <p className="text-text-secondary text-sm">AI Engineer & Full-Stack Developer</p>
                </div>
              </div>
              <p className="text-text-secondary text-sm">
                © {new Date()?.getFullYear()} Bala Adhish. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AchievementsHub;