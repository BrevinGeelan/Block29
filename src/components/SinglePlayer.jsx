import React, {useState} from "react";

export default function SinglePlayer({player, onClose, onDelete}) {

    return (
        <div className="single-player">
            <h2>{player.name}</h2>
            <p>Breed: {player.breed}</p>
            <p>Status: {player.status}</p>
            <p>ID: {player.id}</p>
            <p>Team ID: {player.teamId}</p>
            <button onClick={onClose}>Close</button>
            <button onClick={onDelete}>Delete Player</button>
        </div>
    );
}