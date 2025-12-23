import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import TimelineEntry from './components/TimelineEntry';
import FilterBar from './components/FilterBar';
import StatsOverview from './components/StatsOverview';
import SkillProgressionChart from './components/SkillProgressionChart';

const ExperienceTimeline = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { id: 'internship', label: 'Internships', icon: 'Briefcase' }
    ];

    const overallStats = [
        { icon: 'Briefcase', value: '1.5+', label: 'Years Experience' },
        { icon: 'Building2', value: '2', label: 'Organizations' },
        { icon: 'FolderOpen', value: '6+', label: 'Major Projects' },
        { icon: 'Award', value: '5+', label: 'Hackathons' },
        { icon: 'Medal', value: '8+', label: 'Certifications' }
    ];

    const skillProgression = [
        { name: 'Frontend Development', icon: 'Code', startLevel: 40, currentLevel: 85 },
        { name: 'Backend Development', icon: 'Server', startLevel: 30, currentLevel: 80 },
        { name: 'AI & Machine Learning', icon: 'Brain', startLevel: 25, currentLevel: 75 },
        { name: 'Database & System Design', icon: 'Database', startLevel: 30, currentLevel: 70 },
        { name: 'Problem Solving & DSA', icon: 'Puzzle', startLevel: 20, currentLevel: 65 }
    ];


    const experienceData = [
        {
            id: 1,
            role: "Virtual Intern – AI / Data Science",
            company: "Infosys Springboard",
            companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_131228f08-1765723577414.png",
            companyLogoAlt: "Infosys Springboard Virtual Internship",
            duration: "Nov 2025 – Jan 2026",
            location: "Remote",
            type: "Virtual Internship",
            category: "internship",
            summary: "Selected for Infosys Springboard Virtual Internship after successful document verification. Actively working on an AI/ML project under mentor guidance with structured attendance and evaluations.",
            metrics: [],

            responsibilities: [
                "Mentor-guided daily collaboration sessions",
                "Understanding healthcare problem statements and requirements",
                "Applying AI/ML concepts for personalized recommendations",
                "Participating in reviews, discussions, and professional internship workflows"],

            projects: [
                {
                    name: "AI-NutriCare",
                    description: "AI/ML-Based Personalized Diet Plan Generator from Medical Reports",
                    impact: "Personalized Diet Planning"
                }],

            technologies: [
                "AI/ML", "Python", "Data Science"],

            skillsGrowth: [],
            transitionStory: ""
        },
        {
            id: 2,
            role: "Intern – Software Development",
            company: "Poorna Technology",
            companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_1dafd99e8-1764746478294.png",
            companyLogoAlt: "Poorna Technology Internship",
            duration: "Oct 2025 – Dec 2025",
            location: "On-site",
            type: "Internship",
            category: "internship",
            summary: "Worked on backend development and automation tasks with exposure to real-world software engineering practices.",
            metrics: [],

            responsibilities: [
                "Laravel MVC architecture and PostgreSQL integration",
                "Backend API development",
                "Browser automation using Python Selenium",
                "Data scraping and Excel report generation",
                "Linux, WSL2, Git, VS Code workflows"],

            projects: [
                {
                    name: "Auto Loan Processing System",
                    description: "Advanced Laravel backend project",
                    impact: "Backend Automation"
                }],

            technologies: [
                "Laravel", "PostgreSQL", "Python", "Selenium", "Git", "Linux"],

            skillsGrowth: [],
            transitionStory: ""
        }];


    const filteredExperience = useMemo(() => {
        if (activeFilter === 'all') return experienceData;
        return experienceData?.filter((entry) => entry?.category === activeFilter);
    }, [activeFilter]);

    return (
        <>
            <Helmet>
                <title>Professional Experience Timeline | Portfolio</title>
                <meta
                    name="description"
                    content="Comprehensive professional journey showcasing 8+ years of software development experience, technical growth, and leadership evolution across multiple companies and technologies." />

            </Helmet>
            <div className="min-h-screen bg-background">
                <Header />

                <main className="pt-20 md:pt-24">
                    {/* Hero Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-16 lg:py-20"
                    >
                        <div className="container mx-auto px-4 md:px-6 lg:px-8">
                            <div className="max-w-4xl mx-auto text-center">
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm md:text-base font-medium mb-4 md:mb-6"
                                >
                                    <Icon name="Briefcase" size={18} />
                                    <span>Professional Journey</span>
                                </motion.div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6"
                                >
                                    Experience Timeline
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed"
                                >
                                    A comprehensive chronicle of my professional growth, technical evolution, and leadership development across 8+ years of building impactful software solutions.
                                </motion.p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Stats Overview */}
                    <section className="py-8 md:py-12 lg:py-16">
                        <div className="container mx-auto px-4 md:px-6 lg:px-8">
                            <StatsOverview stats={overallStats} />
                        </div>
                    </section>

                    {/* Skill Progression Chart */}
                    <section className="py-8 md:py-12 lg:py-16 bg-muted/30">
                        <div className="container mx-auto px-4 md:px-6 lg:px-8">
                            <SkillProgressionChart skills={skillProgression} />
                        </div>
                    </section>

                    {/* Timeline Section */}
                    <section className="py-8 md:py-12 lg:py-16">
                        <div className="container mx-auto px-4 md:px-6 lg:px-8">
                            <FilterBar
                                activeFilter={activeFilter}
                                onFilterChange={setActiveFilter}
                                filters={filters} />

                            <div className="max-w-5xl mx-auto">
                                <AnimatePresence mode="wait">
                                    {filteredExperience?.length > 0 ? (
                                        <motion.div
                                            key={activeFilter}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {filteredExperience?.map((entry, idx) => (
                                                <TimelineEntry
                                                    key={entry?.id}
                                                    entry={entry}
                                                    isLast={idx === filteredExperience?.length - 1}
                                                />
                                            ))}
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="text-center py-12 md:py-16"
                                        >
                                            <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                                            <p className="text-base md:text-lg text-muted-foreground">
                                                No experience found for this filter.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </section>

                    {/* Hackathons Section */}
                    <section className="py-8 md:py-12 lg:py-16 bg-muted/30">
                        <div className="container mx-auto px-4 md:px-6 lg:px-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-2 mb-8 justify-center"
                            >
                                <Icon name="Trophy" size={24} className="text-primary" />
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Hackathons & Achievements
                                </h3>
                            </motion.div>
                            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    {
                                        name: "Open Weaver Hackathon – Top 100 Teams",
                                        project: "GenSync (LLM-based research & idea generator)",
                                        icon: "Award"
                                    },
                                    {
                                        name: "ISRO CANSET Competition",
                                        project: "Innovation Challenge",
                                        icon: "Rocket"
                                    },
                                    {
                                        name: "AI-based Pest & Disease Detection Hackathon",
                                        project: "AI + IoT Irrigation & Fertigation Prediction System",
                                        icon: "Leaf"
                                    },
                                    {
                                        name: "AI-Powered Silent Pest Repellent System",
                                        project: "Innovation Project",
                                        icon: "Zap"
                                    },
                                    {
                                        name: "College-level innovation hackathons",
                                        project: "Multiple Wins",
                                        icon: "Medal"
                                    }
                                ].map((hackathon, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="bg-card rounded-lg border border-border p-4 md:p-6 flex items-start gap-4 hover:shadow-md transition-all"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Icon name={hackathon.icon} size={20} className="text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground text-lg mb-1">{hackathon.name}</h4>
                                            <p className="text-muted-foreground text-sm">{hackathon.project}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
                        <div className="container mx-auto px-4 md:px-6 lg:px-8">
                            <div className="max-w-3xl mx-auto text-center">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                                    Let's Build Something Amazing Together
                                </h2>
                                <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                                    Interested in discussing opportunities or collaborating on innovative projects? I'd love to hear from you.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <a href="/contact-opportunities">
                                        <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                                            <Icon name="Mail" size={20} />
                                            <span>Get in Touch</span>
                                        </button>
                                    </a>
                                    <a href="/projects-showcase">
                                        <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-card text-foreground border border-border rounded-lg font-medium hover:bg-muted transition-colors flex items-center justify-center gap-2">
                                            <Icon name="FolderOpen" size={20} />
                                            <span>View Projects</span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-card border-t border-border py-8 md:py-12">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Icon name="Rocket" size={24} color="var(--color-primary)" />
                                </div>
                                <span className="text-lg font-semibold text-foreground">Portfolio</span>
                            </div>
                            <p className="text-sm text-muted-foreground text-center md:text-left">
                                © {new Date()?.getFullYear()} All rights reserved. Built with passion and React.
                            </p>
                            <div className="flex items-center gap-4">
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    <Icon name="Github" size={20} />
                                </a>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    <Icon name="Linkedin" size={20} />
                                </a>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    <Icon name="Twitter" size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>);

};

export default ExperienceTimeline;
