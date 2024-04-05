import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { KeyboardBackspace as KeyboardBackspaceIcon } from '@mui/icons-material';
import { CompareArrows as CompareArrowsIcon } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import Logo from '../../../../components/Logo';

import { useNavigate } from 'react-router-dom';

import './map.css';

function Map() {
  return (
    <div className="section map_container_section">
      <MapSideBar />
      <LiveMap />
    </div>
  );
}

function MapSideBar() {
  const [searchedStation, setSearchedStation] = useState('');

  const handleSearchChange = (value) => {
    setSearchedStation(value);
  };

  return (
    <aside className="sidebar_map">
      <SideBarTop />
      <Inputs handleSearchChange={handleSearchChange} />
      <Recommendations />
    </aside>
  );
}

function SideBarTop() {
  return (
    <div className="sidebar_top">
      <KeyboardBackspaceIcon className="custom_backward_icon" />
      <Logo className="custom_logo" />
    </div>
  );
}

function Inputs({ handleSearchChange }) {
  return (
    <div className="inputs_container">
      <SearchForStation handleSearchChange={handleSearchChange} />
      <SearchForRides />
    </div>
  );
}

function SearchForStation({ handleSearchChange }) {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="inputs_form_station" onSubmit={handleSearchSubmit}>
      <h4>Stations:</h4>
      <input
        type="text"
        placeholder="Search for station"
        onChange={(e) => {
          handleSearchChange(e.target.value);
        }}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}

function SearchForRides() {
  return (
    <form className="inputs_form_rides">
      <h4>Rides:</h4>
      <div className="search_ride">
        <fieldset>
          <label>form</label>
          <input type="text" required />
        </fieldset>
        <CompareArrowsIcon className="custom_compare_arrow" />
        <fieldset>
          <label>To</label>
          <input type="text" required />
        </fieldset>
        <button type="submit" className="submit_btn_rides">
          &#10003;
        </button>
      </div>
    </form>
  );
}

function Recommendations() {
  const navigator = useNavigate();
  const [allStations, setAllStations] = useState([]);

  const getAllStations = async () => {
    const url = `http://127.0.0.1:8000/api/get_all_stations`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      return data;
    } catch (error) {}
  };

  useEffect(() => {
    getAllStations().then((stations) => {
      setAllStations(stations);
    });
  }, []);

  return (
    <div className="recommendations_container_section">
      <h4>Recommendations:</h4>
      <div className="recommendations_container">
        {allStations &&
          allStations.map((station, i) => (
            <Station
              key={i}
              {...station}
              onClick={() => {
                navigator('/app/stations');
              }}
            />
          ))}
      </div>
    </div>
  );
}

function Station({ name, onClick }) {
  return (
    <div className="recommendations_box flex justify-between" onClick={onClick}>
      <p>{name}</p>
      <p className="flex a-center">
        5
        <StarIcon className="custom_star_icon" />
      </p>
    </div>
  );
}
function LiveMap() {
  const [stationLocations, setStationLocations] = useState([
    { name: 'Station 1', location: { lat: 51.5, lng: -0.1 } },
    { name: 'Station 2', location: { lat: 51.6, lng: -0.2 } },
    { name: 'Station 3', location: { lat: 51.7, lng: -0.3 } },
  ]);

  const [searchedStation, setSearchedStation] = useState('');

  const handleSearchChange = (value) => {
    setSearchedStation(value);
  };

  const filteredStations = stationLocations.filter((station) => station.name.toLowerCase().includes(searchedStation.toLowerCase()));

  return (
    <MapContainer center={{ lat: 51.505, lng: -0.09 }} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />

      {filteredStations.map((station, index) => (
        <StationMarker key={index} station={station} searchedStation={searchedStation} />
      ))}
    </MapContainer>
  );
}

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function StationMarker({ station, searchedStation }) {
  const { name, location } = station;
  const isSearchedStation = name.toLowerCase() === searchedStation.toLowerCase();

  return (
    <Marker position={location}>
      <Popup>{name}</Popup>
      {isSearchedStation && <Popup>Highlighted</Popup>}
    </Marker>
  );
}

export default Map;
