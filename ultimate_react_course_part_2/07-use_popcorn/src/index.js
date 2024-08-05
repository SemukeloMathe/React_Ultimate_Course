import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.js";
// import "./index.css";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0)
  return <div>
    <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
    <p>This movie was rated {movieRating} stars.</p>
  </div>

}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} />
    <StarRating size={5} color="red" className="test" defaultRating={3} />
    <Test />
  </StrictMode>
)