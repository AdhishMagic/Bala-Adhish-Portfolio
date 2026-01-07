import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  // Formspree "form id" is not a secret; it can live in the client bundle.
  // Keep env override for flexibility, but fall back so production deployments
  // don't show setup warnings if the build-time env var wasn't injected.
  const DEFAULT_FORMSPREE_FORM_ID = 'xqayknyq';
  const envFormId = import.meta.env.VITE_FORMSPREE_FORM_ID;
  const formspreeFormId = envFormId || DEFAULT_FORMSPREE_FORM_ID;
  const isFormspreeConfigured = Boolean(formspreeFormId);
  const showSetupWarning = import.meta.env.DEV && !envFormId;
  // useForm requires a string key; we avoid actual submission if not configured.
  const [state, handleSubmit] = useForm(formspreeFormId || 'myForm');
  const [configError, setConfigError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    projectDetails: '',
    timeline: '',
    budget: '',
    urgency: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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

  if (state.succeeded) {
    return (
      <div className="bg-card border border-border rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">Message Sent Successfully!</h3>
        <p className="text-text-secondary mb-4">
          Thank you for reaching out. I'll review your inquiry and respond within the specified timeframe.
        </p>
      </div>
    );
  }

  if (state.errors) {
    return (
      <div className="bg-card border border-border rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="XCircle" size={32} className="text-destructive" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">Message Failed to Send!</h3>
        <p className="text-text-secondary mb-4">
          Something went wrong. Please try again later.
        </p>
      </div>
    );
  }

  const onSubmit = (e) => {
    setConfigError('');
    handleSubmit(e);
  };

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
      {showSetupWarning && (
        <div className="bg-warning/10 border border-warning/20 rounded-lg p-4 text-sm text-text-secondary">
          <div className="flex items-start gap-2">
            <Icon name="AlertTriangle" size={18} className="text-warning mt-0.5" />
            <div>
              <p className="font-medium text-text-primary">Contact form setup required</p>
              <p>
                Create a <span className="font-mono">.env</span> file with <span className="font-mono">VITE_FORMSPREE_FORM_ID</span>, then restart Vite.
              </p>
            </div>
          </div>
        </div>
      )}

      {configError && (
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 text-sm text-text-secondary">
          {configError}
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />

          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="your.email@company.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Company/Organization"
            name="company"
            type="text"
            placeholder="Your company name (optional)"
            value={formData.company}
            onChange={handleInputChange}
          />

          <Select
            label="Inquiry Type"
            placeholder="Select inquiry type"
            options={inquiryTypes}
            name="inquiryType"
            value={formData.inquiryType}
            onChange={(value) => handleSelectChange('inquiryType', value)}
            required
          />
          <ValidationError
            prefix="Inquiry Type"
            field="inquiryType"
            errors={state.errors}
          />
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-text-primary">
            Project Details <span className="text-destructive">*</span>
          </label>
          <textarea
            name="projectDetails"
            rows={4}
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none"
            placeholder="Please describe your project, opportunity, or inquiry in detail. Include any specific requirements, technologies involved, or questions you have."
            value={formData.projectDetails}
            onChange={handleInputChange}
            required
          />
          <ValidationError
            prefix="Project Details"
            field="projectDetails"
            errors={state.errors}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Timeline"
            placeholder="Select timeline"
            options={timelineOptions}
            name="timeline"
            value={formData.timeline}
            onChange={(value) => handleSelectChange('timeline', value)}
            required
          />
          <ValidationError
            prefix="Timeline"
            field="timeline"
            errors={state.errors}
          />

          <Select
            label="Budget Range (Optional)"
            placeholder="Select budget range"
            options={budgetRanges}
            name="budget"
            value={formData.budget}
            onChange={(value) => handleSelectChange('budget', value)}
          />
        </div>

        <Select
          label="Response Urgency"
          placeholder="Select urgency level"
          options={urgencyLevels}
          name="urgency"
          value={formData.urgency}
          onChange={(value) => handleSelectChange('urgency', value)}
          required
        />
        <ValidationError
          prefix="Urgency"
          field="urgency"
          errors={state.errors}
        />

        {/* Newsletter subscription removed as requested */}

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            type="submit"
            variant="default"
            loading={state.submitting}
            iconName="Send"
            iconPosition="right"
            className="flex-1"
            disabled={state.submitting}
          >
            {state.submitting ? 'Sending Message...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;