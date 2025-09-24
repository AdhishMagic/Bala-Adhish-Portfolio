import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const AchievementCard = ({ achievement, onViewDetails }) => {
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

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Academic Excellence':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Competition Success':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Certifications':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Community Contributions':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      {/* Achievement Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
        <Image
          src={achievement?.image}
          alt={achievement?.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getCategoryColor(achievement?.category)}`}>
            <Icon name={getCategoryIcon(achievement?.category)} size={12} className="mr-1" />
            {achievement?.category}
          </span>
        </div>
        {achievement?.featured && (
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
            <div className="bg-accent text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
              <Icon name="Star" size={12} className="mr-1" />
              Featured
            </div>
          </div>
        )}
      </div>
      {/* Achievement Content */}
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-base sm:text-lg font-semibold text-text-primary group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {achievement?.title}
          </h3>
          <div className="hidden sm:flex items-center text-text-secondary text-sm ml-4 flex-shrink-0">
            <Icon name="Calendar" size={14} className="mr-1" />
            {formatDate(achievement?.date)}
          </div>
        </div>

        <p className="text-sm text-text-secondary mb-4 line-clamp-3">
          {achievement?.description}
        </p>

        {/* Achievement Stats */}
        <div className="flex items-center justify-between mb-4 text-xs">
          {achievement?.participants && (
            <div className="flex items-center text-text-secondary">
              <Icon name="Users" size={12} className="mr-1" />
              {achievement?.participants} participants
            </div>
          )}
          {achievement?.rank && (
            <div className="flex items-center text-accent font-medium">
              <Icon name="Medal" size={12} className="mr-1" />
              {achievement?.rank}
            </div>
          )}
        </div>

        {/* Skills Tags */}
        {achievement?.skills && achievement?.skills?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {achievement?.skills?.slice(0, 3)?.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md border"
              >
                {skill}
              </span>
            ))}
            {achievement?.skills?.length > 3 && (
              <span className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md border">
                +{achievement?.skills?.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(achievement)}
            iconName="Eye"
            iconPosition="left"
            iconSize={14}
          >
            View Details
          </Button>
          
          {achievement?.verificationLink && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open(achievement?.verificationLink, '_blank')}
              iconName="ExternalLink"
              iconPosition="right"
              iconSize={14}
            >
              Verify
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;