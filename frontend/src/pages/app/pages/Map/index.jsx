import React from 'react';

import Logo from '../../../../components/Logo';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import StarIcon from '@mui/icons-material/Star';

import './map.css';

function Map() {
  return (
    <div className="section map_container_section">
      <SideBar />
      <MapContainer />
    </div>
  );
}

function SideBar() {
  return (
    <aside className="sidebar_map">
      <SideBarTop />
      <Inputs />
      <Recommendations />
    </aside>
  );
}

function MapContainer() {
  return (
    <div className="map_container">
      <h1>Map Container</h1>
    </div>
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

function Inputs() {
  return (
    <div className="inputs_container">
      <SearchForStation />
      <SearchForRides />
    </div>
  );
}

function SearchForStation() {
  return (
    <form className="inputs_form_station">
      <h4>stations:</h4>
      <input type="text" placeholder="Search for station" required />
      <button type="submit">Search</button>
    </form>
  );
}

function SearchForRides() {
  return (
    <form className="inputs_form_rides">
      <h4>rides:</h4>
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
  return (
    <div className="recommendations_container_section">
      <h4>Recommendations:</h4>
      <div className="recommendations_container">
        <div className="recommendations_box flex justify-between">
          <p>Station 1</p>
          <p className="flex a-center">
            5
            <StarIcon className="custom_star_icon" />
          </p>
        </div>

        <div className="recommendations_box flex justify-between">
          <p>Station 2</p>
          <p className="flex a-center">
            4
            <StarIcon className="custom_star_icon" />
          </p>
        </div>

        <div className="recommendations_box flex justify-between">
          <p>Station 3</p>
          <p className="flex a-center">
            3
            <StarIcon className="custom_star_icon" />
          </p>
        </div>

        <div className="recommendations_box flex justify-between">
          <p>Station 3</p>
          <p className="flex a-center">
            2
            <StarIcon className="custom_star_icon" />
          </p>
        </div>

        <div className="recommendations_box flex justify-between">
          <p>Station 3</p>
          <p className="flex a-center">
            2
            <StarIcon className="custom_star_icon" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Map;
