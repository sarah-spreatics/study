import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ProgressBar from "./progress-bar/ProgressBar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<ProgressBar />);
