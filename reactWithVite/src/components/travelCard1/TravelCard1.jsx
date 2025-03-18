import React from "react";
import "./TravelCard1.css";

const TravelCard1 = (props) => {
  return (
    <div className="travel-card1">
      <img src={props.src} alt={props.alt} className="travel-image1"/>
        <div className="travel-text card1-destination">{props.alt}</div>
        <div className="travel-text card1-price">From<br/>{props.price}</div>

    </div>
  );
};

export default TravelCard1;