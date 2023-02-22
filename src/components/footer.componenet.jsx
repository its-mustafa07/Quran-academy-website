import React from "react";

import logo from "../assets/logo.svg";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logo} alt="website logo" />
      </div>
      <div className="footer__container">
        <div className="footer__container--text1">
          <h3>ABOUT</h3>
          <a href="/">Home</a>
          <a href="/">Get in touch</a>
          <a href="/">FAQ's</a>
        </div>

        <div className="footer__container--text2">
          <h3>COURSES</h3>
          <a href="#">Nazra</a>
          <a href="#">Tafseer</a>
          <a href="#">Tajweed</a>
        </div>

        <div className="footer__container--text3">
          <h3>PRODUCT</h3>
          <a href="#">Testimonial</a>
          <a href="#">How we work</a>
          <a href="#">Member discounts</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
