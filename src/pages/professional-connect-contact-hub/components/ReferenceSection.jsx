import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ReferenceSection = () => {
  const [showReferences, setShowReferences] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  const references = [
    {
      name: "Dr. Priya Sharma",
      title: "Associate Professor, Computer Science",
      organization: "Indian Institute of Technology",
      relationship: "Academic Supervisor",
      duration: "2022 - Present",
      expertise: "Machine Learning, Computer Vision",
      contact: "Available upon request",
      testimonial: "Bala has demonstrated exceptional analytical thinking and technical skills in AI/ML projects. His dedication to learning and problem-solving approach make him a valuable team member.",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      verified: true
    },
    {
      name: "Rajesh Kumar",
      title: "Senior Software Engineer",
      organization: "TechCorp Solutions",
      relationship: "Project Mentor",
      duration: "2023 - 2024",
      expertise: "Full-Stack Development, System Architecture",
      contact: "Available upon request",
      testimonial: "During our collaboration on the e-commerce platform project, Bala showed remarkable growth in full-stack development. His code quality and attention to detail are impressive.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      verified: true
    },
    {
      name: "Anita Patel",
      title: "Hackathon Judge & Tech Lead",
      organization: "Innovation Labs",
      relationship: "Competition Judge",
      duration: "2023",
      expertise: "Product Development, Innovation",
      contact: "Available upon request",
      testimonial: "Bala's team won our AI hackathon with an innovative solution. His technical execution combined with creative problem-solving stood out among 200+ participants.",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      verified: true
    }
  ];

  const handleRequestReferences = () => {
    setRequestSent(true);
    // Simulate sending request
    setTimeout(() => {
      setRequestSent(false);
    }, 3000);
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
          <Icon name="Shield" size={20} className="text-success" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-text-primary">Professional References</h3>
          <p className="text-sm text-text-secondary">Verified contacts who can speak to my work and character</p>
        </div>
      </div>
      {/* Reference Overview */}
      <div className="mb-6 p-4 bg-surface rounded-lg border border-border">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="font-semibold text-text-primary">Reference Availability</h4>
            <p className="text-sm text-text-secondary">Professional contacts available for verification</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-success">{references?.length}</div>
            <div className="text-xs text-text-muted">References</div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-3 bg-background rounded-lg">
            <div className="text-lg font-semibold text-primary">2</div>
            <div className="text-xs text-text-muted">Academic</div>
          </div>
          <div className="p-3 bg-background rounded-lg">
            <div className="text-lg font-semibold text-secondary">1</div>
            <div className="text-xs text-text-muted">Industry</div>
          </div>
          <div className="p-3 bg-background rounded-lg">
            <div className="text-lg font-semibold text-accent">3</div>
            <div className="text-xs text-text-muted">Verified</div>
          </div>
        </div>
      </div>
      {/* Reference Request Section */}
      {!showReferences && (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Lock" size={24} className="text-primary" />
          </div>
          <h4 className="text-lg font-semibold text-text-primary mb-2">References Available Upon Request</h4>
          <p className="text-text-secondary mb-6 max-w-md mx-auto">
            Professional references are provided to serious inquiries only. Contact details will be shared after initial discussion.
          </p>
          
          <div className="space-y-4">
            <Button
              variant="default"
              onClick={() => setShowReferences(true)}
              iconName="Eye"
              iconPosition="left"
            >
              View Reference Profiles
            </Button>
            
            <div className="text-sm text-text-muted">
              <p>Reference contacts will be shared for:</p>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                <span className="px-2 py-1 bg-surface rounded text-xs">Job Interviews</span>
                <span className="px-2 py-1 bg-surface rounded text-xs">Serious Inquiries</span>
                <span className="px-2 py-1 bg-surface rounded text-xs">Formal Applications</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Reference Profiles */}
      {showReferences && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-text-primary">Reference Profiles</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowReferences(false)}
              iconName="EyeOff"
              iconPosition="left"
            >
              Hide Details
            </Button>
          </div>

          {references?.map((reference, index) => (
            <div key={index} className="p-6 bg-surface rounded-lg border border-border">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <img
                    src={reference?.avatar}
                    alt={reference?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  {reference?.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center border-2 border-background">
                      <Icon name="Check" size={12} className="text-white" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h5 className="font-semibold text-text-primary">{reference?.name}</h5>
                      <p className="text-sm text-text-secondary">{reference?.title}</p>
                      <p className="text-sm text-primary font-medium">{reference?.organization}</p>
                    </div>
                    <div className="text-right text-sm text-text-muted">
                      <div>{reference?.duration}</div>
                      <div className="text-xs">{reference?.relationship}</div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-2">
                      {reference?.expertise?.split(', ')?.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-sm text-text-secondary italic border-l-4 border-primary/20 pl-4 mb-3">
                    "{reference?.testimonial}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-text-muted">
                      <Icon name="Mail" size={14} />
                      <span>{reference?.contact}</span>
                    </div>
                    {reference?.verified && (
                      <div className="flex items-center space-x-1 text-success text-sm">
                        <Icon name="ShieldCheck" size={14} />
                        <span>Verified</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Request Contact Details */}
          <div className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-lg">
            <div className="text-center">
              <Icon name="Phone" size={24} className="text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-text-primary mb-2">Request Reference Contact Details</h4>
              <p className="text-sm text-text-secondary mb-4">
                For serious inquiries, I can provide direct contact information for these references.
              </p>
              
              {requestSent ? (
                <div className="flex items-center justify-center space-x-2 text-success">
                  <Icon name="CheckCircle" size={18} />
                  <span className="font-medium">Request sent! I'll share contact details shortly.</span>
                </div>
              ) : (
                <Button
                  variant="default"
                  onClick={handleRequestReferences}
                  iconName="Send"
                  iconPosition="right"
                >
                  Request Contact Details
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Reference Policy */}
      <div className="mt-6 p-4 bg-warning/5 border border-warning/20 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={18} className="text-warning mt-0.5" />
          <div>
            <h5 className="font-medium text-warning mb-1">Reference Policy</h5>
            <p className="text-sm text-text-secondary">
              Reference contact information is shared only for legitimate professional inquiries. 
              Please respect their time and contact them only for serious opportunities or formal verification processes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferenceSection;