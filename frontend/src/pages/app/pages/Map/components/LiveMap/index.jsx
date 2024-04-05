import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import './style.css';

function LiveMap() {
  const [stationLocations, setStationLocations] = useState([
    { name: 'Station 1', location: { lat: 51.5, lng: -0.1 } },
    { name: 'Station 2', location: { lat: 51.6, lng: -0.2 } },
    { name: 'Station 3', location: { lat: 51.7, lng: -0.3 } },
  ]);

  const [popupPosition, setPopupPosition] = useState(null);

  const handleClick = (e) => {
    setPopupPosition(e.latlng);
  };

  function MapEvents() {
    useMapEvents({
      click: handleClick,
    });
    return null;
  }

  return (
    <MapContainer center={{ lat: 51.505, lng: -0.09 }} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />

      {stationLocations.map((station, index) => (
        <StationMarker key={index} station={station} />
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

function StationMarker({ station }) {
  const { name, location } = station;

  return (
    <Marker position={location}>
      <Popup>{name}</Popup>
    </Marker>
  );
}

export default LiveMap;
