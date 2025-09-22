import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const AvailabilityStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const availabilityData = {
    jobSearch: {
      status: 'actively-looking',
      label: 'Actively Looking',
      description: 'Open to full-time AI/ML and full-stack development roles',
      icon: 'Briefcase',
      color: 'text-success',
      bgColor: 'bg-success/10',
      borderColor: 'border-success/20'
    },
    projects: {
      status: 'limited-capacity',
      label: 'Limited Capacity',
      description: 'Available for select freelance projects and collaborations',
      icon: 'Code',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      borderColor: 'border-warning/20'
    },
    mentorship: {
      status: 'available',
      label: 'Available',
      description: 'Happy to mentor junior developers and CS students',
      icon: 'Users',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20'
    },
    response: {
      status: 'within-24h',
      label: 'Within 24 Hours',
      description: 'Typical response time for professional inquiries',
      icon: 'Clock',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20'
    }
  };

  const workingHours = {
    timezone: 'IST (UTC+5:30)',
    hours: '9:00 AM - 6:00 PM',
    days: 'Monday - Friday',
    weekend: 'Limited availability on weekends'
  };

  const getCurrentStatus = () => {
    const hour = currentTime?.getHours();
    const day = currentTime?.getDay();
    
    // Check if it's weekend (Saturday = 6, Sunday = 0)
    if (day === 0 || day === 6) {
      return {
        status: 'weekend',
        label: 'Weekend',
        description: 'Limited availability - will respond on Monday',
        color: 'text-text-muted'
      };
    }
    
    // Check working hours (9 AM to 6 PM)
    if (hour >= 9 && hour < 18) {
      return {
        status: 'online',
        label: 'Online',
        description: 'Available for immediate response',
        color: 'text-success'
      };
    } else {
      return {
        status: 'offline',
        label: 'Offline',
        description: 'Will respond during business hours',
        color: 'text-text-muted'
      };
    }
  };

  const currentStatus = getCurrentStatus();

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="Activity" size={20} className="text-accent" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-text-primary">Availability Status</h3>
          <p className="text-sm text-text-secondary">Current availability and response times</p>
        </div>
      </div>
      {/* Current Online Status */}
      <div className="mb-6 p-4 bg-surface rounded-lg border border-border">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${
              currentStatus?.status === 'online' ? 'bg-success animate-pulse' : 
              currentStatus?.status === 'weekend' ? 'bg-warning' : 'bg-text-muted'
            }`}></div>
            <span className={`font-medium ${currentStatus?.color}`}>
              {currentStatus?.label}
            </span>
          </div>
          <span className="text-sm text-text-secondary">
            {currentTime?.toLocaleTimeString('en-IN', { 
              timeZone: 'Asia/Kolkata',
              hour: '2-digit',
              minute: '2-digit'
            })} IST
          </span>
        </div>
        <p className="text-sm text-text-secondary">{currentStatus?.description}</p>
      </div>
      {/* Availability Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {Object.entries(availabilityData)?.map(([key, item]) => (
          <div 
            key={key}
            className={`p-4 rounded-lg border ${item?.bgColor} ${item?.borderColor}`}
          >
            <div className="flex items-center space-x-3 mb-2">
              <Icon name={item?.icon} size={18} className={item?.color} />
              <span className={`font-medium ${item?.color}`}>{item?.label}</span>
            </div>
            <p className="text-sm text-text-secondary">{item?.description}</p>
          </div>
        ))}
      </div>
      {/* Working Hours */}
      <div className="border-t border-border pt-6">
        <h4 className="font-semibold text-text-primary mb-4 flex items-center space-x-2">
          <Icon name="Calendar" size={18} />
          <span>Working Hours</span>
        </h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-text-secondary">Timezone:</span>
              <span className="text-text-primary font-medium">{workingHours?.timezone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Hours:</span>
              <span className="text-text-primary font-medium">{workingHours?.hours}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-text-secondary">Days:</span>
              <span className="text-text-primary font-medium">{workingHours?.days}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Weekend:</span>
              <span className="text-text-primary font-medium">Limited</span>
            </div>
          </div>
        </div>
      </div>
      {/* Quick Response Guarantee */}
      <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Zap" size={16} className="text-primary" />
          <span className="font-medium text-primary">Quick Response Guarantee</span>
        </div>
        <p className="text-sm text-text-secondary">
          All professional inquiries receive a response within 24 hours during business days. 
          Urgent matters are prioritized and may receive same-day responses.
        </p>
      </div>
    </div>
  );
};

export default AvailabilityStatus;