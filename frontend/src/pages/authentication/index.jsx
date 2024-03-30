import React from 'react';
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
  return (
    <div className="auth_submit_container">
      <div className="switch_interfaces_container flex align-center justify-center">
        <span className="auth_active">Sign up</span>
        <span className="auth_hidden">Login</span>
      </div>

      <form className="auth_form_container">
        <fieldset className="flex column">
          <label htmlfor="user-name">User Name</label>
          <input id="user-name" type="text" required />
        </fieldset>

        <fieldset className="flex column">
          <label htmlfor="user-email">User Email</label>
          <input id="user-email" type="email" required />
        </fieldset>

        <fieldset className="flex column">
          <label htmlfor="password">Password</label>
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
      <p className="guest_text">Enter as a Guest</p>
    </div>
  );
}

export default Authentication;
