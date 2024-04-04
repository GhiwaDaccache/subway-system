function Login({ setEmail, setPassword, onFormSubmission }) {
  return (
    <form id="form" onSubmit={(e) => onFormSubmission(e, true)} className="auth_form_container">
      <fieldset className="flex column">
        <label htmlFor="user-email">User Email</label>
        <input id="user-email" type="email" onChange={(e) => setEmail(e.target.value)} required />
      </fieldset>

      <fieldset className="flex column">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="text"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span className="forgot_password_text">forgot password?</span>
      </fieldset>

      <button className="submit_btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Login;
