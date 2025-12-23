import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ContactForm from './components/ContactForm';
import AvailabilityStatus from './components/AvailabilityStatus';
import QuickConnect from './components/QuickConnect';
import ContactFAQ from './components/ContactFAQ';


const ProfessionalConnectContactHub = () => {
  useEffect(() => {
    document.title = 'Professional Connect - Contact Hub | Bala Adhish';
    window.scrollTo(0, 0);
  }, []);

  const contactStats = [
    {
      label: 'Response Time',
      value: '< 24 Hours',
      icon: 'Clock',
      color: 'text-success'
    },
    {
      label: 'Availability',
      value: 'Open to Opportunities',
      icon: 'CheckCircle',
      color: 'text-primary'
    },
    {
      label: 'Preferred Contact',
      value: 'Email & LinkedIn',
      icon: 'Mail',
      color: 'text-accent'
    },
    {
      label: 'Location',
      value: 'Coimbatore, India',
      icon: 'MapPin',
      color: 'text-secondary'
    }
  ];

  const securityFeatures = [
    {
      title: 'Spam Protection',
      description: 'Advanced filtering to ensure legitimate inquiries reach me',
      icon: 'Shield'
    },
    {
      title: 'Privacy First',
      description: 'Your contact information is never shared with third parties',
      icon: 'Lock'
    },
    {
      title: 'Secure Communication',
      description: 'All messages are encrypted and securely transmitted',
      icon: 'Key'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
      >
        <div className="container-width px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span>Currently Available for New Opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl lg:text-5xl font-bold text-text-primary mb-6"
            >
              Let's Connect &{' '}
              <span className="text-gradient">Collaborate</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-text-secondary max-w-3xl mx-auto mb-8"
            >
              Ready to discuss opportunities, collaborations, or just have a technical conversation?
              I'm always excited to connect with fellow developers, potential employers, and innovative minds.
            </motion.p>

            {/* Contact Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {contactStats?.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  className="bg-card border border-border rounded-lg p-4"
                >
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Icon name={stat?.icon} size={18} className={stat?.color} />
                    <span className={`font-semibold ${stat?.color}`}>{stat?.value}</span>
                  </div>
                  <p className="text-sm text-text-muted">{stat?.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      {/* Main Content */}
      <section className="py-16">
        <div className="container-width px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div id="contact-form">
                <ContactForm />
              </div>

              <ContactFAQ />
            </motion.div>

            {/* Right Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <AvailabilityStatus />
              <QuickConnect />
              {/* Location & Availability removed as requested */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="py-16">
        <div className="container-width px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Secure & Professional Communication
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Your privacy and security are important to me. All communications are handled with
              professional standards and appropriate security measures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures?.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-card border border-border rounded-xl"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature?.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{feature?.title}</h3>
                <p className="text-text-secondary">{feature?.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-primary to-secondary"
      >
        <div className="container-width px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start a Conversation?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Whether you have a job opportunity, project idea, or just want to connect,
              I'm always interested in meaningful professional relationships.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Icon name="MessageSquare" size={20} />
                <span>Send a Message</span>
              </button>

              <button
                onClick={() => window.open('https://www.linkedin.com/in/bala-adhish4/', '_blank')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Icon name="Linkedin" size={20} />
                <span>Connect on LinkedIn</span>
              </button>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container-width px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gradient">Bala Adhish</h3>
                <p className="text-sm text-text-secondary">AI Engineer & Full-Stack Developer</p>
              </div>
            </div>

            <p className="text-text-secondary mb-6">
              Building the future through intelligent code and innovative solutions.
            </p>

            <div className="flex justify-center space-x-6 mb-6">
              <button
                onClick={() => window.open('https://github.com/AdhishMagic', '_blank')}
                className="text-text-muted hover:text-primary transition-colors duration-300"
              >
                <Icon name="Github" size={24} />
              </button>
              <button
                onClick={() => window.open('https://www.linkedin.com/in/bala-adhish4/', '_blank')}
                className="text-text-muted hover:text-primary transition-colors duration-300"
              >
                <Icon name="Linkedin" size={24} />
              </button>
              <button
                onClick={() => window.open('mailto:balaadhish.cbe@gmail.com', '_blank')}
                className="text-text-muted hover:text-primary transition-colors duration-300"
              >
                <Icon name="Mail" size={24} />
              </button>
            </div>

            <p className="text-sm text-text-muted">
              © {new Date()?.getFullYear()} Bala Adhish. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfessionalConnectContactHub;