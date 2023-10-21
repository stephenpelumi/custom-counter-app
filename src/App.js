import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import ErrorPage from "./components/ErrorPage";
import NotFound from "./components/NotFound";
import ErrorBoundaryMessagePage from "./components/ErrorBoundaryMessage";
import "./App.css";

function App() {
  return (
    <Router className="Body">
      {/* The main routes for the different pages */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/Errorpage" element={<ErrorPage />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/errorBoundaryMessage"
          element={<ErrorBoundaryMessagePage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
