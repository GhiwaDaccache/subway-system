import React, { useEffect, useState } from 'react';
import './app.css';
import { Outlet } from 'react-router'; // This Component will act as a placeholder for any child root

import Navbar from './pages/navbar';
import Footer from './pages/footer';

const App = () => {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const updateWindowSize = () => {
    setWindowSize({ height: window.innerHeight, width: window.innerWidth });
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowSize);
  }, []);

  return (
    <div className="app_container">
      <Navbar windowSize={windowSize} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
