import React, { useState } from 'react';
import './auth.css';

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
        <form className="auth_form_container">
          <fieldset className="flex column">
            <label htmlFor="user-name">User Name</label>
            <input id="user-name" type="text" required />
          </fieldset>

          <fieldset className="flex column">
            <label htmlFor="user-email">User Email</label>
            <input id="user-email" type="email" required />
          </fieldset>

          <fieldset className="flex column">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$" required />
          </fieldset>

          <fieldset className="check_fieldset flex row">
            <input type="checkbox" />
            <label>Remember Me</label>
          </fieldset>

          <button className="submit_btn" type="submit">
            Submit
          </button>
        </form>
      ) : (
        <form className="auth_form_container">
          <fieldset className="flex column">
            <label htmlFor="user-email">User Email</label>
            <input id="user-email" type="email" required />
          </fieldset>

          <fieldset className="flex column">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$" required />
            <span className="forgot_password_text">forgot password?</span>
          </fieldset>

          <fieldset className="check_fieldset flex row">
            <input type="checkbox" />
            <label>Remember Me</label>
          </fieldset>

          <button className="submit_btn" type="submit">
            Submit
          </button>
        </form>
      )}

      <p className="guest_text">Enter as a Guest</p>
    </div>
  );
}

export default Authentication;
