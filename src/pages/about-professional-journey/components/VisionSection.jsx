import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import resumePdf from '../../../assets/resume/Resume.pdf';

const VisionSection = () => {
  const visionAreas = [
    {
      id: 1,
      title: "AI-Powered Solutions",
      description: "Building intelligent systems that can understand, learn, and adapt to solve complex real-world problems across industries.",
      goals: [
        "Develop AI models that enhance human decision-making",
        "Create ethical AI systems with transparency and fairness",
        "Bridge the gap between research and practical applications"
      ],
      icon: "Brain",
      color: "primary"
    },
    {
      id: 2,
      title: "Full-Stack Innovation",
      description: "Creating seamless, scalable applications that provide exceptional user experiences while maintaining robust backend architectures.",
      goals: [
        "Master emerging web technologies and frameworks",
        "Build applications that scale to millions of users",
        "Optimize performance across all layers of the stack"
      ],
      icon: "Layers",
      color: "secondary"
    },
    {
      id: 3,
      title: "Research & Development",
      description: "Contributing to the advancement of AI and software engineering through research, open-source projects, and knowledge sharing.",
      goals: [
        "Publish research papers on AI applications",
        "Contribute to major open-source AI projects",
        "Mentor the next generation of developers"
      ],
      icon: "Microscope",
      color: "accent"
    }
  ];

  const futureGoals = [
    {
      timeline: "2024-2025",
      title: "Industry Integration",
      description: "Secure a position at a leading AI company where I can apply my skills to solve real-world challenges while continuing to learn from industry experts.",
      milestones: ["Join a top-tier tech company", "Lead an AI project team", "Obtain advanced AI certifications"]
    },
    {
      timeline: "2025-2027",
      title: "Technical Leadership",
      description: "Evolve into a technical leadership role, guiding teams in building innovative AI solutions and establishing best practices for AI development.",
      milestones: ["Become a senior AI engineer", "Architect large-scale AI systems", "Speak at major tech conferences"]
    },
    {
      timeline: "2027-2030",
      title: "Innovation Pioneer",
      description: "Drive breakthrough innovations in AI applications, potentially founding a startup or leading R&D initiatives that push the boundaries of what's possible.",
      milestones: ["Launch an AI startup", "Patent innovative AI algorithms", "Establish an AI research lab"]
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">Vision & Future Goals</h2>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto">
            My roadmap for making a meaningful impact in AI engineering and full-stack development, 
            with a focus on building solutions that benefit humanity.
          </p>
        </div>

        {/* Vision Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 sm:mb-20">
          {visionAreas?.map((area) => (
            <div
              key={area?.id}
              className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 sm:p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-center mb-6">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-xl flex items-center justify-center shadow-lg mb-4 ${
                  area?.color === 'primary' ? 'bg-primary' :
                  area?.color === 'secondary' ? 'bg-secondary' : 'bg-accent'
                }`}>
                  <Icon name={area?.icon} size={24} sm:size={28} color="white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-text-primary">{area?.title}</h3>
              </div>

              <p className="text-sm sm:text-base text-text-secondary mb-6 leading-relaxed text-center">
                {area?.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-text-primary text-sm">Key Goals:</h4>
                {area?.goals?.map((goal, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="Target" size={16} className={`mt-0.5 flex-shrink-0 ${
                      area?.color === 'primary' ? 'text-primary' :
                      area?.color === 'secondary' ? 'text-secondary' : 'text-accent'
                    }`} />
                    <span className="text-sm text-text-secondary">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Future Roadmap */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-6 sm:p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gradient mb-4">Future Roadmap</h3>
            <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
              A strategic timeline of my professional aspirations and the milestones I aim to achieve.
            </p>
          </div>

          <div className="space-y-8">
            {futureGoals?.map((goal, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index < futureGoals?.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-primary to-secondary"></div>
                )}

                <div className="flex items-start space-x-4 sm:space-x-6">
                  {/* Timeline Node */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-hero-gradient rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-md border border-border">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h4 className="text-lg sm:text-xl font-bold text-text-primary">{goal?.title}</h4>
                      <span className="text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full text-xs sm:text-sm mt-2 sm:mt-0 inline-block self-start">
                        {goal?.timeline}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-text-secondary mb-4 leading-relaxed">
                      {goal?.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {goal?.milestones?.map((milestone, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-surface text-text-secondary rounded-full text-xs border border-border"
                        >
                          {milestone}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-hero-gradient rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <pattern id="vision-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="5" cy="5" r="1" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#vision-pattern)" />
              </svg>
            </div>

            <div className="relative z-10">
              <Icon name="Rocket" size={48} className="mx-auto mb-6" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Let's Build the Future Together</h3>
              <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto mb-8">
                I'm always excited to collaborate with like-minded individuals and organizations 
                who share the vision of using technology to create positive impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  asChild
                  className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto"
                >
                  <Link to="/professional-connect-contact-hub">
                    <Icon name="Mail" size={20} className="mr-2" />
                    <span>Get In Touch</span>
                  </Link>
                </Button>
                <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <a
                  href={resumePdf}
                  download="Bala_Adhish_Resume.pdf"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Icon name="Download" size={20} className="mr-2" />
                  <span>Download Resume</span>
                </a>
              </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;