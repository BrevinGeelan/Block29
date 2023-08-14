import React, {useState} from "react";
import SinglePlayer from "./SinglePlayer";

export default function PlayerCard({ player })  {
    const [isSinglePlayerOpen, setSinglePlayerOpen] = useState(false);

    const handleOpenSinglePlayer = () => {
        setSinglePlayerOpen(true);
    };
    
    const handleCloseSinglePlayer = () => {
        setSinglePlayerOpen(false);
    };
    
    const handleDeletePlayer = () => {

    }
return (
    <div className="player-card">
        <h3>{player.name}</h3>
        <button onClick={handleOpenSinglePlayer}>View Details</button>
        {isSinglePlayerOpen && (
            <SinglePlayer
            player={player}
            onClose={handleCloseSinglePlayer}
            onDelete={handleDeletePlayer}
            />
        )}
    </div>
);
};
//<p>{player.id}</p>
  //      <p>{player.breed}</p>
    //    <p>{player.status}</p>