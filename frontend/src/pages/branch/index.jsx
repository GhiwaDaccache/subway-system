import React from 'react';
import Navbar from './components/Navbar'
import StationInfo from './components/StationInfo';
import RideCard from './components/RideCard';
import RideCardForm from './components/RideCardForm';

import AddIcon from '@mui/icons-material/Add';

import './branch.css'; 



function Branch() {  
  return (
    <div className="page column">
      <Navbar /> 
      <section className='flex'>
        <StationInfo/>
        <section className='rides-container flex column align-center full-w gap'>
          <div className='flex align-center full-w'>
            <AddIcon  className='icon'/>
            <RideCardForm />
          </div>
          <div className='flex align-center full-w gap'>
            <RideCard />
            <RideCard />
            <RideCard />
            <RideCard />
            <RideCard />
            <RideCard />
          </div>
        </section>
      </section>
    </div>
  );
}

export default Branch;