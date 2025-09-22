import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DownloadSection = () => {
  const [downloadStats, setDownloadStats] = useState({
    resume: 1247,
    portfolio: 892,
    references: 456
  });

  const downloadableAssets = [
    {
      id: 1,
      title: "Professional Resume",
      description: "Comprehensive CV with detailed work experience, education, skills, and achievements. Updated monthly with latest projects and certifications.",
      fileType: "PDF",
      fileSize: "2.3 MB",
      lastUpdated: "January 2025",
      downloadCount: downloadStats?.resume,
      icon: "FileText",
      color: "primary",
      features: [
        "Complete work history and projects",
        "Technical skills matrix",
        "Education and certifications",
        "Contact information and references"
      ]
    },
    {
      id: 2,
      title: "Project Portfolio",
      description: "Detailed case studies of my key projects including technical specifications, challenges faced, solutions implemented, and results achieved.",
      fileType: "PDF",
      fileSize: "8.7 MB",
      lastUpdated: "December 2024",
      downloadCount: downloadStats?.portfolio,
      icon: "FolderOpen",
      color: "secondary",
      features: [
        "15+ detailed project case studies",
        "Technical architecture diagrams",
        "Code snippets and explanations",
        "Performance metrics and outcomes"
      ]
    },
    {
      id: 3,
      title: "Academic Transcripts",
      description: "Official academic records from VIT University including course grades, CGPA, and academic achievements throughout my computer science degree.",
      fileType: "PDF",
      fileSize: "1.8 MB",
      lastUpdated: "November 2024",
      downloadCount: downloadStats?.references,
      icon: "GraduationCap",
      color: "accent",
      features: [
        "Complete academic transcript",
        "Course-wise grade breakdown",
        "CGPA and ranking information",
        "Academic honors and awards"
      ]
    }
  ];

  const additionalResources = [
    {
      title: "GitHub Profile",
      description: "Explore my open-source contributions and personal projects",
      icon: "Github",
      link: "https://github.com/bala-adhish",
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

  const handleDownload = (assetId, assetTitle) => {
    // Simulate download
    setDownloadStats(prev => ({
      ...prev,
      [assetId === 1 ? 'resume' : assetId === 2 ? 'portfolio' : 'references']: prev?.[assetId === 1 ? 'resume' : assetId === 2 ? 'portfolio' : 'references'] + 1
    }));
    
    // In a real application, this would trigger the actual download
    console.log(`Downloading ${assetTitle}...`);
  };

  const getColorClasses = (color) => {
    const colors = {
      primary: {
        bg: 'bg-primary',
        text: 'text-primary',
        border: 'border-primary',
        bgLight: 'bg-primary/10'
      },
      secondary: {
        bg: 'bg-secondary',
        text: 'text-secondary',
        border: 'border-secondary',
        bgLight: 'bg-secondary/10'
      },
      accent: {
        bg: 'bg-accent',
        text: 'text-accent',
        border: 'border-accent',
        bgLight: 'bg-accent/10'
      }
    };
    return colors?.[color] || colors?.primary;
  };

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Professional Assets</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Download comprehensive documents and explore additional resources to get a complete 
            picture of my professional background and capabilities.
          </p>
        </div>

        {/* Downloadable Assets */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {downloadableAssets?.map((asset) => {
            const colorClasses = getColorClasses(asset?.color);
            return (
              <div
                key={asset?.id}
                className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${colorClasses?.bg} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <Icon name={asset?.icon} size={28} color="white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">{asset?.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{asset?.description}</p>
                </div>
                {/* File Info */}
                <div className={`${colorClasses?.bgLight} rounded-lg p-4 mb-6 border ${colorClasses?.border}/20`}>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-text-secondary">File Type:</span>
                      <div className={`font-semibold ${colorClasses?.text}`}>{asset?.fileType}</div>
                    </div>
                    <div>
                      <span className="text-text-secondary">File Size:</span>
                      <div className={`font-semibold ${colorClasses?.text}`}>{asset?.fileSize}</div>
                    </div>
                    <div>
                      <span className="text-text-secondary">Updated:</span>
                      <div className={`font-semibold ${colorClasses?.text}`}>{asset?.lastUpdated}</div>
                    </div>
                    <div>
                      <span className="text-text-secondary">Downloads:</span>
                      <div className={`font-semibold ${colorClasses?.text}`}>{asset?.downloadCount}</div>
                    </div>
                  </div>
                </div>
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-3 text-sm">What's Included:</h4>
                  <ul className="space-y-2">
                    {asset?.features?.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <Icon name="CheckCircle" size={14} className={`mt-0.5 flex-shrink-0 ${colorClasses?.text}`} />
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Download Button */}
                <Button
                  variant={asset?.color === 'primary' ? 'default' : asset?.color === 'secondary' ? 'secondary' : 'outline'}
                  fullWidth
                  onClick={() => handleDownload(asset?.id, asset?.title)}
                  iconName="Download"
                  iconPosition="left"
                  iconSize={18}
                >
                  Download {asset?.fileType}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Additional Resources */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
          <div className="text-center mb-8">
            <Icon name="Link" size={32} className="mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold text-text-primary mb-2">Additional Resources</h3>
            <p className="text-text-secondary">
              Explore more of my work and professional presence across different platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalResources?.map((resource, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-md cursor-pointer"
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
              </div>
            ))}
          </div>
        </div>

        {/* Download Statistics */}
        <div className="mt-16 bg-hero-gradient rounded-2xl p-8 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <pattern id="download-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#download-pattern)" />
            </svg>
          </div>

          <div className="relative z-10 text-center">
            <Icon name="TrendingUp" size={48} className="mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Professional Impact</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              My professional documents have been downloaded by recruiters, collaborators, 
              and fellow developers from around the world.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{downloadStats?.resume + downloadStats?.portfolio + downloadStats?.references}</div>
                <div className="opacity-80">Total Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="opacity-80">Countries Reached</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="opacity-80">Positive Feedback</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;