import React from 'react';
import {useState, useEffect } from "react";
import axios from 'axios';

import StationInfo from '../components/StationInfo';
import RideCard from '../components/RideCard';
import RideCardForm from '../components/RideCardForm';

import AddIcon from '@mui/icons-material/Add';
import '../branch.css';



function Stations() {

    const [rides, setRides]  = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/ride_from_station/1").then((response)=>{
            setRides(response.data.rides_from_station);
  
        })
    },[]);

    return (
    <section className='flex branch-page'>
        <StationInfo/>
        <section className='rides-container flex column align-center gap'>
            <div className='flex align-center full-w'>
                <AddIcon className='icon'/>
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