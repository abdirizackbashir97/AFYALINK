import React from "react";
import Hero from "../components/Home/Hero";
import Stats from "../components/Home/Stats";
import Services from "../components/Home/Services";
import LatestArticles from "../components/Home/LatestArticles";
import HealthVideos from "../components/Home/HealthVideos"; // <--- IMPORT HERE
import HowItWorks from "../components/Home/HowItWorks";
import Testimonial from "../components/Home/Testimonial";
import FAQ from "../components/Home/FAQ";
import FinalCTA from "../components/Home/FinalCTA";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white">
      <Hero />
      <Stats />
      <Services />
      <LatestArticles />
      <HealthVideos /> {/* <--- ADD HERE */}
      <HowItWorks />
      <Testimonial />
      <FAQ />
      <FinalCTA />
    </div>
  );
}