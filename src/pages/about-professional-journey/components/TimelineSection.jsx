import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const [activeTab, setActiveTab] = useState('academic');

  const timelineData = {
    academic: [
      {
        id: 1,
        year: "2022-2026",
        title: "Bachelor of Technology - Computer Science and Engineering",
        institution: "Kathir College of Engineering, Coimbatore",
        description: "Specializing in Artificial Intelligence and Data Science with a focus on practical applications and industry-oriented projects. Maintaining strong academic performance while actively engaging in hackathons, symposiums, and workshops.",
        achievements: [
          "Secured 1st prize in multiple technical events at national-level symposiums",
          "Participated in AI-driven research-oriented projects and sustainability solutions",
          "Completed certified courses in Python, Machine Learning, and Full-Stack Development",
          "Active member of the Fine Arts Club and Computech Association, contributing to event organization and technical activities"
          ],
          icon: "GraduationCap",
          color: "primary"
      },
      {
          id: 2,
          year: "2025",
          title: "Azure AI Fundamentals Certification",
          institution: "ICT Academy",
          description: "Completed hands-on coursework in Artificial Intelligence services on Microsoft Azure, including Computer Vision, Natural Language Processing, and Conversational AI. Focused on practical cloud-based AI applications.",
          achievements: [
              "Earned Microsoft Azure AI Fundamentals Certification",
              "Built AI solutions integrating Vision and NLP services",
              "Recognized for successful completion through ICT Academy industry program"
          ],
          icon: "Brain",
          color: "secondary"
      },
      {
          id: 3,
          year: "2024-2025",
          title: "Full-Stack Development Training",
          institution: "Self-Learning & Online Platforms",
          description: "Practical learning of modern web development technologies including HTML, CSS, JavaScript, Bootstrap, and React. Built real-world projects with a focus on frontend development and preparing for Python full-stack.",
          achievements: [
              "Developed 2 frontend projects including a personal portfolio and StudyBuddy planner app",
              "Implemented dynamic input handling and localStorage integration in JavaScript",
              "Explored React for building interactive and reusable UI components",
              "Certified in HTML, CSS, JavaScript, and Bootstrap from LinkedIn Learning"
          ],
          icon: "Code",
          color: "accent"
      },

    ],
    projects: [
        {
        id: 1,
        year: "2025",
        title: "RAG-Based Academic Assistant Chatbot",
        institution: "Personal Project",
        description: "Built an AI-powered chatbot using Retrieval-Augmented Generation (RAG) to assist students with academic queries, syllabus-based answers, and resource recommendations. Combined NLP techniques with vector database search for accurate contextual responses.",
        achievements: [
            "Implemented RAG pipeline for syllabus-specific question answering",
            "Integrated with a vector database for efficient document retrieval",
            "Enhanced learning experience by providing accurate and context-aware answers"
        ],
        icon: "FileCode",
        color: "primary"
      },
      {
          id: 2,
          year: "2025",
          title: "AI + IoT Irrigation & Fertigation Prediction System",
          institution: "Personal Project",
          description: "Developed a smart agriculture solution integrating IoT sensors with AI models to predict irrigation and fertilizer needs. Built real-time dashboards using Flutter and Firebase, with a Raspberry Pi as the central controller.",
          achievements: [
              "Implemented AI models for plant disease detection and irrigation prediction",
              "Integrated IoT sensor data via MQTT and Firebase for real-time monitoring",
              "Developed a Flutter-based dashboard for farmers to visualize insights",
              "Optimized water and fertilizer usage, supporting sustainable farming practices"
          ],
          icon: "Leaf",
          color: "secondary"
      },
      {
          id: 3,
          year: "2024",
          title: "Carbon Footprint Calculator for Coal Mines",
          institution: "Industry Collaboration",
          description: "Designed and developed a web application to quantify the carbon footprint of Indian coal mines and explore pathways to carbon neutrality. Integrated NLP-based suggestions for emission reduction strategies.",
          achievements: [
              "Implemented carbon footprint quantification tailored for coal mining operations",
              "Provided AI-driven recommendations for achieving carbon neutrality",
              "Collaborated with industry stakeholders for real-world applicability",
              "Built scalable web architecture with visualization dashboards"
          ],
          icon: "BarChart3",
          color: "accent"
      }

    ],
skills: [
    {
      id: 1,
      year: "2024-2025",
      title: "Artificial Intelligence & Machine Learning",
      institution: "Self-Learning + ICT Academy",
      description: "Gained hands-on experience in AI/ML concepts including deep learning, NLP, and computer vision. Explored real-world applications through projects and hackathons.",
      achievements: [
        "Azure AI Fundamentals Certified via ICT Academy",
        "Built RAG-based Academic Assistant Chatbot",
        "Developed AI + IoT Irrigation & Fertigation Prediction System"
      ],
      icon: "Cpu",
      color: "primary"
    },
    {
      id: 2,
      year: "2023-2024",
      title: "Full-Stack Development",
      institution: "Self-Learning & Online Platforms",
      description: "Focused on frontend and full-stack development using HTML, CSS, JavaScript, Bootstrap, React, and Python. Built real-world projects with scalable design.",
      achievements: [
        "Created personal portfolio and StudyBuddy planner app",
        "Explored React for interactive UI development",
        "Certified in HTML, CSS, JavaScript, and Bootstrap from LinkedIn Learning"
      ],
      icon: "Layers",
      color: "secondary"
    },
    {
      id: 3,
      year: "2022-2023",
      title: "Problem-Solving & DSA",
      institution: "Competitive Programming + NPTEL",
      description: "Strengthened problem-solving and data structure knowledge through coding practice and academic coursework.",
      achievements: [
        "Completed NPTEL course in Data Structures & Algorithms using Python",
        "Practiced problem-solving in C, Python, and Java",
        "Participated in coding challenges and CTF competitions"
      ],
      icon: "Puzzle",
      color: "accent"
    }
  ]

  };
  const tabs = [
    { id: 'academic', label: 'Academic Journey', icon: 'BookOpen' },
    { id: 'projects', label: 'Project Evolution', icon: 'Rocket' },
    { id: 'skills', label: 'Skill Development', icon: 'TrendingUp' }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: 'bg-primary text-white',
      secondary: 'bg-secondary text-white',
      accent: 'bg-accent text-white'
    };
    return colors?.[color] || colors?.primary;
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-width">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">My Professional Journey</h2>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto">
            Explore the milestones, achievements, and growth that have shaped my path as an AI engineer and full-stack developer.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-surface rounded-lg p-1.5 sm:p-2 inline-flex flex-wrap justify-center gap-1 sm:gap-2">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-4 py-2 sm:px-6 sm:py-3 rounded-md font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeTab === tab?.id
                    ? 'bg-primary text-white shadow-md'
                    : 'text-text-secondary hover:text-primary hover:bg-white'
                }`}
              >
                <Icon name={tab?.icon} size={18} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Timeline Line for large screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-secondary to-accent h-full rounded-full"></div>
          {/* Timeline Line for small screens */}
          <div className="md:hidden absolute left-6 w-1 bg-gradient-to-b from-primary via-secondary to-accent h-full rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData?.[activeTab]?.map((item, index) => (
              <div
                key={item?.id}
                className={`relative flex items-center md:justify-start`}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-12 h-12 rounded-full ${getColorClasses(item?.color)} flex items-center justify-center shadow-lg`}>
                    <Icon name={item?.icon} size={20} />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                  <div className="bg-white border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium mb-2 sm:mb-0 ${ 
                        item?.color === 'primary' ? 'bg-primary/10 text-primary' :
                        item?.color === 'secondary'? 'bg-secondary/10 text-secondary' : 'bg-accent/10 text-accent'
                      }`}>
                        {item?.year}
                      </span>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2">{item?.title}</h3>
                    <p className="text-primary font-medium text-sm sm:text-base mb-3">{item?.institution}</p>
                    <p className="text-sm text-text-secondary mb-4 leading-relaxed">{item?.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-text-primary text-sm">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {item?.achievements?.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-text-secondary">
                            <Icon name="CheckCircle" size={14} className="text-success flex-shrink-0 mt-1" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-6 sm:p-8 border border-border">
            <h3 className="text-xl sm:text-2xl font-bold text-gradient mb-4">Continuous Growth Mindset</h3>
            <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
              Every milestone represents not just an achievement, but a stepping stone towards building 
              intelligent solutions that make a meaningful impact in the world of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;