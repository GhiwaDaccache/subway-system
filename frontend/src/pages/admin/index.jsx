import React, { useEffect } from 'react';
import './components/sidebar.css';
import './index.css';
import Sidebar from './components/sidebar';
import { Outlet } from 'react-router';
import { useNavigate } from 'react-router-dom';

import GetUserData from '../../core/tools/getUser';

function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    GetUserData()
      .then((data) => {
        console.log(data);

        if (data.user.role !== 'admin') {
          navigate.push('/');

          localStorage.clear();
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  });

  return (
    <div className="flex full-w full-h">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Admin;
