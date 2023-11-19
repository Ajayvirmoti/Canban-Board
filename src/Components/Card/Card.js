import React from "react";
import { BsExclamationSquareFill } from "react-icons/bs";
import "./Card.css";

const Card = ({ id, title, tags, status }) => {
  return (
    <div className="container">
      <div className="cardHeading2" style={{ justifyContent: "space-between" }}>
        <span style={{ textTransform: "uppercase", color: "darkgrey" }}>
          {id}
        </span>

        <div className="image">
          <img
            src="https://quicksell.co/assets/logo/logo.png"
            alt="QuickSell"
          />
          <div className="status"></div>
        </div>
      </div>

      <div className="title">
        <p>{title}</p>
      </div>

      <div className="tags">
        <div className="tag">
          <BsExclamationSquareFill />
        </div>
        <div className="tag">
              <span>●</span> {"Featured"}
        </div>
      </div>
    </div>
  );
};

export default Card;
