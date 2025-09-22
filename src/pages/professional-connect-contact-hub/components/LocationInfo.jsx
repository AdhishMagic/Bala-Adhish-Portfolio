import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationInfo = () => {
  const locationData = {
    city: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    timezone: 'IST (UTC+5:30)',
    coordinates: {
      lat: 13.0827,
      lng: 80.2707
    }
  };

  const workPreferences = [
    {
      type: 'Remote Work',
      availability: 'Preferred',
      description: 'Experienced in distributed team collaboration',
      icon: 'Wifi',
      color: 'text-success'
    },
    {
      type: 'Hybrid Work',
      availability: 'Available',
      description: 'Open to flexible work arrangements',
      icon: 'Building',
      color: 'text-primary'
    },
    {
      type: 'On-site (Local)',
      availability: 'Chennai Area',
      description: 'Available for local opportunities',
      icon: 'MapPin',
      color: 'text-accent'
    },
    {
      type: 'Relocation',
      availability: 'Willing',
      description: 'Open to relocating for the right opportunity',
      icon: 'Plane',
      color: 'text-warning'
    }
  ];

  const travelAvailability = {
    domestic: 'Available for business travel within India',
    international: 'Open to international opportunities with visa support',
    frequency: 'Up to 25% travel acceptable'
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="MapPin" size={20} className="text-accent" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-text-primary">Location & Availability</h3>
          <p className="text-sm text-text-secondary">Geographic preferences and work arrangements</p>
        </div>
      </div>
      {/* Current Location */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-4">
          <Icon name="Home" size={18} className="text-primary" />
          <h4 className="font-semibold text-text-primary">Current Location</h4>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-surface rounded-lg">
              <Icon name="MapPin" size={16} className="text-text-muted" />
              <div>
                <p className="font-medium text-text-primary">
                  {locationData?.city}, {locationData?.state}
                </p>
                <p className="text-sm text-text-secondary">{locationData?.country}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-surface rounded-lg">
              <Icon name="Clock" size={16} className="text-text-muted" />
              <div>
                <p className="font-medium text-text-primary">Timezone</p>
                <p className="text-sm text-text-secondary">{locationData?.timezone}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-surface rounded-lg overflow-hidden border border-border">
            <iframe
              width="100%"
              height="200"
              loading="lazy"
              title="Chennai Location"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${locationData?.coordinates?.lat},${locationData?.coordinates?.lng}&z=12&output=embed`}
              className="border-0"
            />
          </div>
        </div>
      </div>
      {/* Work Preferences */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-4">
          <Icon name="Briefcase" size={18} className="text-primary" />
          <h4 className="font-semibold text-text-primary">Work Preferences</h4>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {workPreferences?.map((pref, index) => (
            <div key={index} className="p-4 bg-surface rounded-lg border border-border">
              <div className="flex items-center space-x-3 mb-2">
                <Icon name={pref?.icon} size={18} className={pref?.color} />
                <div>
                  <h5 className="font-medium text-text-primary">{pref?.type}</h5>
                  <p className={`text-sm font-medium ${pref?.color}`}>{pref?.availability}</p>
                </div>
              </div>
              <p className="text-sm text-text-secondary">{pref?.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Travel Availability */}
      <div className="border-t border-border pt-6">
        <div className="flex items-center space-x-2 mb-4">
          <Icon name="Plane" size={18} className="text-primary" />
          <h4 className="font-semibold text-text-primary">Travel Availability</h4>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-surface rounded-lg">
            <Icon name="MapPin" size={16} className="text-success mt-0.5" />
            <div>
              <p className="font-medium text-text-primary">Domestic Travel</p>
              <p className="text-sm text-text-secondary">{travelAvailability?.domestic}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-surface rounded-lg">
            <Icon name="Globe" size={16} className="text-primary mt-0.5" />
            <div>
              <p className="font-medium text-text-primary">International Travel</p>
              <p className="text-sm text-text-secondary">{travelAvailability?.international}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-surface rounded-lg">
            <Icon name="Calendar" size={16} className="text-accent mt-0.5" />
            <div>
              <p className="font-medium text-text-primary">Travel Frequency</p>
              <p className="text-sm text-text-secondary">{travelAvailability?.frequency}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Local Opportunities */}
      <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Building2" size={16} className="text-primary" />
          <span className="font-medium text-primary">Local Opportunities</span>
        </div>
        <p className="text-sm text-text-secondary">
          Particularly interested in Chennai-based startups and tech companies. 
          Available for in-person meetings and on-site collaboration.
        </p>
      </div>
    </div>
  );
};

export default LocationInfo;