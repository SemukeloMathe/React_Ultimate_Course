import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 1, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
//   { id: 4, description: "Shirts", quantity: 10, packed: true },
// ];

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

function Logo() {
  return <h1>🏝️Far Away💼</h1>;
}

function Form({ items, onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = {
      description: description,
      quantity: quantity,
      packed: false,
      id: items.length + 1,
    };
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 😎</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
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

function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));

  return (
    <div className="list">
      <ol>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ol>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value={"input"}>Sort by input order</option>
          <option value={"description"}>Sort by description</option>
          <option value={"packed"}>Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have everything! Ready to go ✈️"
          : `🎒You have ${numItems} items on list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

export default App;
