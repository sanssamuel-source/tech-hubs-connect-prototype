import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Card from '../components/UI/Card';
import Input from '../components/UI/Input';
import Select from '../components/UI/Select';
import Button from '../components/UI/Button';
import { useApp } from '../context/AppContext';

/* Feature 1: Be A Volunteer Logic */

export default function VolunteerSignup() {
  const { hubs } = useApp();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ hub: '', type: '' });

  return (
    <Layout>
      <h2>Volunteer Registration</h2>
      
      {step === 1 && (
         <>
            <p style={{ fontSize: '13px', color: '#666' }}>Join us to empower the next generation.</p>
            <Card>
               <Input label="Full Name" placeholder="Your Name" />
               <Input label="Phone / WhatsApp" placeholder="+232 77 000 000" />
               <Select 
                  label="Select Nearby Hub"
                  options={hubs.map(h => ({ value: h.id, label: h.name }))}
                  value={formData.hub}
                  onChange={(e) => setFormData({ ...formData, hub: e.target.value })}
               />
               <Select 
                  label="How can you help?"
                  options={[
                      { value: 'outreach', label: 'Join Upcoming Outreach' },
                      { value: 'tutor', label: 'Guest Tutor (Share Expertise)' },
                      { value: 'mentor', label: 'Mentorship' }
                  ]}
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
               />
               <Button variant="volunteer" style={{ marginTop: '1rem' }} onClick={() => setStep(2)}>Next</Button>
            </Card>
         </>
      )}

      {step === 2 && (
          <Card style={{ textAlign: 'center', padding: '2rem' }}>
             <div style={{ fontSize: '3rem' }}>🎉</div>
             <h3>Application Sent!</h3>
             <p style={{ color: '#666' }}>
                We have received your interest to be a <b>{formData.type === 'tutor' ? 'Guest Tutor' : 'Volunteer'}</b>.
                <br/><br/>
                You will receive a notification once the Hub Manager approves your request.
             </p>
             <Button variant="outline" onClick={() => window.location.href = '/home'}>Back to Home</Button>
          </Card>
      )}
    </Layout>
  );
}
