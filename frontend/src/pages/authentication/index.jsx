import React, { useState, useCallback } from 'react';
import './auth.css';
import reqMethods from '../../core/enums/reqMethods';
import { useNavigate } from 'react-router';
import Signup from './components/Signup';
import Login from './components/Login';
import ErrorMessage from './components/ErrorMessage';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

function Authentication() {
  return (
    <div className="auth_container">
      <Background />
      <Form />
      <div className="overlay"></div>
    </div>
  );
}

function Background() {
  return <div className="auth_bg_container"></div>;
}

function Form() {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmission = useCallback(
    (e, isLoggingIn) => {
      e.preventDefault();

      const apiUrl = isLoggingIn ? `${API_BASE_URL}/login` : `${API_BASE_URL}/register`;
      const formData = new FormData();
      let errorMessage = '';

      if (!isLoggingIn) {
        formData.append('name', name);
      }

      formData.append('email', email);
      formData.append('password', password);

      const options = {
        method: reqMethods.POST,
        body: formData,
      };

      fetch(apiUrl, options)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === true) {
            navigate('/app/');
          } else {
            errorMessage = data.message;
            setErrorMessage(errorMessage);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },
    [email, name, navigate, password]
  );

  return (
    <div className="auth_submit_container">
      <div className="switch_interfaces_container flex align-center justify-center">
        <span
          onClick={() => {
            setIsLoginFormVisible(true);
          }}
          className={isLoginFormVisible ? 'auth_active' : 'auth_hidden'}
        >
          Sign up
        </span>
        <span
          onClick={() => {
            setIsLoginFormVisible(false);
          }}
          className={!isLoginFormVisible ? 'auth_active' : 'auth_hidden'}
        >
          Login
        </span>
      </div>

      {isLoginFormVisible ? (
        <Signup setEmail={setEmail} setName={setName} setPassword={setPassword} onFormSubmission={handleFormSubmission} />
      ) : (
        <Login setEmail={setEmail} setPassword={setPassword} onFormSubmission={handleFormSubmission} />
      )}

      {errorMessage && <ErrorMessage message={errorMessage} />}
      <p className="guest_text">Enter as a Guest</p>
    </div>
  );
}

export default Authentication;
