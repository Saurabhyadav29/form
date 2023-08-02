import React from "react";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./login.css";

const LoginForm = () => {
  const handleLoginSubmit = (data) => {
    // Handle login form submission logic here
    console.log("Login form submitted:", data);
  };

  return (
    <>
      <div>
        <h2>Login Page</h2>

        <form
          id="login-form"
          className="flex flex-col"
          onSubmit={handleLoginSubmit}
        >
          <div className="form-login-field">
            <FontAwesomeIcon icon={faUser} />

            <input type="email" placeholder="Email" name="email" />
          </div>
          <div className="form-login-field">
            <FontAwesomeIcon icon={faLock} />
            <input type="password" placeholder="Password" name="password" />
          </div>

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
