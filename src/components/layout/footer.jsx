import React from "react";
import "../../styles/footer.css";
import logo from "../../assets/images/logo.png";
import { IoArrowForward, IoLogoGithub } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import {
  FiFacebook,
  FiGithub,
  FiLinkedin,
  FiTwitch,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { ImFacebook } from "react-icons/im";

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
          <NavLink to={"/contact"} className="link">
            Contact Us
          </NavLink>
          <div className="link">About Us</div>
          <NavLink to={"/"} className="link">
            Our Menu
          </NavLink>
        </div>
        <div className="social-media-links">
          <div className="title">Follow us</div>
          <div className="social-media-link-box">
            <div className="icon">
              <FiGithub />
            </div>
            <div className="title"> Github </div>
          </div>
          <div className="social-media-link-box">
            <div className="icon">
              <FiFacebook />
            </div>
            <div className="title"> Facebook </div>
          </div>
          <div className="social-media-link-box">
            <div className="icon">
              <FiLinkedin />
            </div>
            <div className="title"> Linkedin </div>
          </div>
          <div className="social-media-link-box">
            <div className="icon">
              <FiYoutube />
            </div>
            <div className="title"> Youtube </div>
          </div>
          <div className="social-media-link-box">
            <div className="icon">
              <FiTwitter />
            </div>
            <div className="title"> Twitter </div>
          </div>
          <div className="social-media-link-box">
            <div className="icon">
              <FiTwitch />
            </div>
            <div className="title"> Twitch </div>
          </div>
        </div>
      </div>
      <div className="rights-bar">© 2024 MoncefDev. All rights reserved.</div>
    </footer>
  );
};
