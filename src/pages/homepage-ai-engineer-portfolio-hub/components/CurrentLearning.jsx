import React from 'react';
import Icon from '../../../components/AppIcon';

const CurrentLearning = () => {
  const learningItems = [
    {
      id: 1,
      title: "Advanced Deep Reinforcement Learning",
      provider: "Stanford CS234",
      progress: 75,
      category: "AI/ML",
      icon: "Brain",
      color: "from-blue-500 to-blue-600",
      estimatedCompletion: "April 2024",
      description: "Exploring policy gradients, actor-critic methods, and multi-agent systems"
    },
    {
      id: 2,
      title: "Kubernetes & Container Orchestration",
      provider: "Cloud Native Computing Foundation",
      progress: 60,
      category: "DevOps",
      icon: "Server",
      color: "from-green-500 to-green-600",
      estimatedCompletion: "May 2024",
      description: "Mastering container deployment, scaling, and management in production"
    },
    {
      id: 3,
      title: "Large Language Models (LLMs)",
      provider: "Hugging Face",
      progress: 45,
      category: "NLP",
      icon: "MessageSquare",
      color: "from-purple-500 to-purple-600",
      estimatedCompletion: "June 2024",
      description: "Fine-tuning transformers, prompt engineering, and model optimization"
    }
  ];

  const researchInterests = [
    {
      title: "Explainable AI",
      description: "Making AI decisions transparent and interpretable",
      icon: "Eye",
      status: "Active Research"
    },
    {
      title: "Edge Computing for ML",
      description: "Optimizing ML models for resource-constrained devices",
      icon: "Cpu",
      status: "Exploring"
    },
    {
      title: "Federated Learning",
      description: "Privacy-preserving distributed machine learning",
      icon: "Shield",
      status: "Planning"
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Active Research': 'bg-green-100 text-green-800',
      'Exploring': 'bg-blue-100 text-blue-800',
      'Planning': 'bg-yellow-100 text-yellow-800'
    };
    return colors?.[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Continuous Learning Journey
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
            Staying at the forefront of technology through continuous learning and research. Here's what I'm currently exploring and mastering.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Current Courses */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center space-x-2">
              <Icon name="BookOpen" size={24} color="#2563eb" />
              <span>Currently Learning</span>
            </h3>

            {learningItems?.map((item) => (
              <div
                key={item?.id}
                className="bg-white rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item?.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon name={item?.icon} size={20} color="white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <span className="px-2 py-1 bg-surface text-text-secondary rounded-full text-xs font-medium mb-2 sm:mb-0 self-start">
                        {item?.category}
                      </span>
                      <span className="text-xs sm:text-sm text-text-secondary">
                        {item?.estimatedCompletion}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-text-primary mb-2">
                      {item?.title}
                    </h4>
                    <p className="text-sm text-text-secondary mb-3">
                      {item?.provider}
                    </p>
                    <p className="text-sm text-text-secondary mb-4">
                      {item?.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-text-secondary">Progress</span>
                        <span className="font-semibold text-text-primary">
                          {item?.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-full bg-gradient-to-r ${item?.color} rounded-full transition-all duration-300`}
                          style={{ width: `${item?.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Research Interests */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center space-x-2">
              <Icon name="Lightbulb" size={24} color="#10b981" />
              <span>Research Interests</span>
            </h3>

            <div className="space-y-4">
              {researchInterests?.map((research, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={research?.icon} size={18} color="white" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-base sm:text-lg font-bold text-text-primary mb-1 sm:mb-0">
                          {research?.title}
                        </h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(research?.status)}`}>
                          {research?.status}
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary">
                        {research?.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Stats */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-border">
              <h4 className="text-lg font-bold text-text-primary mb-4">
                Learning Statistics
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">25+</div>
                  <div className="text-sm text-text-secondary">Hours/Week</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">8</div>
                  <div className="text-sm text-text-secondary">Active Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">3</div>
                  <div className="text-sm text-text-secondary">Research Papers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">95%</div>
                  <div className="text-sm text-text-secondary">Completion Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-border">
          <div className="text-center">
            <Icon name="Quote" size={32} color="#64748b" className="mx-auto mb-4" />
            <blockquote className="text-lg sm:text-xl text-text-primary font-medium mb-4 italic">
              "The beautiful thing about learning is that no one can take it away from you. In the rapidly evolving field of AI, continuous learning isn't just an advantage—it's essential."
            </blockquote>
            <cite className="text-text-secondary">— My Learning Philosophy</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentLearning;