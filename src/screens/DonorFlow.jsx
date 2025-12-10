import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';

export default function DonorFlow() {
  const [step, setStep] = useState('dashboard'); // dashboard, donate, checkout
  const [amount, setAmount] = useState('');
  
  const handleDonate = (val) => {
    setAmount(val);
    setStep('checkout');
  };




  if (step === 'checkout') {
    return (
      <Layout>
        <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <h2>Confirm Donation</h2>
          <p style={{ fontSize: '1.5rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>
            ${amount}
          </p>
          <div style={{ margin: '2rem 0', padding: '1rem', background: '#f9f9f9', borderRadius: '8px' }}>
            <p>Mock Payment Gateway</p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
               <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>💳 Card</div>
               <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>📱 Mobile Money</div>
            </div>
          </div>
          <Button variant="primary" onClick={() => { alert('Donation Successful!\nReceipt emailed.'); setStep('dashboard'); }}>
            Pay Now
          </Button>
          <Button variant="outline" onClick={() => setStep('donate')} style={{ marginTop: '1rem' }}>
            Back
          </Button>
        </div>
      </Layout>
    );
  }

  if (step === 'donate') {
     return (
        <Layout>
            <h2>Make a Donation</h2>
            <Card title="Cash Donation" description="Support hub operations">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '1rem' }}>
                    {[10, 50, 100].map(val => (
                        <button 
                            key={val}
                            onClick={() => handleDonate(val)} 
                            className={`btn ${amount === val ? 'btn-primary' : 'btn-outline'}`}
                        >${val}</button>
                    ))}
                </div>
                <Input 
                    type="number" 
                    placeholder="Other Amount" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                />
                <Button variant="primary" onClick={() => setStep('checkout')} style={{marginTop:'1rem'}} disabled={!amount}>
                    Proceed
                </Button>
            </Card>

            <Card title="Donate Items" description="We need specific hardware">
                <ul style={{ paddingLeft: '20px', color: '#666' }}>
                    <li>Macbook Pro 2015+</li>
                    <li>Routers (4G/LTE)</li>
                    <li>Projectors</li>
                </ul>
                <Button variant="outline">I have equipment to ship</Button>
            </Card>
        </Layout>
     )
  }

  return (
    <Layout>
        <h2>Your Impact</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <Card className="stat-card" style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>50</div>
                <div style={{ fontSize: '12px', color: '#666' }}>Hubs Supported</div>
            </Card>
            <Card className="stat-card" style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-accent)' }}>15k</div>
                <div style={{ fontSize: '12px', color: '#666' }}>Learners</div>
            </Card>
        </div>

        <h3>Success Stories</h3>
        <Card title="Makeni Students Graduate" description="20 students completed the digital literacy program thanks to donated laptops.">
            <div style={{ height: '150px', background: '#eee', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
                📷 Photo
            </div>
            <div style={{ marginTop: '1rem' }}>
                <Button variant="outline">Read Full Story</Button>
            </div>
        </Card>

        <Button variant="primary" onClick={() => setStep('donate')} style={{ marginTop: '1rem', padding: '16px' }}>
           🎁 Donate Now
        </Button>
    </Layout>
  );
}
