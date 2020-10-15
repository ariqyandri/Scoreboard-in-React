import React, { useState } from "react";

export default function AddPlayerForm(props) {
  const onClickRegister = (event) => {
    event.preventDefault();
    props.addPlayer(name);
    return setName("");
  };

  const [name, setName] = useState("");

  console.log(name);

  const nameInput = (event) => {
    setName(event.target.value);
  };

  const onKeyRegister = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      console.log("ennnenenene");
      props.addPlayer(name);
      return setName("");
    }
  };

  return (
    <div>
      <h5 className="row">
        <input
          className="card"
          type="text"
          placeholder="Add New Name"
          onChange={nameInput}
          onKeyDown={onKeyRegister}
          value={name}
        />
        <button className="card" onClick={onClickRegister}>
          Add
        </button>
      </h5>
    </div>
  );
}
