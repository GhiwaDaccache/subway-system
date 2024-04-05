import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const navigate = useNavigate();

  const handleUserLogout = () => {
    localStorage.removeItem('token');

    navigate('/');
  };

  return (
    <button className="logout_button" onClick={handleUserLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;
