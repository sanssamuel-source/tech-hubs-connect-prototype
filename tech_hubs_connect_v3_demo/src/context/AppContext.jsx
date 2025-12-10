import React, { createContext, useState, useContext } from 'react';
import { ROLES, HUBS } from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); // { role: 'donor' | 'volunteer' | 'champion' | 'admin', ... }
  const [currentHub, setCurrentHub] = useState(null);
  
  const login = (roleId) => {
    const role = ROLES.find(r => r.id === roleId);
    setCurrentUser({ role: roleId, name: "Test User", ...role });
    // Default hub for testing if champion
    if (roleId === 'champion') {
      setCurrentHub(HUBS[0]);
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setCurrentHub(null);
  };

  const selectHub = (hubId) => {
    const hub = HUBS.find(h => h.id === hubId);
    setCurrentHub(hub);
  };

  return (
    <AppContext.Provider value={{ 
      currentUser, 
      currentHub, 
      login, 
      logout,
      selectHub,
      hubs: HUBS
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
