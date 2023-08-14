import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API/AjaxHelpers";
//import NewPlayerForm from "./NewPlayer";
import PlayerCard from "./PlayerCard";

export default function AllPlayers() {
const [players, setPlayers] = useState([])
const [error, setError] = useState(null);

useEffect (() => {
const fetchPlayers = async () => {

    try {
        const playersData = await fetchAllPlayers();
        setPlayers(playersData);
    } catch (error) {
        setError(error.message);
    }
};
fetchPlayers();
}, []);
return (
    <>
    <div>
        <h2>All Puppy Players</h2>
        <div className="card-container">
     {players.map((player) => (
                <PlayerCard key={player.id} player={player} />
        ))}
        </div>
    </div>
    </>
)
}