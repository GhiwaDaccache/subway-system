import React, { useEffect, useState } from 'react';
import './nav.css';

import { useNavigate } from 'react-router-dom';

function Navbar({}) {
  return (
    <div className="full-w">
      <nav className="nav_bar white-text secondary-bg flex align-center justify-between">
        <Logo />

        <ul className="flex align-center">
          <NavItem path="/branch">Station</NavItem>
          <NavItem path="pages/branch/Reviews">Reviews</NavItem>
          <NavItem path="pages/branch/Inbox">Inbox</NavItem>
        </ul>
      </nav>
    </div>
  );
}

function NavItem({ path, children }) {
  const navigate = useNavigate();
  const handleClick = () => navigate(path);
  return <li onClick={handleClick}>{children}</li>;
}

function Logo() {
  return (
    <p className="light-blue-text logo">
      Tick-<span className="white-text">it</span>
    </p>
  );
}

export default Navbar;
