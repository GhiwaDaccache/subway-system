import React from 'react';
import './components/sidebar.css';
import './index.css';
import Sidebar from './components/sidebar';
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
