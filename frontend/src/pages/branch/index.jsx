import React, { useEffect } from 'react';
import Navbar from './components/Navbar';

import GetUserData from '../../core/tools/getUser';
import { Outlet } from 'react-router';
import './branch.css';

function Branch() {
  useEffect(() => {
    GetUserData().then((data) => {
      console.log(data);
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
