import React, { useState } from 'react';
import '../RideCard';

function RideCardForm() {
  const [date, setDate] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [arrivalStation, setArrivalStation] = useState('');
  const [price, setPrice] = useState('');

  return (
    <div className="ride-card flex column">
      <p>
        <b>Date </b>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </p>

      <p>
        <b>Departure-time </b>
        <input type="time" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} />
      </p>

      <p>
        <b>Arrival-time </b>
        <input type="time" value={arrivalTime} onChange={(e) => setArrivalTime(e.target.value)} />
      </p>

      <p>
        <b>Arrival-station </b>
        <input type="text" value={arrivalStation} onChange={(e) => setArrivalStation(e.target.value)} />
      </p>

      <p>
        <b>Price </b>
        <input type="number" min="0" value={price} onChange={(e) => setPrice(e.target.value)} />
      </p>
    </div>
  );
}

export default RideCardForm;
