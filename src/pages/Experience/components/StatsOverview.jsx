import React from 'react';
import Icon from '../../../components/AppIcon';
import { motion } from 'framer-motion';

const StatsOverview = ({ stats }) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            {stats?.map((stat, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-card rounded-lg border border-border p-4 md:p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name={stat?.icon} size={20} className="text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                                {stat?.value}
                            </div>
                        </div>
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground">
                        {stat?.label}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default StatsOverview;
