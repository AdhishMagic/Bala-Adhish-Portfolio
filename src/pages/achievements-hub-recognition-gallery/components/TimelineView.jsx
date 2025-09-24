import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TimelineView = ({ achievements }) => {
  const groupedAchievements = achievements?.reduce((acc, achievement) => {
    const year = new Date(achievement.date)?.getFullYear();
    if (!acc?.[year]) {
      acc[year] = [];
    }
    acc?.[year]?.push(achievement);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedAchievements)?.sort((a, b) => b - a);

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

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-border"></div>
      {sortedYears?.map((year, yearIndex) => (
        <div key={year} className="mb-12">
          {/* Year Header */}
          <div className="flex items-center mb-6">
            <div className="relative z-10 bg-primary text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold shadow-md text-sm sm:text-base">
              {year}
            </div>
            <div className="flex-1 h-0.5 bg-border ml-4"></div>
          </div>

          {/* Achievements for the year */}
          <div className="space-y-6">
            {groupedAchievements?.[year]?.sort((a, b) => new Date(b.date) - new Date(a.date))?.map((achievement, index) => (
                <div key={achievement?.id} className="relative flex items-start">
                  {/* Timeline Node */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-card border-4 border-primary rounded-full flex items-center justify-center shadow-md mr-4 sm:mr-6">
                    <Icon 
                      name={getCategoryIcon(achievement?.category)} 
                      size={20} 
                      className="text-primary" 
                    />
                  </div>

                  {/* Achievement Content */}
                  <div className="flex-1 bg-card border border-border rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-1">
                          {achievement?.title}
                        </h3>
                        <div className="flex flex-wrap items-center text-text-secondary text-xs sm:text-sm mb-2">
                          <div className="flex items-center">
                            <Icon name="Calendar" size={14} className="mr-1" />
                            {formatDate(achievement?.date)}
                          </div>
                          {achievement?.organization && (
                            <>
                              <span className="mx-2 hidden sm:inline">•</span>
                              <div className="flex items-center mt-1 sm:mt-0">
                                <Icon name="Building" size={14} className="mr-1" />
                                {achievement?.organization}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      
                      {achievement?.image && (
                        <div className="hidden sm:block w-16 h-16 rounded-lg overflow-hidden ml-4 flex-shrink-0">
                          <Image
                            src={achievement?.image}
                            alt={achievement?.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>

                    <p className="text-sm text-text-secondary mb-4">
                      {achievement?.description}
                    </p>

                    {/* Achievement Highlights */}
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4 text-xs">
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
                      {achievement?.prize && (
                        <div className="flex items-center text-success font-medium">
                          <Icon name="Gift" size={12} className="mr-1" />
                          {achievement?.prize}
                        </div>
                      )}
                    </div>

                    {/* Skills */}
                    {achievement?.skills && achievement?.skills?.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {achievement?.skills?.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md border"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineView;