import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const TimelineEntry = ({ entry, isLast }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
        >
            {/* Timeline Line */}
            {!isLast && (
                <div className="absolute left-6 md:left-8 top-20 md:top-24 bottom-0 w-0.5 bg-border" />
            )}
            {/* Timeline Node */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="absolute left-3 md:left-5 top-6 md:top-8 w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary border-4 border-background shadow-lg z-10"
            />
            {/* Content Card */}
            <div className="ml-16 md:ml-20 mb-8 md:mb-12">
                <div className="bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300">
                    {/* Header Section */}
                    <div className="p-4 md:p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                            <div className="flex items-start gap-3 md:gap-4 flex-1">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                                    <Image
                                        src={entry?.companyLogo}
                                        alt={entry?.companyLogoAlt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-1">
                                        {entry?.role}
                                    </h3>
                                    <p className="text-sm md:text-base text-primary font-medium mb-1">
                                        {entry?.company}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Icon name="Calendar" size={14} />
                                            <span>{entry?.duration}</span>
                                        </div>
                                        <span>•</span>
                                        <div className="flex items-center gap-1">
                                            <Icon name="MapPin" size={14} />
                                            <span>{entry?.location}</span>
                                        </div>
                                        <span>•</span>
                                        <div className="flex items-center gap-1">
                                            <Icon name="Briefcase" size={14} />
                                            <span>{entry?.type}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Button
                                variant="ghost"
                                size="sm"
                                iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
                                iconPosition="right"
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="lg:mt-0"
                            >
                                {isExpanded ? 'Show Less' : 'Show More'}
                            </Button>
                        </div>

                        {/* Summary */}
                        <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                            {entry?.summary}
                        </p>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
                            {entry?.metrics?.map((metric, idx) => (
                                <div key={idx} className="bg-muted/50 rounded-lg p-3 md:p-4">
                                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1">
                                        {metric?.value}
                                    </div>
                                    <div className="text-xs md:text-sm text-muted-foreground">
                                        {metric?.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="border-t border-border p-4 md:p-6 space-y-6 md:space-y-8">
                                    {/* Responsibilities */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4 flex items-center gap-2">
                                            <Icon name="CheckCircle2" size={20} className="text-primary" />
                                            Key Responsibilities
                                        </h4>
                                        <ul className="space-y-2 md:space-y-3">
                                            {entry?.responsibilities?.map((resp, idx) => (
                                                <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-muted-foreground">
                                                    <Icon name="ArrowRight" size={16} className="text-accent mt-1 flex-shrink-0" />
                                                    <span>{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Key Projects */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4 flex items-center gap-2">
                                            <Icon name="FolderOpen" size={20} className="text-primary" />
                                            Notable Projects
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                            {entry?.projects?.map((project, idx) => (
                                                <div key={idx} className="bg-muted/30 rounded-lg p-3 md:p-4">
                                                    <h5 className="font-medium text-foreground mb-2 text-sm md:text-base">
                                                        {project?.name}
                                                    </h5>
                                                    <p className="text-xs md:text-sm text-muted-foreground mb-2">
                                                        {project?.description}
                                                    </p>
                                                    <div className="text-xs md:text-sm text-accent font-medium">
                                                        Impact: {project?.impact}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4 flex items-center gap-2">
                                            <Icon name="Code" size={20} className="text-primary" />
                                            Technologies & Tools
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {entry?.technologies?.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Skills Developed */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4 flex items-center gap-2">
                                            <Icon name="TrendingUp" size={20} className="text-primary" />
                                            Skills Developed
                                        </h4>
                                        <div className="space-y-3 md:space-y-4">
                                            {entry?.skillsGrowth?.map((skill, idx) => (
                                                <div key={idx}>
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="text-sm md:text-base text-foreground font-medium">
                                                            {skill?.name}
                                                        </span>
                                                        <span className="text-xs md:text-sm text-muted-foreground">
                                                            {skill?.level}%
                                                        </span>
                                                    </div>
                                                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                                                            style={{ width: `${skill?.level}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Testimonial */}
                                    {entry?.testimonial && (
                                        <div className="bg-accent/5 border-l-4 border-accent rounded-lg p-4 md:p-6">
                                            <div className="flex items-start gap-3 md:gap-4">
                                                <Icon name="Quote" size={24} className="text-accent flex-shrink-0 mt-1" />
                                                <div className="flex-1">
                                                    <p className="text-sm md:text-base text-foreground italic mb-3 md:mb-4">
                                                        "{entry?.testimonial?.quote}"
                                                    </p>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
                                                            <Image
                                                                src={entry?.testimonial?.authorImage}
                                                                alt={entry?.testimonial?.authorImageAlt}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        <div>
                                                            <div className="font-medium text-foreground text-sm md:text-base">
                                                                {entry?.testimonial?.author}
                                                            </div>
                                                            <div className="text-xs md:text-sm text-muted-foreground">
                                                                {entry?.testimonial?.position}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Transition Story */}
                                    {entry?.transitionStory && (
                                        <div className="bg-primary/5 rounded-lg p-4 md:p-6">
                                            <h4 className="text-base md:text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                                <Icon name="Lightbulb" size={20} className="text-primary" />
                                                Career Growth Insight
                                            </h4>
                                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                                {entry?.transitionStory}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

export default TimelineEntry;
