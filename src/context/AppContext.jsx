import React, { createContext, useContext, useState, useEffect } from 'react';
import { HUBS, ROLES, MOCK_OUTREACH, MOCK_COURSES } from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // 1. Initialize State from LocalStorage or Defaults
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('thc_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [currentHub, setCurrentHub] = useState(() => {
    const saved = localStorage.getItem('thc_hub');
    return saved ? JSON.parse(saved) : null;
  });

  const [inventory, setInventory] = useState(() => {
     const saved = localStorage.getItem('thc_inventory');
     return saved ? JSON.parse(saved) : [];
  });

  const [volunteers, setVolunteers] = useState(() => {
    const saved = localStorage.getItem('thc_volunteers');
    return saved ? JSON.parse(saved) : [];
  });

  // 2. Persist State Changes
  useEffect(() => localStorage.setItem('thc_user', JSON.stringify(currentUser)), [currentUser]);
  useEffect(() => localStorage.setItem('thc_hub', JSON.stringify(currentHub)), [currentHub]);
  useEffect(() => localStorage.setItem('thc_inventory', JSON.stringify(inventory)), [inventory]);
  useEffect(() => localStorage.setItem('thc_volunteers', JSON.stringify(volunteers)), [volunteers]);

  // Actions
  const login = (roleId, name) => {
    const role = ROLES.find(r => r.id === roleId);
    setCurrentUser({ ...role, name: name || 'User' });
  };

  const logout = () => {
    setCurrentUser(null);
    setCurrentHub(null);
    localStorage.clear();
  };

  const selectHub = (hubId) => {
    const hub = HUBS.find(h => h.id === parseInt(hubId));
    setCurrentHub(hub);
  };

  const addInventoryItem = (item) => {
      setInventory([...inventory, { ...item, id: Date.now() }]);
  };

  const registerVolunteer = (data) => {
      setVolunteers([...volunteers, { ...data, id: Date.now(), status: 'Pending' }]);
  };

  return (
    <AppContext.Provider value={{
      currentUser,
      currentHub,
      hubs: HUBS,
      activeCourses: MOCK_COURSES,
      outreach: MOCK_OUTREACH,
      inventory,
      volunteers,
      login,
      logout,
      selectHub,
      addInventoryItem,
      registerVolunteer
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
