import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App"; // Main App Component
import Redirect from "./components/Redirect";

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Home route */}
        <Route path="/redirect" element={<Redirect />} /> {/* Redirect route */}
      </Routes>
    </Router>
  );
};

export default MainRouter;
