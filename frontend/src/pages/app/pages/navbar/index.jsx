import React, { useEffect, useState } from 'react';
import './nav.css';

import { useNavigate } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LogoutButton from '../../../../components/LogoutButton';

function Navbar({ windowSize }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { width: windowWidth, height: windowHeight } = windowSize;

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="nav_bar white-text secondary-bg flex align-center justify-between">
      <Logo />
      {windowWidth > 481 ? (
        <ul className="flex align-center">
          <NavItem path="/app/">Home</NavItem>
          <NavItem path="/app/map">Map</NavItem>
          <NavItem path="/app/profile">Profile</NavItem>
          <NavItem path="/">
            <LogoutButton />
          </NavItem>
        </ul>
      ) : (
        <div>
          <div className="navbar_custom_menu_icon" onClick={handleToggleMenu}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
          {isMenuOpen && (
            <ul className="nav_mobile">
              <NavItem path="/app/">Home</NavItem>
              <NavItem path="/app/map">Map</NavItem>
              <NavItem path="/app/station">Station</NavItem>
              <NavItem path="/app/profile">Profile</NavItem>
            </ul>
          )}
        </div>
      )}
    </nav>
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
