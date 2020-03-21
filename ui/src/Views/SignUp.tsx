import React from "react";

const SignUp = () => {
  const handleSignUp = (e: any) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    console.log(email.value, password.value);
  };

  return (
    <div>
      <h1>Quarantine Helper</h1>
      <form onSubmit={handleSignUp}>
        <label>
          email
          <input type="email" name="email" id="email-input" />
        </label>
        <label>
          lösenord
          <input type="password" name="password" id="password-input" />
        </label>
        <button type="submit">Registrera</button>
      </form>
    </div>
  );
};

export default SignUp;
