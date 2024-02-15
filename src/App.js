import React, { useState } from "react";
import List from "./components/List";
import Input from "./components/Input";

function App() {
  const [items, setItems] = useState([]); // State to store the list items

  const addItem = (newItem, quantity) => {
    setItems([...items, { id: Date.now(), name: newItem, quantity, completed: false }]);
  };

  const onComplete = (itemId) => {
    setItems(
      items.map((item) => (item.id === itemId ? { ...item, completed: !item.completed } : item))
    );
  };

  const onDelete = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  const onQuantityChange = (itemId, newQuantity) => {
    setItems(
      items.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const onEdit = (itemId) => {
    // Implement logic to handle editing state and render EditItem component
  };

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <List
        items={items}
        onItemComplete={onComplete}
        onDelete={onDelete}
        onQuantityChange={onQuantityChange}
        onEdit={onEdit}
      />
      <Input onAddItem={addItem} />
    </div>
  );
}

export default App;
