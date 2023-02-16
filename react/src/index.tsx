import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import ProgressBar from "./progress-bar/ProgressBar";
import Audio from "./audio/Audio";
import TypingAnimation from "./typing-animation/TypingAnimation";
import Accordion from "./accordion/Accordion";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <ProgressBar />
    <Audio />
    <TypingAnimation />
    <Accordion />
    <Accordion />
  </>
);
