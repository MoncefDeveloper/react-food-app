import React from "react";
import "../../styles/footer.css";
import logo from "../../assets/images/logo.png";
import { IoArrowForward, IoLogoGithub } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="my-footer">
      <div className="top">
        <div className="left">
          <div className="logo">
            <img src={logo} alt="moncedev logo" />
          </div>
          <div className="interested-btn">
            Interested in partnering with Neurable?
            <div className="icon">
              <IoArrowForward />
            </div>
          </div>
        </div>
        <div className="easy-links">
          <div className="title">About Moncefdev</div>
          <div className="link">Contact Us</div>
          <div className="link">About Us</div>
          <div className="link">Our Menu</div>
        </div>
        <div className="social-media-links">
          <div className="title">Follow us</div>
          <div className="social-media-link-box">
            <div className="icon">
              <IoLogoGithub />
            </div>
            <div className="title"> Github </div>
          </div>
          <div className="social-media-link-box">
            <div className="icon">
              <IoLogoGithub />
            </div>
            <div className="title"> Github </div>
          </div>
          <div className="social-media-link-box">
            <div className="icon">
              <IoLogoGithub />
            </div>
            <div className="title"> Github </div>
          </div>
          <div className="social-media-link-box">
            <div className="icon">
              <IoLogoGithub />
            </div>
            <div className="title"> Github </div>
          </div>
          <div className="social-media-link-box">
            <div className="icon">
              <IoLogoGithub />
            </div>
            <div className="title"> Github </div>
          </div>
          <div className="social-media-link-box">
            <div className="icon">
              <IoLogoGithub />
            </div>
            <div className="title"> Github </div>
          </div>
        </div>
      </div>
      <div className="rights-bar">© 2024 MoncefDev. All rights reserved.</div>
    </footer>
  );
};
