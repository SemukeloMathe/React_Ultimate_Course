import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const App = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const incrCount = () => {
    setCount((c) => c + step);
  };
  const decrCount = () => {
    setCount((c) => c - step);
  };
  const incrStep = () => {
    setStep((s) => s + 1);
  };
  const decrStep = () => {
    setStep((s) => s - 1);
  };

  return (
    <div className="container">
      <div className="step">
        <button onClick={decrStep}>-</button>
        <p>Step: {step}</p>
        <button onClick={incrStep}>+</button>
      </div>

      <div className="step">
        <button onClick={decrCount}>-</button>
        <p>Count:{count}</p>
        <button onClick={incrCount}>+</button>
      </div>

      <div className="date">
        <p>{count === -1 && `Yesterday was ${date.toDateString()}`} </p>
        <p>{count === 0 && `Today is ${date.toDateString()}`}</p>
        <p>{count === 1 && `Tomorrow is ${date.toDateString()}`} </p>
        <p>{count < -1 && `${count} days ago was ${date.toDateString()}`}</p>
        <p>{count > 1 && `${count} days from today is ${date.toDateString()}`} </p>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
