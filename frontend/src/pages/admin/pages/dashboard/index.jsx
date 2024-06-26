import PassengerCard from "./components/passenger-card";
import StationCard from "./components/stations-card";
import RideCard from "./components/ride-card";
import ReviewCard from "./components/review-card";
import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [toggleContent, setToggleContent] = useState({
    passengers: true,
    stations: false,
    rides: false,
    reviews: false,
  });

  const handleToggleContent = (e) => {
    setToggleContent({
      passengers: false,
      stations: false,
      rides: false,
      reviews: false,
    });

    switch (e.target.value) {
      case "passengers":
        setToggleContent((prev) => ({ ...prev, passengers: true }));
        break;
      case "stations":
        setToggleContent((prev) => ({ ...prev, stations: true }));
        break;
      case "rides":
        setToggleContent((prev) => ({ ...prev, rides: true }));
        break;
      case "reviews":
        setToggleContent((prev) => ({ ...prev, reviews: true }));
        break;
    }
  };

  const [passengers, setPassengers] = useState([]);
  const [stations, setStations] = useState([]);
  const [rides, setRides] = useState([]);
  const [reviews, setReviews] = useState([]);

  const loadPassengers = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/get_passengers_with_pass"
      );

      setPassengers(response.data);
    } catch (error) {
      console.error("Error loading passengers data:", error);
    }
  };

  const loadStations = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/get_stations_with_manager_name"
      );

      setStations(response.data);
    } catch (error) {
      console.error("Error loading stations data:", error);
    }
  };

  const loadRides = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/get_all_rides_with_stations_name"
      );

      setRides(response.data);
    } catch (error) {
      console.error("Error loading Rides data:", error);
    }
  };

  const loadReviews = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/get_reviews_with_user_and_ride"
      );

      setReviews(response.data);
    } catch (error) {
      console.error("Error loading reviews data:", error);
    }
  };
  

  useEffect(() => {
    loadPassengers();
    loadStations();
    loadRides();
    loadReviews();
  }, []);

  return (
    <div className="admin-container flex column">
      <div className="dashboard-buttons flex justify-around align-center">
        <button onClick={(e) => handleToggleContent(e)} value="passengers">
          Passengers
        </button>
        <button onClick={(e) => handleToggleContent(e)} value="stations">
          Stations
        </button>
        <button onClick={(e) => handleToggleContent(e)} value="rides">
          Rides
        </button>
        <button onClick={(e) => handleToggleContent(e)} value="reviews">
          Reviews
        </button>
      </div>

      <div className="admin-view flex column">
        {toggleContent.passengers &&
          passengers.map((passenger) => {
            return <PassengerCard passenger={passenger} key={passenger.id}/>;
          })}
        {toggleContent.stations &&
          stations.map((station) => {
            return <StationCard station={station} key={station.id} />;
          })}
        {toggleContent.rides &&
         rides.map((ride)=>{
          return <RideCard ride={ride} key={ride.id}/>   
         })}
       
        {toggleContent.reviews && 
        reviews.map((review)=>{
        return <ReviewCard review={review} key={review.id}/>
      })}
      </div>
    </div>
  );
}
export default Dashboard;
