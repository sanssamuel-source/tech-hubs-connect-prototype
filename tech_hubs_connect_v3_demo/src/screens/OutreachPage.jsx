import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Card from '../components/UI/Card';

/* Feature 1: Field Outreach Section */

export default function OutreachPage() {
  const [activeTab, setActiveTab] = useState('upcoming'); // upcoming, previous, ongoing

  const renderTabBtn = (id, label) => (
    <button 
      onClick={() => setActiveTab(id)}
      className={activeTab === id ? 'active' : ''}
      style={{ 
        flex: 1, padding: '10px', background: 'none', border: 'none', 
        borderBottom: activeTab === id ? '3px solid var(--color-primary)' : '1px solid #eee',
        fontWeight: activeTab === id ? 'bold' : 'normal',
        color: activeTab === id ? 'var(--color-primary)' : '#999'
      }}
    >
      {label}
    </button>
  );

  return (
    <Layout>
      <h2>Field Outreach</h2>
      <div style={{ display: 'flex', marginBottom: '1.5rem' }}>
        {renderTabBtn('upcoming', 'Upcoming')}
        {renderTabBtn('ongoing', 'Ongoing')}
        {renderTabBtn('previous', 'Previous')}
      </div>

      {activeTab === 'previous' && (
        <div style={{ display: 'grid', gap: '1rem' }}>
           <Card>
              <div style={{ height: '120px', background: '#ccc', borderRadius: '8px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                 [Campaign Photo: Tree Planting]
              </div>
              <h3>Cut One, Plant Two</h3>
              <div style={{ background: '#e0ffe0', color: 'green', display: 'inline-block', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', marginBottom: '5px' }}>Climate Resilience</div>
              <p style={{ fontSize: '13px', color: '#555' }}>
                A successful campaign where champions and students planted 500 trees in the Western Area.
              </p>
              <button style={{ color: 'var(--color-primary)', background: 'none', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Read Article →</button>
           </Card>
           
           <Card>
              <h3>GBV Awareness Walk</h3>
              <p style={{ fontSize: '13px', color: '#555' }}>Community sensitization on Gender Based Violence.</p>
           </Card>
        </div>
      )}

      {activeTab === 'upcoming' && (
         <Card>
            <h3>🏖️ Community Beach Cleanup</h3>
            <p style={{ fontSize: '13px' }}>Freetown Tech Hub • Dec 20, 2025</p>
            <p style={{ fontSize: '13px', color: '#666' }}>Join us to clean Lumley Beach using tech-enabled waste tracking.</p>
            <button style={{ width: '100%', padding: '10px', background: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '8px', marginTop: '10px' }}>Join Activity</button>
         </Card>
      )}

      {activeTab === 'ongoing' && (
        <p style={{ textAlign: 'center', color: '#999', marginTop: '2rem' }}>No ongoing activities at this moment.</p>
      )}
    </Layout>
  );
}
