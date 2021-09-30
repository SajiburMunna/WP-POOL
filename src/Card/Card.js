import React from "react";
import "./Card.scss";
import Cardbackgrounds from "./CardImages/Cardbackground.svg";
import business from "./CardImages/business.svg";
import team from "./CardImages/team.svg";
import software from "./CardImages/software.svg";

const Card = () => {
  const card = [
    {
      img: business,
      title: "Lorem Ipsum is simply dummy text ",
      button: "Learn More",
    },
    {
      img: software,
      title: "Lorem Ipsum is simply dummy text ",
      button: "Learn More",
    },
    {
      img: team,
      title: "Lorem Ipsum is simply dummy text ",
      button: "Learn More",
    },
    {
      img: business,
      title: "Lorem Ipsum is simply dummy text ",
      button: "Learn More",
    },
    {
      img: software,
      title: "Lorem Ipsum is simply dummy text ",
      button: "Learn More",
    },
    {
      img: team,
      title: "Lorem Ipsum is simply dummy text ",
      button: "Learn More",
    },
  ];
  return (
    <>
      <div style={{ margin: "100px" }}>
        <div className="card-main-div">
          <div className="back-div">
            <img src={Cardbackgrounds} alt="" />
          </div>

          <div className="car-header">
            <h1>Lorem Ipsum is simply dummy text</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
        </div>
        <div style={{ margin: "auto", textAlign: "center" }}>
          <div className="card-div">
            <div class="card-row">
              {card.map((cd) => (
                <div class="card-column">
                  <div class="L-card">
                    <img src={cd.img} alt="" />
                    <p>{cd.title}</p>
                    <button type="button" class="btn btn-outline-primary">
                      {cd.button}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr class="solid"></hr>
      </div>
    </>
  );
};

export default Card;
