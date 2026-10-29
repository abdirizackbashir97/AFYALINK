import React from "react";
import Hero from "../components/About/Hero";
import WhyMatters from "../components/About/WhyMatters";
import CareCards from "../components/About/CareCards";
import WhoWeServe from "../components/About/WhoWeServe";
import HowItWorks from "../components/About/HowItWorks";
import Commitment from "../components/About/Commitment";
import FinalCTA from "../components/About/FinalCTA";

export default function About() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Hero />
      <WhyMatters />
      <CareCards />
      <WhoWeServe />
      <HowItWorks />
      <Commitment />
      <FinalCTA />
    </div>
  );
}