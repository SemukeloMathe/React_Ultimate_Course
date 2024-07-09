import { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript"
  }, {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components"
  }, {
    id: 5542,
    question: "What's the name of the syntax used to describe UI in React?",
    answer: "JSX"
  }, {
    id: 1278,
    question: "How to pass data from parent to child components?",
    answer: "Props"
  }, {
    id: 4961,
    question: "How to give components memory?",
    answer: "useState Hook"
  },
  {
    id: 6111,
    question: "What do we call an input elementthat is completely synchronized with UI?",
    answer: "Controlled Element"
  }
];

const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const showAnswer = (id) => {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcard-list">
      {questions.map((question) => (
        <div
          className={`flashcard ${question.id === selectedId ? "active" : ""}`}
          onClick={() => showAnswer(question.id)}
        >
          <p>{question.id === selectedId ? question.answer : question.question}</p>
        </div>
      ))}
    </div>
  );
};

export default App;