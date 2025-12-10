import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export default function Layout({ children }) {
  const { currentUser, logout } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  // Simple nav items map (could be improved)
  const navItems = [
    { label: 'Home', path: '/home', icon: '🏠' },
    { label: 'Map', path: '/map', icon: '🗺️' },
    { label: 'Profile', path: '/profile', icon: '👤' }
  ];

  return (
    <div className="app-shell">
      <div style={{ padding: '0 26px', height: '44px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', fontWeight: '600', background: 'white' }}>
        <span>9:41</span>
        <div style={{ display: 'flex', gap: '6px' }}>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>
      <header className="app-header">
        <div className="brand-logo" onClick={() => navigate('/home')} style={{cursor:'pointer'}}>
          <img src="/logo.png" alt="EduCube x UNICEF" style={{ height: '40px', objectFit: 'contain' }} />
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button onClick={() => navigate('/notifications')} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}>🔔</button>
            {currentUser && (
                <div style={{display:'flex', gap:'8px'}}>
                    {/* <span style={{fontSize:'12px', alignSelf:'center'}}>{currentUser.name}</span> */}
                    <button onClick={() => { logout(); navigate('/login'); }} style={{border:'none', background:'none', color:'var(--color-danger)'}}>
                    Logout
                    </button>
                </div>
            )}
        </div>
      </header>

      <main className="app-content">
        {children}
      </main>

      {currentUser && (
        <nav className="bottom-nav">
          {navItems.map(item => (
            <button 
              key={item.path} 
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              <span style={{fontSize: '20px'}}>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}
