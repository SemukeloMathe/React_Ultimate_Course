import { useState } from "react";

const App = () => {
  const [bill, setBill] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  const tip = ((myTip / 100) * bill + (friendTip / 100) * bill) / 2;

  const reset = () => {
    setBill(0);
    setMyTip(0);
    setFriendTip(0);
  };

  return (
    <section className="App">
      <Bill bill={bill} onSetBill={setBill} />
      <Service tip={myTip} onSetTip={setMyTip}>
        How did you like the service?
      </Service>
      <Service tip={friendTip} onSetTip={setFriendTip}>
        How did your friend like the service?
      </Service>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Button onReset={reset} />
        </>
      )}
    </section>
  );
};

const Bill = ({ bill, onSetBill }) => {
  return (
    <div className="bill">
      <p>How much was the bill?</p>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
};

const Service = ({ tip, onSetTip, children }) => {
  // Make component reusable
  return (
    <div className="service">
      <p>{children}</p>
      <select value={tip} onChange={(e) => onSetTip(Number(e.target.value))}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
};

const Output = ({ bill, tip }) => {
  return (
    <div className="output">
      <h1>
        You pay ${bill + tip} (${bill} + ${tip})
      </h1>
    </div>
  );
};

const Button = ({ onReset }) => {
  return (
    <button className="button" onClick={onReset}>
      Reset
    </button>
  );
};

export default App;
