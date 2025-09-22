import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      role: "Professor, Computer Science Department",
      organization: "VIT University",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      content: `Bala is one of the most dedicated and innovative students I've had the pleasure of teaching. His approach to AI problems is both methodical and creative. He consistently goes beyond the curriculum requirements, often implementing additional features and optimizations that demonstrate his deep understanding of the subject matter.`,
      rating: 5,
      relationship: "Academic Mentor",
      project: "Neural Network Optimization Research",
      date: "December 2024"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Senior Software Engineer",
      organization: "TechCorp Solutions",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      content: `I had the opportunity to mentor Bala during his internship project. His ability to grasp complex full-stack concepts quickly and implement them efficiently is remarkable. He wrote clean, well-documented code and was always eager to learn new technologies. Any team would be lucky to have him.`,
      rating: 5,
      relationship: "Industry Mentor",
      project: "E-commerce Platform Development",
      date: "August 2024"
    },
    {
      id: 3,
      name: "Anita Patel",
      role: "Team Lead, Data Science",
      organization: "AI Innovations Lab",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      content: `Bala collaborated with our team on a machine learning project for predictive analytics. His technical skills are impressive, but what stood out most was his collaborative spirit and problem-solving approach. He brought fresh perspectives and wasn't afraid to challenge existing assumptions.`,
      rating: 5,
      relationship: "Project Collaborator",
      project: "Predictive Analytics Dashboard",
      date: "October 2024"
    },
    {
      id: 4,
      name: "Michael Chen",
      role: "Fellow CS Student",
      organization: "VIT University",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      content: `Bala and I worked together on multiple hackathons and group projects. He's not just technically brilliant but also an excellent team player. He has this unique ability to explain complex concepts in simple terms, which made our collaboration incredibly productive. He's going to do amazing things in the AI field.`,
      rating: 5,
      relationship: "Peer Collaborator",
      project: "Smart Campus Navigation System",
      date: "September 2024"
    },
    {
      id: 5,
      name: "Sarah Williams",
      role: "Startup Founder",
      organization: "GreenTech Innovations",
      avatar: "https://randomuser.me/api/portraits/women/55.jpg",
      content: `Bala helped us develop an AI solution for our environmental monitoring platform. Despite being a student, he approached the project with the professionalism of a seasoned developer. His solution exceeded our expectations and is now a core part of our product offering.`,
      rating: 5,
      relationship: "Client",
      project: "Environmental AI Monitoring System",
      date: "November 2024"
    },
    {
      id: 6,
      name: "David Thompson",
      role: "Open Source Maintainer",
      organization: "TensorFlow Community",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      content: `Bala has made several meaningful contributions to our open source projects. His code quality is excellent, and he's great at identifying and fixing edge cases. He's also very responsive to feedback and actively participates in community discussions. A valuable contributor to the ecosystem.`,
      rating: 5,
      relationship: "Open Source Community",
      project: "TensorFlow.js Contributions",
      date: "January 2025"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-warning fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">What Others Say</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Testimonials from professors, mentors, collaborators, and peers who have worked with me 
            on various projects and initiatives.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 lg:p-12 shadow-xl border border-border relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Icon name="Quote" size={28} color="white" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="text-center mb-8">
                <blockquote className="text-xl lg:text-2xl text-text-primary leading-relaxed mb-6 italic">
                  "{testimonials?.[activeTestimonial]?.content}"
                </blockquote>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {renderStars(testimonials?.[activeTestimonial]?.rating)}
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                    <Image
                      src={testimonials?.[activeTestimonial]?.avatar}
                      alt={testimonials?.[activeTestimonial]?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-text-primary text-lg">
                      {testimonials?.[activeTestimonial]?.name}
                    </h4>
                    <p className="text-primary font-medium">
                      {testimonials?.[activeTestimonial]?.role}
                    </p>
                    <p className="text-text-secondary text-sm">
                      {testimonials?.[activeTestimonial]?.organization}
                    </p>
                  </div>
                </div>

                {/* Project & Date Info */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-text-secondary">
                  <div className="flex items-center space-x-2">
                    <Icon name="Briefcase" size={14} />
                    <span>{testimonials?.[activeTestimonial]?.relationship}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="FolderOpen" size={14} />
                    <span>{testimonials?.[activeTestimonial]?.project}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={14} />
                    <span>{testimonials?.[activeTestimonial]?.date}</span>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon name="ChevronLeft" size={20} />
                </button>

                {/* Dots Indicator */}
                <div className="flex space-x-2">
                  {testimonials?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeTestimonial
                          ? 'bg-primary scale-125' :'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon name="ChevronRight" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials?.map((testimonial, index) => (
            <div
              key={testimonial?.id}
              onClick={() => setActiveTestimonial(index)}
              className={`bg-white rounded-xl p-6 shadow-md border-2 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                index === activeTestimonial
                  ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">{testimonial?.name}</h4>
                  <p className="text-sm text-text-secondary">{testimonial?.role}</p>
                </div>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                "{testimonial?.content?.substring(0, 120)}..."
              </p>

              <div className="flex items-center justify-between">
                <div className="flex">
                  {renderStars(testimonial?.rating)}
                </div>
                <span className="text-xs text-text-secondary">{testimonial?.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-border">
            <Icon name="Users" size={48} className="mx-auto mb-6 text-primary" />
            <h3 className="text-2xl font-bold text-text-primary mb-4">Want to Work Together?</h3>
            <p className="text-lg text-text-secondary mb-6 max-w-2xl mx-auto">
              I'm always excited to collaborate on innovative projects and contribute to meaningful initiatives. Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center space-x-2">
                <Icon name="Mail" size={20} />
                <span>Start a Conversation</span>
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                <Icon name="Linkedin" size={20} />
                <span>Connect on LinkedIn</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;