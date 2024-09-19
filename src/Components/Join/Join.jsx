import React from "react";

const Join = () => {
  return (
    <>
      <div className="container p-3 mb-5">
        <div className="row gap-5 justify-content-center text-center">
          <h3 className="fw-bold">More Reasons to Join</h3>
          <div className="col-md-3 d-flex flex-column justify-content-between product p-3">
            <h6 className="fw-bold text-danger">Enjoy on your TV</h6>
            <p className="flex-grow-1 py-2">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
            <button className="btn btn-danger mt-auto w-100">
              <i className="fa-brands fa-readme me-2"></i> Read More
            </button>
          </div>
          <div className="col-md-3 d-flex flex-column justify-content-between product p-3">
            <h6 className="fw-bold text-danger">
              Download your shows to watch offline
            </h6>
            <p className="flex-grow-1 py-2">
              Save your favorites easily and always have something to watch.
            </p>
            <button className="btn btn-danger mt-auto w-100">
              <i className="fa-brands fa-readme me-2"></i> Read More
            </button>
          </div>
          <div className="col-md-3 d-flex flex-column justify-content-between product p-3">
            <h6 className="fw-bold text-danger">Watch everywhere</h6>
            <p className="flex-grow-1 py-2">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
            <button className="btn btn-danger mt-auto w-100">
              <i className="fa-brands fa-readme me-2"></i> Read More
            </button>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-md-12">
            <h3 className="mt-2 mb-4 fw-bold text-center h5">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
              <input
                type="text"
                className="form-control w-75 py-3 my-3 me-0 me-md-2 rounded-0"
                placeholder="Enter Your Email"
              />
              <button className="btn btn-danger py-3 fw-bold rounded-0">
                Get Started <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;
