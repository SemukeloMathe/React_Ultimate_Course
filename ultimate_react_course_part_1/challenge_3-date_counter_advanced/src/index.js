import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  // const resetStats = () => {
  //   setCount(0);
  //   setStep(0);
  // }

  return (
    <section className="app">
      <article className="slider">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <p>{step}</p>
      </article>

      <article className="buttons">
        <button onClick={() => setCount(count - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button
          onClick={() => {
            setCount(count + step);
          }}
        >
          +
        </button>
      </article>

      <br />
      <p className="date">
        {count === 0 && `Today is ${date.toDateString()}`}
        {count === 1 && `Tomorrow is ${date.toDateString()}`}
        {count === -1 && `Yesterday was ${date.toDateString()}`}
        {count < -1 && `${count} days ago was ${date.toDateString()}`}
        {count > 1 && `${count} days from today is ${date.toDateString()}`}
      </p>

      <br />
      {(step !== 1 || count !== 0) && (
        <button
          className="reset"
          onClick={() => {
            setCount(0);
            setStep(1);
          }}
        >
          Reset
        </button>
      )}
    </section>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
