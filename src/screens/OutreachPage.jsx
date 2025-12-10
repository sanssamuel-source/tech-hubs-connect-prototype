import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Card from '../components/UI/Card';
import { MOCK_OUTREACH } from '../data/mockData';

export default function OutreachPage() {
  const [activeTab, setActiveTab] = useState('upcoming'); // upcoming, previous

  const filteredItems = MOCK_OUTREACH.filter(item => {
    if (activeTab === 'upcoming') return item.type === 'upcoming';
    return item.type === 'previous';
  });

  return (
    <Layout>
      <h2>Field Outreach</h2>
      
      <div style={{ display: 'flex', borderBottom: '1px solid #ddd', marginBottom: '1rem' }}>
        <button 
          onClick={() => setActiveTab('upcoming')}
          style={{ 
            flex: 1, padding: '12px', background: 'none', border: 'none', 
            borderBottom: activeTab === 'upcoming' ? '2px solid var(--color-primary)' : 'none',
            color: activeTab === 'upcoming' ? 'var(--color-primary)' : '#666', fontWeight: 'bold'
          }}
        >
          Upcoming
        </button>
        <button 
          onClick={() => setActiveTab('previous')}
          style={{ 
            flex: 1, padding: '12px', background: 'none', border: 'none', 
            borderBottom: activeTab === 'previous' ? '2px solid var(--color-primary)' : 'none',
            color: activeTab === 'previous' ? 'var(--color-primary)' : '#666', fontWeight: 'bold'
          }}
        >
          Previous / Gallery
        </button>
      </div>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {filteredItems.length === 0 && <p style={{ textAlign: 'center', color: '#666' }}>No activities found.</p>}
        
        {filteredItems.map(item => (
          <Card key={item.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{item.title}</h3>
                <p style={{ margin: '4px 0', fontSize: '12px', color: '#666' }}>📍 {item.hub}</p>
                {item.date && <p style={{ fontSize: '12px', color: 'var(--color-primary)' }}>📅 {item.date}</p>}
              </div>
              {item.type === 'previous' && (
                 <div style={{ background: '#eee', width: '60px', height: '60px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    📷
                 </div>
              )}
            </div>
            {item.summary && <p style={{ fontSize: '14px', marginTop: '10px' }}>{item.summary}</p>}
          </Card>
        ))}
      </div>
    </Layout>
  );
}
