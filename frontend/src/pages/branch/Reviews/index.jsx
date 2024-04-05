import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GetUserData from '../../../core/tools/getUser';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

import './reviews.css'

function Reviews() {
  const [reviews, setReviews] = useState([]);

  const [stationId, setStationId] = useState(0);

    useEffect(()=>{
        GetUserData().then((data) => {
            setStationId(data.user.station_id);
          });


        axios.get(`http://localhost:8000/api/read_reviews/${stationId}`).then((response)=>{
            setReviews(response.data.reviews);
        })
    },[stationId]);



    const handleStatusChange = (index, newStatus) => {
      const updatedReviews = [...reviews];
        updatedReviews[index].status = newStatus;
        setReviews(updatedReviews);

        axios.post('http://localhost:8000/api/approve_reviews', {
        review_id: updatedReviews[index].id,
        approved: newStatus === 'approved' ? 1 : 0
      }).then(response => {
        console.log(response.data.message);
      }).catch(error => {
        console.error('Error updating status:', error);
      });
       

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
                  <td>{new Date(value.created_at).toLocaleDateString()}</td>
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
