import React from "react";
import "./Footer.scss";
import footerlogo from "../Footer/FooterImg/footerlogo.svg";
import Header from "./../Header/Header";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <img src={footerlogo} alt="" />
        <div className="footer-call">
          <div className="footer-call-email">
            <div>
              <p>Call : 01780451235</p>
            </div>
            <div>
              <p>Email : sajiburmunna087@gmail.com</p>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <a class="active" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a href="#About">About Us</a>
              </li>
              <li>
                <a href="#contact">Meet The Team</a>
              </li>
              <li>
                <a href="#about">Blog</a>
              </li>
              <li>
                <a href="#about">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <small>© Copyright 2020. WPPOOL, LLC. All rights reserved.</small>
      </div>
    </div>
  );
};

export default Footer;
