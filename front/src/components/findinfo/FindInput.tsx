import React from "react";

function FindInput({ name }: { name: string }) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input type="text" id="Name" name={name} />
    </>
  );
}

export default FindInput;
