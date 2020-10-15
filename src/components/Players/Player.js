import React from "react";
import "./Players.scss";

export default function Player(props) {
  const onClickIncrement = () => {
    props.incrementScore(props.id);
  };
  const onClickDecrement = () => {
    props.decrementScore(props.id);
  };
  const onClickRandomize = () => {
    props.randomizedScore(props.id);
  };

  const onClickReset = () => {
    props.resetScore(props.id);
  };

  const onClickRemove = () => {
    props.removedPlayer(props.id);
  };

  return (
    <div className="Player card shadow-sm mb-4">
      <div className="card-body pb-0 inline-div">
        <h2 className="card-title my-1">{props.name}</h2>
        <h3 className="card-subtitles mb-3 my-3 text-primary">
          Score : {props.score}
        </h3>
        <div className="row">
          <button className="card mb-4" onClick={onClickDecrement}>
            -
          </button>
          <div style={{ width: "10px" }}></div>
          <button className="card mb-4" onClick={onClickIncrement}>
            +
          </button>
          <p style={{ width: "15px" }}></p>
          <button className="card mb-4" onClick={onClickRandomize}>
            Randomize
          </button>{" "}
          <p style={{ width: "15px" }}></p>
          <button className="card mb-4" onClick={onClickReset}>
            Reset
          </button>
          <p style={{ width: "15px" }}></p>
          <button className="card mb-4 removebg" onClick={onClickRemove}>
            Remove
          </button>
        </div>
        <div
          className="card percentage_coloring"
          style={{ width: props.score + "%" }}
        />
      </div>
    </div>
  );
}
