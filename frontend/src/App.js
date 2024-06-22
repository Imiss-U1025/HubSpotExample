import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Authorization from "./components/Authorization";
import SendSchedulePage from "./pages/SendSchedulePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/athorization" />}  />
        <Route path="/athorization" element={<Authorization/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/send-schedule" element={<SendSchedulePage/>}  />
      </Routes>
    </Router>
  );
};

export default App;
