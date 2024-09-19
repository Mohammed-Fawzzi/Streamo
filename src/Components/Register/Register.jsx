import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Register = () => {
  const navigate = useNavigate();
  const { name, setName, email, setEmail, password, setPassword } =
    useContext(UserContext);

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (eventInfo) => {
    eventInfo.preventDefault();

    // Regex For Email && Password
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email.");
      return;
    }
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must be at least 8 characters long and contain letters and numbers."
      );
      return;
    }

    // Check If Data in Local Storage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check If user Exists
    const userExists = storedUsers.some((user) => user.email === email);

    if (userExists) {
      setErrorMessage("Account already exists.");
      return;
    }

    // Add new user
    storedUsers.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(storedUsers));

    // Clear the input fields
    setName("");
    setEmail("");
    setPassword("");

    navigate("/login");
  };

  return (
    <div className="mt-5 pt-3">
      {/* Helmet */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register</title>
      </Helmet>

      {/* Content */}
      <div className="container text-white my-5 p-3 form-container">
        <h3 className="py-3">Register Now:</h3>

        <div className="row">
          <form onSubmit={handleSubmit}>
            {errorMessage && (
              <div className="alert alert-danger p-2">{errorMessage}</div>
            )}
            <div className="pb-3">
              <label className="pb-1" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="pb-3">
              <label className="pb-1" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="pb-3">
              <label className="pb-1" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button
                className="btn btn-danger d-block ms-auto mt-3"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
