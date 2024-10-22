import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MobileLayout from './layouts/MobileLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ClientDashboard from './pages/client/Dashboard';
import DriverDashboard from './pages/driver/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MobileLayout><Home /></MobileLayout>} />
        <Route path="/login" element={<MobileLayout><Login /></MobileLayout>} />
        <Route path="/register" element={<MobileLayout><Register /></MobileLayout>} />
        <Route path="/client" element={<MobileLayout><ClientDashboard /></MobileLayout>} />
        <Route path="/driver" element={<MobileLayout><DriverDashboard /></MobileLayout>} />
      </Routes>
    </Router>
  );
}

export default App;