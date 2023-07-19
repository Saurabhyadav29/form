import React from "react";
import "./login.css";

const LoginForm = () => {
  const handleLoginSubmit = (data) => {
    // Handle login form submission logic here
    console.log("Login form submitted:", data);
  };

  return (
    <>
      <div className="login-whole">
        <h2>Login Page</h2>

        <form
          id="login-form"
          className="flex flex-col"
          onSubmit={handleLoginSubmit}
        >
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />

          <button className="login-btn">Login</button>
        </form>

        <div className="login-link">
          Don't have an account? <a href="/register">Register</a>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
