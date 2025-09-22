import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ projects }) => {
  const stats = {
    total: projects?.length,
    completed: projects?.filter(p => p?.status === 'Completed')?.length,
    inProgress: projects?.filter(p => p?.status === 'In Progress')?.length,
    technologies: [...new Set(projects.flatMap(p => p.technologies))]?.length,
    totalLinesOfCode: projects?.reduce((sum, p) => {
      const lines = parseInt(p?.metrics?.linesOfCode?.replace(/[^\d]/g, ''));
      return sum + (isNaN(lines) ? 0 : lines);
    }, 0),
    awards: projects?.reduce((sum, p) => sum + (p?.awards ? p?.awards?.length : 0), 0)
  };

  const statItems = [
    {
      label: 'Total Projects',
      value: stats?.total,
      icon: 'FolderOpen',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      label: 'Completed',
      value: stats?.completed,
      icon: 'CheckCircle',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      label: 'In Progress',
      value: stats?.inProgress,
      icon: 'Clock',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      label: 'Technologies',
      value: stats?.technologies,
      icon: 'Code',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      label: 'Lines of Code',
      value: `${(stats?.totalLinesOfCode / 1000)?.toFixed(1)}K+`,
      icon: 'FileText',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    },
    {
      label: 'Awards Won',
      value: stats?.awards,
      icon: 'Award',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-text-primary">Portfolio Overview</h2>
          <p className="text-text-secondary mt-1">
            A comprehensive view of my technical projects and achievements
          </p>
        </div>
        <div className="hidden sm:flex items-center space-x-2 text-text-secondary">
          <Icon name="TrendingUp" size={20} />
          <span className="text-sm">Updated {new Date()?.toLocaleDateString()}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {statItems?.map((stat, index) => (
          <div
            key={index}
            className={`${stat?.bgColor} ${stat?.borderColor} border rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
          >
            <div className="flex items-center justify-between mb-2">
              <Icon name={stat?.icon} size={20} className={stat?.color} />
              <div className={`w-2 h-2 ${stat?.color?.replace('text-', 'bg-')} rounded-full animate-pulse`}></div>
            </div>
            <div className="text-2xl font-bold text-text-primary mb-1">
              {stat?.value}
            </div>
            <div className="text-sm text-text-secondary font-medium">
              {stat?.label}
            </div>
          </div>
        ))}
      </div>
      {/* Progress Indicators */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-text-primary">Project Completion Rate</span>
              <span className="text-sm text-text-secondary">
                {Math.round((stats?.completed / stats?.total) * 100)}%
              </span>
            </div>
            <div className="w-full bg-surface rounded-full h-2">
              <div
                className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(stats?.completed / stats?.total) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-text-primary">Active Development</span>
              <span className="text-sm text-text-secondary">
                {Math.round((stats?.inProgress / stats?.total) * 100)}%
              </span>
            </div>
            <div className="w-full bg-surface rounded-full h-2">
              <div
                className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(stats?.inProgress / stats?.total) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStats;