import React, { createContext, useContext, useEffect, useState } from 'react';
import './app.css';
import { Outlet, useNavigate } from 'react-router-dom';
import GetUserData from '../../core/tools/getUser';
import Navbar from './pages/navbar';
import Footer from './pages/footer';

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

const App = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetUserData();
        if (data.user.role !== 'passenger') {
          navigate('/');
          localStorage.clear();
        } else {
          setUserData(data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetUserData();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, []);

  // Update window size
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const updateWindowSize = () => {
    setWindowSize({ height: window.innerHeight, width: window.innerWidth });
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowSize);
    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  return (
    <div className="app_container">
      <Navbar windowSize={windowSize} />
      {/* Provide user data through UserContext */}
      <UserContext.Provider value={userData}>
        <Outlet />
      </UserContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
