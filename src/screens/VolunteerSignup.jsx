import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Card from '../components/UI/Card';
import Input from '../components/UI/Input';
import Select from '../components/UI/Select';
import Button from '../components/UI/Button';
import { useApp } from '../context/AppContext';
import { MOCK_OUTREACH } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

export default function VolunteerSignup() {
  const { hubs } = useApp();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    hubId: '',
    activityId: '',
    role: ''
  });

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    alert('Application submitted! We will contact you shortly.');
    navigate('/home');
  };

  const outreachOptions = MOCK_OUTREACH
    .filter(o => o.type === 'upcoming')
    .map(o => ({ value: o.id, label: `${o.title} (${o.date})` }));

  return (
    <Layout>
      <h2>Volunteer Registration</h2>
      <Card>
        <Input 
          label="Full Name" 
          placeholder="Jane Doe" 
          value={formData.name} 
          onChange={(e) => handleChange('name', e.target.value)}
        />
        <Input 
          label="Phone Number" 
          placeholder="+232 ..." 
          value={formData.phone} 
          onChange={(e) => handleChange('phone', e.target.value)}
        />
        <Select 
          label="Preferred Hub"
          placeholder="Select a hub"
          value={formData.hubId}
          onChange={(e) => handleChange('hubId', e.target.value)}
          options={hubs.map(h => ({ value: h.id, label: h.name }))}
        />
        <Select 
          label="Activity Interest"
          placeholder="Select an activity"
          value={formData.activityId}
          onChange={(e) => handleChange('activityId', e.target.value)}
          options={outreachOptions}
        />
        <Select 
          label="I want to..."
          placeholder="Choose a role"
          value={formData.role}
          onChange={(e) => handleChange('role', e.target.value)}
          options={[
            { value: 'outreach', label: 'Join outreach team' },
            { value: 'tutor', label: 'Be a guest tutor' },
            { value: 'donate', label: 'Donate items/time' }
          ]}
        />

        <Button 
            variant="primary" 
            onClick={handleSubmit} 
            style={{ marginTop: '1rem' }}
            disabled={!formData.name || !formData.phone}
        >
            Apply Now
        </Button>
      </Card>
    </Layout>
  );
}
