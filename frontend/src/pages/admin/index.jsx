import React from 'react';
import './components/sidebar.css';
import './index.css';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import CoinRequest from './pages/coin-requests';
import InviteManagers from './pages/add-managers';

function Admin() {
  return (
    <div className="flex full-w">
      <Sidebar/>
      {/* <Dashboard/> */}
      {/* <CoinRequest/> */}
      <InviteManagers/>

    </div>
  );
}

export default Admin;
