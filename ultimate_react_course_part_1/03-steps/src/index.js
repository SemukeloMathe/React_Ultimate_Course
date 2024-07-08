import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [count, setCount] = useState(1);
  // const count = 3;
  const nextMessage = () => {
    setCount(c => c + 1);
  }
  const prevMessage = () => {
    setCount(c => c - 1);
  }

  return <div className="steps">
    <div className="numbers">
      <div className={`${count >= 1 ? "active" : ""}`}>1</div>
      <div className={`${count >= 2 ? "active" : ""}`}>2</div>
      <div className={`${count >= 3 ? "active" : ""}`}>3</div>
    </div>
    <p className="message">Step {count}: {messages[count - 1]}</p>
    <div className="buttons">
      <button style={{ backgroundColor: "#7950f2", color: "#FFF" }} onClick={prevMessage}>Prev</button>
      <button style={{ backgroundColor: "#7950f2", color: "#FFF" }} onClick={nextMessage}>Next</button>
    </div>
  </div>
};

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
