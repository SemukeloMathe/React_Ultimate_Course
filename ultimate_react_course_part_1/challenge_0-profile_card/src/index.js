import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
  { skill: "CSS", emoji: "🌈" },
  { skill: "HTML", emoji: "🏷️" },
  { skill: "Java", emoji: "🤖" },
  { skill: "React", emoji: "💪" },
  { skill: "Docker", emoji: "🐳" },
  { skill: "Python", emoji: "🐍" },
  { skill: "JavaScript", emoji: "💰" },
];

const App = () => {
  return (
    <section className="card">
      <Avatar />
      <Description />
    </section>
  )
};

const Avatar = () => {
  return (
    <article className="avatar">
      <img src="images/sem-mathe-photo.jpg" alt="Sem Mathe" />
    </article>
  );
};

const Description = () => {
  return (
    <article className="data">
      <h1>Semukelo Mathe</h1>
      <p>Chess player by profession and A seasoned developer as a hobby. Gets more done in a long time and calculates positions with precision. Also considered a tactics maestro</p>
      <SkillsList skills={skills} />
    </article>
  )
}

const SkillsList = (props) => {
  const backgroundColor = [
    "red",
    "blue",
    "purple",
    "green",
    "yellow",
    "orange",
    "lime"
  ]

  return (
    <article>
      <ul className="skill-list">{
        props.skills.map((skill, i) => (
          <li className="skill" key={i} style={{ backgroundColor: backgroundColor[i] }}>
            <span>{skill.skill} {skill.emoji}</span>
          </li>
        ))
      }
      </ul>
    </article>
  )
};

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

