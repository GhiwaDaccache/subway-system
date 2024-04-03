import React from 'react';
import {useState } from "react";

import './StationInfo.css'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';


function StationInfo() {  
    const [isWorkingHours, setIsWorkingHours]  = useState(true);
    const [isFacility, setIsFacility]  = useState(false);
    const [opening_time, setOpening_time] = useState('');
    const [closing_time, setClosing_time] = useState('');


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

                    <div className='flex column center station-hours'>
                        <p>From: </p>
                    
                        <div className='white-bg flex align-center justify-between'>
                        <input type="time" value={opening_time}
                        onChange={(e) => setOpening_time(e.target.value)} />  
                        </div>
                        
                        <p>Till: </p>
                        <div className='white-bg flex align-center justify-between'>
                        <input type="time" value={closing_time} 
                        onChange={(e) => setClosing_time(e.target.value)} />
                         </div>

                        <div className='secondary-bg flex align-center justify-between'>
                        <button className="submit-btn full-w full-h white-text">Submit</button>
                        </div>
                        
                    </div>
                </div>) : (
                    <div>
                        <div className='facilities-section flex center '>
                            <div className='flex column gap center'>
                                <div className='facility white-bg flex align-center justify-between'>
                                    Wheelchair accessibility 
                                    <span
                                    onClick={() => {
                                        !isFacility ? setIsFacility(true) : setIsFacility(false)
                                      }}>
                                    {!isFacility ? <RadioButtonUncheckedIcon/> : <RadioButtonCheckedIcon/>}
                                    </span>
                                </div>

                                <div className='facility white-bg flex align-center justify-between'>Wifi
                                <span
                                    onClick={() => {
                                        !isFacility ? setIsFacility(true) : setIsFacility(false)
                                      }}>
                                    {!isFacility ? <RadioButtonUncheckedIcon/> : <RadioButtonCheckedIcon/>}
                                    </span>
                                </div>
                                
                                <div className='facility white-bg flex align-center justify-between'>Self check-in</div>
                                <div className='facility white-bg flex align-center justify-between'>Braille guidelines</div>
                                <div className='facility white-bg flex align-center justify-between'>Vending machine</div>
                                <div className='facility white-bg flex align-center justify-between'>information desk</div>
                                <div className='facility white-bg flex align-center justify-between'>toilets</div>
                            </div>
                        </div>
                    </div>

                )}
            </div>
    </div>
    );
}


export default StationInfo;