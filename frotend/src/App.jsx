import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";             

import Home from "./pages/Home";
import MaternalCare from "./pages/MaternalCare";
import BabyCare from "./pages/BabyCare";
import MentalHealth from "./pages/MentalHealth";
import HealthInfo from "./pages/HealthInfo";
import Facilities from "./pages/Facilities";
import Appointments from "./pages/Appointments";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maternal" element={<MaternalCare />} />
          <Route path="/baby" element={<BabyCare />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/health-info" element={<HealthInfo />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />                                       
    </div>
  );
}

export default App;