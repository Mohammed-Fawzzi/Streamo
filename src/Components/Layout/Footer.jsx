import React from "react";
import Logo from "@/assets/logo.webp";
import {
  footerDescription,
  footerLinks,
  footerSocials,
  footerBanners,
  footerAuthor,
} from "@/constants/footer";

const Footer = () => {
  return (
    <footer className="pt-4">
      <div className="container-fluid text-white pb-4 border-bottom">
        <div className="row g-5">
          <div className="col-md-3">
            <div className="footer-image">
              <img src={Logo} alt="footer-logo" />
              <p className="py-3">{footerDescription}</p>
            </div>
            <div className="footer-icons d-flex text-center">
              {footerSocials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={social.className}
                  aria-label={social.className}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="col-md-9">
            <div>
              <ul className="list-unstyled d-flex justify-content-center flex-wrap gap-5">
                {footerLinks.map((link) => (
                  <li key={link.id} className="footer-links">
                    {link.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-banner d-flex justify-content-center flex-wrap py-3 ps-3">
              {footerBanners.map((banner) => (
                <img key={banner.id} src={banner.src} alt={banner.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-center pt-3 footer-rights text-white">
        © All Rights Reserved{" "}
        <a
          href={footerAuthor.url}
          rel="noopener noreferrer"
          target="_blank"
          className="text-decoration-none text-danger fw-bold"
        >
          {footerAuthor.name}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
