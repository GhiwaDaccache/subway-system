import React from 'react';

import './StationInfo.css'


function StationInfo() {  
    return(
    <div className="station-info flex column align-center">

            <div className="station-header full-w white-bg flex">
            <span className='tab-left active flex center'>Opening hours</span>
            <span className='tab-right flex center'>Facilities</span>
            </div>

            <div className='tab-switch-left secondary-bg'>
            <div className="flex center station-title">
                <h1>New York station 18</h1>
            </div>

            <div className='flex column center gap station-hours'>
                <p>Working hours: </p>

                <div className='white-bg flex align-center justify-between'>
                <select><option value="Monady, April 1">Monady, April 1</option></select>
                </div>
            
                <div className='white-bg flex align-center justify-between'>
                <select><option value="09:00">09:00</option></select>  
                </div>
                
                <div className='white-bg flex align-center justify-between'>
                <select><option value="22:00">22:00</option></select>
                </div>
                
            </div>
            </div>

        </div>
    );
}

export default StationInfo;