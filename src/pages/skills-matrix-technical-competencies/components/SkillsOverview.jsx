import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillsOverview = ({ skillsData }) => {
  const totalSkills = skillsData?.reduce((acc, category) => acc + category?.skills?.length, 0);
  const averageProficiency = Math.round(
    skillsData?.reduce((acc, category) => 
      acc + category?.skills?.reduce((skillAcc, skill) => skillAcc + skill?.proficiency, 0)
    , 0) / totalSkills
  );
  
  const expertSkills = skillsData?.reduce((acc, category) => 
    acc + category?.skills?.filter(skill => skill?.proficiency >= 85)?.length, 0
  );
  
  const advancedSkills = skillsData?.reduce((acc, category) => 
    acc + category?.skills?.filter(skill => skill?.proficiency >= 70 && skill?.proficiency < 85)?.length, 0
  );

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
      value: expertSkills,
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: 'Award',
      label: 'Advanced Level',
      value: advancedSkills,
      color: 'text-success',
      bgColor: 'bg-success/10'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-text-primary">Skills Overview</h2>
          <p className="text-text-secondary mt-1">Technical competencies and proficiency levels</p>
        </div>
        <div className="flex items-center space-x-2 text-text-secondary">
          <Icon name="Calendar" size={16} />
          <span className="text-sm">Updated September 2025</span>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats?.map((stat) => (
          <div key={stat?.label} className="text-center">
            <div className={`w-16 h-16 ${stat?.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3`}>
              <Icon name={stat?.icon} size={24} className={stat?.color} />
            </div>
            <div className="text-2xl font-bold text-text-primary">{stat?.value}</div>
            <div className="text-sm text-text-secondary">{stat?.label}</div>
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
            { level: 'Intermediate (50-69%)', count: skillsData?.reduce((acc, cat) => 
              acc + cat?.skills?.filter(s => s?.proficiency >= 50 && s?.proficiency < 70)?.length, 0
            ), color: 'bg-yellow-500' },
            { level: 'Beginner (0-49%)', count: skillsData?.reduce((acc, cat) => 
              acc + cat?.skills?.filter(s => s?.proficiency < 50)?.length, 0
            ), color: 'bg-gray-400' }
          ]?.map((item) => (
            <div key={item?.level} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 ${item?.color} rounded-full`}></div>
                <span className="text-sm text-text-secondary">{item?.level}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-text-primary">{item?.count}</span>
                <div className="w-20 bg-muted rounded-full h-2">
                  <div 
                    className={`h-full ${item?.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${(item?.count / totalSkills) * 100}%` }}
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