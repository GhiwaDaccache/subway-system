import React from 'react';

import './styles.css';

function BookedRides() {
  return (
    <div className="booked_rides">
      <table className="booked_rides_table">
        <thead>
          <tr className="table_title">
            <th>Name</th>
            <th>Date</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Arrival Station</th>
            <th>Price</th>
            <th>Ratings</th>
          </tr>
        </thead>

        <tbody>
          <tr className="booked_rides_info">
            <td>John</td>
            <td>2024-04-01</td>
            <td>08:00 AM</td>
            <td>10:00 AM</td>
            <td>New York</td>
            <td>$50</td>
            <td>4.5</td>
          </tr>
          <tr className="booked_rides_info">
            <td>Alice</td>
            <td>2024-04-02</td>
            <td>09:30 AM</td>
            <td>12:00 PM</td>
            <td>Los Angeles</td>
            <td>$70</td>
            <td>4.2</td>
          </tr>
          <tr className="booked_rides_info">
            <td>Michael</td>
            <td>2024-04-03</td>
            <td>11:00 AM</td>
            <td>02:00 PM</td>
            <td>Chicago</td>
            <td>$60</td>
            <td>4.7</td>
          </tr>
          <tr className="booked_rides_info">
            <td>Sarah</td>
            <td>2024-04-04</td>
            <td>10:45 AM</td>
            <td>01:30 PM</td>
            <td>Miami</td>
            <td>$55</td>
            <td>4.3</td>
          </tr>
          <tr className="booked_rides_info">
            <td>David</td>
            <td>2024-04-05</td>
            <td>07:15 AM</td>
            <td>09:45 AM</td>
            <td>Seattle</td>
            <td>$65</td>
            <td>4.8</td>
          </tr>

          <tr className="booked_rides_info">
            <td>John</td>
            <td>2024-04-01</td>
            <td>08:00 AM</td>
            <td>10:00 AM</td>
            <td>New York</td>
            <td>$50</td>
            <td>4.5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// c date departure_time arrival_time price arrival_station

export default BookedRides;
