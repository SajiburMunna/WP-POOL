import React from "react";
import "./Header.scss";
import headerright from "./HeaderImages/header-right.svg";
const Header = () => {
  return (
    <>
      <div className="main">
        <div className="main-header">
          <div className="left-div">
            <span>What is Lorem Ipsum?</span>
            <div>
              <p>Lorem Ipsum is simply dummy text of the printing and</p>
            </div>

            <button type="button" class="btn btn-outline-primary">
              Learn About
            </button>
          </div>
          <div className="right-div">
            <img className="img" src={headerright} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
