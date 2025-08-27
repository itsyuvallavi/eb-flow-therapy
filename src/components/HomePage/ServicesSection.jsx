import { useState, useEffect } from "react";
import { User, Heart, Users, Shield, Globe, Flower } from 'lucide-react';
import PropTypes from 'prop-types';
import { useIntersectionObserver } from "../modal/useIntersectionObserver";
import background from "../../assets/tree.png";

const ServiceCard = ({ title, description, Icon, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div 
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm p-4 md:p-8 
        shadow-xl hover:shadow-2xl
        transition-all duration-700 ease-out will-change-transform
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      style={{ 
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-mountain-terra/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-white/30 group-hover:bg-white/40 transition-colors duration-300">
            <Icon className="w-5 h-5 md:w-6 md:h-6 text-mountain-terra/60 group-hover:text-mountain-terra transition-colors duration-300" />
          </div>
          <h3 className="text-base md:text-xl font-medium text-mountain-shadow group-hover:text-mountain-forest transition-colors duration-300">
            {title}
          </h3>
        </div>
        <p className="text-xs md:text-base text-mountain-shadow/90 group-hover:text-mountain-shadow transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

const AnimatedTitle = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  delay: PropTypes.number,
};

AnimatedTitle.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
};

const ServicesSection = () => {
  const [backgroundOpacity, setBackgroundOpacity] = useState(0.1);
  const [sectionRef, isSectionVisible] = useIntersectionObserver({
    threshold: 0.1 // Trigger when at least 10% of the section is visible
  });

  const services = [
    {
      title: "Individual Therapy",
      description: "Personalized support to navigate life’s challenges, enhance self-awareness, and develop effective coping strategies.",
      Icon: User
    },
    {
      title: "Relationship Therapies",
      description: "Family and couple therapies to foster deeper communication, understanding, and connection.",
      Icon: Heart
    },
    {
      title: "Cultural Competence",
      description: "Navigating systemic challenges with a culturally informed perspective.",
      Icon: Globe
    },
    {
      title: "Personality Disorders",
      description: "Develop coping skills to manage intense emotions and reactivity with a compassionate, non-judgmental approach.",
      Icon: Flower
    },
    {
      title: "Anxiety & Related Disorders",
      description: "Evidence-based therapies to manage anxiety, reduce stress, and build long-term resilience.",
      Icon: Shield
    },
    {
      title: "Trauma-Informed Care",
      description: "Create a safe space to explore the impact of past experiences, fostering healing, resilience, and emotional growth.",
      Icon: Users
    },
  ];

  // Effect to change opacity when section becomes visible
  useEffect(() => {
    // Reset opacity when page loads or is refreshed
    setBackgroundOpacity(0.10);
  }, []);

  useEffect(() => {
    let timeoutId;
    if (isSectionVisible) {
      timeoutId = setTimeout(() => {
        setBackgroundOpacity(0.35);
      }, 1000);
    } else {
      timeoutId = setTimeout(() => {
        setBackgroundOpacity(0.1);
      }, 1000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isSectionVisible]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-mountain-peak/20 to-mountain-forest/40"
    >
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-mountain-shadow/0 to-transparent" />
      
      {/* Background Image with dynamic opacity */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat transition-opacity duration-500"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "1000px",
          opacity: backgroundOpacity,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 relative">
          <AnimatedTitle>
            <h2 className="relative inline-block text-3xl md:text-5xl text-mountain-shadow mb-4 md:mb-6 font-bold">
              <span className="relative">Therapeutic Services</span>
            </h2>
          </AnimatedTitle>

          <AnimatedTitle delay={200}>
            <div className="flex flex-col items-center space-y-4 mb-6 md:mb-8">
              <div className="w-24 md:w-36 h-1 bg-mountain-shadow/30" />
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl text-mountain-shadow/90 font-light">
                  Your Path Towards Growth & Healing
                </h3>
                <p className="text-base md:text-lg text-mountain-shadow/80 font-normal">
                  Comprehensive therapeutic support tailored to your unique journey
                </p>
              </div>
            </div>
          </AnimatedTitle>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              Icon={service.Icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;