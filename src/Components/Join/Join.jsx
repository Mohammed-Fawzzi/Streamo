import React from "react";
import { joinTitle, joinReasons, joinCta } from "@/constants/join";

const Join = () => {
  return (
    <>
      <div className="container p-3 mb-5">
        <div className="row gap-5 justify-content-center text-center">
          <h3 className="fw-bold">{joinTitle}</h3>
          {joinReasons.map((reason) => (
            <div
              key={reason.id}
              className="col-md-3 d-flex flex-column justify-content-between product p-3"
            >
              <h6 className="fw-bold text-danger">{reason.title}</h6>
              <p className="flex-grow-1 py-2">{reason.description}</p>
              <button className="btn btn-danger mt-auto w-100">
                <i className="fa-brands fa-readme me-2"></i> Read More
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-md-12">
            <h3 className="mt-2 mb-4 fw-bold text-center h5">{joinCta.title}</h3>
            <div className="join-cta-group d-flex flex-column flex-md-row justify-content-center align-items-center">
              <input
                type="text"
                className="form-control join-cta-input w-75 py-3 my-3 me-0"
                placeholder={joinCta.placeholder}
              />
              <button className="btn btn-danger join-cta-btn py-3 fw-bold">
                {joinCta.buttonText}{" "}
                <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;
