import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainRouter from "./MainRouter";
import ReactGA from "react-ga4";

ReactGA.initialize("G-BVNCPL0HKC"); // Replace with your GA Measurement ID

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>
);
