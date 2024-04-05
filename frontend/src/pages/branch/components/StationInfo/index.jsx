import React from 'react';
import {useState, useEffect } from "react";
import axios from 'axios';
import GetUserData from '../../../../core/tools/getUser';
import './StationInfo.css'
import Facility from '../Facility';


function StationInfo() {  
    const [isWorkingHours, setIsWorkingHours]  = useState(true);
    const [facilities, setFacilities]  = useState({});
    const [openingTime, setOpeningTime] = useState('');
    const [closingTime, setClosingTime] = useState('');
    const [stationName, setStationName] = useState('');

    const [stationId, setStationId] = useState(0);

    useEffect(()=>{
        GetUserData().then((data) => {
            setStationId(data.user.station_id);
          });

        if(stationId != 0){
            axios.get(`http://localhost:8000/api/get_available_facilities/${stationId}`).then((response)=>{
                setFacilities(response.data.facilities);
            })
    
            axios.get(`http://localhost:8000/api/get_station_by_id/${stationId}`).then((response)=>{
                setOpeningTime(response.data.opening_time);
                setClosingTime(response.data.closing_time);
                setStationName(response.data.name);
            })
        }
    },[stationId]);



    const submitHandler = () => {
        axios.post("http://localhost:8000/api/update_station_hours", 
        {"opening_time":openingTime, "closing_time":closingTime, "station_id":stationId}).then((response) =>{

        if(response.data.message !== "Station hours updated successfully"){
                alert("Failed to update station hours")
            }
        })
    }


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
                    <h1>{stationName}</h1>
                </div>

                <div className='flex column center station-hours'>
                    <p>From: </p>
                
                    <div className='white-bg flex align-center justify-between'>
                    <input type="time" value={openingTime}
                    onChange={(e) => setOpeningTime(e.target.value)} />  
                    </div>
                    
                    <p>Till: </p>
                    <div className='white-bg flex align-center justify-between'>
                    <input type="time" value={closingTime} 
                    onChange={(e) => setClosingTime(e.target.value)} />
                        </div>

                    <div className='secondary-bg flex align-center justify-between'>
                    <button className="submit-btn full-w full-h white-text"
                    onClick={submitHandler}
                    >Submit</button>
                    </div>
                    
                </div>
            </div>) : (
                <div>
                    <div className='facilities-section flex center '>
                        <div className='flex column gap center'>
                            {Object.keys(facilities)
                                .map((facility)=>{
                                    {if(facility !== "id" && facility !== "station_id" && facility !== "created_at" && facility !== "updated_at" ){

                                        return( 
                                        <Facility 
                                        key={facility}
                                        text={facility}
                                        status={facilities[facility] === 1}

                                        clickHandler={() => {
                                            axios.post("http://localhost:8000/api/update_facility", {...facilities, [facility]:facilities[facility] === 1 ? 0 : 1} ).then((response) =>{

                                            if(response.data.message === "updated successfully"){
                                                    setFacilities({...facilities, [facility]:facilities[facility] === 1 ? 0 : 1})
                                                }
                                            })
                                        }}
                                        />)
                                }}
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