// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import "./App.css";
// import Success from "./pages/Success";
// import Authorization from "./components/Authorization";
// import SendSchedulePage from "./pages/SendSchedulePage";
// import Edit from "./pages/Edit";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navigate to="/athorization" />}  />
//         <Route path="/athorization" element={<Authorization/>} />
//         <Route path="/success" element={<Success/>} />
//         <Route path="/send-schedule" element={<SendSchedulePage/>}  />
//         <Route path="/edit" element={<Edit/>}  />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import MenuBar from "./components/MenuBar";
import Header from "./components/Header";
import Authorization from "./pages/Authorization";
import SendSchedule from "./pages/SendSchedule";
import EmailList from "./pages/EmailList";
import ConnectHubspot from "./pages/ConnectHubspot";
import "./App.css";
import Guide from "./pages/Guide";


function App() {
  return (
    <Router>
      <Header />
      <MenuBar />
      <Routes>
        <Route path="/" element={<Navigate to="/authorize" />} />
        <Route path="/connect" element={<ConnectHubspot />} />
        <Route path="/authorize" element={<Authorization />} />
        <Route path="/send-schedule" element={<SendSchedule />} />
        <Route path="/mail-list" element={<EmailList />} />
        <Route path="/guide" element={<Guide />} />
      </Routes>
    </Router>
  );
}

export default App;
