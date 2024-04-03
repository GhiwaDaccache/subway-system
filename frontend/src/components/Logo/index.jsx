import React from 'react';
import './logo.css';

function Logo({ className }) {
  return (
    <p className={`light-blue-text logo ${className}`}>
      Tick-<span className="white-text">it</span>
    </p>
  );
}

export default Logo;
