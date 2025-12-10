import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { useNavigate } from 'react-router-dom';

/* Feature 1: Donate Here Section */

export default function DonorFlow() {
  const navigate = useNavigate();
  const [donateType, setDonateType] = useState(null); // 'cash', 'item'
  const [selectedItem, setSelectedItem] = useState('');

  const renderHome = () => (
    <>
        <h2 style={{ marginBottom: '0.5rem' }}>Make an Impact</h2>
        
        {/* Statistics / Monitor Impact */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '1.5rem' }}>
           <Card style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>1,240</div>
              <div style={{ fontSize: '11px', color: '#666' }}>Students Trained</div>
           </Card>
           <Card style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00B894' }}>85%</div>
              <div style={{ fontSize: '11px', color: '#666' }}>Employment Rate</div>
           </Card>
        </div>

        {/* Success Stories */}
        <h3 style={{ fontSize: '1rem' }}>Success Stories</h3>
        <Card style={{ marginBottom: '1.5rem' }}>
           <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ width: '60px', height: '60px', background: '#ddd', borderRadius: '50%' }}></div>
              <div>
                 <b>Fatmata changed the world!</b>
                 <p style={{ fontSize: '12px', color: '#555', margin: '4px 0' }}>After receiving a donated laptop, she built an app to track malaria cases.</p>
              </div>
           </div>
        </Card>

        {/* Donation Options */}
        <h3 style={{ fontSize: '1rem' }}>How to Help</h3>
        <Card onClick={() => setDonateType('item')} style={{ cursor: 'pointer', border: '2px solid transparent', '&:hover': { borderColor: 'var(--color-primary)' } }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ fontSize: '2rem' }}>🎅</div>
              <div>
                 <b>Be a Santa!</b>
                 <p style={{ fontSize: '12px', margin: 0, color: '#666' }}>Donate computers, food, clothes or water.</p>
              </div>
           </div>
        </Card>

        <Card onClick={() => setDonateType('cash')} style={{ marginTop: '10px', cursor: 'pointer' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ fontSize: '2rem' }}>💳</div>
              <div>
                 <b>Support a Hub</b>
                 <p style={{ fontSize: '12px', margin: 0, color: '#666' }}>Financial support for internet & electricity.</p>
              </div>
           </div>
        </Card>
    </>
  );

  const renderItemDonation = () => (
     <>
        <button onClick={() => setDonateType(null)} style={{ background: 'none', border: 'none', marginBottom: '1rem', cursor: 'pointer' }}>← Back</button>
        <h2>Be a Santa 🎅</h2>
        <p style={{ fontSize: '13px', color: '#666' }}>What would you like to donate?</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
           {['Computers', 'Food Items', 'Clothes', 'Water'].map(item => (
              <div 
                key={item}
                onClick={() => setSelectedItem(item)}
                style={{ 
                   padding: '1.5rem', background: selectedItem === item ? '#FFEAA7' : 'white', 
                   border: selectedItem === item ? '2px solid #FDCB6E' : '1px solid #eee',
                   borderRadius: '12px', textAlign: 'center', cursor: 'pointer'
                }}
              >
                 {item}
              </div>
           ))}
        </div>

        {selectedItem && (
            <div style={{ marginTop: '2rem' }}>
                <p>Great! You are donating <b>{selectedItem}</b>.</p>
                <Button variant="donor" onClick={() => alert('Thank you! A champion will contact you to arrange collection.')}>Confirm Donation</Button>
            </div>
        )}
     </>
  );

  return (
    <Layout>
      {donateType === 'item' ? renderItemDonation() : renderHome()}
    </Layout>
  );
}
