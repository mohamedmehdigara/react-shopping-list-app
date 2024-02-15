import React from "react";
import Item from "./Item";

const List = ({ items, onItemComplete, onItemDelete,onDelete, onQuantityChange, onEdit }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onItemComplete={onItemComplete}
          onItemDelete={onDelete}
          onQuantityChange={onQuantityChange}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default List;
