import React from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function LoginSelect() {
  const { login } = useApp();
  const navigate = useNavigate();

  const handleLogin = (roleId) => {
    login(roleId);
    navigate('/home');
  };

  return (
    <div className="login-screen" style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Tech Hubs Connect</h1>
      <p>Choose your role to continue</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
        <button onClick={() => handleLogin('donor')} className="btn btn-primary">DONOR</button>
        <button onClick={() => handleLogin('volunteer')} className="btn btn-outline">VOLUNTEER</button>
        <button onClick={() => handleLogin('champion')} className="btn btn-dark">HUB ADMIN</button>
      </div>
    </div>
  );
}
