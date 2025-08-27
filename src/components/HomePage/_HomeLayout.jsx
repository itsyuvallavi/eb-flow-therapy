// pages/Home.jsx
import SEOHead from "../SEO/SEOHead";
import { generateLocalBusinessSchema, generateWebsiteSchema } from "../SEO/StructuredData";
import { getSEOData } from "../../data/seoData";
import HeroSection from "./HeroSection";
import WelcomeSection from "./WelcomeSection";
import ServicesSection from "./ServicesSection";
import ContactSection from "./ContactSection";
import CTASection from "./CTASection";

const Home = () => {
  const handleScrollToWelcome = () => {
    document.getElementById("welcome")?.scrollIntoView({ behavior: "smooth" });
  };

  const seoData = getSEOData('home');
  const structuredData = [
    generateLocalBusinessSchema(),
    generateWebsiteSchema()
  ];

  return (
    <>
      <SEOHead 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        url={seoData.url}
        image={seoData.image}
        structuredData={structuredData}
      />
      <HeroSection onScrollToWelcome={handleScrollToWelcome} />
      <WelcomeSection />
      <ServicesSection />
      <CTASection />
      <ContactSection />
    </>
  );
};

export default Home;