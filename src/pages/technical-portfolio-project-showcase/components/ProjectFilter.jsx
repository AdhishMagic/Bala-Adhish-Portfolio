import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectFilter = ({ 
  filters, 
  activeFilters, 
  onFilterChange, 
  onClearFilters, 
  searchQuery, 
  onSearchChange,
  sortBy,
  onSortChange 
}) => {
  const filterCategories = [
    {
      key: 'type',
      label: 'Project Type',
      icon: 'FolderOpen',
      options: filters?.types
    },
    {
      key: 'technology',
      label: 'Technology',
      icon: 'Code',
      options: filters?.technologies
    },
    {
      key: 'difficulty',
      label: 'Complexity',
      icon: 'BarChart3',
      options: filters?.difficulties
    },
    {
      key: 'status',
      label: 'Status',
      icon: 'Clock',
      options: filters?.statuses
    }
  ];

  const sortOptions = [
    { value: 'recent', label: 'Most Recent', icon: 'Calendar' },
    { value: 'popular', label: 'Most Popular', icon: 'TrendingUp' },
    { value: 'complexity', label: 'Complexity', icon: 'BarChart3' },
    { value: 'alphabetical', label: 'A-Z', icon: 'ArrowUpDown' }
  ];

  const hasActiveFilters = Object.values(activeFilters)?.some(filters => filters?.length > 0);

  return (
    <div className="bg-card border border-border rounded-lg p-4 sm:p-6 mb-8">
      {/* Search and Sort */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="flex-1">
          <div className="relative">
            <Icon 
              name="Search" 
              size={20} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e?.target?.value)}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                <Icon name="X" size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Sort */}
        <div className="lg:w-64">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e?.target?.value)}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
          >
            {sortOptions?.map(option => (
              <option key={option?.value} value={option?.value}>
                {option?.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Filter Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {filterCategories?.map(category => (
          <div key={category?.key} className="space-y-3">
            <div className="flex items-center space-x-2">
              <Icon name={category?.icon} size={16} className="text-primary" />
              <h4 className="font-medium text-text-primary text-sm sm:text-base">{category?.label}</h4>
            </div>
            <div className="space-y-2">
              {category?.options?.map(option => (
                <label
                  key={option}
                  className="flex items-center space-x-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={activeFilters?.[category?.key]?.includes(option) || false}
                    onChange={(e) => {
                      const currentFilters = activeFilters?.[category?.key] || [];
                      const newFilters = e?.target?.checked
                        ? [...currentFilters, option]
                        : currentFilters?.filter(f => f !== option);
                      onFilterChange(category?.key, newFilters);
                    }}
                    className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary focus:ring-2 transition-colors duration-300"
                  />
                  <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Active Filters and Clear */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border">
          <span className="text-sm font-medium text-text-primary">Active filters:</span>
          {Object.entries(activeFilters)?.map(([category, filters]) =>
            filters?.map(filter => (
              <span
                key={`${category}-${filter}`}
                className="inline-flex items-center space-x-1 px-2.5 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
              >
                <span>{filter}</span>
                <button
                  onClick={() => {
                    const newFilters = activeFilters?.[category]?.filter(f => f !== filter);
                    onFilterChange(category, newFilters);
                  }}
                  className="hover:text-primary/70 transition-colors duration-300"
                >
                  <Icon name="X" size={12} />
                </button>
              </span>
            ))
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            iconName="RotateCcw"
            iconPosition="left"
            iconSize={14}
            className="ml-auto"
          >
            Clear All
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProjectFilter;