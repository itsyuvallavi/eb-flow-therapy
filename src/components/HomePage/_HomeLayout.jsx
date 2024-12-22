// pages/Home.jsx
import { useState } from "react";
import HeroSection from "./HeroSection";
import WelcomeSection from "./WelcomeSection";
import ServicesSection from "./ServicesSection";
import ContactSection from "./ContactSection";
import CTASection from "./CTASection";

const Home = () => {
  const handleScrollToWelcome = () => {
    document.getElementById("welcome")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeroSection onScrollToWelcome={handleScrollToWelcome} />
      <WelcomeSection />
      <ServicesSection />
      <CTASection />
      <ContactSection />
    </>
  );
};

export default Home;