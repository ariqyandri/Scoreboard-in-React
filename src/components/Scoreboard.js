import React, { useState } from "react";
import AddPlayerForm from "./AddPlayerForm";
import Player from "./Players/Player";

function compare_score(a, b) {
  return b.score - a.score;
}
function compare_name(a, b) {
  return a.name.localeCompare(b.name);
}
export default function Scoreboard() {
  const [players, setPlayers] = useState([
    { id: 1, name: "Benjamin", score: 0 },
    { id: 2, name: "Jennifer", score: 0 },
    { id: 3, name: "Phillip", score: 0 },
    { id: 4, name: "Theodore", score: 0 },
  ]);

  const [sort_by, set_sort_by] = useState("name");
  const change_sorting = (event) => {
    set_sort_by(event.target.value);
  };
  const compareFunction = sort_by === "score" ? compare_score : compare_name;
  const players_sorted = [...players].sort(compareFunction);

  const incrementScore = (id) => {
    const increasedScore = players.map((player) => {
      return player.id === id ? { ...player, score: player.score + 1 } : player;
    });
    setPlayers(increasedScore);
  };

  const decrementScore = (id) => {
    const decreasedScore = players.map((player) => {
      return player.id === id ? { ...player, score: player.score - 1 } : player;
    });
    setPlayers(decreasedScore);
  };

  const randomizedScore = (id) => {
    const randomizedScore = players.map((player) => {
      return player.id === id
        ? { ...player, score: Math.floor(Math.random() * 100 + 1) }
        : player;
    });
    setPlayers(randomizedScore);
  };

  const removedPlayer = (id) => {
    const removedPlayer = players.filter((player) => {
      return player.id !== id;
    });
    setPlayers(removedPlayer);
  };

  const onClickRandomize = () => {
    const resetScore = players.map((p) => {
      return { ...p, score: Math.floor(Math.random() * 100 + 1) };
    });
    setPlayers(resetScore);
  };

  const onClickReset = () => {
    const resetScore = players.map((p) => {
      return { ...p, score: 0 };
    });
    setPlayers(resetScore);
  };

  const onClickRemove = () => {
    setPlayers([]);
  };
  const addPlayer = (name) => {
    console.log("Let's add a new player with the name:", name);
    const newPlayer = { id: players.length + 1, name: name, score: 0 };
    setPlayers([...players, newPlayer]);
    return name;
  };

  return (
    <div className="Scoreboard">
      <h1 className="card-title mb-4 mt-4">ScoreBoard!!!</h1>
      <div className="row">
        <h5>
          <select className="card" onChange={change_sorting} value={sort_by}>
            <option value="score">Sort by score</option>
            <option value="name">Sort by name</option>
          </select>
        </h5>
        <div style={{ width: "20px" }}></div>
        <h5>
          <button className="card" onClick={onClickReset}>
            Reset score
          </button>
        </h5>
        <div style={{ width: "20px" }}></div>
        <h5>
          <button className="card" onClick={onClickRandomize}>
            Randomize score
          </button>
        </h5>
        <div style={{ width: "20px" }}></div>
        <h5>
          <button className="card removebg" onClick={onClickRemove}>
            Remove All Players
          </button>
        </h5>
        <div style={{ width: "20px" }}></div>
        <AddPlayerForm addPlayer={addPlayer} />
      </div>
      <div>
        {players_sorted.map((player) => {
          return (
            <Player
              key={player.id}
              id={player.id}
              name={player.name}
              score={player.score}
              incrementScore={incrementScore}
              decrementScore={decrementScore}
              randomizedScore={randomizedScore}
              removedPlayer={removedPlayer}
            />
          );
        })}
      </div>
    </div>
  );
}
