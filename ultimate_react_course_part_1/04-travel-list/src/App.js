import { useState } from "react";
import { Logo } from "./components/Logo";
import { Form } from "./components/Form";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";

const App = () => {
  const [items, setItems] = useState([]);
  function addItems(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function toggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList() {
    const confirmed = window.confirm("Are you sure you want to delete all Items?");
    if (confirmed)
      setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form items={items} onAddItems={addItems} />
      <PackingList
        items={items}
        onDeleteItem={deleteItem}
        onToggleItem={toggleItem}
        onClearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 1, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
//   { id: 4, description: "Shirts", quantity: 10, packed: true },
// ];