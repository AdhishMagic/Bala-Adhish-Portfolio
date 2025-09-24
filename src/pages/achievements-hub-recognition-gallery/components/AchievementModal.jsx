import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const AchievementModal = ({ achievement, isOpen, onClose }) => {
  if (!isOpen || !achievement) return null;

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Academic Excellence':
        return 'GraduationCap';
      case 'Competition Success':
        return 'Trophy';
      case 'Certifications':
        return 'Award';
      case 'Community Contributions':
        return 'Users';
      default:
        return 'Star';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Modal Header */}
        <div className="sticky top-0 bg-card/80 backdrop-blur-md border-b border-border p-4 sm:p-6 flex items-center justify-between z-10">
          <div className="flex items-center space-x-3 min-w-0">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name={getCategoryIcon(achievement?.category)} size={20} className="text-primary" />
            </div>
            <div className="min-w-0">
              <h2 className="text-lg sm:text-xl font-semibold text-text-primary truncate">{achievement?.title}</h2>
              <p className="text-text-secondary text-sm">{achievement?.category}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            iconName="X"
            iconSize={20}
            className="ml-4 flex-shrink-0"
          />
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6">
          {/* Achievement Image */}
          {achievement?.image && (
            <div className="mb-6 rounded-lg overflow-hidden">
              <Image
                src={achievement?.image}
                alt={achievement?.title}
                className="w-full h-48 sm:h-64 object-cover"
              />
            </div>
          )}

          {/* Achievement Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Description</h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6 whitespace-pre-wrap">
                {achievement?.fullDescription || achievement?.description}
              </p>

              {achievement?.projectDetails && (
                <>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Project Details</h3>
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6 whitespace-pre-wrap">
                    {achievement?.projectDetails}
                  </p>
                </>
              )}

              {achievement?.impact && (
                <>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Impact & Recognition</h3>
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed whitespace-pre-wrap">
                    {achievement?.impact}
                  </p>
                </>
              )}
            </div>

            <div className="space-y-4">
              {/* Key Information */}
              <div className="bg-surface rounded-lg p-4">
                <h4 className="font-semibold text-text-primary mb-3">Key Information</h4>
                <div className="space-y-3">
                  <div className="flex items-start text-sm">
                    <Icon name="Calendar" size={16} className="mr-2 text-text-muted mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">{formatDate(achievement?.date)}</span>
                  </div>
                  
                  {achievement?.organization && (
                    <div className="flex items-start text-sm">
                      <Icon name="Building" size={16} className="mr-2 text-text-muted mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary">{achievement?.organization}</span>
                    </div>
                  )}
                  
                  {achievement?.location && (
                    <div className="flex items-start text-sm">
                      <Icon name="MapPin" size={16} className="mr-2 text-text-muted mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary">{achievement?.location}</span>
                    </div>
                  )}
                  
                  {achievement?.participants && (
                    <div className="flex items-start text-sm">
                      <Icon name="Users" size={16} className="mr-2 text-text-muted mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary">{achievement?.participants} participants</span>
                    </div>
                  )}
                  
                  {achievement?.rank && (
                    <div className="flex items-start text-sm">
                      <Icon name="Medal" size={16} className="mr-2 text-text-muted mt-0.5 flex-shrink-0" />
                      <span className="text-accent font-medium">{achievement?.rank}</span>
                    </div>
                  )}
                  
                  {achievement?.prize && (
                    <div className="flex items-start text-sm">
                      <Icon name="Gift" size={16} className="mr-2 text-text-muted mt-0.5 flex-shrink-0" />
                      <span className="text-success font-medium">{achievement?.prize}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Skills Used */}
              {achievement?.skills && achievement?.skills?.length > 0 && (
                <div className="bg-surface rounded-lg p-4">
                  <h4 className="font-semibold text-text-primary mb-3">Skills Demonstrated</h4>
                  <div className="flex flex-wrap gap-2">
                    {achievement?.skills?.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-card text-text-secondary text-xs rounded-md border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Team Members */}
              {achievement?.teamMembers && achievement?.teamMembers?.length > 0 && (
                <div className="bg-surface rounded-lg p-4">
                  <h4 className="font-semibold text-text-primary mb-3">Team Members</h4>
                  <div className="space-y-2">
                    {achievement?.teamMembers?.map((member, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <Icon name="User" size={14} className="mr-2 text-text-muted" />
                        <span className="text-text-secondary">{member}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-6 border-t border-border">
            {achievement?.verificationLink && (
              <Button
                variant="default"
                onClick={() => window.open(achievement?.verificationLink, '_blank')}
                iconName="ExternalLink"
                iconPosition="right"
                iconSize={16}
              >
                View Certificate
              </Button>
            )}
            
            {achievement?.projectLink && (
              <Button
                variant="outline"
                onClick={() => window.open(achievement?.projectLink, '_blank')}
                iconName="Github"
                iconPosition="left"
                iconSize={16}
              >
                View Project
              </Button>
            )}
            
            {achievement?.mediaLink && (
              <Button
                variant="outline"
                onClick={() => window.open(achievement?.mediaLink, '_blank')}
                iconName="Play"
                iconPosition="left"
                iconSize={16}
              >
                Watch Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementModal;