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
  const [open, setOpen] = useState(null);

  return <div className="accordion">
    {data.map(
      (el, i) =>
        <AccordionItem key={i} title={el.title} num={i} open={open} onSetOpen={setOpen}>
          {el.text}
        </AccordionItem>
    )}
    <AccordionItem key={"test"} title={"How long is shipment?"} num={22} open={open} onSetOpen={setOpen}>
      Amet, libero adipisci perferendis neque voluptatum harum
      obcaecati nobis laudantium ea sit cupiditate, officiis, numquam praesentium. Quia nulla corporis ipsum numquam
      molestias tempore quidem accusamus atque!
    </AccordionItem>
  </div>
}

const AccordionItem = ({ num, title, open, onSetOpen, children }) => {
  const isOpen = num === open;

  const toggleOpen = () => {
    onSetOpen(isOpen ? null : num);
  }

  return <div className={`item ${isOpen ? "open" : ""}`} onClick={toggleOpen}>
    <p className={`number ${isOpen ? "number" : ""}`}> {num < 9 ? `0${num + 1}` : num + 1}</p>
    <p className={`title ${isOpen ? "text" : ""}`}>{title}</p>
    <p className="icon">{isOpen ? "-" : "+"}</p>
    {isOpen &&
      <div className={`content-box`}>{children}</div>
    }
  </div>
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);