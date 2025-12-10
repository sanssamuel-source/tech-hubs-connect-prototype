import React, { useState } from 'react';
import Card from '../components/UI/Card';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function LoginScreen() {
  const { login } = useApp();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = () => {
     if(!email || !password) return alert('Please enter credentials');
     const name = email.split('@')[0];
     // Simple role detection for demo
     let role = 'guest';
     if(email.includes('admin')) role = 'admin';
     else if(email.includes('champion')) role = 'champion';
     login(role, name.charAt(0).toUpperCase() + name.slice(1));
     navigate('/home');
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
        
        {/* Background Decor */}
        <div style={{ position: 'absolute', top: -100, right: -100, width: '300px', height: '300px', background: 'var(--color-primary)', opacity: 0.1, borderRadius: '50%', filter: 'blur(80px)' }}></div>
        <div style={{ position: 'absolute', bottom: -50, left: -50, width: '200px', height: '200px', background: 'var(--color-accent-teal)', opacity: 0.1, borderRadius: '50%', filter: 'blur(60px)' }}></div>

        {/* Logo Section - FRONT AND CENTER */}
        <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '24px', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '320px'
        }}>
           <img src="/logo.png" alt="EduCube x UNICEF" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
        </div>

        <div style={{ width: '100%', maxWidth: '360px' }}>
           <h1 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '0.5rem', color: '#1e293b' }}>HubNetwork</h1>
           <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '2rem' }}>Empowering the future of Sierra Leone</p>

           <Card style={{ padding: '2rem', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
               <div style={{ marginBottom: '1rem' }}>
                  <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="champion@edu.sl" />
               </div>
               <div style={{ marginBottom: '1.5rem' }}>
                  <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
               </div>
               
               <Button variant="primary" onClick={handleAuth} style={{ padding: '16px', fontSize: '16px', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)' }}>
                  Sign In to Hub
               </Button>
           </Card>

           <div style={{ textAlign: 'center', marginTop: '2rem' }}>
               <p style={{ fontSize: '12px', color: '#94a3b8' }}>Powered by EduCube & UNICEF</p>
           </div>
        </div>
    </div>
  );
}
