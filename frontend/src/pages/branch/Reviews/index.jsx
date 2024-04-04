import React, { useState } from 'react';
import './reviews.css';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

function Reviews() {
  const [reviews, setReviews] = useState([
    { description: 'really good', date: '2024-02-05', ride_id: 1, status: null },
    { description: 'really good', date: '2024-02-05', ride_id: 3, status: null },
    { description: 'really good', date: '2024-02-05', ride_id: 4, status: null },
    { description: 'really good', date: '2024-02-05', ride_id: 4, status: null },
    { description: 'really good', date: '2024-02-05', ride_id: 5, status: null },
    { description: 'really good', date: '2024-02-05', ride_id: 7, status: null },
    { description: 'really good', date: '2024-02-05', ride_id: 6, status: null },
    { description: 'really good', date: '2024-02-05', ride_id: 4, status: null },
  ]);

  const handleStatusChange = (index, newStatus) => {
    const updatedReviews = [...reviews];
    updatedReviews[index].status = newStatus;
    setReviews(updatedReviews);
  };

  return (
    <div className="page flex center">
      <table className="reviews-table">
        <thead>
          <tr className="reviews-th white-text">
            <th>Description</th>
            <th>Date</th>
            <th>Ride</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {reviews.map((value, index) => {
            return (
              <tr className="reviews-tr" key={index}>
                <td>{value.description}</td>
                <td>{value.date}</td>
                <td>{value.ride_id}</td>
                <td>
                  {value.status === null ? (
                    <NullStatus index={index} onStatusChange={handleStatusChange} />
                  ) : value.status === 'approved' ? (
                    <CheckCircleIcon />
                  ) : (
                    <CancelIcon />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function NullStatus({ index, onStatusChange }) {
  return (
    <div className="flex a-center justify-evenly">
      <CheckCircleOutlineIcon value="approved" className="custom_status_icons" onClick={() => onStatusChange(index, 'approved')} />
      <HighlightOffIcon value="declined" className="custom_status_icons" onClick={() => onStatusChange(index, 'declined')} />
    </div>
  );
}

export default Reviews;
