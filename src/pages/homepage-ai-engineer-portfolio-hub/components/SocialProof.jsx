import React from 'react';
import Icon from '../../../components/AppIcon';

const SocialProof = () => {
  const githubStats = {
    contributions: 847,
    repositories: 42,
    followers: 156,
    stars: 234
  };

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "AI Research Supervisor",
      company: "University Research Lab",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: `Bala's approach to AI problems is both innovative and practical. His ability to bridge theoretical concepts with real-world applications is exceptional. The predictive maintenance system he developed exceeded all expectations.`,
      rating: 5
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: `Working with Bala on the campus navigation project was incredible. His code quality is top-notch, and his understanding of both frontend and backend technologies is impressive for someone at his level.`,
      rating: 5
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Data Science Team Lead",
      company: "Analytics Pro",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: `Bala's data analysis skills and machine learning implementations are remarkable. He has a natural ability to extract meaningful insights from complex datasets and present them in an understandable way.`,
      rating: 5
    }
  ];

  const communityEngagement = [
    {
      platform: "GitHub",
      metric: "Contributions",
      value: "847",
      icon: "Github",
      color: "text-gray-700",
      bgColor: "bg-gray-100"
    },
    {
      platform: "Stack Overflow",
      metric: "Reputation",
      value: "2.1K",
      icon: "MessageCircle",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      platform: "LinkedIn",
      metric: "Connections",
      value: "500+",
      icon: "Linkedin",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      platform: "Medium",
      metric: "Followers",
      value: "1.2K",
      icon: "PenTool",
      color: "text-green-600",
      bgColor: "bg-green-100"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        color={index < rating ? "#fbbf24" : "#e5e7eb"}
        className={index < rating ? "fill-current" : ""}
      />
    ));
  };

  return (
    <section className="section-padding bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Community & Recognition
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Building meaningful connections and contributing to the tech community through code, knowledge sharing, and collaborative projects.
          </p>
        </div>

        {/* GitHub Contribution Graph */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-text-primary flex items-center space-x-2">
              <Icon name="Github" size={24} color="#2563eb" />
              <span>GitHub Activity</span>
            </h3>
            <a
              href="https://github.com/AdhishMagic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <Icon name="ExternalLink" size={20} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">
                {githubStats?.contributions}
              </div>
              <div className="text-sm text-text-secondary">Contributions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">
                {githubStats?.repositories}
              </div>
              <div className="text-sm text-text-secondary">Repositories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">
                {githubStats?.followers}
              </div>
              <div className="text-sm text-text-secondary">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-1">
                {githubStats?.stars}
              </div>
              <div className="text-sm text-text-secondary">Stars Received</div>
            </div>
          </div>

          {/* Mock Contribution Graph */}
          <div className="bg-white rounded-lg p-4 border border-border">
            <div className="grid grid-cols-53 gap-1">
              {Array.from({ length: 371 }, (_, index) => {
                const intensity = Math.floor(Math.random() * 5);
                const colors = ['bg-gray-100', 'bg-green-200', 'bg-green-300', 'bg-green-400', 'bg-green-500'];
                return (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-sm ${colors?.[intensity]}`}
                    title={`${intensity} contributions`}
                  ></div>
                );
              })}
            </div>
            <div className="flex justify-between items-center mt-4 text-xs text-text-secondary">
              <span>Less</span>
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-gray-100 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-200 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-300 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
              </div>
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            What People Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials?.map((testimonial) => (
              <div
                key={testimonial?.id}
                className="bg-white rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-text-primary">
                      {testimonial?.name}
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {testimonial?.role}
                    </p>
                    <p className="text-xs text-text-secondary">
                      {testimonial?.company}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-1 mb-3">
                  {renderStars(testimonial?.rating)}
                </div>

                <blockquote className="text-text-secondary text-sm leading-relaxed italic">
                  "{testimonial?.content}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Community Engagement */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityEngagement?.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className={`w-16 h-16 ${item?.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Icon name={item?.icon} size={24} className={item?.color} />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">
                {item?.value}
              </div>
              <div className="text-sm text-text-secondary mb-1">
                {item?.metric}
              </div>
              <div className="text-xs text-text-secondary">
                {item?.platform}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;