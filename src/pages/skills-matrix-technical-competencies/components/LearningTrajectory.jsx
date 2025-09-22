import React from 'react';
import Icon from '../../../components/AppIcon';

const LearningTrajectory = () => {
  const learningPath = [
    {
      year: '2022',
      title: 'Foundation Building',
      skills: ['Python', 'JavaScript', 'HTML/CSS', 'Git'],
      milestone: 'Started Computer Science Journey',
      color: 'bg-blue-500'
    },
    {
      year: '2023',
      title: 'Full-Stack Development',
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
      milestone: 'First Full-Stack Project',
      color: 'bg-green-500'
    },
    {
      year: '2024',
      title: 'AI/ML Specialization',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas'],
      milestone: 'AI Research Project',
      color: 'bg-purple-500'
    },
    {
      year: '2025',
      title: 'Advanced Technologies',
      skills: ['Docker', 'AWS', 'Kubernetes', 'GraphQL'],
      milestone: 'Cloud Architecture Mastery',
      color: 'bg-orange-500'
    }
  ];

  const futurePlans = [
    {
      skill: 'Advanced Deep Learning',
      timeline: 'Q4 2025',
      focus: 'Transformer architectures, GANs',
      icon: 'Brain'
    },
    {
      skill: 'MLOps & Production AI',
      timeline: 'Q1 2026',
      focus: 'Model deployment, monitoring',
      icon: 'Cpu'
    },
    {
      skill: 'Quantum Computing',
      timeline: 'Q2 2026',
      focus: 'Qiskit, quantum algorithms',
      icon: 'Zap'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-text-primary">Learning Trajectory</h2>
          <p className="text-text-secondary mt-1">Skills development over time and future plans</p>
        </div>
        <Icon name="TrendingUp" size={24} className="text-primary" />
      </div>
      {/* Timeline */}
      <div className="relative mb-8">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
        
        <div className="space-y-6">
          {learningPath?.map((item, index) => (
            <div key={item?.year} className="relative flex items-start space-x-4">
              <div className={`w-8 h-8 ${item?.color} rounded-full flex items-center justify-center text-white font-bold text-sm z-10`}>
                {item?.year?.slice(-2)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-text-primary">{item?.title}</h3>
                  <span className="text-sm text-text-secondary">{item?.year}</span>
                </div>
                
                <p className="text-sm text-text-secondary mb-3">{item?.milestone}</p>
                
                <div className="flex flex-wrap gap-2">
                  {item?.skills?.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-surface text-text-primary text-sm rounded-full border border-border"
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
            <div key={plan?.skill} className="flex items-center space-x-4 p-4 bg-surface rounded-lg border border-border">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={plan?.icon} size={20} className="text-primary" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-text-primary">{plan?.skill}</h4>
                  <span className="text-sm text-text-secondary">{plan?.timeline}</span>
                </div>
                <p className="text-sm text-text-secondary">{plan?.focus}</p>
              </div>
              
              <Icon name="ArrowRight" size={16} className="text-text-secondary" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningTrajectory;