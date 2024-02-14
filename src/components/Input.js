import React, { useState } from "react";
import StyledInput from "./StyledInput";

const Input = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState("");

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddItem(newItem);
    setNewItem("");
  };

  return (
    <StyledInput>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={handleInputChange}
          placeholder="Add new item..."
        />
        <button type="submit">Add</button>
      </form>
    </StyledInput>
  );
};

export default Input;
