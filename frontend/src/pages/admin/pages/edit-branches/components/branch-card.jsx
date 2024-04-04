import React, { useState } from "react";
import axios from "axios";

function ViewBranches({ station ,updateStations}) {
  const { id, name, location, opening_time, closing_time, status } = station;

  const [isActive, setIsActive] = useState(
    status === 0 ? "Activate" : "Deactivate"
  );

  const editBranch = async () => {
    try {
      const newStatus = status === 0 ? 1 : 0;
      await axios.post("http://127.0.0.1:8000/api/update_station_status", {
        "id": id,
        "status": newStatus,
      });
  
    
      setIsActive(newStatus === 0 ? "Activate" : "Deactivate");
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };


  const deleteBranch = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/delete_station", {
        "id": id,
      });
      
    updateStations(id);  
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  


  

  return (
    <div className="branch-cards flex justify-around">
      <div className="flex column justify-around">
        <div>Branch Name:</div>
        <div>Location:</div>
      </div>
      <div className="flex column justify-around">
        <div>{name}</div>
        <div>{location}</div>
      </div>
      <div className="flex column justify-around">
        <div>Opening hour:</div>
        <div>Closing hour:</div>
      </div>
      <div className="flex column justify-around">
        <div>{opening_time}</div>
        <div>{closing_time}</div>
      </div>
      <div className="flex column justify-around">
        <div>
          <button className="branch-buttons" onClick={()=>editBranch()}>
            {isActive}
          </button>
        </div>
        <div>
          <button className="branch-buttons" onClick={()=>deleteBranch()}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default ViewBranches;
