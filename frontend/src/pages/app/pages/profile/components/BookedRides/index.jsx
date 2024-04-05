import React, { useContext, useEffect, useState } from 'react';
import { useUser } from '../../../..';

import './styles.css';

function BookedRides() {
  const userData = useUser();
  const [rides, setRides] = useState([
    {
      date: '2024-04-01',
      departure_time: '08:00 AM',
      arrival_time: '10:00 AM',
      price: '$50',
      departure_station: 'New York',
      arrival_station: 'Los Angeles',
    },
    {
      date: '2024-04-02',
      departure_time: '09:00 AM',
      arrival_time: '11:00 AM',
      price: '$60',
      departure_station: 'Los Angeles',
      arrival_station: 'San Francisco',
    },
    {
      date: '2024-04-03',
      departure_time: '10:00 AM',
      arrival_time: '12:00 PM',
      price: '$70',
      departure_station: 'San Francisco',
      arrival_station: 'Seattle',
    },
  ]);
  console.log(userData.user);

  // const getRides = async () => {
  //   const url = `http://127.0.0.1:8000/api/ride_from_station/${userData.user.id}`;

  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();

  //     return data;
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   getRides().then((rides) => {
  //     console.log(rides);
  //   });
  // }, []);

  return (
    <div className="booked_rides">
      <table className="booked_rides_table">
        <thead>
          <tr className="table_title">
            <th>Date</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Price</th>
            <th>Departure Station</th>
            <th>Arrival Station</th>
          </tr>
        </thead>

        <tbody>
          {rides.map((ride, index) => (
            <Ride key={index} {...ride} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Ride({ date, departure_time, arrival_time, price, departure_station, arrival_station }) {
  return (
    <tr className="booked_rides_info">
      <td>{date}</td>
      <td>{departure_time}</td>
      <td>{arrival_time}</td>
      <td>{price}</td>
      <td>{departure_station}</td>
      <td>{arrival_station}</td>
    </tr>
  );
}

export default BookedRides;
