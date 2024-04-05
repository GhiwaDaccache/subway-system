import React, { useEffect, useState } from 'react';
import './app.css';
import { Outlet } from 'react-router'; // This Component will act as a placeholder for any child root

import { useNavigate } from 'react-router-dom';
import GetUserData from '../../core/tools/getUser';
import Navbar from './pages/navbar';
import Footer from './pages/footer';

const App = () => {
  const navigate = useNavigate();

  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const updateWindowSize = () => {
    setWindowSize({ height: window.innerHeight, width: window.innerWidth });
  };

  useEffect(() => {
    GetUserData()
      .then((data) => {
        console.log(data);

        if (data.user.role !== 'passenger') {
          navigate.push('/');
          localStorage.clear();
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  });

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
