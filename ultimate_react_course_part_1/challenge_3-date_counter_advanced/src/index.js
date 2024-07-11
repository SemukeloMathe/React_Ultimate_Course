import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);
  const curDate = date.toDateString();

  return (
    <section className="app">
      <article className="slider">
        <input
          type="range"
          min={1}
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
        {count === 0 && `Today is ${curDate}`}
        {count === 1 && `Tomorrow is ${curDate}`}
        {count === -1 && `Yesterday was ${curDate}`}
        {count < -1 && `${Math.abs(count)} days ago was ${curDate}`}
        {count > 1 && `${count} days from today is ${curDate}`}
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
