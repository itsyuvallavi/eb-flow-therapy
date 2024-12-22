// components/sections/HeroSection.jsx
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import background from "../../assets/mountain.jpg";


const HeroSection = ({ onScrollToWelcome }) => {  // Properly destructure the prop
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <div className="animate-fade-in">
          <h1 className="text-mountain-shadow text-4xl md:text-5xl lg:text-7xl font-light mb-6 leading-tight drop-shadow-lg">
            Your Journey to
            <span className="block text-mountain-forest animate-float drop-shadow-lg">
              Wellness Begins Here
            </span>
          </h1>
        </div>

        <p className="animate-fade-in animate-delay-200 text-mountain-forest text-xl md:text-2xl font-light mb-12 max-w-2xl drop-shadow-lg">
          A collective of experienced therapists dedicated to your growth and
          healing
        </p>

        <div className="animate-fade-in animate-delay-400">
          <button
            onClick={() => navigate("/our-team")}
            className="group px-8 py-4 bg-mountain-peak text-mountain-terra rounded-full hover:bg-mountain-dusk/90 hover:text-mountain-forest transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 backdrop-blur-sm"
          >
            <span>Meet Our Therapists</span>
            <span className="transform transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>

      <button
        onClick={onScrollToWelcome}  // Use the prop here
        className="absolute bottom-8 -translate-x-1/2 text-mountain-terra cursor-pointer animate-float"
        aria-label="Scroll to About section"
      >
        <ChevronDown
          size={54}
          className="hover:text-mountain-dusk transition-colors duration-300 stroke-2"
        />
      </button>
    </section>
  );
};

export default HeroSection;