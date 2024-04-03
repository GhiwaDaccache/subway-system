import React from 'react';
import {useState, useEffect } from "react";
import axios from 'axios';

import './StationInfo.css'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Facility from '../Facility';


function StationInfo() {  
    const [isWorkingHours, setIsWorkingHours]  = useState(true);
    const [isFacility, setIsFacility]  = useState(false);
    const [facilities, setfacilities]  = useState({});
    const [opening_time, setOpening_time] = useState('');
    const [closing_time, setClosing_time] = useState('');
    
    useEffect(()=>{
        console.log(facilities)
    }, [facilities])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/get_available_facilities/1").then((response)=>{
            setfacilities(response.data.facilities);

        })
    },[]);


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
                                {Object.keys(facilities)
                                    .map((facility)=>{
                                    return <Facility 
                                    text={facility}
                                    status={facilities[facility] === 1}
                                    clickHandler={() => {
                                        axios.post("http://localhost:8000/api/update_facility", {...facilities, [facility]:facilities[facility] === 1 ? 0 : 1} ).then((response) =>{
                                            console.log(response.data.message)
                                        if(response.data.message === "updated successfully"){
                                                setfacilities({...facilities, [facility]:facilities[facility] === 1 ? 0 : 1})
                                            }
                                        }
                                            
                                        )
                                        
                                    }}
                                    />
                                })}
                            </div>
                        </div>
                    </div>

                )}
            </div>
    </div>
    );
}


export default StationInfo;