import React from "react";
import TopRated from "@/components/Sliders/TopRated";
import Upcoming from "@/components/Sliders/Upcoming";
import Join from "@/components/Join/Join";
import NowPlaying from "@/components/Sliders/NowPlaying";
import Trending from "@/components/Trending/Trending";
import { Helmet } from "react-helmet";
import { homeHero } from "@/constants/home";

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
                <h1 className="py-3">{homeHero.title}</h1>
                <h5>{homeHero.subtitle}</h5>
                <p className="py-3">{homeHero.description}</p>
                <div className="hero-email-group">
                  <input
                    type="text"
                    className="hero-email-input px-3"
                    placeholder={homeHero.placeholder}
                  />
                  <button type="button" className="btn btn-danger hero-email-btn fw-bold">
                    {homeHero.buttonText}{" "}
                    <i className="fa-solid fa-chevron-right"></i>
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
