import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.js";
// import "./index.css";
import StarRating from "./StarRating";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} />
  </StrictMode>
)