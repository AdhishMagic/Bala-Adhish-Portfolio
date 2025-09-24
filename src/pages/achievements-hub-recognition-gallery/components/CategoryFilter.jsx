import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'All':
        return 'Grid3X3';
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
    <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
      {categories?.map((category) => (
        <button
          key={category?.name}
          onClick={() => onCategoryChange(category?.name)}
          className={`flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
            activeCategory === category?.name
              ? 'bg-primary text-white shadow-md'
              : 'bg-surface text-text-secondary hover:bg-surface-hover hover:text-text-primary'
          }`}
        >
          <Icon 
            name={getCategoryIcon(category?.name)} 
            size={16} 
            className="mr-2" 
          />
          {category?.name}
          <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
            activeCategory === category?.name
              ? 'bg-white/20 text-white' :'bg-text-muted/20 text-text-muted'
          }`}>
            {category?.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;