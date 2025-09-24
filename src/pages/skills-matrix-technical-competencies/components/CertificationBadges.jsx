import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CertificationBadges = () => {
  const certifications = [
    {
      id: 1,
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'August 2025',
      status: 'Verified',
      credentialId: 'AWS-CCP-2025-BA001',
      logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop&crop=center',
      verifyUrl: '#',
      skills: ['Cloud Computing', 'AWS Services', 'Architecture'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 2,
      name: 'TensorFlow Developer Certificate',
      issuer: 'Google',
      date: 'July 2025',
      status: 'Verified',
      credentialId: 'TF-DEV-2025-BA002',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center',
      verifyUrl: '#',
      skills: ['Machine Learning', 'Deep Learning', 'TensorFlow'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 3,
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: 'June 2025',
      status: 'Verified',
      credentialId: 'META-REACT-2025-BA003',
      logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop&crop=center',
      verifyUrl: '#',
      skills: ['React', 'JavaScript', 'Frontend Development'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 4,
      name: 'Python for Data Science',
      issuer: 'IBM',
      date: 'May 2025',
      status: 'Verified',
      credentialId: 'IBM-PY-DS-2025-BA004',
      logo: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=100&h=100&fit=crop&crop=center',
      verifyUrl: '#',
      skills: ['Python', 'Data Analysis', 'Pandas', 'NumPy'],
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 5,
      name: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: 'April 2025',
      status: 'Verified',
      credentialId: 'DOCKER-CA-2025-BA005',
      logo: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=100&h=100&fit=crop&crop=center',
      verifyUrl: '#',
      skills: ['Docker', 'Containerization', 'DevOps'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      name: 'MongoDB Developer Path',
      issuer: 'MongoDB University',
      date: 'March 2025',
      status: 'Verified',
      credentialId: 'MONGO-DEV-2025-BA006',
      logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop&crop=center',
      verifyUrl: '#',
      skills: ['MongoDB', 'NoSQL', 'Database Design'],
      color: 'from-green-600 to-green-400'
    }
  ];

  const upcomingCerts = [
    {
      name: 'Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      plannedDate: 'December 2025',
      progress: 75
    },
    {
      name: 'Azure AI Engineer Associate',
      issuer: 'Microsoft',
      plannedDate: 'January 2026',
      progress: 45
    }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Professional Certifications</h2>
          <p className="text-sm text-text-secondary mt-1">Verified credentials and industry recognition</p>
        </div>
        <div className="flex items-center space-x-2 mt-2 sm:mt-0">
          <Icon name="Shield" size={20} className="text-success" />
          <span className="text-sm text-success font-medium">{certifications?.length} Verified</span>
        </div>
      </div>
      {/* Certification Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
        {certifications?.map((cert) => (
          <div key={cert?.id} className="group relative bg-surface border border-border rounded-lg p-4 hover:shadow-lg transition-all duration-300">
            {/* Gradient Border Effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${cert?.color} rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            
            <div className="relative">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img 
                    src={cert?.logo} 
                    alt={cert?.issuer}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-1 ml-2">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span className="text-xs text-success font-medium">{cert?.status}</span>
                </div>
              </div>

              {/* Content */}
              <div className="mb-4">
                <h3 className="font-semibold text-text-primary mb-1 line-clamp-2 text-sm sm:text-base">{cert?.name}</h3>
                <p className="text-xs sm:text-sm text-text-secondary mb-2">{cert?.issuer}</p>
                <p className="text-xs text-text-secondary">{cert?.date}</p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {cert?.skills?.slice(0, 3)?.map((skill) => (
                  <span 
                    key={skill}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                  >
                    {skill}
                  </span>
                ))}
                {cert?.skills?.length > 3 && (
                  <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-md">
                    +{cert?.skills?.length - 3}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="text-xs text-text-secondary truncate pr-2">
                  ID: {cert?.credentialId}
                </div>
                <Button
                  variant="outline"
                  size="xs"
                  onClick={() => window.open(cert?.verifyUrl, '_blank')}
                  iconName="ExternalLink"
                  iconPosition="right"
                  iconSize={12}
                >
                  Verify
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Upcoming Certifications */}
      <div className="border-t border-border pt-6">
        <h3 className="font-semibold text-text-primary mb-4 flex items-center space-x-2">
          <Icon name="Target" size={20} />
          <span>Upcoming Certifications</span>
        </h3>
        
        <div className="space-y-4">
          {upcomingCerts?.map((cert) => (
            <div key={cert?.name} className="flex items-center space-x-4 p-3 sm:p-4 bg-surface rounded-lg border border-border">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="BookOpen" size={20} className="text-primary" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className="font-medium text-text-primary text-sm sm:text-base">{cert?.name}</h4>
                  <span className="text-xs sm:text-sm text-text-secondary mt-1 sm:mt-0">{cert?.plannedDate}</span>
                </div>
                <p className="text-xs sm:text-sm text-text-secondary mb-2">{cert?.issuer}</p>
                
                {/* Progress Bar */}
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary rounded-full h-2 transition-all duration-1000"
                      style={{ width: `${cert?.progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-text-secondary">{cert?.progress}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Download Section */}
      <div className="border-t border-border pt-6 mt-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <h3 className="font-semibold text-text-primary">Skills & Certifications Summary</h3>
            <p className="text-sm text-text-secondary">Download comprehensive skills report for recruiters</p>
          </div>
          <Button
            variant="default"
            iconName="Download"
            iconPosition="left"
            iconSize={16}
            className="w-full sm:w-auto"
          >
            Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CertificationBadges;