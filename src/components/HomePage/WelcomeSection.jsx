// components/sections/WelcomeSection.jsx
import React from 'react';
import { Heart, Users, Shield, Sparkles, GraduationCap, Award } from "lucide-react";
import { useIntersectionObserver } from "../modal/useIntersectionObserver";
import circleLogo from "../../assets/circle_logo.png";
import floralPattern2 from "../../assets/floral-pattern2.png";

const WelcomeSection = () => {
  const [profileRef, isProfileVisible] = useIntersectionObserver();
  const [featuresRef, areFeaturesVisible] = useIntersectionObserver();

  const features = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Expert Team",
      text: "Licensed therapists with specialized training in evidence-based approaches",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personalized Care",
      text: "Therapy that adapts to your unique needs and goals",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Inclusive Practice",
      text: "Sex-positive, kink-affirming, welcoming to all identities",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Collaborative Approach",
      text: "You're the expert on your life - we provide tools and support",
    },
  ];

  return (
    <section className="relative pt-10 pb-20 overflow-hidden" id="welcome" style={{ backgroundColor: 'rgba(244, 194, 161, 0.1)' }}>
      {/* Background Pattern - starts from middle of logo with bottom fade */}
      <div
        className={`absolute bg-no-repeat bg-center transition-opacity duration-1000 ${
          isProfileVisible ? 'opacity-15' : 'opacity-5'
        }`}
        style={{
          backgroundImage: `url(${floralPattern2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          top: '120px',
          left: 0,
          right: 0,
          bottom: 0,
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0) 100%)',
        }}
      ></div>
      
      <div className="relative z-10">
        {/* Profile Introduction - pulled up */}
        <div className="max-w-5xl mx-auto px-6 lg:px-8 mb-8 -mt-6">
          <div 
            ref={profileRef}
            className={`flex flex-col items-center text-center transform transition-all duration-700
              ${isProfileVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            
            {/* Circle Logo - Centered */}
            <div className="relative mb-6">
              <img
                src={circleLogo}
                alt="EB & Flow Therapy Logo"
                className="w-48 h-48 lg:w-56 lg:h-56 object-contain"
              />
              {/* Decorative accent */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-sage/20 to-accent-mint/20 rounded-full blur-xl -z-10"></div>
            </div>
            
            {/* Content Section - Centered */}
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-3xl lg:text-4xl font-light text-text-primary leading-tight">
                Welcome to <span className="font-medium text-primary-sage">EB & Flow Therapy</span>
                <span className="block text-2xl lg:text-3xl mt-2 text-text-secondary">
                  Where Your Story Shapes Your Healing
                </span>
              </h2>

              <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
                At EB & Flow Therapy, we believe every client's story is unique, and therapy should honor
                that individuality. Our team provides personalized, evidence-based care that adapts to your
                needs. We specialize in OCD, anxiety, personality disorders, and relationship challenges,
                creating an inclusive space where all identities and experiences are respected.
              </p>


            </div>
            
          </div>
        </div>
        {/* Why Choose Section - positioned to stay within background pattern */}
        <div className="max-w-3xl mx-auto px-6 lg:px-6 mt-4">
          <div 
            ref={featuresRef}
            className={`grid grid-cols-2 lg:grid-cols-4 gap-3 transform transition-all duration-700 delay-200
              ${areFeaturesVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            {features.map((feature, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="space-y-2 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-sage/10 to-primary-sage/5 rounded-full flex items-center justify-center mx-auto">
                    <div className="text-primary-sage">
                      {React.cloneElement(feature.icon, { className: "w-6 h-6" })}
                    </div>
                  </div>
                  
                  <h4 className="text-sm font-medium text-text-primary">
                    {feature.title}
                  </h4>
                  
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;