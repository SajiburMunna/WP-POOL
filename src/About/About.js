import React from "react";
import "./About.scss";

import qbook from "../Card/CardImages/qbook.svg";
import adp from "../Card/CardImages/adp.PNG";
import calculator from "./AboutImages/calculator.svg";

import community from "./AboutImages/community.svg";
import handshake from "./AboutImages/handshake.svg";
import honesty from "./AboutImages/honesty.svg";
import idea from "./AboutImages/idea.svg";
import quality from "./AboutImages/quality.svg";
import teamwork from "./AboutImages/teamwork.png";
import meet from "../About/AboutImages/meet.svg";

import minus from "../About/AboutImages/minus.svg";
import blogLeft from "./Blog-img/blogLeft.svg";
import blogImg from "../About/Blog-img/blogImg.svg";
import blogRight from "../About/Blog-img/blogRight.svg";
import blogimgback from "../About/Blog-img/blogimgback.svg";
import plusSymbol from "../About/Blog-img/plusSymble.svg";
import contact from "../About/ContactImg/contact.svg";
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
        <div className="about-firm">
          <div id="ab-left-div">
            <h1>About Our Firm</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the
            </p>
            <button type="button" class="btn btn-outline-primary">
              Hello
            </button>

            <div>
              <img
                style={{ marginTop: "320px", marginLeft: "80px" }}
                src={minus}
                alt=""
              />
            </div>
          </div>
          <div id="ab-right-div">
            <div className="calculator">
              <img src={calculator} alt="" />
            </div>
          </div>
        </div>
        <div className="mission">
          <h1>Our Mission + Values</h1>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="mission-logo ">
          {mision.map((md) => (
            <div>
              <img
                style={{ margin: "30px", height: "100px" }}
                src={md.img}
                alt=""
              />

              <h3>{md.title}</h3>
            </div>
          ))}
        </div>
        <div className="mission-button">
          <button type="button" class="btn btn-outline-primary">
            Meet and Values
          </button>
        </div>

        <br />
        <br />
        <div className="meet">
          <div className="left-meet">
            <img src={meet} alt="" />
          </div>
          <div>
            <h1>Meet the Team</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy lorem dolor.
            </p>
            <button
              style={{ color: "black", backgroundColor: "wheat" }}
              type="button"
              class="btn btn-outline-primary"
            >
              Meet The Team
            </button>
          </div>
        </div>
      </div>

      <div className="blog-div">
        <div className="blog">
          <div className="blog-left">
            <img src={blogLeft} alt="" />
          </div>
          <div className="blog-left-one">
            {" "}
            <h2>Latest from the Blog</h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </p>
            <button type="button" class="btn btn-outline-primary">
              Blog
            </button>
          </div>

          <div className="blog-right-one">
            <img src={blogImg} alt="" />
            <div className="bottom-left">
              The Title of a Blog Post Would Go Right Here
            </div>
          </div>

          <div className="blog-right">
            <img src={blogRight} alt="" />
          </div>
        </div>
      </div>
      <div className="bleow-blog-div">
        <img src={blogimgback} alt="" />
        <div className="top-right ">
          <div style={{ display: "flex", width: "10px" }}>
            <hr />
            <hr />
          </div>
          <div>
            <img src={plusSymbol} alt="" />
          </div>
        </div>
      </div>

      <div className="contact-back">
        <div>
          <hr className="solid" />
        </div>

        <div className="contact-us">
          <h1>Let’s Have a Conversation.</h1>
          <img src={contact} alt="" />
          <div>
            <p>
              We are currently taking new individual and small business clients.
              If you’re interested in chatting with one of your partners, we
              would love to start a conversation.
            </p>
          </div>

          <button type="button" class="btn btn-outline-primary">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
