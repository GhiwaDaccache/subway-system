import PassengerCard from "./components/passenger-card";
import StationCard from "./components/stations-card";
import RideCard from "./components/ride-card";
import ReviewCard from "./components/review-card";
import "./index.css";

function Dashboard() {
  return (
    <div className="admin-container flex column">
      <div className="dashboard-buttons flex justify-around align-center">
        <button>Passengers</button>
        <button>Stations</button>
        <button>Rides</button>
        <button>Reviews</button>
      </div>
      <div className="admin-view flex column">
        <PassengerCard />
        <StationCard />
        <RideCard />
        <ReviewCard />
      </div>
    </div>
  );
}
export default Dashboard;
