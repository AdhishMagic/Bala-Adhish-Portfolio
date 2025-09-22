import React from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const SearchAndSort = ({ searchTerm, onSearchChange, sortBy, onSortChange, viewMode, onViewModeChange }) => {
  const sortOptions = [
    { value: 'date-desc', label: 'Newest First' },
    { value: 'date-asc', label: 'Oldest First' },
    { value: 'title-asc', label: 'Title A-Z' },
    { value: 'title-desc', label: 'Title Z-A' },
    { value: 'category', label: 'Category' }
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-6">
      {/* Search */}
      <div className="flex-1 max-w-md">
        <Input
          type="search"
          placeholder="Search achievements..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e?.target?.value)}
          className="w-full"
        />
      </div>
      {/* Sort and View Controls */}
      <div className="flex items-center gap-3">
        {/* Sort Dropdown */}
        <Select
          options={sortOptions}
          value={sortBy}
          onChange={onSortChange}
          placeholder="Sort by"
          className="min-w-[140px]"
        />

        {/* View Mode Toggle */}
        <div className="flex items-center bg-surface rounded-lg p-1 border">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-2 rounded-md transition-colors duration-200 ${
              viewMode === 'grid' ?'bg-primary text-white shadow-sm' :'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
            }`}
            title="Grid View"
          >
            <Icon name="Grid3X3" size={16} />
          </button>
          <button
            onClick={() => onViewModeChange('timeline')}
            className={`p-2 rounded-md transition-colors duration-200 ${
              viewMode === 'timeline' ?'bg-primary text-white shadow-sm' :'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
            }`}
            title="Timeline View"
          >
            <Icon name="Clock" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchAndSort;