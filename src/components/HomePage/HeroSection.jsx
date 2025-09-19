// components/sections/HeroSection.jsx
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import PropTypes from 'prop-types';
// Using the new beach background from public directory


const HeroSection = ({ onScrollToWelcome }) => {  // Properly destructure the prop
  const navigate = useNavigate();

  return (
    <>
      <style>
        {`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20 md:pt-0" style={{ backgroundColor: 'rgba(244, 194, 161, 0.1)' }}>
      {/* Background image with sophisticated gradient fade like Welcome section */}
      <div
        className="absolute bg-no-repeat bg-center"
        style={{
          backgroundImage: 'url(/beach.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0) 100%)'
        }}
      />
      {/* Overlay for readability with same gradient */}
      <div
        className="absolute bg-white/70"
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0) 100%)'
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex items-center justify-center min-h-[80vh]">

          {/* Text Content - Centered */}
          <div className="space-y-8 text-center max-w-6xl">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-text-primary leading-tight">
                <span
                  className="text-6xl md:text-7xl lg:text-8xl block mb-8 font-black tracking-wider text-text-secondary"
                  style={{
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                    animation: 'float 4s ease-in-out infinite'
                  }}
                >
                  EB & Flow Therapy
                </span> 
                <span className="italic font-medium text-primary-sage drop-shadow-md">Flexible Therapy</span>   
                <br /><span className="text-primary-sage drop-shadow-md">That Fits Your Flow</span> 
              </h1>
            </div>
            
            <p className="animate-fade-in animate-delay-200 text-xl text-primary-sage leading-relaxed max-w-2xl mx-auto">
              Personalized therapy that adapts to your unique story. We honor your journey
              while providing evidence-based tools for healing and growth.
            </p>
            
            <div className="animate-fade-in animate-delay-400 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="bg-primary-sage text-black px-8 py-4 rounded-lg hover:bg-primary-forest hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
              >
                Contact Us To Get Started!
              </button>
              <button
                onClick={() => navigate("/our-team")}
                className="border-2 border-primary-forest text-primary-forest px-8 py-4 rounded-lg hover:bg-primary-forest hover:text-white transition-all duration-300 font-medium"
              >
                Meet Our Team
              </button>
            </div>

            {/* Trust indicators - Hidden on mobile */}
            <div className="animate-fade-in animate-delay-600 pt-4 hidden md:block">
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-text-muted">
                <span className="bg-white px-3 py-1 rounded-full shadow-sm">Licensed Therapists</span>
                <span>•</span>
                <span className="bg-white px-3 py-1 rounded-full shadow-sm">Evidence-Based Practice</span>
                <span>•</span>
                <span className="bg-white px-3 py-1 rounded-full shadow-sm">Personalized Approach</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <div className="absolute bottom-8 left-0 right-0 justify-center hidden md:flex">
        <button
          onClick={onScrollToWelcome}
          className="text-primary-sage cursor-pointer animate-float hover:text-primary-forest transition-colors duration-300"
          aria-label="Scroll to About section"
        >
          <ChevronDown
            size={48}
            className="stroke-2"
          />
        </button>
      </div>
    </section>
    </>
  );
};

HeroSection.propTypes = {
  onScrollToWelcome: PropTypes.func.isRequired,
};

export default HeroSection;