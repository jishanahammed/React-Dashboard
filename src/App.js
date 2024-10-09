import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';  // Correctly import Layout
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import Kanban from './pages/Kanban'
import GustRouts from './components/Layout/Routs/GustRouts';
import AuthRouts from './components/Layout/Routs/AuthRouts';
function App() {
  return (
    <Router>   
      <GustRouts/>
      <AuthRouts/>
    </Router>
  );
}

export default App;
