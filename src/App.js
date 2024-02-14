import React, { useState } from "react";
import List from "./components/List";
import Item from "./components/Item"; // You may not need this import
import Input from "./components/Input";

function App() {
  const [items, setItems] = useState([]); // State to store the list items

  const addItem = (newItem, quantity) => {
    setItems([...items, { id: Date.now(), name: newItem, quantity: 1, completed: false }]);
  };

  const onComplete = (itemId) => {
    setItems(
      items.map((item) => (item.id === itemId ? { ...item, completed: !item.completed } : item))
    );
  };

  const onDelete = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <List items={items} onItemComplete={onComplete} onItemDelete={onDelete} />
      <Input onAddItem={addItem} />
    </div>
  );
}

export default App;
