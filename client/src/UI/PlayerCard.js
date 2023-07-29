import React from "react";
import "../css/playercard.css";

const PlayerCard = (props) => {
  return (
    <div className="player-card-wrapper">
      <div className="player-card-image">
        <img src={props.src} alt="player" />
      </div>
      <div className="player-card-info">
        <p>Name: {props.name}</p>
        <p>Position: {props.position}</p>
        <p>Age: {props.age}</p>
        <p>Number: {props.number}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
