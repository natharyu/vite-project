import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Character from "./pages/Character.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="character/:id" element={<Character />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
