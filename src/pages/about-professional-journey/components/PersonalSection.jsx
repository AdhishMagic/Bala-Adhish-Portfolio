import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const PersonalSection = () => {
  const [activeTab, setActiveTab] = useState('philosophy');

  const personalData = {
    philosophy: {
      title: "Learning Philosophy",
      content: [
        {
          principle: "Learn by Building",
          description: "I believe the best way to understand a concept is to implement it. Every new technology I learn, I immediately apply it to a practical project.",
          example: "When learning TensorFlow, I built a real-time object detection system for my college's security department."
        },
        {
          principle: "Teach to Learn",
          description: "Teaching others solidifies my own understanding. I regularly mentor junior developers and write technical blogs to share knowledge.",
          example: "Created a YouTube series on 'AI for Beginners' that has helped over 5,000 students understand machine learning concepts."
        },
        {
          principle: "Fail Fast, Learn Faster",
          description: "I embrace failure as a learning opportunity. Quick iterations and rapid prototyping help me discover what works and what doesn't.",
          example: "Failed at my first three startup ideas, but each failure taught me valuable lessons about market research and user validation."
        }
      ]
    },
    technologies: {
      title: "Favorite Technologies",
      content: [
        {
          principle: "Python & AI/ML Stack",
          description: "Python's simplicity combined with powerful libraries like TensorFlow, PyTorch, and scikit-learn makes it my go-to for AI development.",
          example: "Built 15+ machine learning models using Python, from simple linear regression to complex neural networks."
        },
        {
          principle: "React & Modern JavaScript",
          description: "React's component-based architecture and the modern JavaScript ecosystem enable me to build scalable, maintainable web applications.",
          example: "Developed a real-time collaboration platform using React, WebSockets, and Node.js that supports 1000+ concurrent users."
        },
        {
          principle: "Cloud Technologies",
          description: "AWS and Google Cloud provide the infrastructure needed to deploy and scale AI applications globally.",
          example: "Deployed machine learning models on AWS Lambda that process over 100,000 requests daily with 99.9% uptime."
        }
      ]
    },
    motivation: {
      title: "What Drives Me",
      content: [
        {
          principle: "Solving Real Problems",
          description: "I\'m motivated by the opportunity to use technology to solve genuine problems that affect people\'s lives.",
          example: "Developed an AI-powered app that helps farmers predict crop diseases, potentially saving thousands of dollars in losses."
        },
        {
          principle: "Continuous Innovation",
          description: "The rapid pace of technological advancement excites me. There\'s always something new to learn and explore.",
          example: "Currently exploring quantum computing and its potential applications in machine learning optimization."
        },
        {
          principle: "Building Community",
          description: "I believe in the power of community and collaboration. The best innovations come from diverse teams working together.",
          example: "Founded a local AI meetup group that now has 500+ members and hosts monthly workshops and hackathons."
        }
      ]
    }
  };

  const interests = [
    { name: "Quantum Computing", icon: "Atom", color: "primary" },
    { name: "Computer Vision", icon: "Eye", color: "secondary" },
    { name: "Natural Language Processing", icon: "MessageSquare", color: "accent" },
    { name: "Blockchain Technology", icon: "Link", color: "success" },
    { name: "IoT & Edge Computing", icon: "Wifi", color: "warning" },
    { name: "Robotics", icon: "Bot", color: "error" }
  ];

  const hobbies = [
    { name: "Photography", icon: "Camera", description: "Capturing moments and exploring creative perspectives" },
    { name: "Chess", icon: "Crown", description: "Strategic thinking and pattern recognition" },
    { name: "Hiking", icon: "Mountain", description: "Connecting with nature and staying physically active" },
    { name: "Reading", icon: "BookOpen", description: "Sci-fi novels and technology biographies" },
    { name: "Music", icon: "Music", description: "Playing guitar and exploring different genres" },
    { name: "Cooking", icon: "ChefHat", description: "Experimenting with cuisines from around the world" }
  ];

  const tabs = [
    { id: 'philosophy', label: 'Learning Philosophy', icon: 'Lightbulb' },
    { id: 'technologies', label: 'Favorite Tech', icon: 'Code' },
    { id: 'motivation', label: 'What Drives Me', icon: 'Heart' }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Personal Insights</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Beyond the code and algorithms, here's what makes me tick as a person and professional.
          </p>
        </div>

        {/* Personal Philosophy Tabs */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-2 inline-flex space-x-2 shadow-md border border-border">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                    activeTab === tab?.id
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

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
              {personalData?.[activeTab]?.title}
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {personalData?.[activeTab]?.content?.map((item, index) => (
                <div key={index} className="space-y-4">
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-primary mb-3">{item?.principle}</h4>
                    <p className="text-text-secondary leading-relaxed mb-4">
                      {item?.description}
                    </p>
                  </div>
                  
                  <div className="bg-surface rounded-lg p-4 border-l-4 border-primary">
                    <p className="text-sm text-text-secondary italic">
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
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
            <div className="text-center mb-8">
              <Icon name="Zap" size={32} className="mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold text-text-primary">Current Interests</h3>
              <p className="text-text-secondary mt-2">Technologies I'm actively exploring</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {interests?.map((interest, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${
                    interest?.color === 'primary' ? 'border-primary/20 hover:border-primary bg-primary/5' :
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
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
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