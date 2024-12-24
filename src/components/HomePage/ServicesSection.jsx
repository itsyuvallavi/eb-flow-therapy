import React, { useState, useEffect } from "react";
import { User, Heart, Users, Shield, Globe, Flower, Leaf, Stars } from 'lucide-react';
import { useIntersectionObserver, FloatingIcon } from "../modal/useIntersectionObserver";
import background from "../../assets/tree.png";

const ServiceCard = ({ title, description, Icon, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div 
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm p-8 
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
          <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
            <Icon className="w-6 h-6 text-mountain-terra group-hover:text-mountain-terra transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-medium text-mountain-shadow group-hover:text-mountain-forest transition-colors duration-300">
            {title}
          </h3>
        </div>
        <p className="text-mountain-shadow/90 group-hover:text-mountain-shadow transition-colors duration-300">
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

const ServicesSection = () => {
  const [backgroundOpacity, setBackgroundOpacity] = useState(0.1);
  const [sectionRef, isSectionVisible] = useIntersectionObserver({
    threshold: 0.1 // Trigger when at least 10% of the section is visible
  });

  const services = [
    {
      title: "Individual Therapy",
      description: "Personalized support for personal growth, anxiety, depression, and life transitions.",
      Icon: User
    },
    {
      title: "Couples Counseling",
      description: "Strengthen your relationship through improved communication and understanding.",
      Icon: Heart
    },
    {
      title: "Family Therapy",
      description: "Build stronger family bonds and navigate challenges together.",
      Icon: Users
    },
    {
      title: "Anxiety Treatment",
      description: "Evidence-based approaches to managing anxiety and building resilience.",
      Icon: Shield
    },
    {
      title: "Cultural Transition",
      description: "Support for navigating cultural identity and adjustment challenges.",
      Icon: Globe
    },
    {
      title: "Trauma Recovery",
      description: "Gentle, trauma-informed care for healing and growth.",
      Icon: Flower
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
      }, 1000); // 500ms delay before increasing opacity
    } else {
      timeoutId = setTimeout(() => {
        setBackgroundOpacity(0.1);
      }, 1000); // 500ms delay before decreasing opacity
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
      className="relative py-20 overflow-hidden bg-gradient-to-b from-mountain-peak/20 to-mountain-forest/40"
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
        <div className="text-center mb-16 relative">
          <AnimatedTitle>
            <h2 className="relative inline-block text-5xl text-mountain-shadow mb-6 font-bold">
              <span className="relative">Therapeutic Services</span>
            </h2>
          </AnimatedTitle>

          <AnimatedTitle delay={200}>
            <div className="flex flex-col items-center space-y-4 mb-8">
              <div className="w-36 h-1 bg-mountain-shadow/30" />
              <div className="space-y-2">
                <h3 className="text-3xl text-mountain-shadow/90 font-light">
                  Your Path to Growth & Healing
                </h3>
                <p className="text-lg text-mountain-shadow/80 font-normal">
                  Comprehensive therapeutic support tailored to your unique journey
                </p>
              </div>
            </div>
          </AnimatedTitle>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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