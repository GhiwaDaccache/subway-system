import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import './style.css';

function LiveMap() {
  const [popupPosition, setPopupPosition] = useState(null);

  const handleClick = (e) => {
    setPopupPosition(e.latlng);
  };

  function MapEvents() {
    useMapEvents({
      click: handleClick,
    });
  }

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapEvents />
      {popupPosition && (
        <Marker position={popupPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default LiveMap;
