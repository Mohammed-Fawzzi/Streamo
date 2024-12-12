import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.webp";
import Profile from "../../assets/user1.webp";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" className="mb-1" />
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0 ps-2">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/series">
                Series
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tv">
                Tv Show
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/artists">
                Artists
              </Link>
            </li>
          </ul>
        </div>

        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="d-flex text-white justify-content-between align-items-center">
              <div className="nav-icons-container pe-3">
                <div className="nav-icons">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="nav-icons ms-2">
                  <i className="fa-regular fa-bell"></i>
                </div>
              </div>

              <div className="d-flex align-items-center gap-1 ps-3 profile pt-1">
                <img src={Profile} alt="Profile" className="profile-image" />
                <h6 className="text-white mx-2 p-1 mt-2 trad ">TMDB</h6>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
