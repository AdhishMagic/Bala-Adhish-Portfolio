import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const QuickConnect = () => {
  const socialProfiles = [
    {
      name: 'LinkedIn',
      username: '@bala-adhish',
      url: 'https://linkedin.com/in/bala-adhish',
      icon: 'Linkedin',
      description: 'Professional network and career updates',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
      followers: '500+ connections'
    },
    {
      name: 'GitHub',
      username: '@bala-adhish',
      url: 'https://github.com/bala-adhish',
      icon: 'Github',
      description: 'Open source projects and code repositories',
      color: 'text-gray-800',
      bgColor: 'bg-gray-50',
      hoverColor: 'hover:bg-gray-100',
      followers: '150+ followers'
    },
    {
      name: 'Twitter',
      username: '@bala_adhish',
      url: 'https://twitter.com/bala_adhish',
      icon: 'Twitter',
      description: 'Tech insights and industry discussions',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
      followers: '300+ followers'
    },
    {
      name: 'Email',
      username: 'bala.adhish@email.com',
      url: 'mailto:bala.adhish@email.com',
      icon: 'Mail',
      description: 'Direct professional communication',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100',
      followers: 'Primary contact'
    }
  ];

  const quickActions = [
    {
      title: 'Schedule a Call',
      description: 'Book a 30-minute consultation',
      icon: 'Calendar',
      action: () => window.open('https://calendly.com/bala-adhish', '_blank'),
      variant: 'default'
    },
    {
      title: 'Download Resume',
      description: 'Get the latest PDF version',
      icon: 'Download',
      action: () => {
        // Simulate resume download
        const link = document.createElement('a');
        link.href = '/assets/resume/Bala_Adhish_Resume.pdf';
        link.download = 'Bala_Adhish_Resume.pdf';
        link?.click();
      },
      variant: 'outline'
    },
    {
      title: 'View Portfolio',
      description: 'Explore technical projects',
      icon: 'FolderOpen',
      action: () => window.open('/technical-portfolio-project-showcase', '_self'),
      variant: 'secondary'
    }
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
          <Icon name="Zap" size={20} className="text-secondary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-text-primary">Quick Connect</h3>
          <p className="text-sm text-text-secondary">One-click access to professional profiles</p>
        </div>
      </div>
      {/* Social Profiles */}
      <div className="space-y-3 mb-8">
        {socialProfiles?.map((profile) => (
          <div
            key={profile?.name}
            onClick={() => handleSocialClick(profile?.url)}
            className={`p-4 rounded-lg border border-border ${profile?.bgColor} ${profile?.hoverColor} cursor-pointer transition-all duration-300 hover:shadow-md group`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow`}>
                  <Icon name={profile?.icon} size={20} className={profile?.color} />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-text-primary">{profile?.name}</h4>
                    <span className="text-sm text-text-muted">{profile?.username}</span>
                  </div>
                  <p className="text-sm text-text-secondary">{profile?.description}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2 text-text-muted">
                  <Icon name="ExternalLink" size={16} />
                </div>
                <p className="text-xs text-text-muted mt-1">{profile?.followers}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Quick Actions */}
      <div className="border-t border-border pt-6">
        <h4 className="font-semibold text-text-primary mb-4 flex items-center space-x-2">
          <Icon name="Rocket" size={18} />
          <span>Quick Actions</span>
        </h4>
        
        <div className="grid grid-cols-1 gap-3">
          {quickActions?.map((action, index) => (
            <Button
              key={index}
              variant={action?.variant}
              onClick={action?.action}
              iconName={action?.icon}
              iconPosition="left"
              className="justify-start h-auto p-4"
            >
              <div className="text-left">
                <div className="font-medium">{action?.title}</div>
                <div className="text-sm opacity-75">{action?.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </div>
      {/* Professional Status */}
      <div className="mt-6 p-4 bg-success/5 border border-success/20 rounded-lg">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
          <span className="font-medium text-success">Currently Available</span>
        </div>
        <p className="text-sm text-text-secondary">
          Open to new opportunities and collaborations. Response time: Within 24 hours.
        </p>
      </div>
      {/* Contact Preferences */}
      <div className="mt-4 p-4 bg-surface rounded-lg border border-border">
        <h5 className="font-medium text-text-primary mb-2 flex items-center space-x-2">
          <Icon name="Settings" size={16} />
          <span>Contact Preferences</span>
        </h5>
        <div className="space-y-2 text-sm text-text-secondary">
          <div className="flex justify-between">
            <span>Preferred method:</span>
            <span className="text-text-primary">Email or LinkedIn</span>
          </div>
          <div className="flex justify-between">
            <span>Best time to call:</span>
            <span className="text-text-primary">10 AM - 5 PM IST</span>
          </div>
          <div className="flex justify-between">
            <span>Languages:</span>
            <span className="text-text-primary">English, Hindi, Tamil</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickConnect;