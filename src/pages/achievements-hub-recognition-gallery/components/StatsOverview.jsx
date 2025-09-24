import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ achievements }) => {
  const calculateStats = () => {
    const totalAchievements = achievements?.length;
    const competitions = achievements?.filter(a => a?.category === 'Competition Success')?.length;
    const certifications = achievements?.filter(a => a?.category === 'Certifications')?.length;
    const academic = achievements?.filter(a => a?.category === 'Academic Excellence')?.length;
    const community = achievements?.filter(a => a?.category === 'Community Contributions')?.length;
    
    const firstPlaces = achievements?.filter(a => a?.rank && a?.rank?.includes('1st'))?.length;
    const topThree = achievements?.filter(a => a?.rank && (a?.rank?.includes('1st') || a?.rank?.includes('2nd') || a?.rank?.includes('3rd')))?.length;
    
    const currentYear = new Date()?.getFullYear();
    const thisYear = achievements?.filter(a => new Date(a.date)?.getFullYear() === currentYear)?.length;

    return {
      totalAchievements,
      competitions,
      certifications,
      academic,
      community,
      firstPlaces,
      topThree,
      thisYear
    };
  };

  const stats = calculateStats();

  const statCards = [
    {
      title: 'Total Achievements',
      value: stats?.totalAchievements,
      icon: 'Star',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      title: 'Competition Wins',
      value: stats?.competitions,
      icon: 'Trophy',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      title: 'Certifications',
      value: stats?.certifications,
      icon: 'Award',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'First Places',
      value: stats?.firstPlaces,
      icon: 'Medal',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      title: 'Academic Honors',
      value: stats?.academic,
      icon: 'GraduationCap',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Community Impact',
      value: stats?.community,
      icon: 'Users',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Top 3 Finishes',
      value: stats?.topThree,
      icon: 'Target',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      title: 'This Year',
      value: stats?.thisYear,
      icon: 'Calendar',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
      {statCards?.map((stat, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-center justify-between mb-2">
            <div className={`w-8 h-8 sm:w-10 sm:h-10 ${stat?.bgColor} rounded-lg flex items-center justify-center`}>
              <Icon name={stat?.icon} size={16} sm:size={20} className={stat?.color} />
            </div>
            <div className="text-right">
              <div className="text-xl sm:text-2xl font-bold text-text-primary">{stat?.value}</div>
            </div>
          </div>
          <h3 className="text-xs sm:text-sm font-medium text-text-secondary">{stat?.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;