import { useEffect, useRef, useState } from 'react';
import { CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import background from '../../assets/floral-pattern.jpg'

// Custom hook for scroll animations (same as in ServicesSection)
const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1, ...options });

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};

// Animated background elements
const FloatingIcon = ({ Icon, className, delay }) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div 
      ref={ref}
      className={`absolute ${className} transform transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Icon className="w-8 h-8 text-mountain-shadow/20" />
    </div>
  );
};

const CTASection = () => {
  const [titleRef, isTitleVisible] = useIntersectionObserver();
  const [contentRef, isContentVisible] = useIntersectionObserver();
  const [buttonRef, isButtonVisible] = useIntersectionObserver();

  return (
    <section className="relative py-20 overflow-hidden" style={{ backgroundColor: 'rgba(244, 194, 161, 0.1)' }}>
      {/* Decorative overlay */}
      <div className="absolute inset-0" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div 
          className="relative bg-white backdrop-blur-sm rounded-2xl p-12 shadow-xl
            transform transition-all duration-700 
            group"
        >
          {/* Background image that appears when scrolled into view */}
          <div 
            className={`absolute inset-0 z-[-1] transition-opacity duration-1000 
                       bg-cover bg-center bg-no-repeat rounded-2xl
                       ${isTitleVisible ? 'opacity-20' : 'opacity-0'}`}
            style={{
                backgroundImage: `url(${background})`,
            }}
          />

          <div className="text-center space-y-6">
            {/* Animated Title */}
            <div
              ref={titleRef}
              className={`transform transition-all duration-700
                ${isTitleVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <h2 className="text-4xl font-light text-mountain-shadow mb-2">
                Begin Your Journey Today
              </h2>
              <div className="w-24 h-1 bg-sunset-coral mx-auto mt-4" />
            </div>
            
            {/* Animated Content */}
            <div
              ref={contentRef}
              className={`transform transition-all duration-700 delay-200
                ${isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="text-xl text-mountain-shadow/90 max-w-2xl mx-auto">
              Ready to take the first step? Schedule a complimentary 15-minute consultation to find the right
                therapist for you.
              </p>
            </div>
            
            {/* Animated Button */}
            <div
              ref={buttonRef}
              className={`pt-6 transform transition-all duration-700 delay-400
                ${isButtonVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 bg-sunset-coral hover:bg-sunset-coral/80 
                  text-mountain-shadow rounded-full transition-all duration-300 transform hover:scale-105 
                  hover:shadow-lg backdrop-blur-sm mountain-terra "
              >
                <CalendarCheck className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                <span className="font-medium">Schedule Consultation</span>
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>

              <p className="text-mountain-shadow/70 text-sm mt-6 animate-pulse">
                *Currently accepting new clients for online therapy sessions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;