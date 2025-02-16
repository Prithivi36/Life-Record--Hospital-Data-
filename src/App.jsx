import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import DashBoard from "./Pages/DashBoard/DashBoard";
import RecordsMain from "./Pages/Records/RecordsMain";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/records" element={<RecordsMain />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
