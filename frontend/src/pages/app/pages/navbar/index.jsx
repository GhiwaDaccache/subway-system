import React from 'react';
import './nav.css';

import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="nav_bar white-text secondary-bg flex align-center justify-between">
      <Logo />

      <ul className="flex align-center">
        <li
          onClick={() => {
            navigate('/app/');
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            navigate('/app/map');
          }}
        >
          Map
        </li>

        <li
          onClick={() => {
            navigate('/app/station');
          }}
        >
          Station
        </li>

        <li
          onClick={() => {
            navigate('/app/profile');
          }}
        >
          Profile
        </li>
        <li>Treasury</li>
      </ul>
    </nav>
  );
}

function Logo() {
  return (
    <p className="light-blue-text logo">
      Tick-<span className="white-text">it</span>
    </p>
  );
}

export default Navbar;
