import React from 'react';
import './RideCard.css'

function RideCard(){ 
    return (
  
<div className='ride-card flex column'>
    <p><b>Date: </b> 12-04-2024</p>
    <p><b>Departure-time: </b> 9h10</p>
    <p><b>Arrivel-time: </b> 9h35</p>
    <p><b>Arrival-station: </b> NYC 21</p>
    <p><b>Price: </b> 4$</p>
</div>
    )
}

export default RideCard