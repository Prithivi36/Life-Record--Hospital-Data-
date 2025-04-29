import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import DashBoard from "./Pages/DashBoard/DashBoard";
import RecordsMain from "./Pages/Records/RecordsMain";
import Login from "./Pages/Login/Login";
import Admin from "./Pages/Admin/Admin";
import Reports from "./Pages/Reports/Reports";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard/:id" element={<DashBoard />} />
          <Route path="/records" element={<RecordsMain />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
