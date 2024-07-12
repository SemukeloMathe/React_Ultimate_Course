import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 1, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
  { id: 4, description: "Shirts", quantity: 10, packed: true },
];

const App = () => {
  const [items, setItems] = useState([]);

  function addItems(item) {
    setItems(items => [...items, item]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={addItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
};

function Logo() {
  return <h1>🏝️Far Away💼</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = {
      description: description,
      quantity: quantity,
      packed: false,
      id: initialItems.length + 1,
    };
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 😎</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ol>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ol>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>🎒You have X items on list, and you already packed X (X%)</em>
    </footer>
  );
}

export default App;
