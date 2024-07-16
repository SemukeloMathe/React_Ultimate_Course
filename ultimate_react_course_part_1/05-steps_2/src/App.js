import { Fragment, useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
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

          <StepMessage step={count}>
            {messages[count - 1]}
          </StepMessage>

          <div className="buttons">
            <Button textColor={"#FFF"} bgColor={"#7950f2"} onClick={prevMessage} text={"prev"} emoji={"👈"}>
              <span>👈</span>prev
            </Button>
            <Button textColor={"#FFF"} bgColor={"#7950f2"} onClick={nextMessage} text={"next"} emoji={"👉"}>
              next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h1>Step {step}</h1>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return <button style={{ backgroundColor: bgColor, color: textColor }}
    onClick={onClick}>
    {children}
  </button>
}

export default App;