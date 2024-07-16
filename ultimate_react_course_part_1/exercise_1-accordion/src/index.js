import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const faqs = [
  {
    title: "Where are the chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, corporis quos illum consectetur tempora nemo atque eaque!",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Ut, id vel, ab saepe repellendus error maiores quia dolores omnis asperiores ducimus.",
  },
  {
    title: "Do yo ship to countries outside EU?",
    text: "Exercitationem molestias, cupiditate, optio, deleniti omnis corrupti quisquam aspernatur explicabo veniam totam similique fugit. Repudiandae nobis nihil quae facere libero.",
  },
]

const App = () => {
  return (
    <section>
      <Accordion data={faqs} />
    </section>
  );
};

const Accordion = ({ data }) => {
  return <div className="accordion">
    {data.map(
      (el, i) =>
        <AccordionItem key={i} title={el.title} text={el.text} num={i} />
    )}
  </div>
}

const AccordionItem = ({ num, title, text }) => {
  const [open, setOpen] = useState(false);

  return <div className={`item ${open ? "open" : ""}`} onClick={() => setOpen(op => !op)}>
    <p className={`number ${open ? "number" : ""}`}> 0{num + 1}</p>
    <p className={`title ${open ? "text" : ""}`}>{title}</p>
    <p className="icon">{open ? "-" : "+"}</p>
    {open &&
      <div className={`content-box`}>{text}</div>
    }
  </div>
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);