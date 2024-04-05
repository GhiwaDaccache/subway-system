import React from 'react';
import {useState, useEffect } from "react";
import axios from 'axios';

import StationInfo from '../components/StationInfo';
import RideCard from '../components/RideCard';
import RideCardForm from '../components/RideCardForm';
import GetUserData from '../../../core/tools/getUser';

import '../branch.css';



function Stations() {

    const [rides, setRides]  = useState([]);
    const [stationId, setStationId] = useState(0);

    useEffect(()=>{
        GetUserData().then((data) => {
            setStationId(data.user.station_id);
          });


        axios.get(`http://localhost:8000/api/ride_from_station/${stationId}`).then((response)=>{
            setRides(response.data.rides_from_station);
        })
    },[stationId]);

    return (
    <section className='flex branch-page'>
        <StationInfo/>
        <section className='rides-container flex column align-center gap'>
            <div className='flex align-center full-w'>
                <RideCardForm />
            </div>
            <div className="flex align-center full-w gap">
                {rides.map((ride) => {
                        return( 
                            <RideCard ride={ride} key={ride.id} /> 
                        )
                })
                }
            </div>
        </section>
    </section>
    );
}

export default Stations;