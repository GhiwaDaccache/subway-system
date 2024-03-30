import React from 'react';
import './app.css';
import { Outlet } from 'react-router'; // This Component will act as a placeholder for any child root

import Navbar from './pages/navbar';
import Footer from './pages/footer';

const App = () => {
  return (
    <div className="app_container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
