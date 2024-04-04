import React from 'react';
import './RideCard.css';

function RideCard({ride}){
    const { date, departure_time, arrival_time, arrival_station, price } = ride;
    return (
  
<div className='ride-card flex column'>
    <p><b>Date: </b> {date}</p>
    <p><b>Departure time: </b> {departure_time}</p>
    <p><b>Arrival time: </b> {arrival_time}</p>
    <p><b>Arrival station: </b> {arrival_station}</p>
    <p><b>Price: </b> {price}</p>
</div>
    )
    }

export default RideCard;
