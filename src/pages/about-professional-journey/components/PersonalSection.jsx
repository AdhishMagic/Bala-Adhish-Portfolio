import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const PersonalSection = () => {
  const [activeTab, setActiveTab] = useState('philosophy');

const personalData = {
  philosophy: {
    title: "Learning Philosophy",
    content: [
      {
        principle: "Learn by Doing",
        description: "I believe that real learning happens through practice. Whenever I explore a new concept, I try to implement it in a project immediately.",
        example: "When I started with HTML, CSS, and JavaScript, I built my own portfolio website as my first project."
      },
      {
        principle: "Share Knowledge, Grow Knowledge",
        description: "Explaining concepts to others and collaborating with peers helps me strengthen my own understanding.",
        example: "Guided my friends during hackathons and group projects, ensuring everyone learned and contributed equally."
      },
      {
        principle: "Embrace Challenges",
        description: "Every failure is an opportunity to improve. Hackathons and competitions have shaped my problem-solving mindset.",
        example: "Even when my team struggled in a hackathon, we gained lessons on time management, teamwork, and strategy."
      }
    ]
  },
  technologies: {
    title: "Favorite Technologies",
    content: [
      {
        principle: "Python & AI/ML",
        description: "Python is my go-to language for building intelligent systems and solving data-driven problems.",
        example: "Developed AI projects like irrigation & fertigation prediction models and a computer sales prediction system."
      },
      {
        principle: "Web Development",
        description: "Frontend and full-stack development allow me to create interactive, user-friendly applications.",
        example: "Built projects like StudyBuddy (a study planner) and HealthHive (a wellness platform) using HTML, CSS, JavaScript, and Django."
      },
      {
        principle: "Cloud Technologies",
        description: "Cloud platforms enable me to scale and deploy applications efficiently, making solutions widely accessible.",
        example: "Deployed web applications and AI models on cloud platforms to ensure scalability and reliability."
      }
    ]
  },
  motivation: {
    title: "What Drives Me",
    content: [
      {
        principle: "Real-World Impact",
        description: "I’m motivated to solve real challenges in fields like education, productivity, and healthcare.",
        example: "Created an AI-powered crop disease detection model to help farmers reduce losses."
      },
      {
        principle: "Growth & Exploration",
        description: "The continuous evolution of technology inspires me to keep learning and adapting.",
        example: "Currently preparing for TCS Digital while strengthening my knowledge in DSA, Python, and full-stack development."
      },
      {
        principle: "Teamwork & Community",
        description: "I enjoy collaborating with peers and believe the best ideas come from working together.",
        example: "Participated in hackathons with my team Hack Elites, where we gained recognition and valuable experience."
      }
    ]
  }
};


const interests = [
  { name: "Artificial Intelligence", icon: "Cpu", color: "primary" },
  { name: "Machine Learning", icon: "Brain", color: "secondary" },
  { name: "Deep Learning", icon: "Activity", color: "accent" },
  { name: "Web Development", icon: "Globe", color: "success" },
  { name: "Software Development", icon: "Laptop", color: "warning" },
  { name: "Data Structures & Algorithms", icon: "Code", color: "error" },
  { name: "Generative AI", icon: "Sparkles", color: "info" },
  { name: "Natural Language Processing", icon: "MessageSquare", color: "purple" }
];


 const hobbies = [
  { name: "Cooking", icon: "ChefHat", description: "Experimenting with different cuisines and recipes" },
  { name: "Sports & Fitness", icon: "Activity", description: "Staying active and maintaining a healthy lifestyle" },
  { name: "Chess", icon: "Crown", description: "Strategic thinking and enhancing problem-solving skills" },
  { name: "Reading Articles", icon: "BookOpen", description: "Learning from tech blogs, news, and insightful articles" },
  { name: "Listening to Music", icon: "Music", description: "Relaxing and enjoying different music genres" },
  { name: "Watching Movies", icon: "Film", description: "Exploring stories, creativity, and visual storytelling" }
];


  const tabs = [
    { id: 'philosophy', label: 'Learning Philosophy', icon: 'Lightbulb' },
    { id: 'technologies', label: 'Favorite Tech', icon: 'Code' },
    { id: 'motivation', label: 'What Drives Me', icon: 'Heart' }
  ];

  return (
    <section className="py-4 sm:py-5 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">Personal Insights</h2>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto">
          Beyond code and algorithms—what motivates me as a person and professional.
          </p>
        </div>

        {/* Personal Philosophy Tabs */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1.5 sm:p-2 inline-flex flex-wrap justify-center gap-1 sm:gap-2 shadow-md border border-border">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 sm:px-6 sm:py-3 rounded-md font-medium transition-all duration-300 text-sm sm:text-base ${activeTab === tab?.id
                    ? 'bg-primary text-white shadow-md'
                    : 'text-text-secondary hover:text-primary hover:bg-surface'
                  }`}
                >
                  <Icon name={tab?.icon} size={18} />
                  <span>{tab?.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
              {personalData?.[activeTab]?.title}
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {personalData?.[activeTab]?.content?.map((item, index) => (
                <div key={index} className="space-y-4">
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-primary mb-3">{item?.principle}</h4>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-4">
                      {item?.description}
                    </p>
                  </div>
                  
                  <div className="bg-surface rounded-lg p-4 border-l-4 border-primary">
                    <p className="text-xs sm:text-sm text-text-secondary italic">
                      <strong>Example:</strong> {item?.example}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interests & Technologies */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Current Interests */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-border">
            <div className="text-center mb-8">
              <Icon name="Zap" size={32} className="mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold text-text-primary">Current Interests</h3>
              <p className="text-text-secondary mt-2">Technologies I'm actively exploring</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests?.map((interest, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${interest?.color === 'primary' ? 'border-primary/20 hover:border-primary bg-primary/5' :
                    interest?.color === 'secondary' ? 'border-secondary/20 hover:border-secondary bg-secondary/5' :
                    interest?.color === 'accent' ? 'border-accent/20 hover:border-accent bg-accent/5' :
                    interest?.color === 'success' ? 'border-success/20 hover:border-success bg-success/5' :
                    interest?.color === 'warning'? 'border-warning/20 hover:border-warning bg-warning/5' : 'border-error/20 hover:border-error bg-error/5'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon 
                      name={interest?.icon} 
                      size={20} 
                      className={
                        interest?.color === 'primary' ? 'text-primary' :
                        interest?.color === 'secondary' ? 'text-secondary' :
                        interest?.color === 'accent' ? 'text-accent' :
                        interest?.color === 'success' ? 'text-success' :
                        interest?.color === 'warning'? 'text-warning' : 'text-error'
                      }
                    />
                    <span className="font-medium text-text-primary text-sm">{interest?.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Hobbies */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-border">
            <div className="text-center mb-8">
              <Icon name="Smile" size={32} className="mx-auto mb-4 text-secondary" />
              <h3 className="text-2xl font-bold text-text-primary">Beyond Coding</h3>
              <p className="text-text-secondary mt-2">How I spend my time outside of work</p>
            </div>

            <div className="space-y-4">
              {hobbies?.map((hobby, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-surface transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={hobby?.icon} size={20} color="white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">{hobby?.name}</h4>
                    <p className="text-sm text-text-secondary">{hobby?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PersonalSection;
