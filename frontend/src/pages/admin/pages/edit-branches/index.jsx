import ViewBranches from "./components/branch-card";
import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";

function EditBranches() {
  
  const [stations, setStations] = useState([]);

  const loadStations = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/get_all_stations"
      );

      setStations(response.data);
    } catch (error) {
      console.error("Error loading stations data:", error);
    }
  };
  useEffect(() => {
    loadStations();
  }, []);


  const updateStationsAfterDelete = (deletedStationId) => {
    setStations(stations.filter(station => station.id !== deletedStationId));
  };


  return (
    <div className="admin-container flex column">
      
 
      <div className="admin-view flex column">
        {stations.map((station) => {
            return <ViewBranches station={station} key={station.id} updateStations={updateStationsAfterDelete}/>;
          })}

      </div>
      
    </div>
  );
}
export default EditBranches;