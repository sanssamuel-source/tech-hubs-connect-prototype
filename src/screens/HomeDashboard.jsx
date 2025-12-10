import React from 'react';
import { useApp } from '../context/AppContext';
import Layout from '../components/Layout/Layout';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { useNavigate } from 'react-router-dom';

export default function HomeDashboard() {
  const { currentUser } = useApp();
  const navigate = useNavigate();

  if (!currentUser) return <div>Please log in</div>;

  const renderContent = () => {
    switch(currentUser.role) {
      case 'champion':
        return (
          <>
             <Card title="Digital Champions" description="Sign in → Select hub → Daily tasks → Upload photos" onClick={() => navigate('/champion-dashboard')}>
                <Button variant="primary">Open Tasks</Button>
             </Card>
             <Card title="Administrative" description="Access Learning Passport links">
                <Button variant="outline" onClick={() => navigate('/courses')}>View Courses</Button>
             </Card>
          </>
        );
      case 'donor':
        return (
           <>
             <Card title="Donate Here" description="Donate computers, food, clothes">
                <Button variant="primary" onClick={() => navigate('/donate')}>Donate</Button>
             </Card>
             <Card title="Impact Stories" description="See how your donations help">
                <Button variant="outline" onClick={() => navigate('/outreach')}>View Stories</Button>
             </Card>
           </>
        );
      case 'volunteer':
        return (
            <>
              <Card title="Be A Volunteer" description="Register for upcoming outreach">
                 <Button variant="primary" onClick={() => navigate('/volunteer-signup')}>Register</Button>
              </Card>
              <Card title="Field Outreach" description="Explore upcoming activities">
                 <Button variant="outline" onClick={() => navigate('/outreach')}>Explore</Button>
              </Card>
            </>
        );
      default:
        return <p>Unknown role</p>;
    }
  };

  return (
    <Layout>
      <div style={{ marginBottom: '1rem' }}>
        <h2 style={{margin:0}}>Dashboard</h2>
        <p style={{marginTop:'4px', color:'gray'}}>Welcome back, {currentUser.label}</p>
      </div>
      
      <div className="dashboard-cards" style={{ display: 'grid', gap: '1rem' }}>
        {renderContent()}
      </div>
    </Layout>
  );
}
