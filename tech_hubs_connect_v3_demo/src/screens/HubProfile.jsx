import React from 'react';
import Layout from '../components/Layout/Layout';
import { useApp } from '../context/AppContext';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { useNavigate } from 'react-router-dom';

export default function HubProfile() {
  const { currentHub } = useApp();
  const navigate = useNavigate();

  if (!currentHub) {
    return (
      <Layout>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <p>No hub selected.</p>
          <Button onClick={() => navigate('/map')}>Go to Map</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div style={{ marginBottom: '1rem' }}>
        <Button variant="outline" onClick={() => navigate(-1)} style={{ width: 'auto', marginBottom: '1rem', padding: '8px 16px' }}>
          ← Back
        </Button>
        <h2 style={{ margin: 0 }}>{currentHub.name}</h2>
        <p style={{ color: '#666', margin: '4px 0' }}>📍 {currentHub.city}</p>
      </div>

      <Card>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{currentHub.laptops}</div>
            <div style={{ fontSize: '12px', color: '#666' }}>Laptops</div>
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{currentHub.champion ? 'Yes' : 'No'}</div>
            <div style={{ fontSize: '12px', color: '#666' }}>Champion</div>
          </div>
        </div>
      </Card>

      <Card title="Needs & Requests">
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {currentHub.needs.map(need => (
             <span key={need} style={{ background: '#eef', color: 'var(--color-primary)', padding: '4px 12px', borderRadius: '12px', fontSize: '12px' }}>
               {need}
             </span>
          ))}
        </div>
      </Card>

      <Card title="Contact">
        <p>📧 {currentHub.contact}</p>
      </Card>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '1rem' }}>
        <Button variant="primary" onClick={() => navigate('/donate')}>Donate to this Hub</Button>
        <Button variant="outline" onClick={() => navigate('/volunteer-signup')}>Volunteer Here</Button>
      </div>
    </Layout>
  );
}
