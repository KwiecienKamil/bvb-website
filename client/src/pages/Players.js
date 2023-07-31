import React, { useContext, useEffect, useState } from "react";
import "../css/players.css";
import PlayerCard from "../UI/PlayerCard";
import axios from "axios";

const Players = () => {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    axios.get("https://bvb-backend.onrender.com/players").then((request) => {
      setBackendData(request.data);
      console.log(backendData);
    });
  }, []);

  return (
    <div className="players-container-wrapper" id="players">
      <h1>PLAYERS</h1>
      <div className="players-container">
        {backendData.map((player) => (
          <PlayerCard
            key={player.id}
            name={player.name}
            src={player.image}
            position={player.position}
            number={player.number}
            age={player.age}
          />
        ))}
      </div>
    </div>
  );
};

export default Players;
