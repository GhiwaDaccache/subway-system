import React from 'react';
import './admin.css';
import './index.css';
import Sidebar from './sidebar';

function Admin() {
  return (
    <div className="flex full-w">
      <Sidebar/>
      <div className='admin-dashboard flex column'>
        <div className='dashboard-buttons flex justify-around align-center'>
          <button>Passengers</button>
          <button>Stations</button>
          <button>Rides</button>
          <button>Reviews</button>  
        </div>
        <div className='dashboard-veiw'>

        </div>
      </div>
      
    </div>
  );
}

export default Admin;
