import React from 'react';
import Layout from '../components/Layout/Layout';
import Card from '../components/UI/Card';

export default function NotificationsScreen() {
  const alerts = [
    { id: 1, type: "push", text: "New volunteer slot at Makeni — 3 spots left", time: "2h ago" },
    { id: 2, type: "push", text: "Donate a Computer — Kenema needs 5 laptops", time: "5h ago" },
    { id: 3, type: "reminder", text: "Complete weekly champion tasks", time: "1d ago" }
  ];

  return (
    <Layout>
      <h2>Notifications</h2>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {alerts.map(alert => (
          <Card key={alert.id} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem' }}>
             <div style={{ fontSize: '1.5rem' }}>{alert.type === 'push' ? '📣' : '⏰'}</div>
             <div>
                <p style={{ margin: '0 0 4px 0' }}>{alert.text}</p>
                <span style={{ fontSize: '12px', color: '#999' }}>{alert.time}</span>
             </div>
          </Card>
        ))}
      </div>
      
      <div style={{ marginTop: '2rem', padding: '1rem', borderTop: '1px solid #ddd' }}>
        <h3>Settings</h3>
        <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span>Push Notifications</span>
            <input type="checkbox" defaultChecked />
        </label>
        <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Email Alerts</span>
            <input type="checkbox" defaultChecked />
        </label>
      </div>
    </Layout>
  );
}
