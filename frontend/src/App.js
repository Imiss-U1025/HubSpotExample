import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import SendSchedule from "./pages/SendSchedule";
import Home from "./pages/Home";
import Success from "./pages/Success";
import MailSetting from "./components/MailSetting";
import Authorization from "./components/Authorization";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/athorization" />}  />
        <Route path="/athorization" element={<Authorization/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/mail-setting" element={<MailSetting/>} />
        <Route path="/send-schedule" element={<SendSchedule/>} />
      </Routes>
    </Router>
  );
};

export default App;
