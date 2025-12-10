import React from 'react';
import Layout from '../components/Layout/Layout';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

export default function CoursesPage() {
  
  const CourseCard = ({ title, modules, icon, color }) => (
    <Card style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '10px' }}>
        <div style={{ fontSize: '1.8rem', color: color }}>{icon}</div>
        <div style={{ flex: 1 }}>
            <h4 style={{ margin: 0, fontSize: '14px' }}>{title}</h4>
            <div style={{ fontSize: '11px', color: '#999' }}>{modules} Modules</div>
        </div>
        <Button variant="outline" style={{ width: 'auto', padding: '6px 12px', fontSize: '11px' }}>Start</Button>
    </Card>
  );

  const SectionTitle = ({ title }) => (
     <h3 style={{ 
        fontSize: '14px', 
        textTransform: 'uppercase', 
        color: '#666', 
        borderBottom: '2px solid #eee', 
        paddingBottom: '5px',
        marginTop: '1.5rem',
        marginBottom: '1rem'
     }}>
        {title}
     </h3>
  );

  return (
    <Layout>
      <h2 style={{ marginBottom: '0.5rem' }}>Course Catalog</h2>
      <p style={{ fontSize: '13px', color: '#666' }}>Select a category to begin learning.</p>

      {/* 1. Life Skills */}
      <SectionTitle title="❤️ Life Skills" />
      <CourseCard title="Conflict Resolution" modules={5} icon="🤝" color="#FF7675" />
      <CourseCard title="Critical Thinking" modules={8} icon="🧠" color="#FF7675" />
      <CourseCard title="Leadership 101" modules={4} icon="⭐" color="#FF7675" />

      {/* 2. Digital Literacy */}
      <SectionTitle title="💻 Digital Literacy" />
      <CourseCard title="Introduction to Computers" modules={10} icon="🖥️" color="#0984e3" />
      <CourseCard title="Internet Safety" modules={6} icon="🛡️" color="#0984e3" />
      <CourseCard title="Microsoft Office Basics" modules={12} icon="📝" color="#0984e3" />

      {/* 3. Learning Passport */}
      <SectionTitle title="📘 Learning Passport" />
      <Card style={{ background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)', color: 'white', textAlign: 'center' }}>
           <h3 style={{ margin: '0 0 10px 0', color: 'white' }}>Official UNICEF Platform</h3>
           <p style={{ fontSize: '13px', opacity: 0.9, marginBottom: '15px' }}>
             Access the full national curriculum, exams, and certifications.
           </p>
           <Button style={{ background: 'white', color: '#0072FF', border: 'none' }} onClick={() => window.open('https://learningpassport.org', '_blank')}>
              Launch Learning Passport ↗
           </Button>
      </Card>

      {/* 4. Financial Literacy */}
      <SectionTitle title="💰 Financial Literacy" />
      <CourseCard title="Budgeting & Saving" modules={5} icon="🐷" color="#00b894" />
      <CourseCard title="Mobile Money Safety" modules={3} icon="📱" color="#00b894" />
      <CourseCard title="Entrepreneurship" modules={8} icon="🚀" color="#00b894" />

    </Layout>
  );
}
