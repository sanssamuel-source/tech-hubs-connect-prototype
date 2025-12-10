import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Card from '../components/UI/Card';
import { useApp } from '../context/AppContext';

/* Feature 2: Admin Backend (Internal) */

export default function AdminDashboard() {
  const { hubs } = useApp();
  const [activeTab, setActiveTab] = useState('overview');

  const StatCard = ({ label, val, good }) => (
    <div style={{ background: 'white', padding: '15px', borderRadius: '12px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
       <div style={{ fontSize: '24px', fontWeight: 'bold', color: good ? 'green' : '#333' }}>{val}</div>
       <div style={{ fontSize: '12px', color: '#999' }}>{label}</div>
    </div>
  );

  return (
    <Layout>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>Admin Portal</h2>
          <span style={{ fontSize: '11px', background: '#333', color: 'white', padding: '2px 6px', borderRadius: '4px' }}>INTERNAL</span>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem', overflowX: 'auto' }}>
         {['Overview', 'Approve Reports', 'Hubs', 'Analytics'].map(tab => (
             <button 
               key={tab} 
               onClick={() => setActiveTab(tab)}
               style={{ 
                  padding: '8px 12px', borderRadius: '20px', border: 'none', 
                  background: activeTab === tab ? '#333' : '#e0e0e0',
                  color: activeTab === tab ? 'white' : '#666', fontSize: '12px'
               }}
             >
                {tab}
             </button>
         ))}
      </div>

      {activeTab === 'Overview' && (
         <>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <StatCard label="Total Hubs" val={hubs.length} />
                <StatCard label="Students" val="3,420" good />
                <StatCard label="Pending Reports" val="12" />
                <StatCard label="Volunteers" val="158" />
            </div>
            
            <Card style={{ borderLeft: '4px solid gold' }}>
               <h4 style={{ margin: '0 0 5px 0' }}>🏆 Hub of the Month</h4>
               <p style={{ fontSize: '13px', margin: 0 }}>SEND A MOTIVATION</p>
               <div style={{ display: 'flex', gap: '10px', marginTop: '10px', alignItems: 'center' }}>
                   <b>EduCube Waterloo</b>
                   <button style={{ padding: '4px 10px', fontSize: '10px', background: 'gold', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Announce 🎉</button>
               </div>
            </Card>
         </>
      )}

      {activeTab === 'Approve Reports' && (
         <div style={{ display: 'grid', gap: '10px' }}>
            <Card>
               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <b>Field Photos - Makeni</b>
                  <span style={{ fontSize: '11px', color: 'orange' }}>Pending</span>
               </div>
               <p style={{ fontSize: '12px', color: '#666' }}>Uploaded by Champion John • 2h ago</p>
               <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                  <button style={{ flex: 1, padding: '8px', background: 'green', color: 'white', border: 'none', borderRadius: '4px' }}>Approve</button>
                  <button style={{ flex: 1, padding: '8px', background: '#eee', color: '#333', border: 'none', borderRadius: '4px' }}>Reject</button>
               </div>
            </Card>
         </div>
      )}
      
      {activeTab === 'Analytics' && (
          <Card>
             <h3 style={{ marginTop: 0 }}>Impact Analytics</h3>
             <div style={{ height: '150px', display: 'flex', alignItems: 'flex-end', gap: '10px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
                 {[40, 60, 35, 80, 55].map((h, i) => (
                    <div key={i} style={{ flex: 1, background: 'var(--color-primary)', opacity: 0.6, height: `${h}%`, borderRadius: '4px 4px 0 0' }}></div>
                 ))}
             </div>
             <p style={{ fontSize: '12px', textAlign: 'center', color: '#999' }}>Students Trained (Last 5 Months)</p>
             <div style={{ marginTop: '1rem' }}>
                <b>Gender Split</b>: 45% Female / 55% Male
             </div>
          </Card>
      )}

    </Layout>
  );
}
