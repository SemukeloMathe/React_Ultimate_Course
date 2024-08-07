import { Fragment, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(true);

  const nextMessage = () => {
    if (count < 3) setCount(c => c + 1);
  };
  const prevMessage = () => {
    if (count > 1) setCount(c => c - 1);
  };

  return (
    <Fragment>
      <button className="close" onClick={() => setOpen(op => !op)}>
        &times;
      </button>
      {open && (
        <div className="steps">
          <div className="numbers">
            <div className={count >= 1 ? "active" : ""}>1</div>
            <div className={count >= 2 ? "active" : ""}>2</div>
            <div className={count >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {count}: {messages[count - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#FFF" }}
              onClick={prevMessage}
            >
              Prev
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#FFF" }}
              onClick={nextMessage}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
