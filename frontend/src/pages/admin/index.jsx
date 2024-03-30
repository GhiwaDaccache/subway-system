import React from 'react';
import './components/sidebar.css';
import './index.css';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';

function Admin() {
  return (
    <div className="flex full-w">
      <Sidebar/>
      <Dashboard/>
    </div>
  );
}

export default Admin;
