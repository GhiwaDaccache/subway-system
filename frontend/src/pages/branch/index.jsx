import React, { useEffect } from 'react';
import Navbar from './components/Navbar';

import { useNavigate } from 'react-router-dom';

import GetUserData from '../../core/tools/getUser';
import { Outlet } from 'react-router';
import './branch.css';

function Branch() {
  const navigate = useNavigate();

  useEffect(() => {
    GetUserData()
      .then((data) => {
        console.log(data);

        if (data.user.role !== 'manager') {
          navigate.push('/');

          localStorage.clear();
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  });

  return (
    <div className="page column">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Branch;
