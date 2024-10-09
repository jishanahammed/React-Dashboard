import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authtoken'); 
  if (!isAuthenticated || isAuthenticated === 'null' || isAuthenticated === '') {
    return <Navigate to="/login" replace />;
  }

  return children;  // If authenticated, render the children
};

export default ProtectedRoute;
