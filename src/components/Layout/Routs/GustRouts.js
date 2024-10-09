import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../../../pages/Login';

const GustRouts = () => {
  return (

    <Routes>
    <Route path="/" element={<Navigate to="/login" />} />
    <Route path="/login" element={<Login />} />
  </Routes>
  );
};

export default GustRouts;
