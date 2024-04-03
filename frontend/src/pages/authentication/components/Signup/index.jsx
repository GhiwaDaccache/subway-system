function Signup({ setEmail, setName, setPassword, onFormSubmission }) {
  return (
    <form id="form" onSubmit={(e) => onFormSubmission(e, false)} className="auth_form_container">
      <fieldset className="flex column">
        <label htmlFor="user-name">User Name</label>
        <input id="user-name" type="text" onChange={(e) => setName(e.target.value)} required />
      </fieldset>

      <fieldset className="flex column">
        <label htmlFor="user-email">User Email</label>
        <input id="user-email" type="email" onChange={(e) => setEmail(e.target.value)} required />
      </fieldset>

      <fieldset className="flex column remove_extra_margin">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="text"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </fieldset>

      <div className="check_fieldset  flex row">
        <input type="checkbox" />
        <label>Remember Me</label>
      </div>

      <button className="submit_btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Signup;
