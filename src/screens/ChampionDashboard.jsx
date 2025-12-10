import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import Select from '../components/UI/Select';
import { useApp } from '../context/AppContext';

export default function ChampionDashboard() {
  const { currentHub, selectHub, hubs } = useApp();
  const [tasks, setTasks] = useState([
    { id: 1, text: "Device check (laptops)", status: "incomplete" },
    { id: 2, text: "Student registration", status: "complete" },
    { id: 3, text: "Attendance", status: "incomplete" }
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: t.status === 'complete' ? 'incomplete' : 'complete' } : t));
  };

  const completedCount = tasks.filter(t => t.status === 'complete').length;
  const progress = (completedCount / tasks.length) * 100;

  return (
    <Layout>
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ marginBottom: '0.5rem' }}>Digital Champion</h2>
        <Select 
          label="Current Hub" 
          value={currentHub?.id || ''} 
          onChange={(e) => selectHub(e.target.value)}
          options={hubs.map(h => ({ value: h.id, label: h.name }))}
          placeholder="Select a hub..."
        />
      </div>

      {currentHub ? (
        <>
          <Card className="task-progress-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h3 style={{ margin: 0 }}>Daily Tasks</h3>
              <span style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>{Math.round(progress)}%</span>
            </div>
            <div style={{ height: '8px', background: '#eee', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${progress}%`, background: 'var(--color-success)', transition: 'width 0.3s' }}></div>
            </div>
            <div style={{ marginTop: '1rem' }}>
              {tasks.map(task => (
                <div 
                  key={task.id} 
                  onClick={() => toggleTask(task.id)}
                  style={{ 
                    padding: '12px', 
                    borderBottom: '1px solid #eee', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px',
                    cursor: 'pointer',
                    opacity: task.status === 'complete' ? 0.6 : 1
                  }}
                >
                  <div style={{ 
                    width: '20px', height: '20px', 
                    border: '2px solid var(--color-primary)', 
                    borderRadius: '50%', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: task.status === 'complete' ? 'var(--color-primary)' : 'transparent'
                  }}>
                    {task.status === 'complete' && <span style={{ color: 'white', fontSize: '12px' }}>✓</span>}
                  </div>
                  <span style={{ textDecoration: task.status === 'complete' ? 'line-through' : 'none' }}>{task.text}</span>
                </div>
              ))}
            </div>
          </Card>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <Card title="Upload" onClick={() => alert('Camera feature')}>
                <div style={{ fontSize: '2rem', textAlign: 'center' }}>📸</div>
                <p style={{ textAlign: 'center', margin: 0, fontSize: '12px' }}>Field Photos</p>
            </Card>
            <Card title="Inventory" onClick={() => window.location.href = '/inventory'}>
                <div style={{ fontSize: '2rem', textAlign: 'center' }}>📦</div>
                <p style={{ textAlign: 'center', margin: 0, fontSize: '12px' }}>Track Items</p>
            </Card>
          </div>
          
          <Card title="Leaderboard" description="Top Champions this week">
             <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #eee' }}>
                <span>🥇 Husseini</span>
                <b>98 pts</b>
             </div>
             <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                <span>🥈 Aisha</span>
                <b>90 pts</b>
             </div>
          </Card>
        </>
      ) : (
        <Card>
          <p style={{ textAlign: 'center', color: 'var(--color-text-mutated)' }}>Please select a hub to view tasks and tools.</p>
        </Card>
      )}
    </Layout>
  );
}
