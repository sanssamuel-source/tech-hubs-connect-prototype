import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

export default function InventoryScreen() {
  const [items, setItems] = useState([
    { id: 1, name: "Dell Latitude 5400", quantity: 15, status: "Good", lastUpdated: "2025-10-01" },
    { id: 2, name: "Projector Epson", quantity: 1, status: "Needs Repair", lastUpdated: "2025-09-15" },
    { id: 3, name: "Extension Leads", quantity: 5, status: "Good", lastUpdated: "2025-11-20" }
  ]);

  const handleAddItem = () => {
      const newItem = { id: items.length + 1, name: "New Item", quantity: 1, status: "Good", lastUpdated: "2025-12-10" };
      setItems([...items, newItem]);
  };

  return (
    <Layout>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2>Inventory</h2>
        <Button variant="primary" style={{ width: 'auto', padding: '8px 12px', fontSize: '12px' }} onClick={handleAddItem}>+ Add / Scan</Button>
      </div>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {items.map(item => (
          <Card key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
             <div>
                <h4 style={{ margin: '0 0 4px 0' }}>{item.name}</h4>
                <div style={{ fontSize: '12px', color: '#666' }}>Updated: {item.lastUpdated}</div>
             </div>
             <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>x{item.quantity}</div>
                <div style={{ 
                    fontSize: '10px', 
                    color: item.status === 'Good' ? 'green' : 'orange',
                    border: `1px solid ${item.status === 'Good' ? 'green' : 'orange'}`,
                    padding: '2px 4px', borderRadius: '4px', marginTop: '4px'
                }}>{item.status}</div>
             </div>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
