import React from 'react';
import './footer.css';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <footer className="footer_container white-text secondary-bg flex justify-between align-center">
      <p>Contact us</p>
      <p>© 2024 Tick-it</p>

      <div className="custom_icons_container flex">
        <XIcon className="footer_custom_icon" />
        <FacebookIcon className="footer_custom_icon" />
        <InstagramIcon className="footer_custom_icon" />
      </div>
    </footer>
  );
}

export default Footer;
