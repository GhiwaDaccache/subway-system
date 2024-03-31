import React from 'react';
import Navbar from './components/Navbar'
import StationInfo from './components/StationInfo';

import './branch.css'; 



function Branch() {  
  return (
    <div className="page column">
      <Navbar /> 
      <StationInfo/>
    </div>
  );
}

export default Branch;