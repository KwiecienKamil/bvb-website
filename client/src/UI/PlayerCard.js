import React from "react";
import '../css/playercard.css'

const PlayerCard = (props) => {
  return (
    <div className="player-card-wrapper">
      <div className="player-card-image">
        <img src={props.src} alt="player" />
      </div>
      <div className="player-card-info">
        <p>{props.name}</p>
        <p>{props.position}</p>
        <p>Age: {props.age}</p>
        <p>Number: {props.number}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
