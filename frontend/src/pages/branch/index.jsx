import React from 'react';
import Navbar from './components/Navbar';

import { Outlet } from 'react-router';
import './branch.css';

function Branch() {
  return (
    <div className="page column">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Branch;
