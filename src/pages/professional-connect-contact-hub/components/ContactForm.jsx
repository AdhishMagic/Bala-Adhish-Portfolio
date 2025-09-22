import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    projectDetails: '',
    timeline: '',
    budget: '',
    urgency: '',
    newsletter: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryTypes = [
    { value: 'job', label: 'Job Opportunity' },
    { value: 'collaboration', label: 'Project Collaboration' },
    { value: 'mentorship', label: 'Mentorship Request' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'speaking', label: 'Speaking Engagement' },
    { value: 'networking', label: 'General Networking' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (Within 1 week)' },
    { value: 'short', label: 'Short-term (1-4 weeks)' },
    { value: 'medium', label: 'Medium-term (1-3 months)' },
    { value: 'long', label: 'Long-term (3+ months)' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const budgetRanges = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-50k', label: '$15,000 - $50,000' },
    { value: '50k-plus', label: '$50,000+' },
    { value: 'equity', label: 'Equity/Partnership' },
    { value: 'discuss', label: 'Open to Discussion' }
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low - Response within 1 week' },
    { value: 'medium', label: 'Medium - Response within 3 days' },
    { value: 'high', label: 'High - Response within 24 hours' },
    { value: 'urgent', label: 'Urgent - Same day response needed' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.name?.trim()) newErrors.name = 'Name is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/?.test(formData?.email)) newErrors.email = 'Please enter a valid email';
    if (!formData?.inquiryType) newErrors.inquiryType = 'Please select an inquiry type';
    if (!formData?.projectDetails?.trim()) newErrors.projectDetails = 'Project details are required';
    if (!formData?.timeline) newErrors.timeline = 'Timeline is required';
    if (!formData?.urgency) newErrors.urgency = 'Urgency level is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          inquiryType: '',
          projectDetails: '',
          timeline: '',
          budget: '',
          urgency: '',
          newsletter: false
        });
      }, 3000);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">Message Sent Successfully!</h3>
        <p className="text-text-secondary mb-4">
          Thank you for reaching out. I'll review your inquiry and respond within the specified timeframe.
        </p>
        <div className="flex items-center justify-center space-x-2 text-sm text-text-muted">
          <Icon name="Clock" size={16} />
          <span>Expected response: Based on your selected urgency level</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="MessageSquare" size={20} className="text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-text-primary">Send a Message</h3>
          <p className="text-sm text-text-secondary">Let's discuss your project or opportunity</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={formData?.name}
            onChange={handleInputChange}
            error={errors?.name}
            required
          />
          
          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="your.email@company.com"
            value={formData?.email}
            onChange={handleInputChange}
            error={errors?.email}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Company/Organization"
            name="company"
            type="text"
            placeholder="Your company name (optional)"
            value={formData?.company}
            onChange={handleInputChange}
          />
          
          <Select
            label="Inquiry Type"
            placeholder="Select inquiry type"
            options={inquiryTypes}
            value={formData?.inquiryType}
            onChange={(value) => handleSelectChange('inquiryType', value)}
            error={errors?.inquiryType}
            required
          />
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-text-primary">
            Project Details <span className="text-destructive">*</span>
          </label>
          <textarea
            name="projectDetails"
            rows={4}
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
            placeholder="Please describe your project, opportunity, or inquiry in detail. Include any specific requirements, technologies involved, or questions you have."
            value={formData?.projectDetails}
            onChange={handleInputChange}
          />
          {errors?.projectDetails && (
            <p className="text-sm text-destructive">{errors?.projectDetails}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Timeline"
            placeholder="Select timeline"
            options={timelineOptions}
            value={formData?.timeline}
            onChange={(value) => handleSelectChange('timeline', value)}
            error={errors?.timeline}
            required
          />
          
          <Select
            label="Budget Range (Optional)"
            placeholder="Select budget range"
            options={budgetRanges}
            value={formData?.budget}
            onChange={(value) => handleSelectChange('budget', value)}
          />
        </div>

        <Select
          label="Response Urgency"
          placeholder="Select urgency level"
          options={urgencyLevels}
          value={formData?.urgency}
          onChange={(value) => handleSelectChange('urgency', value)}
          error={errors?.urgency}
          required
        />

        <div className="border-t border-border pt-6">
          <Checkbox
            label="Subscribe to newsletter"
            description="Get updates on new projects, blog posts, and professional milestones"
            name="newsletter"
            checked={formData?.newsletter}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            type="submit"
            variant="default"
            loading={isSubmitting}
            iconName="Send"
            iconPosition="right"
            className="flex-1"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>
          
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setFormData({
                name: '',
                email: '',
                company: '',
                inquiryType: '',
                projectDetails: '',
                timeline: '',
                budget: '',
                urgency: '',
                newsletter: false
              });
              setErrors({});
            }}
            iconName="RotateCcw"
            iconPosition="left"
          >
            Reset Form
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;