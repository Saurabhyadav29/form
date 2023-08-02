import React from "react";
import bgimg from "../img/bgimg1.jpg";
import { useForm } from "react-hook-form";
import { useState } from "react";
import LoginForm from "../logincomp/Login";

export default function Form() {
  const [showLogin, setShowLogin] = useState(false);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const formData = {
      firstName: data.First,
      lastName: data.Last,
      password: data.password,
      confirmPassword: data.Confirm,
      email: data["E-mail"],
      phone: data.Phone,
    };

    //HTTP POST request to the server endpoint
    fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form data submitted successfully");
        } else {
          console.error("Failed to submit form data");
        }
      })
      .catch((error) => {
        console.error("Error submitting form data:", error);
      });
  };

  return (
    <div className="register-container">
      <div class="animated-background">
        <div className="register">
          <div className="col-2">
            <img src={bgimg} alt="bg image" />
          </div>

          <div className="col-1">
            {showLogin ? (
              <LoginForm />
            ) : (
              <>
                <h2>Registration Page</h2>
                <span>Sign In / Log In </span>

                <form
                  id="form"
                  className="flex flex-col"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    type="text"
                    {...register("First")}
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    {...register("Last")}
                    placeholder="Last Name"
                  />
                  <input
                    type="text"
                    {...register("password")}
                    placeholder="Password"
                  />
                  <input
                    type="text"
                    {...register("Confirm")}
                    placeholder="Confirm Password"
                  />
                  <input
                    type="email"
                    {...register("E-mail")}
                    placeholder="E-mail"
                  />
                  <input
                    type="text"
                    {...register("Phone")}
                    placeholder="Phone no."
                  />

                  {/* <input type='checkbox' id='terms'/>
                    <span >I do accept the terms and condition</span> */}
                  <div className="checkbox-container">
                    <label
                      htmlFor="terms"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <input
                        type="checkbox"
                        id="terms"
                        style={{
                          marginRight: "0.5rem",
                          transform: "scale(1.5)",
                        }}
                      />
                      <span style={{ fontSize: "0.9rem" }}>
                        I do accept the terms and condition
                      </span>
                    </label>
                  </div>
                  <button className="btn">Submit</button>
                </form>
                <div className="login-link">
                  Already signed up?{" "}
                  <a
                    href="/login"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowLogin(true);
                    }}
                  >
                    Login
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
