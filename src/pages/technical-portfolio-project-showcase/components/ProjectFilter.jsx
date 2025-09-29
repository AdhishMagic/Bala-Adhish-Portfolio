import React from 'react';
import Icon from '../../../components/AppIcon';

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
  // Filter categories removed per request (checkboxes under the search bar)

  const sortOptions = [
    { value: 'recent', label: 'Most Recent', icon: 'Calendar' },
    { value: 'popular', label: 'Most Popular', icon: 'TrendingUp' },
    { value: 'complexity', label: 'Complexity', icon: 'BarChart3' },
    { value: 'alphabetical', label: 'A-Z', icon: 'ArrowUpDown' }
  ];

  // No active filter chips since checkboxes are removed

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
      {/* Checkbox filters and active filter chips removed */}
    </div>
  );
};

export default ProjectFilter;