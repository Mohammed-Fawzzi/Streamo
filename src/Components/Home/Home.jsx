import React from "react";
import TopRated from "../Sliders/TopRated";
import Upcoming from "../Sliders/Upcoming";
import Join from "../Join/Join";
import header from "../../assets/header.webp";
import NowPlaying from "../Sliders/NowPlaying";
import Trending from "../Trending/Trending";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      {/* Helmet */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>

      {/* Content */}
      <div className="header-home">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="home-caption p-5">
                <h1 className="py-3">Welcome.</h1>
                <h5>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h5>
                <p className="py-3">
                  Millions of movies, TV shows and people to discover. Explore
                  now.
                </p>
                <div className="position-relative">
                  <input
                    type="text"
                    className="me-3 rounded-0 py-3 w-100 px-2"
                    placeholder="Email Address"
                  />
                  <button className="btn btn-danger position-absolute bottom-0 end-0 rounded-0 py-3 fw-bold">
                    Get Started <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sliders */}
      <NowPlaying />
      <Upcoming />
      <TopRated />
      <Trending />
      <Join />
    </div>
  );
};

export default Home;
