import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AchievementHighlights = () => {
  const navigate = useNavigate();

  const achievements = [
    {
      id: 1,
      title: "Smart India Hackathon Winner",
      description: "First place in AI/ML category for developing an intelligent traffic management system",
      date: "March 2024",
      type: "Competition",
      icon: "Trophy",
      color: "from-yellow-400 to-orange-500",
      badge: "🏆",
      impact: "Implemented in 3 cities"
    },
    {
      id: 2,
      title: "IEEE Research Symposium",
      description: "Best Paper Award for \'Neural Networks in Predictive Maintenance Systems'",
      date: "January 2024",
      type: "Research",
      icon: "Award",
      color: "from-blue-500 to-purple-600",
      badge: "📄",
      impact: "50+ citations"
    },
    {
      id: 3,
      title: "Google Cloud Certified",
      description: "Professional Machine Learning Engineer certification with 95% score",
      date: "December 2023",
      type: "Certification",
      icon: "Shield",
      color: "from-green-500 to-teal-600",
      badge: "🎓",
      impact: "Industry validated"
    },
    {
      id: 4,
      title: "Open Source Contributor",
      description: "Top contributor to TensorFlow community with 200+ merged PRs",
      date: "Ongoing",
      type: "Community",
      icon: "GitBranch",
      color: "from-purple-500 to-pink-600",
      badge: "💻",
      impact: "Global impact"
    }
  ];

  const certifications = [
    { name: "AWS Machine Learning", issuer: "Amazon", year: "2024" },
    { name: "Deep Learning Specialization", issuer: "Coursera", year: "2023" },
    { name: "React Developer", issuer: "Meta", year: "2023" },
    { name: "Data Science Professional", issuer: "IBM", year: "2023" }
  ];

  const handleViewAllAchievements = () => {
    navigate('/achievements-hub-recognition-gallery');
  };

  const getTypeColor = (type) => {
    const colors = {
      'Competition': 'bg-yellow-100 text-yellow-800',
      'Research': 'bg-blue-100 text-blue-800',
      'Certification': 'bg-green-100 text-green-800',
      'Community': 'bg-purple-100 text-purple-800'
    };
    return colors?.[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Recognition & Achievements
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Celebrating milestones in my journey as an AI engineer, from competition victories to research contributions and professional certifications.
          </p>
        </div>

        {/* Featured Achievements */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {achievements?.map((achievement) => (
            <div
              key={achievement?.id}
              className="group bg-white rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                {/* Achievement Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${achievement?.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{achievement?.badge}</span>
                </div>

                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(achievement?.type)}`}>
                      {achievement?.type}
                    </span>
                    <span className="text-sm text-text-secondary">{achievement?.date}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                    {achievement?.title}
                  </h3>
                  <p className="text-text-secondary mb-3 leading-relaxed">
                    {achievement?.description}
                  </p>

                  {/* Impact */}
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={16} color="#10b981" />
                    <span className="text-sm font-medium text-green-600">
                      {achievement?.impact}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
            Professional Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications?.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm border border-border hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Icon name="Award" size={16} color="white" />
                  </div>
                  <span className="text-sm font-medium text-text-secondary">{cert?.year}</span>
                </div>
                <h4 className="font-semibold text-text-primary text-sm mb-1">
                  {cert?.name}
                </h4>
                <p className="text-xs text-text-secondary">{cert?.issuer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-border">
            <div className="text-3xl font-bold text-yellow-600 mb-2">3</div>
            <div className="text-sm text-text-secondary">Competition Wins</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-border">
            <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
            <div className="text-sm text-text-secondary">Research Papers</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-border">
            <div className="text-3xl font-bold text-green-600 mb-2">12</div>
            <div className="text-sm text-text-secondary">Certifications</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-border">
            <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
            <div className="text-sm text-text-secondary">Open Source PRs</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={handleViewAllAchievements}
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={16}
          >
            View Complete Achievement Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AchievementHighlights;