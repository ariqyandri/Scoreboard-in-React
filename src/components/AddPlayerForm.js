import React, { useState } from "react";

export default function AddPlayerForm(props) {
  const onClickRegister = (event) => {
    props.addPlayer(name);
    event.preventDefault();
    return setName("");
  };

  const [name, setName] = useState("");

  console.log(name);

  const nameInput = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h5 className="row">
        <input
          className="card"
          type="text"
          placeholder="Add New Name"
          onChange={nameInput}
          value={name}
        />
        <button className="card" onClick={onClickRegister}>
          Add
        </button>
      </h5>
    </div>
  );
}
