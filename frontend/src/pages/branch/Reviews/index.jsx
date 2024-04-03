import React from 'react';
import './style.css';

const reviews = [
  { description: 'really good', date: '2024-02-05', ride_id: 1, status: null },
  { description: 'really good', date: '2024-02-05', ride_id: 3, status: null },
  { description: 'really good', date: '2024-02-05', ride_id: 4, status: null },
  { description: 'really good', date: '2024-02-05', ride_id: 4, status: null },
  { description: 'really good', date: '2024-02-05', ride_id: 5, status: null },
  { description: 'really good', date: '2024-02-05', ride_id: 7, status: null },
  { description: 'really good', date: '2024-02-05', ride_id: 6, status: null },
  { description: 'really good', date: '2024-02-05', ride_id: 4, status: null },
];

function Reviews() {
  return (
    <div className="page flex center">
      <table className="reviews-table">
        <tr className="reviews-th white-text">
          <th>Description</th>
          <th>Date</th>
          <th>Ride</th>
          <th>Status</th>
        </tr>

        {reviews.map((value, key) => {
          return (
            <tr className="reviews-tr" key={key}>
              <td>{value.description}</td>
              <td>{value.date}</td>
              <td>{value.ride_id}</td>
              <td>{value.status == null ? '22' : value.status == 0 ? '0' : '1'}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Reviews;
