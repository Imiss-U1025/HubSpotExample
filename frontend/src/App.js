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
import Success from "./pages/Success";
import Authorization from "./components/Authorization";
import Edit from "./pages/Edit";
import SendSchedule from "./pages/SendSchedule";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <MenuBar />
      <Routes>
        <Route path="/" element={<Navigate to="/athorization" />} />
        <Route path="/athorization" element={<Authorization />} />
        <Route path="/success" element={<Success />} />
        <Route path="/send-schedule" element={<SendSchedule />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
