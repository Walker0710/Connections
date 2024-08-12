import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Game from './component/Game';
import Login from './component/Login';
import Register from './component/Register';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Profile from './component/Profile';

function AppContent() {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === '/login' || location.pathname === '/register';
  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/game' exact element={<Game />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/register' exact element={<Register />} />
        <Route path='/profile' exact element={<Profile />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <>
      <Router>
        <AppContent />
      </Router>
    </>
  );
}

export default App;