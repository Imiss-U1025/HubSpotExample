import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SendSchedule from "./pages/SendSchedule";
import Home from "./pages/Home";
import Success from "./pages/Success";
import MailSetting from "./components/MailSetting";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/mail-setting" element={<MailSetting/>} />
        <Route path="/send-schedule" element={<SendSchedule/>} />
      </Routes>
    </Router>
  );
};

export default App;
