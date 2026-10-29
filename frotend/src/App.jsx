import React from "react";
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
import Programs from "./pages/Programs";
import Community from "./pages/Community";
import Impact from "./pages/Impact";
import About from "./pages/About";
import WhoWeAre from "./pages/WhoWeAre"; 
import OurTeam from "./pages/OurTeam";   
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-white text-gray-900">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ... existing routes ... */}
          <Route path="/about" element={<About />} />
          <Route path="/about/who-we-are" element={<WhoWeAre />} /> {/* 👈 NEW */}
          <Route path="/about/our-team" element={<OurTeam />} />     {/* 👈 NEW */}
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