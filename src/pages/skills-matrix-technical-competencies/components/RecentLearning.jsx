import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RecentLearning = () => {
  const recentActivities = [
    {
      id: 1,
      type: 'course',
      title: 'Generative AI with LLMs: Applications',
      platform: 'DeepLearning.AI (Coursera)',
      progress: 65,
      status: 'In Progress',
      startDate: '2025-09-15',
      estimatedCompletion: '2025-10-20',
      skills: ['Prompt Engineering', 'RAG', 'LLM Safety'],
      icon: 'BookOpen',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      type: 'tutorial',
      title: 'Django REST Framework — Real-world APIs',
      platform: 'YouTube',
      progress: 100,
      status: 'Completed',
      completedDate: '2025-09-25',
      skills: ['Django', 'DRF', 'API Design'],
      icon: 'Play',
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      id: 3,
      type: 'documentation',
      title: 'LangChain v0.3 Docs — RAG & Evaluation',
      platform: 'LangChain Official Docs',
      progress: 80,
      status: 'In Progress',
      startDate: '2025-09-10',
      skills: ['LangChain', 'Retrievers', 'Evaluation'],
      icon: 'FileText',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      id: 4,
      type: 'project',
      title: 'Production-ready RAG with Qdrant',
      platform: 'Personal Project',
      progress: 55,
      status: 'In Progress',
      startDate: '2025-09-18',
      skills: ['Qdrant', 'Embeddings', 'LLMOps'],
      icon: 'Code',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      id: 5,
      type: 'article',
      title: 'Managing Secrets for AI Applications',
      platform: 'OpenAI Developer Blog',
      progress: 100,
      status: 'Completed',
      completedDate: '2025-09-12',
      skills: ['Security', 'Key Management', 'Best Practices'],
      icon: 'Newspaper',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50'
    }
  ];

  const learningStats = {
    hoursThisWeek: 14,
    coursesCompleted: 2,
    articlesRead: 5,
    projectsStarted: 1
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-success bg-success/10 border-success/20';
      case 'In Progress':
        return 'text-primary bg-primary/10 border-primary/20';
      default:
        return 'text-text-secondary bg-muted border-border';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Recent Learning Activities</h2>
          <p className="text-sm text-text-secondary mt-1">Continuous skill development and knowledge acquisition</p>
        </div>
        <div className="flex items-center space-x-2 mt-2 sm:mt-0">
          <Icon name="TrendingUp" size={20} className="text-success" />
          <span className="text-sm text-success font-medium">Active Learner</span>
        </div>
      </div>
      {/* Learning Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="text-center p-4 bg-surface rounded-lg border border-border">
          <div className="text-xl sm:text-2xl font-bold text-primary">{learningStats?.hoursThisWeek}</div>
          <div className="text-xs sm:text-sm text-text-secondary">Hours This Week</div>
        </div>
        <div className="text-center p-4 bg-surface rounded-lg border border-border">
          <div className="text-xl sm:text-2xl font-bold text-success">{learningStats?.coursesCompleted}</div>
          <div className="text-xs sm:text-sm text-text-secondary">Courses Completed</div>
        </div>
        <div className="text-center p-4 bg-surface rounded-lg border border-border">
          <div className="text-xl sm:text-2xl font-bold text-secondary">{learningStats?.articlesRead}</div>
          <div className="text-xs sm:text-sm text-text-secondary">Articles Read</div>
        </div>
        <div className="text-center p-4 bg-surface rounded-lg border border-border">
          <div className="text-xl sm:text-2xl font-bold text-accent">{learningStats?.projectsStarted}</div>
          <div className="text-xs sm:text-sm text-text-secondary">Projects Started</div>
        </div>
      </div>
      {/* Recent Activities */}
      <div className="space-y-4">
        {recentActivities?.map((activity) => (
          <div key={activity?.id} className="bg-surface border border-border rounded-lg p-4 sm:p-5 hover:shadow-md transition-all duration-300">
            <div className="flex items-start space-x-4">
              {/* Icon */}
              <div className={`w-10 h-10 sm:w-12 sm:h-12 ${activity?.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <Icon name={activity?.icon} size={20} className={activity?.color} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row items-start sm:justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-primary mb-1 text-sm sm:text-base">{activity?.title}</h3>
                    <p className="text-xs sm:text-sm text-text-secondary">{activity?.platform}</p>
                  </div>
                  <div className="ml-0 sm:ml-4 mt-2 sm:mt-0 flex items-center space-x-2 self-start sm:self-center">
                    <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${getStatusColor(activity?.status)}`}>
                      {activity?.status}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1 text-xs sm:text-sm">
                    <span className="text-text-secondary">Progress</span>
                    <span className="font-medium text-text-primary">{activity?.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-1000 ${
                        activity?.status === 'Completed' ? 'bg-success' : 'bg-primary'
                      }`}
                      style={{ width: `${activity?.progress}%` }}
                    />
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {activity?.skills?.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Dates and Actions */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between">
                  <div className="text-xs text-text-secondary mb-2 sm:mb-0">
                    {activity?.status === 'Completed' ? (
                      <>Completed: {formatDate(activity?.completedDate)}</>
                    ) : (
                      <>Started: {formatDate(activity?.startDate)}
                      {activity?.estimatedCompletion && (
                        <span className="hidden sm:inline"> • Est. completion: {formatDate(activity?.estimatedCompletion)}</span>
                      )}</>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 self-end sm:self-center">
                    {activity?.type === 'course' && (
                      <Button
                        variant="outline"
                        size="xs"
                        iconName="ExternalLink"
                        iconPosition="right"
                        iconSize={12}
                      >
                        Continue
                      </Button>
                    )}
                    {activity?.type === 'project' && (
                      <Button
                        variant="outline"
                        size="xs"
                        iconName="Github"
                        iconPosition="right"
                        iconSize={12}
                      >
                        View Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Learning Goals */}
      <div className="border-t border-border pt-6 mt-8">
        <h3 className="font-semibold text-text-primary mb-4 flex items-center space-x-2">
          <Icon name="Target" size={20} />
          <span>Current Learning Goals</span>
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-surface rounded-lg border border-border">
            <div className="flex items-center space-x-3 mb-2">
              <Icon name="Brain" size={20} className="text-purple-500" />
              <h4 className="font-medium text-text-primary">AI/ML Mastery</h4>
            </div>
            <p className="text-sm text-text-secondary mb-2">
              Deep dive into advanced ML algorithms and neural network architectures
            </p>
            <div className="text-xs text-text-secondary">Target: December 2025</div>
          </div>
          
          <div className="p-4 bg-surface rounded-lg border border-border">
            <div className="flex items-center space-x-3 mb-2">
              <Icon name="Cloud" size={20} className="text-blue-500" />
              <h4 className="font-medium text-text-primary">Cloud Architecture</h4>
            </div>
            <p className="text-sm text-text-secondary mb-2">
              Master cloud-native development and microservices architecture
            </p>
            <div className="text-xs text-text-secondary">Target: February 2026</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentLearning;