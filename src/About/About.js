import React from "react";
import "./About.scss";
import aboutback from "./AboutImages/aboutback.svg";
import qbook from "../Card/CardImages/qbook.svg";
import adp from "../Card/CardImages/adp.PNG";
import calculator from "./AboutImages/calculator.svg";
import community from "./AboutImages/community.svg";
import handshake from "./AboutImages/handshake.svg";
import honesty from "./AboutImages/honesty.svg";
import idea from "./AboutImages/idea.svg";
import quality from "./AboutImages/quality.svg";
import teamwork from "./AboutImages/teamwork.png";

const About = () => {
  const mision = [
    {
      img: honesty,
      title: "Honesty",
    },
    {
      img: quality,
      title: "Quality",
    },
    {
      img: idea,
      title: "Knowledge",
    },
    {
      img: handshake,
      title: " Respect",
    },
    {
      img: teamwork,
      title: " Culture",
    },
    {
      img: community,
      title: "Community",
    },
  ];
  return (
    <>
      <div>
        <div className="banner-div">
          <div style={{ display: "flex" }}>
            <div className="banner-left-div ">
              <h3>Lorem Ipsum is simply</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam
                nonumy eirmod tempor invidunt ut labore et dolore.
              </p>
              <p>
                Sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum.
              </p>
            </div>
            <div className="banner-right-div">
              <div>
                {" "}
                <img src={qbook} alt="" />
                <img src={adp} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="background">
        <div>
          <img src={aboutback} alt="" />
        </div>

        <div className="upper-div">
          <div className="details-content">
            <div className="left-content">
              <h1> About Our Firm</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <button>About US</button>
            </div>
            <div>
              <img
                style={{ margin: "0px", width: "600px", height: "650px" }}
                src={calculator}
                alt=""
              />
            </div>
          </div>

          <div className="mission-div">
            <h1>Our Mission + Values</h1>
            <div style={{ width: "700px", margin: "auto" }}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div>
                <img
                  style={{ margin: "0px", height: "100px", width: "100px" }}
                  src={teamwork}
                  alt=""
                />
                <img
                  style={{ margin: "0px", height: "100px", width: "100px" }}
                  src={teamwork}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
