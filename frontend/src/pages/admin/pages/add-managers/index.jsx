import ViewManagers from "./components/view-managers";
import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";

function InviteManagers() {
  const [managers, setManagers] = useState([]);

  const loadManagers = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/get_stations_with_manager_name"
      );

      setManagers(response.data);
    } catch (error) {
      console.error("Error loading managers data:", error);
    }
  };
  useEffect(() => {
    loadManagers();
  }, []);

  return (
    <div className="admin-container flex column">
      <div className="invite-input flex justify-around align-center">
        <input className="email-input light-blue-bg" type="email" placeholder="  Enter Manager's Email"></input>
        <button>Invite</button>
      
      </div>
      <div className="admin-view flex column">
      {managers.map((managercard) => {
            return <ViewManagers managercard={managercard} key={managercard.id}/>;
          })}
        
      
      </div>
    </div>
  );
}
export default InviteManagers;
