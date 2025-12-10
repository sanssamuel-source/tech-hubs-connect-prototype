import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import Select from '../components/UI/Select';
import { useApp } from '../context/AppContext';

/* Feature 1: Digital Champions Section logic */

export default function ChampionDashboard() {
  const { currentHub, selectHub, hubs } = useApp();
  const [tasks, setTasks] = useState([
    { id: 1, text: "Device check (15 Laptops)", status: "incomplete" },
    { id: 2, text: "Student Registration Sync", status: "complete" },
    { id: 3, text: "Morning Attendance", status: "incomplete" }
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: t.status === 'complete' ? 'incomplete' : 'complete' } : t));
  };
  
  const progress = (tasks.filter(t => t.status === 'complete').length / tasks.length) * 100;

  return (
    <Layout>
      <div style={{ padding: '0 0.5rem' }}>
        <h2 style={{ marginBottom: '0.2rem' }}>Champion Board</h2>
        <p style={{ fontSize: '12px', color: '#666', marginBottom: '1rem' }}>Support Manager • Track Impact • Earn Badges</p>
        
        <Select 
          label="Select Hub to Manage"
          value={currentHub?.id || ''} 
          onChange={(e) => selectHub(e.target.value)}
          options={hubs.map(h => ({ value: h.id, label: h.name }))}
        />
      </div>

      {currentHub ? (
        <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
          
          {/* Daily Tasks */}
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <b>Daily Tasks</b>
              <span style={{ color: 'var(--color-primary)' }}>{Math.round(progress)}%</span>
            </div>
            <div style={{ height: '6px', background: '#eee', borderRadius: '3px', marginBottom: '10px' }}>
               <div style={{ height: '100%', width: `${progress}%`, background: 'var(--grad-primary)', borderRadius: '3px' }}></div>
            </div>
            {tasks.map(task => (
                <div key={task.id} onClick={() => toggleTask(task.id)} style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0', display: 'flex', gap: '8px', cursor: 'pointer' }}>
                   <span>{task.status === 'complete' ? '✅' : '⭕'}</span>
                   <span style={{ opacity: task.status === 'complete' ? 0.5 : 1 }}>{task.text}</span>
                </div>
            ))}
          </Card>

          {/* Actions Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
             <Card onClick={() => alert('Opening Weekly Plan Editor...')} style={{ textAlign: 'center', cursor: 'pointer' }}>
                <div style={{ fontSize: '1.5rem' }}>📅</div>
                <div style={{ fontSize: '12px', fontWeight: 'bold' }}>Weekly Plan</div>
             </Card>
             <Card onClick={() => alert('Opening Camera...')} style={{ textAlign: 'center', cursor: 'pointer' }}>
                <div style={{ fontSize: '1.5rem' }}>📸</div>
                <div style={{ fontSize: '12px', fontWeight: 'bold' }}>Field Photos</div>
             </Card>
             <Card onClick={() => alert('Opening Learning Passport Courses...')} style={{ textAlign: 'center', cursor: 'pointer' }}>
                <div style={{ fontSize: '1.5rem' }}>🎓</div>
                <div style={{ fontSize: '12px', fontWeight: 'bold' }}>Take Course</div>
             </Card>
             <Card onClick={() => window.location.href = '/inventory'} style={{ textAlign: 'center', cursor: 'pointer' }}>
                <div style={{ fontSize: '1.5rem' }}>📦</div>
                <div style={{ fontSize: '12px', fontWeight: 'bold' }}>Inventory</div>
             </Card>
          </div>

          {/* Leaderboard */}
          <Card style={{ background: '#FFF9F0', border: '1px solid #FFE4C0' }}>
             <h4 style={{ margin: '0 0 10px 0', color: '#E58E26' }}>🏆 Champion of the Week</h4>
             <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#ffcc00', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>H</div>
                <div style={{ flex: 1 }}>
                   <b>Husseini</b>
                   <div style={{ fontSize: '11px', color: '#666' }}>Freetown Hub • 980 pts</div>
                </div>
                <span style={{ fontSize: '1.2rem' }}>🥇</span>
             </div>
          </Card>

        </div>
      ) : (
         <p style={{ textAlign: 'center', marginTop: '2rem', color: '#999' }}>Select a hub to view dashboard.</p>
      )}
    </Layout>
  );
}
