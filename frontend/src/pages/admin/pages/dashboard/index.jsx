import PassengerCard from "./components/passenger-card";
import StationCard from "./components/stations-card";
import RideCard from "./components/ride-card";
import "./index.css";

function Dashboard() {
  return (
    <div className="admin-dashboard flex column">
      <div className="dashboard-buttons flex justify-around align-center">
        <button>Passengers</button>
        <button>Stations</button>
        <button>Rides</button>
        <button>Reviews</button>
      </div>
      <div className="dashboard-veiw flex column">
        <PassengerCard/>
        <StationCard/>
        <RideCard/>
        
      </div>
    </div>
  );
}
export default Dashboard;
