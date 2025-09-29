import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillsOverview = ({ skillsData }) => {
  const totalSkills = skillsData?.reduce((acc, category) => acc + (category?.skills?.length || 0), 0) || 0;
  const sumProficiency = skillsData?.reduce((acc, category) => 
    acc + category?.skills?.reduce((skillAcc, skill) => skillAcc + (skill?.proficiency || 0), 0)
  , 0);
  const averageProficiency = totalSkills ? Math.round(((sumProficiency / totalSkills)) * 10) / 10 : 0;
  
  const expertSkills = skillsData?.reduce((acc, category) => 
    acc + (category?.skills?.filter(skill => (skill?.proficiency || 0) >= 85)?.length || 0), 0
  ) || 0;
  const advancedSkills = skillsData?.reduce((acc, category) => 
    acc + (category?.skills?.filter(skill => (skill?.proficiency || 0) >= 70 && (skill?.proficiency || 0) < 85)?.length || 0), 0
  ) || 0;
  const intermediateSkills = skillsData?.reduce((acc, category) => 
    acc + (category?.skills?.filter(skill => (skill?.proficiency || 0) >= 50 && (skill?.proficiency || 0) < 70)?.length || 0), 0
  ) || 0;
  const beginnerSkills = skillsData?.reduce((acc, category) => 
    acc + (category?.skills?.filter(skill => (skill?.proficiency || 0) < 50)?.length || 0), 0
  ) || 0;

  const pct = (n) => totalSkills ? `${Math.round((n / totalSkills) * 100)}%` : '0%';

  const stats = [
    {
      icon: 'Code',
      label: 'Total Skills',
      value: totalSkills,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: 'TrendingUp',
      label: 'Average Proficiency',
      value: `${averageProficiency}%`,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: 'Star',
      label: 'Expert Level',
      value: `${expertSkills} (${pct(expertSkills)})`,
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: 'Award',
      label: 'Advanced Level',
      value: `${advancedSkills} (${pct(advancedSkills)})`,
      color: 'text-success',
      bgColor: 'bg-success/10'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Skills Overview</h2>
          <p className="text-sm text-text-secondary mt-1">Technical competencies and proficiency levels</p>
        </div>
        <div className="flex items-center space-x-2 text-text-secondary mt-2 sm:mt-0 text-xs sm:text-sm">
          <Icon name="Calendar" size={16} />
          <span>Updated September 2025</span>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats?.map((stat) => (
          <div key={stat?.label} className="text-center p-2 sm:p-0">
            <div className={`w-12 h-12 sm:w-16 sm:h-16 ${stat?.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3`}>
              <Icon name={stat?.icon} size={20} sm:size={24} className={stat?.color} />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-text-primary">{stat?.value}</div>
            <div className="text-xs sm:text-sm text-text-secondary">{stat?.label}</div>
          </div>
        ))}
      </div>
      {/* Proficiency Distribution */}
      <div className="border-t border-border pt-6">
        <h3 className="font-semibold text-text-primary mb-4">Proficiency Distribution</h3>
        <div className="space-y-3">
          {[
            { level: 'Expert (85-100%)', count: expertSkills, color: 'bg-green-500' },
            { level: 'Advanced (70-84%)', count: advancedSkills, color: 'bg-blue-500' },
            { level: 'Intermediate (50-69%)', count: intermediateSkills, color: 'bg-yellow-500' },
            { level: 'Beginner (0-49%)', count: beginnerSkills, color: 'bg-gray-400' }
          ]?.map((item) => (
            <div key={item?.level} className="flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 ${item?.color} rounded-full`}></div>
                <span className="text-text-secondary">{item?.level}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium text-text-primary">{item?.count} ({pct(item?.count)})</span>
                <div className="w-16 sm:w-20 bg-muted rounded-full h-2">
                  <div 
                    className={`h-full ${item?.color} rounded-full transition-all duration-1000`}
                    style={{ width: totalSkills ? `${(item?.count / totalSkills) * 100}%` : '0%' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsOverview;