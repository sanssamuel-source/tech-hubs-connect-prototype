import React from 'react';
import Layout from '../components/Layout/Layout';
import Card from '../components/UI/Card';
import { useApp } from '../context/AppContext';

export default function AdminDashboard() {
  const { hubs } = useApp();

  return (
    <Layout>
      <h2>Admin Dashboard</h2>
      <p style={{ color: '#666' }}>Overview of all hubs and activities.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', mb: '1rem' }}>
        <Card className="stat-card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{hubs.length}</div>
            <div style={{ fontSize: '12px' }}>Active Hubs</div>
        </Card>
        <Card className="stat-card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>342</div>
            <div style={{ fontSize: '12px' }}>New Students</div>
        </Card>
      </div>

      <h3>Management Tools</h3>
      <div style={{ display: 'grid', gap: '1rem' }}>
        <Card title="Approve Reports" onClick={() => alert('Approvals')}>
           <p style={{ margin: 0, fontSize: '12px', color: 'orange' }}>3 pending reports</p>
        </Card>
        <Card title="Manage Hubs" onClick={() => alert('Manage Hubs')}>
           <p style={{ margin: 0, fontSize: '12px' }}>Add/Edit hub details and champions</p>
        </Card>
        <Card title="Announcements" onClick={() => alert('Send announcement to all champions')}>
           <p style={{ margin: 0, fontSize: '12px' }}>Push notifications to users</p>
        </Card>
      </div>
    </Layout>
  );
}
