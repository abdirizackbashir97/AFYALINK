import React, { useEffect } from "react";
import MaternalHero from "../components/maternal-care/MaternalHero";
import PregnancyCare from "../components/maternal-care/PregnancyCare";
import BreastfeedingCare from "../components/maternal-care/BreastfeedingCare";
import NewbornCare from "../components/maternal-care/NewbornCare";
import PostnatalCare from "../components/maternal-care/PostnatalCare";
import ClinicReminders from "../components/maternal-care/ClinicReminders";
import EmergencyCare from "../components/maternal-care/EmergencyCare";
import HealthEducation from "../components/maternal-care/HealthEducation";
import MaternalCTA from "../components/maternal-care/MaternalCTA";

export default function MaternalCare() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <MaternalHero />
      <PregnancyCare />
      <BreastfeedingCare />
      <NewbornCare />
      <PostnatalCare />
      <ClinicReminders />
      <EmergencyCare />
      <HealthEducation />
      <MaternalCTA />
      
      <div className="bg-slate-900 py-6 text-center">
        <p className="text-xs text-slate-400 px-4">
          Disclaimer: The information provided on AfyaLink is for educational purposes only and does not replace professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider.
        </p>
      </div>
    </div>
  );
}