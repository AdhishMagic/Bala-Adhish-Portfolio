import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { motion } from 'framer-motion';

const FilterBar = ({ activeFilter, onFilterChange, filters }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-card rounded-lg border border-border p-4 md:p-6 mb-6 md:mb-8"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex items-center gap-2">
          <Icon name="Filter" size={20} className="text-primary" />
          <h3 className="text-base md:text-lg font-semibold text-foreground">
            Filter Experience
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onFilterChange('all')}
          >
            All Roles
          </Button>
          {filters?.map((filter) => (
            <Button
              key={filter?.id}
              variant={activeFilter === filter?.id ? 'default' : 'outline'}
              size="sm"
              iconName={filter?.icon}
              iconPosition="left"
              onClick={() => onFilterChange(filter?.id)}
            >
              {filter?.label}
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};


export default FilterBar;
