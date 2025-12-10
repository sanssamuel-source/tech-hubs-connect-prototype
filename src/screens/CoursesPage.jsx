import React from 'react';
import Layout from '../components/Layout/Layout';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { MOCK_COURSES } from '../data/mockData';

export default function CoursesPage() {
  const handleAction = (course) => {
    if (course.url) {
      window.open(course.url, '_blank');
    } else {
      alert(`Opening course: ${course.title}`);
    }
  };

  return (
    <Layout>
      <h2>Courses & Learning</h2>
      <p style={{ color: '#666', marginBottom: '1.5rem' }}>Access offline-first educational content.</p>
      
      <div style={{ display: 'grid', gap: '1rem' }}>
        {MOCK_COURSES.map(course => (
          <Card key={course.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ 
                width: '40px', height: '40px', borderRadius: '50%', background: '#f0f2f5', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' 
              }}>
                {course.icon === 'medical-kit' ? '🚑' : 
                 course.icon === 'coin' ? '💰' : 
                 course.icon === 'computer' ? '💻' : '🔗'}
              </div>
              <span style={{ fontWeight: 'bold' }}>{course.title}</span>
            </div>
            <Button variant="outline" onClick={() => handleAction(course)} style={{ width: 'auto', padding: '8px 16px', fontSize: '12px' }}>
              Start
            </Button>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
