import React, { useEffect } from 'react';
import './components/sidebar.css';
import './index.css';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import CoinRequest from './pages/coin-requests';
import InviteManagers from './pages/add-managers';
import EditBranches from './pages/edit-branches';
import { Outlet } from 'react-router';

function Admin() {
  useEffect(() => {
    // send an api to check from the jwt if I'm an admin
    // check if admin
    // if not clear localstograge
    // -> login
  });

  return (
    <div className="flex full-w full-h">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Admin;
