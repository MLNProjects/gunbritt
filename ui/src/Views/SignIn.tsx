import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const handleLogIn = (e: any) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    console.log(email.value, password.value);
  };

  return (
    <div data-testid="signin-container">
      <h1>Quarantine Helper</h1>
      <div>
        <h4>In these uncertain times, people can need help and people can give help. Which one are you?</h4>
        <Link to="/">Learn more</Link>
      </div>
      <form onSubmit={handleLogIn} data-testid="sign-in-form">
        <label>
          email
          <input type="email" name="email" id="email-input" />
        </label>
        <label>
          lösenord
          <input type="password" name="password" id="password-input" />
        </label>
        <button type="submit">Logga in.</button>
        <Link to="/registrera">Inget konto? Registrera här.</Link>
      </form>
    </div>
  );
};

export default SignIn;
