import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import HomeDashboard from './screens/HomeDashboard';
import ChampionDashboard from './screens/ChampionDashboard';
import DonorFlow from './screens/DonorFlow';
import MapView from './screens/MapView';
import HubProfile from './screens/HubProfile';
import CoursesPage from './screens/CoursesPage';
import OutreachPage from './screens/OutreachPage';
import VolunteerSignup from './screens/VolunteerSignup';
import AdminDashboard from './screens/AdminDashboard';
import InventoryScreen from './screens/InventoryScreen';
import NotificationsScreen from './screens/NotificationsScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/home" element={<HomeDashboard />} />
        <Route path="/champion-dashboard" element={<ChampionDashboard />} />
        <Route path="/donate" element={<DonorFlow />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/profile" element={<HubProfile />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/outreach" element={<OutreachPage />} />
        <Route path="/volunteer-signup" element={<VolunteerSignup />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/inventory" element={<InventoryScreen />} />
        <Route path="/notifications" element={<NotificationsScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
