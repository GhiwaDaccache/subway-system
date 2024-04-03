import React, { useState } from 'react';
import './auth.css';

import { reqMethods } from '../../../core/enums/reqMethods';
import { useNavigate } from 'react-router';

import Signup from './components/Signup';
import Login from './components/Login';

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
  const [toggleLoginRegisterInterfaces, setToggleLoginRegisterInterfaces] = useState(true);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmission = (e, isLoggingIn) => {
    e.preventDefault();

    const apiUrl = isLoggingIn ? 'http://127.0.0.1:8000/api/login' : 'http://127.0.0.1:8000/api/register';
    const formData = new FormData();

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
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status === true) {
          navigate('/app/');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="auth_submit_container">
      <div className="switch_interfaces_container flex align-center justify-center">
        <span
          onClick={() => {
            setToggleLoginRegisterInterfaces(true);
          }}
          className={toggleLoginRegisterInterfaces ? 'auth_active' : 'auth_hidden'}
        >
          Sign up
        </span>
        <span
          onClick={() => {
            setToggleLoginRegisterInterfaces(false);
          }}
          className={!toggleLoginRegisterInterfaces ? 'auth_active' : 'auth_hidden'}
        >
          Login
        </span>
      </div>

      {toggleLoginRegisterInterfaces ? (
        <Signup setEmail={setEmail} setName={setName} setPassword={setPassword} onFormSubmission={handleFormSubmission} />
      ) : (
        <Login setEmail={setEmail} setPassword={setPassword} onFormSubmission={handleFormSubmission} />
      )}

      <p className="guest_text">Enter as a Guest</p>
    </div>
  );
}

export default Authentication;
