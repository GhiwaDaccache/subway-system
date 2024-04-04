import React from 'react';
import './styles.css';

function ErrorMessage({ message }) {
  return <p className="errorMessage">{message}</p>;
}

export default ErrorMessage;
