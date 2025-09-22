import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ContactFAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const faqData = [
    {
      question: "What types of opportunities are you looking for?",
      answer: `I'm actively seeking full-time positions in AI/ML engineering, full-stack development, and software engineering roles. I'm particularly interested in:\n\n• AI/ML Engineer positions focusing on computer vision, NLP, or deep learning\n• Full-stack developer roles with modern tech stacks (React, Node.js, Python)\n• Software engineering positions at innovative startups or established tech companies\n• Research and development roles in AI and emerging technologies\n\nI'm also open to freelance projects, technical consulting, and collaborative research opportunities.`,icon: 'Briefcase',category: 'Career'
    },
    {
      question: "What\'s your experience level and technical background?",
      answer: `I'm a Computer Science student with strong foundations in both AI/ML and full-stack development:\n\n• 2+ years of hands-on experience with Python, JavaScript, and modern frameworks\n• Completed multiple AI/ML projects including computer vision and NLP applications\n• Built full-stack applications using React, Node.js, and various databases\n• Experience with cloud platforms (AWS, Google Cloud) and DevOps practices\n• Strong problem-solving skills demonstrated through hackathon wins and project outcomes\n\nWhile I'm early in my career, I bring fresh perspectives, strong learning ability, and genuine passion for technology.`,
      icon: 'Code',category: 'Technical'
    },
    {
      question: "How quickly can you start a new role or project?",
      answer: `My availability depends on the type of opportunity:\n\n• Full-time positions: Available immediately or with 2-4 weeks notice\n• Freelance projects: Can start within 1-2 weeks depending on scope\n• Part-time or consulting work: Flexible start dates, usually within 1 week\n• Academic collaborations: Available throughout the academic year\n\nI'm currently completing my final semester, so I have flexibility in my schedule. For urgent projects or immediate opportunities, I can often accommodate faster start dates.`,
      icon: 'Calendar',
      category: 'Availability'
    },
    {
      question: "What are your salary expectations and budget requirements?",
      answer: `My compensation expectations are flexible and depend on various factors:\n\n• Full-time roles: Competitive market rates for junior AI/ML or full-stack positions\n• Freelance projects: $25-50/hour depending on complexity and timeline\n• Consulting work: Project-based pricing or hourly rates\n• Equity opportunities: Open to discussing equity-based compensation for startups\n\nI'm more interested in growth opportunities, learning experiences, and working with innovative technologies than just compensation. I'm happy to discuss specific budget constraints and find mutually beneficial arrangements.`,
      icon: 'DollarSign',
      category: 'Compensation'
    },
    {
      question: "Do you work with international clients and remote teams?",
      answer: `Yes, I have experience working with distributed teams and international clients:\n\n• Comfortable with remote work and asynchronous communication\n• Experience using collaboration tools like Slack, Discord, Zoom, and project management platforms\n• Flexible with time zones - can accommodate meetings across different regions\n• Strong written and verbal communication skills in English\n• Experience with version control and collaborative development workflows\n\nI'm particularly interested in opportunities that allow me to work with diverse, global teams and learn from different perspectives and approaches to technology.`,
      icon: 'Globe',category: 'Remote Work'
    },
    {
      question: "What kind of mentorship or guidance do you provide?",
      answer: `I'm passionate about helping fellow students and junior developers:\n\n• Technical mentorship in AI/ML, web development, and programming fundamentals\n• Career guidance for CS students entering the tech industry\n• Code reviews and project feedback\n• Study group facilitation and peer learning\n• Interview preparation and technical skill development\n\nI believe in giving back to the community and learning through teaching. I'm available for informal mentorship and happy to share my experiences, resources, and insights with others on similar journeys.`,
      icon: 'Users',category: 'Mentorship'
    },
    {
      question: "How do you handle project communication and updates?",
      answer: `I believe in transparent and regular communication:\n\n• Weekly progress reports with detailed updates and next steps\n• Daily standups for active projects (if required)\n• Immediate communication for blockers or significant changes\n• Regular demos and milestone reviews\n• Documentation of decisions, changes, and technical approaches\n\nI use various tools like Slack, email, project management platforms, and video calls as needed. I'm proactive about communication and believe that keeping stakeholders informed leads to better project outcomes.`,
      icon: 'MessageSquare',
      category: 'Communication'
    },
    {
      question: "What\'s your approach to learning new technologies?",
      answer: `I'm a continuous learner with a systematic approach to new technologies:\n\n• Start with official documentation and foundational concepts\n• Build small projects to understand practical applications\n• Engage with community resources, tutorials, and best practices\n• Contribute to open source projects when possible\n• Share learnings through blog posts or technical discussions\n\nI'm currently exploring advanced AI/ML techniques, cloud-native development, and emerging web technologies. I'm always excited to learn new tools and frameworks that can improve my effectiveness and expand my capabilities.`,icon: 'BookOpen',category: 'Learning'
    }
  ];

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems?.has(index)) {
      newOpenItems?.delete(index);
    } else {
      newOpenItems?.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const categories = [...new Set(faqData.map(item => item.category))];

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="HelpCircle" size={20} className="text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-text-primary">Frequently Asked Questions</h3>
          <p className="text-sm text-text-secondary">Common questions about my background and availability</p>
        </div>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories?.map((category) => (
          <span
            key={category}
            className="px-3 py-1 bg-surface text-text-secondary text-sm rounded-full border border-border"
          >
            {category}
          </span>
        ))}
      </div>
      {/* FAQ Items */}
      <div className="space-y-4">
        {faqData?.map((item, index) => (
          <div
            key={index}
            className="border border-border rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left bg-surface hover:bg-surface-hover transition-colors duration-200 flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <Icon name={item?.icon} size={18} className="text-primary" />
                <span className="font-medium text-text-primary">{item?.question}</span>
              </div>
              <Icon 
                name={openItems?.has(index) ? 'ChevronUp' : 'ChevronDown'} 
                size={20} 
                className="text-text-muted transition-transform duration-200" 
              />
            </button>
            
            {openItems?.has(index) && (
              <div className="px-6 py-4 bg-background border-t border-border">
                <div className="prose prose-sm max-w-none">
                  {item?.answer?.split('\n')?.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-text-secondary mb-2 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                <div className="mt-4 flex items-center space-x-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {item?.category}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Contact CTA */}
      <div className="mt-8 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-lg">
        <div className="flex items-center space-x-3 mb-2">
          <Icon name="MessageCircle" size={18} className="text-primary" />
          <span className="font-medium text-primary">Still have questions?</span>
        </div>
        <p className="text-sm text-text-secondary mb-3">
          Don't see your question answered here? Feel free to reach out directly, and I'll be happy to provide more specific information about my background, experience, or availability.
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm text-primary hover:text-primary/80 font-medium flex items-center space-x-1"
          >
            <Icon name="ArrowRight" size={14} />
            <span>Send a message</span>
          </button>
          <button
            onClick={() => window.open('mailto:bala.adhish@email.com', '_blank')}
            className="text-sm text-primary hover:text-primary/80 font-medium flex items-center space-x-1"
          >
            <Icon name="Mail" size={14} />
            <span>Email directly</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactFAQ;