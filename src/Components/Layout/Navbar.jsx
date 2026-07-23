import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/logo.webp";
import Profile from "@/assets/user1.webp";
import { navLinks, navIcons } from "@/constants/navbar";

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
            {navLinks.map((link) => (
              <li className="nav-item" key={link.id}>
                <Link className="nav-link" to={link.path}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="d-flex text-white justify-content-between align-items-center">
              <div className="nav-icons-container pe-3">
                {navIcons.map((item, index) => (
                  <div
                    key={item.id}
                    className={`nav-icons${index > 0 ? " ms-2" : ""}`}
                  >
                    <i className={item.icon}></i>
                  </div>
                ))}
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
