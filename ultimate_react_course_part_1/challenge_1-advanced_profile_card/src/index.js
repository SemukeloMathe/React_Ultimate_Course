import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "React",
    level: "intermediate",
    color: "#2ecc71"
  }, {
    skill: "HTML",
    level: "beginner",
    color: "#8e44ad"
  }, {
    skill: "JavaScript",
    level: "intermediate",
    color: "#34495e"
  }, {
    skill: "Java",
    level: "beginner",
    color: "#3498db"
  }, {
    skill: "Python",
    level: "expert",
    color: "#7f8c8d"
  }, {
    skill: "C",
    level: "intermediate",
    color: "#f1c40f"
  }, {
    skill: "Docker",
    level: "expert",
    color: "#e74c3c"
  }, {
    skill: "CSS",
    level: "beginner",
    color: "#d35400"
  },
]

const App = () => {
  return (
    <section className="card">
      <Avatar />
      <Description />
    </section>
  );
};

function Avatar() {
  return <article className="avatar">
    <img src="images/sem-mathe-photo.jpg" alt="Semukelo Mathe " />
  </article>
};

function Description() {
  return <section className="data">
    <h2>Semukelo Mathe</h2>
    <p>Chess player by profession and A seasoned developer as a hobby. Gets more done in a long time and calculates positions with precision. Also considered a tactics maestro</p>
    <SkillList />
  </section>
};

function SkillList() {
  return <ul className="skill-list">
    {
      skills.map((skill, i) => (
        <Skill key={i} skill={skill} />
      ))
    }
  </ul>
};

function Skill({ skill }) {
  return <li className="skill" style={{ backgroundColor: `${skill.color}` }}>
    <p>{skill.skill} {skill.level === "beginner" ? "🥳" : skill.level === "intermediate" ? "🤖" : skill.level === "expert" ? "💰" : ""}</p>
  </li>
};

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);