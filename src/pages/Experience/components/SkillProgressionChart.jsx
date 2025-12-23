import React from 'react';
import Icon from '../../../components/AppIcon';
import { motion } from 'framer-motion';

const SkillProgressionChart = ({ skills }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-lg border border-border p-4 md:p-6 mb-8 md:mb-12"
        >
            <div className="flex items-center gap-2 mb-6">
                <Icon name="BarChart3" size={24} className="text-primary" />
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground">
                    Overall Skill Progression
                </h3>
            </div>
            <div className="space-y-4 md:space-y-6">
                {skills?.map((skill, idx) => (
                    <div key={idx}>
                        <div className="flex items-center justify-between mb-2 md:mb-3">
                            <div className="flex items-center gap-2 md:gap-3">
                                <Icon name={skill?.icon} size={18} className="text-accent" />
                                <span className="text-sm md:text-base font-medium text-foreground">
                                    {skill?.name}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs md:text-sm text-muted-foreground">
                                    {skill?.startLevel}% → {skill?.currentLevel}%
                                </span>
                                <div className="flex items-center gap-1 text-success">
                                    <Icon name="TrendingUp" size={14} />
                                    <span className="text-xs md:text-sm font-medium">
                                        +{skill?.currentLevel - skill?.startLevel}%
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="h-3 md:h-4 bg-muted rounded-full overflow-hidden">
                            <div className="h-full flex">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill?.startLevel}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="bg-muted-foreground/30"
                                />
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill?.currentLevel - skill?.startLevel}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="bg-gradient-to-r from-primary to-accent"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillProgressionChart;
