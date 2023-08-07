import React from "react";

const playerCard = ({ player }) => {
return (
    <div className="player-card">
        <h3>{player.name}</h3>
        <p>{player.id}</p>
        <p>{player.breed}</p>
        <p>{player.status}</p>
    </div>
);
};

export default playerCard