import React from 'react';
import Icon from '../../../components/AppIcon';


const DownloadSection = () => {
  const additionalResources = [
    {
      title: "GitHub Profile",
      description: "Explore my open-source contributions and personal projects",
      icon: "Github",
      link: "https://github.com/AdhishMagic",
      external: true
    },
    {
      title: "LinkedIn Profile",
      description: "Professional network and career updates",
      icon: "Linkedin",
      link: "https://www.linkedin.com/in/bala-adhish4/",
      external: true
    },
    {
      title: "Certification Badges",
      description: "Digital badges from completed courses and certifications",
      icon: "Award",
      link: "/certifications",
      external: false
    }
  ];

  return (
    <section className="py-4 sm:py-5 bg-background">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">


        {/* Additional Resources */}
        <div className="bg-card rounded-2xl p-8 sm:p-10 lg:p-12 shadow-lg border border-border">
          <div className="text-center mb-8">
            <Icon name="Link" size={32} className="mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold text-text-primary mb-2">Additional Resources</h3>
            <p className="text-text-secondary">
              Explore more of my work and professional presence across different platforms
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalResources?.map((resource, index) => (
              <a
                key={index}
                href={resource?.link}
                target={resource?.external ? "_blank" : "_self"}
                rel={resource?.external ? "noopener noreferrer" : ""}
                className="group p-8 rounded-xl border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-md cursor-pointer block"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={resource?.icon} size={20} color="white" />
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                    {resource?.title}
                  </h4>
                  <p className="text-sm text-text-secondary mb-4">{resource?.description}</p>

                  <div className="flex items-center justify-center space-x-2 text-primary text-sm font-medium">
                    <span>{resource?.external ? 'Visit' : 'Explore'}</span>
                    <Icon name={resource?.external ? 'ExternalLink' : 'ArrowRight'} size={14} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;