import React from "react";
import Item from "./Item";
import StyledList from "./StyledList";


const List = ({ items, onItemComplete, onItemDelete }) => {
  return (
    <StyledList>
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onItemComplete={onItemComplete}
          onItemDelete={onItemDelete}
        />
      ))}
    </ul>
    </StyledList>
  );
};

export default List;
