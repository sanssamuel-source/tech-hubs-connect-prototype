import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function HomeDashboard() {
  const { currentUser } = useApp();
  const navigate = useNavigate();

  const SectionHeader = ({ title, color }) => (
    <h3 style={{ 
      margin: '1.5rem 0 0.5rem 0', 
      fontSize: '0.9rem', 
      textTransform: 'uppercase', 
      letterSpacing: '1px',
      color: color || '#666'
    }}>{title}</h3>
  );

  return (
    <Layout>
      {/* 1. Digital Champions Section */}
      <SectionHeader title="Digital Champions" color="var(--color-primary)" />
      <Card>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ fontSize: '2rem' }}>🏆</div>
          <div>
            <h4 style={{ margin: 0 }}>Champion Tools</h4>
            <p style={{ margin: '4px 0', fontSize: '12px', color: '#666' }}>Support hub managers & track impact.</p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '1rem' }}>
           <Button variant="primary" style={{ fontSize: '12px' }} onClick={() => navigate('/champion-dashboard')}>Daily Tasks</Button>
           <Button variant="outline" style={{ fontSize: '12px' }} onClick={() => navigate('/inventory')}>Inventory</Button>
        </div>
      </Card>

      {/* 2. Administration (formerly Students) */}
      <SectionHeader title="Administration" color="#00B894" />
      <Card>
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>🎓 <b>Courses</b></span>
            <span style={{ color: 'green', fontSize: '12px' }}>Active</span>
         </div>
         <p style={{ fontSize: '13px', color: '#555' }}>Access Learning Passport & Life Skills.</p>
         <Button variant="outline" onClick={() => navigate('/courses')}>Manage Courses</Button>
      </Card>

      {/* 3. Field Outreach */}
      <SectionHeader title="Field Outreach" color="#6C5CE7" />
      <Card onClick={() => navigate('/outreach')} style={{ cursor: 'pointer' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <span>📢 <b>Field Activities</b></span>
           <span style={{ fontSize: '1.2rem' }}>→</span>
        </div>
        <div style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
           <span className="pill">Upcoming</span>
           <span className="pill">Previous</span>
        </div>
      </Card>

      {/* 4. Volunteer */}
      <SectionHeader title="Volunteer" color="#FAB1A0" />
      <Card>
         <h4 style={{ margin: '0 0 5px 0' }}>Join the Movement</h4>
         <p style={{ fontSize: '12px', color: '#666' }}>Share your expertise or join an outreach.</p>
         <Button variant="volunteer" style={{ marginTop: '8px' }} onClick={() => navigate('/volunteer-signup')}>Register Interest</Button>
      </Card>
      
      {/* 5. HubNetwork (formerly Donor/Connect) */}
      <SectionHeader title="HubNetwork" color="#2d3436" />
      <Card>
         <h4 style={{ margin: '0 0 5px 0' }}>Connect & Support</h4>
         <p style={{ fontSize: '12px', color: '#666' }}>Locate hubs, view impact, or support us.</p>
         <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <Button variant="outline" onClick={() => navigate('/map')}>View Map</Button>
            <Button variant="donor" onClick={() => navigate('/donate')}>Donate</Button>
         </div>
      </Card>

    </Layout>
  );
}
