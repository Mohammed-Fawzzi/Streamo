import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Login = () => {
  const navigate = useNavigate();
  const { setName, setEmail, setPassword, setToken } = useContext(UserContext);

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Regex for Email and Password validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(inputEmail)) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    if (!passwordRegex.test(inputPassword)) {
      setErrorMessage(
        "Password must be at least 8 characters long and contain letters and numbers."
      );
      return;
    }

    // Check user Exist before or not
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userFound = storedUsers.find(
      (user) => user.email === inputEmail && user.password === inputPassword
    );

    if (userFound) {
      setName(userFound.name);
      setEmail(userFound.email);
      setPassword(userFound.password);
      setToken("loginToken");

      // Clear the input fields
      setInputEmail("");
      setInputPassword("");

      // Store the token in localStorage
      localStorage.setItem("userToken", "loginToken");

      // Navigate to home page
      navigate("/");
    } else {
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="mt-5 pt-3">
      {/* Helmet */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>

      {/* Content */}
      <div className="container text-white my-5 p-3 form-container">
        <h3 className="py-3">Login Now:</h3>
        <div className="row">
          <form onSubmit={handleSubmit}>
            {errorMessage && (
              <div className="alert alert-danger p-2">{errorMessage}</div>
            )}
            <div className="pb-3">
              <label className="pb-1" htmlFor="email">
                Email:
              </label>
              <input
                type="text"
                id="email"
                value={inputEmail}
                className="form-control"
                onChange={(e) => setInputEmail(e.target.value)}
              />
            </div>
            <div className="pb-3">
              <label className="pb-1" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={inputPassword}
                className="form-control"
                onChange={(e) => setInputPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                className="btn btn-danger d-block ms-auto mt-3"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
