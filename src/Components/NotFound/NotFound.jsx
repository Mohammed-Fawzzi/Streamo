import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Not Found</title>
      </Helmet>
      {/* Content */}
      <section className="not-found py-3 mt-3 overflow-x-hidden header-home d-flex align-items-center">
        <div className="container py-5 text-start">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="d-flex flex-column align-items-center not-found-info p-3">
                <div className="text-center">
                  <h1 className="h5 fw-bold text-danger py-3">
                    Lost your way ?
                  </h1>
                  <p>
                    Sorry we can’t find that page. You'll find lots to explore
                    on the home page
                  </p>

                  <div className="position-relative mb-2 blog-contact py-3">
                    <input
                      className="form-control text-white rounded-0"
                      type="text"
                      placeholder="Search...."
                    />
                    <i className="fa-solid fa-magnifying-glass position-absolute"></i>
                  </div>
                </div>
                <div className="back py-2">
                  <Link to="/" className="text-decoration-none">
                    <span className="fw-bold h5 text-danger">
                      Bring me back home
                    </span>{" "}
                    <i className="fa-solid fa-arrow-rotate-left text-danger"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
