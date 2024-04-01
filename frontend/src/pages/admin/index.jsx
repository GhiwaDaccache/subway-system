import React from 'react';
import './components/sidebar.css';
import './index.css';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import CoinRequest from './pages/coin-requests';
import InviteManagers from './pages/add-managers';
import EditBranches from './pages/edit-branches';
import { Outlet } from 'react-router';

function Admin() {
  return (
    <div className="flex full-w full-h">
      <Sidebar/>
      <Outlet/>
  
  
    </div>
  );
}

export default Admin;
