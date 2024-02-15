import React, { useState } from "react";
import StyledItem from "./StyledItem";

const Item = ({ item, onItemComplete, onItemDelete, onQuantityChange, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(item.name);

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

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Implement logic to save the edited name (call onEdit)
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <StyledItem completed={item.completed} isEditing={isEditing}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={handleComplete}
      />
      {isEditing ? (
        <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
      ) : (
        <span>{item.name}</span>
      )}
      {isEditing ? (
        <>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          (
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={handleQuantityChange}
          />
          )
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </StyledItem>
  );
};

export default Item;
