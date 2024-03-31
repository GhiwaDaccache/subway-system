import React from 'react';
import {useState } from "react";

import './StationInfo.css'


function StationInfo() {  
    const [isWorkingHours, setIsWorkingHours]  = useState(true);


    return(
    <div className="station-info flex column align-center">

            <div className="station-header full-w white-bg flex">
            <span
            onClick={() => {
                setIsWorkingHours(true);
              }}
              className={isWorkingHours ? 'tab-left active flex center' : 'tab-left flex center'}
            >Opening hours</span>

            <span onClick={() => {
                setIsWorkingHours(false);
              }}
              className={!isWorkingHours ? 'tab-right active flex center' : 'tab-right flex center'}>Facilities</span>
            </div>

            <div className={isWorkingHours ? 'tab-switch-left secondary-bg' : 'tab-switch-right secondary-bg'} >
                {isWorkingHours ? (
                <div>
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
                </div>) : (
                    <div>
                        <div className='facilities-section flex center '>
                            <div className='flex column gap center'>
                                <div className='facility white-bg'>facility name</div>
                                <div className='facility white-bg'>facility name</div>
                                <div className='facility white-bg'>facility name</div>
                                <div className='facility white-bg'>facility name</div>
                                <div className='facility white-bg'>facility name</div>
                                <div className='facility white-bg'>facility name</div>
                                <div className='facility white-bg'>facility name</div>
                            </div>
                        </div>
                    </div>

                )}
            </div>
    </div>
    );
}


export default StationInfo;