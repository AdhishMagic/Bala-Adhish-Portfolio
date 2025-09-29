import React from 'react';
import Icon from '../../../components/AppIcon';

const LearningTrajectory = () => {
  const learningPath = [
    {
      year: '2022',
      title: 'Foundation Building – 2022',
      skills: ['C', 'Python basics', 'Java basics', 'Git/GitHub'],
      milestone: 'Started Computer Science Journey',
      color: 'bg-blue-500',
    },
    {
      year: '2023',
      title: 'Full-Stack Development – 2023',
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'Django StudyBuddy project'],
      milestone: 'First Frontend & Full-Stack Projects',
      color: 'bg-green-500',
    },
    {
      year: '2024',
      title: 'AI/ML Specialization – 2024',
      skills: ['TensorFlow', 'PyTorch learning', 'Hugging Face', 'AI Model Integration – disease detection, irrigation prediction'],
      milestone: 'AI and Data Science Research & Projects',
      color: 'bg-purple-500',
    },
    {
      year: '2025',
      title: 'Generative AI & Advanced Tech – 2025',
      skills: ['LLMs', 'RAG Systems', 'Prompt Engineering', 'Fine-Tuning basics', 'Open Weaver', 'n8n'],
      milestone: 'Exploring GenAI and Modern Development Tools',
      color: 'bg-orange-500',
    },
    {
      year: '2026',
      title: 'Future Mastery – 2026',
      skills: [
        'Advanced Deep Learning – Transformers, GANs, Multimodal AI',
        'MLOps – CI/CD, Monitoring, MLflow, Kubernetes',
        'Quantum Computing – Qiskit, quantum algorithms',
        'Advanced Full-Stack – Microservices, GraphQL, scalable backends',
      ],
      milestone: 'Deep Tech and Career-Oriented Skills',
      color: 'bg-rose-500',
    },
  ];

  const futurePlans = [
    {
      skill: 'Advanced Deep Learning',
      timeline: 'Q4 2025',
      focus: 'Transformer architectures, GANs, multimodal AI',
      icon: 'Brain',
    },
    {
      skill: 'MLOps & Production AI',
      timeline: 'Q1 2026',
      focus: 'Model deployment, CI/CD for ML, monitoring with MLflow/Kubernetes',
      icon: 'Cpu',
    },
    {
      skill: 'Quantum Computing',
      timeline: 'Q2 2026',
      focus: 'Qiskit, quantum algorithms, applications in optimization & AI',
      icon: 'Zap',
    },
    {
      skill: 'Advanced Full-Stack Engineering',
      timeline: 'Q3 2026',
  focus: 'Microservices, GraphQL, scalable backend with Django',
      icon: 'Server',
    },
    {
      skill: 'Generative AI Applications',
      timeline: 'Q4 2026',
      focus: 'LLMs fine-tuning, RAG systems, AI agents',
      icon: 'Sparkles',
    },
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Learning Trajectory</h2>
          <p className="text-sm text-text-secondary mt-1">Skills development over time and future plans</p>
        </div>
        <Icon name="TrendingUp" size={24} className="text-primary mt-2 sm:mt-0" />
      </div>
      {/* Timeline */}
      <div className="relative mb-8">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
        
        <div className="space-y-6">
          {learningPath?.map((item, index) => (
            <div key={item?.year} className="relative flex items-start space-x-4">
              <div className={`w-8 h-8 ${item?.color} rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm z-10 flex-shrink-0`}>
                {item?.year?.slice(-2)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-semibold text-text-primary text-sm sm:text-base">{item?.title}</h3>
                  <span className="text-xs sm:text-sm text-text-secondary mt-1 sm:mt-0">{item?.year}</span>
                </div>
                
                <p className="text-xs sm:text-sm text-text-secondary mb-3">{item?.milestone}</p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {item?.skills?.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2 py-1 sm:px-3 sm:py-1 bg-surface text-text-primary text-xs sm:text-sm rounded-full border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Future Learning Plans */}
      <div className="border-t border-border pt-6">
        <h3 className="font-semibold text-text-primary mb-4 flex items-center space-x-2">
          <Icon name="Target" size={20} />
          <span>Future Learning Plans</span>
        </h3>
        
        <div className="grid gap-4">
          {futurePlans?.map((plan) => (
            <div key={plan?.skill} className="flex items-center space-x-4 p-3 sm:p-4 bg-surface rounded-lg border border-border">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={plan?.icon} size={20} className="text-primary" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h4 className="font-medium text-text-primary text-sm sm:text-base">{plan?.skill}</h4>
                  <span className="text-xs sm:text-sm text-text-secondary mt-1 sm:mt-0">{plan?.timeline}</span>
                </div>
                <p className="text-xs sm:text-sm text-text-secondary">{plan?.focus}</p>
              </div>
              
              <Icon name="ArrowRight" size={16} className="text-text-secondary hidden sm:block" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningTrajectory;