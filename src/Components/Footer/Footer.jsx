import React from "react";
import Logo from "../../assets/logo.webp";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.png";
import image6 from "../../assets/6.png";

const Footer = () => {
  return (
    <footer className="pt-4">
      <div className="container-fluid text-white pb-4 border-bottom">
        <div className="row g-5">
          <div className="col-md-3">
            <div className="footer-image">
              <img src={Logo} alt="footer-logo" />
              <p className="py-3">
                Eiusmod tempor incididunt ut la abore et minim ven exerc itation
                ulla mco lboris naliquip comm.
              </p>
            </div>
            <div className="footer-icons d-flex text-center">
              <div className="linkedIn me-3">
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <div className="faceBook me-3">
                <i className="fa-brands fa-square-facebook"></i>
              </div>
              <div className="twitter me-3">
                <i className="fa-brands fa-x-twitter"></i>
              </div>
              <div className="instagram me-3">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div>
              <ul className="list-unstyled d-flex justify-content-center flex-wrap gap-5">
                <li className="footer-links">Home</li>
                <li className="footer-links">Movies</li>
                <li className="footer-links">Series</li>
                <li className="footer-links">Tv</li>
                <li className="footer-links">Live</li>
                <li className="footer-links">Tech</li>
                <li className="footer-links">About Us</li>
                <li className="footer-links">Contact Us</li>
              </ul>
            </div>
            <div className="footer-banner d-flex justify-content-center flex-wrap py-3 ps-3">
              <img src={image1} alt="footerImage" />
              <img src={image2} alt="footerImage" />
              <img src={image3} alt="footerImage" />
              <img src={image4} alt="footerImage" />
              <img src={image5} alt="footerImage" />
              <img src={image6} alt="footerImage" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center pt-3 footer-rights text-white">
        © All Rights Reserved{" "}
        <a
          href="https://www.linkedin.com/in/mohamed-fawzzi-72b962280/"
          rel="noopener noreferrer"
          target="_blank"
          className="text-decoration-none text-danger fw-bold"
        >
          Mohamed Fawzzi.
        </a>
      </p>
    </footer>
  );
};

export default Footer;
