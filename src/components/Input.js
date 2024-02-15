import React, { useState } from "react";
import StyledInput from "./StyledInput";

const Input = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState("");
  const [quantity, setQuantity] = useState(1); // Default quantity

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddItem(newItem, quantity);
    setNewItem("");
    setQuantity(1); // Reset quantity to default
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
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          placeholder="Qty."
        />
        <button type="submit">Add</button>
      </form>
    </StyledInput>
  );
};

export default Input;
