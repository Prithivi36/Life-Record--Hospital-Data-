import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import DashBoard from "./Pages/DashBoard/DashBoard";
import RecordsMain from "./Pages/Records/RecordsMain";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/records" element={<RecordsMain />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
