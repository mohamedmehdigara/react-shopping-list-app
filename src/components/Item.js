import React from "react";
import StyledItem from "./StyledItem";

const Item = ({ item, onItemComplete, onItemDelete, onQuantityChange }) => {
  const handleComplete = () => {
    onItemComplete(item.id);
  };

  const handleDelete = () => {
    onItemDelete(item.id);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    onQuantityChange(item.id, newQuantity);
  };

  return (
    <StyledItem completed={item.completed}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={handleComplete}
      />
      {item.name} (<input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
        />
      )
       ({item.quantity})
      <button onClick={handleDelete}>Delete</button>
    </StyledItem>
  );
};

export default Item;
