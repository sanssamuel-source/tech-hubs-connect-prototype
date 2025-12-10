import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Layout from '../components/Layout/Layout';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';

// Fix Leaflet generic marker icon issue in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function MapView() {
  const { hubs, selectHub } = useApp();
  const navigate = useNavigate();

  // Sierra Leone center approx
  const center = [8.4606, -11.7799];

  return (
    <Layout>
      <div style={{ height: 'calc(100vh - 140px)', width: '100%', borderRadius: '14px', overflow: 'hidden', border: '1px solid #ddd' }}>
        <MapContainer center={center} zoom={8} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {hubs.map(hub => (
            <Marker key={hub.id} position={[hub.lat, hub.lon]}>
              <Popup>
                <div style={{ minWidth: '150px' }}>
                  <h3 style={{ margin: '0 0 5px 0', fontSize: '14px' }}>{hub.name}</h3>
                  <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>{hub.city}</p>
                  <p style={{ margin: '4px 0', fontSize: '12px' }}>{hub.laptops} Laptops</p>
                  <button 
                    style={{ 
                        background: 'var(--color-primary)', color: 'white', 
                        border: 'none', padding: '4px 8px', borderRadius: '4px', 
                        cursor: 'pointer', fontSize: '12px', width: '100%', marginTop: '8px' 
                    }}
                    onClick={() => { selectHub(hub.id); navigate('/profile'); }}
                  >
                    View Profile
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </Layout>
  );
}
