// components/sections/HeroSection.jsx
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import PropTypes from 'prop-types';
// Using the new beach background from public directory


const HeroSection = ({ onScrollToWelcome }) => {  // Properly destructure the prop
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center" style={{ backgroundColor: 'rgba(244, 194, 161, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 lg:pr-8">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-text-primary leading-tight">
                Guiding you toward 
                <span className="italic font-medium text-primary-sage"> emotional well-being</span>
                <br />and personal growth
              </h1>
            </div>
            
            <p className="animate-fade-in animate-delay-200 text-xl text-text-secondary leading-relaxed max-w-xl">
              Professional, compassionate therapy tailored to your unique journey 
              toward healing and self-discovery.
            </p>
            
            <div className="animate-fade-in animate-delay-400 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="bg-primary-sage text-black px-8 py-4 rounded-lg hover:bg-primary-forest hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
              >
                Schedule Consultation
              </button>
              <button
                onClick={() => navigate("/our-team")}
                className="border-2 border-primary-forest text-primary-forest px-8 py-4 rounded-lg hover:bg-primary-forest hover:text-white transition-all duration-300 font-medium"
              >
                Meet Our Team
              </button>
            </div>

            {/* Trust indicators */}
            <div className="animate-fade-in animate-delay-600 pt-4">
              <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
                <span className="bg-white px-3 py-1 rounded-full shadow-sm">LMFT #124458</span>
                <span>•</span>
                <span className="bg-white px-3 py-1 rounded-full shadow-sm">10+ Years Experience</span>
                <span>•</span>
                <span className="bg-white px-3 py-1 rounded-full shadow-sm">DBT, CBT, ACT Certified</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-fade-in animate-delay-400">
            <div className="relative">
              <img 
                src="/beach.jpg" 
                alt="Peaceful therapeutic landscape" 
                className="rounded-2xl shadow-2xl object-cover h-96 lg:h-[500px] w-full"
              />
              {/* Subtle overlay to soften the image */}
              <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-sunset-pink/30 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-sunset-rose/30 rounded-full blur-2xl"></div>
          </div>
          
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={onScrollToWelcome}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-sage cursor-pointer animate-float hover:text-primary-forest transition-colors duration-300"
        aria-label="Scroll to About section"
      >
        <ChevronDown
          size={48}
          className="stroke-2"
        />
      </button>
    </section>
  );
};

HeroSection.propTypes = {
  onScrollToWelcome: PropTypes.func.isRequired,
};

export default HeroSection;