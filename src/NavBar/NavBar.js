import React from "react";
import logo from "../Images/logo.svg";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-div">
          <nav>
            <div>
              <ul>
                <li>
                  <a href="##">call:01780451235</a>
                </li>

                <li>
                  <a href="##">Email:sajiburmunna087@gmail.com </a>
                </li>
              </ul>
            </div>

            <ul>
              <li>
                <a href="##">HOME</a>
              </li>
              <li>
                <a href="##">ABOUT US</a>
              </li>
              <li>
                <a href="##">MEET THE TEAM </a>
              </li>
              <li>
                <a href="##">BLOG </a>
              </li>
              <li>
                <a href="##">CONTACT </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
