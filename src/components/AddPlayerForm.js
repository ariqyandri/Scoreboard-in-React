import React, { useState } from "react";

export default function AddPlayerForm(props) {
  const onClickRegister = () => {
    props.addPlayer(name);
    return setName("");
  };

  const [name, setName] = useState("");

  console.log(name);

  const nameInput = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="AddPlayerForm">
      <h3>
        <input
          className="card"
          type="text"
          placeholder="New Name"
          onChange={nameInput}
        />
      </h3>
      <h4>
        <button className="card" onClick={onClickRegister}>
          Add
        </button>
      </h4>
    </div>
  );
}
