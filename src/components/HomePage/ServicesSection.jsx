import { useState } from "react";
import { User, Heart, Users, Shield, Globe, Brain, Flower, ArrowRight, Sparkles } from 'lucide-react';
import PropTypes from 'prop-types';
import { useIntersectionObserver } from "../modal/useIntersectionObserver";
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, Icon, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl p-8 h-80 transition-all duration-500 transform hover:-translate-y-2
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      style={{ 
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Simple Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-500
        ${isHovered 
          ? 'from-primary-sage/20 via-white/95 to-accent-mint/15' 
          : 'from-white/95 via-white/90 to-primary-sage/10'
        }`} 
      />
      
      {/* Subtle Border */}
      <div className="absolute inset-0 border border-primary-sage/20 rounded-2xl" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Icon */}
        <div className="mb-6">
          <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500
            bg-primary-sage/10 group-hover:bg-primary-sage/20 group-hover:scale-110`}>
            <Icon className="w-8 h-8 text-primary-forest transition-transform group-hover:scale-110" />
          </div>
        </div>
        
        {/* Text Content */}
        <div className="flex-1 space-y-4">
          <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary-forest transition-colors duration-300">
            {title}
          </h3>
          <p className="text-text-secondary leading-relaxed text-sm group-hover:text-text-primary transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 pt-4 border-t border-primary-sage/10">
          <Link 
            to="/services"
            className="inline-flex items-center space-x-2 text-primary-sage hover:text-primary-forest 
              transition-all duration-300 font-medium group-hover:translate-x-1"
          >
            <span className="text-sm">Learn More</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [titleRef, isTitleVisible] = useIntersectionObserver();

  const services = [
    {
      title: "Individual Therapy",
      description: "Personalized support for anxiety, depression, OCD, and personal growth through evidence-based approaches like DBT, CBT, and ACT.",
      Icon: User
    },
    {
      title: "Couples Therapy",
      description: "Strengthen relationships through improved communication, conflict resolution, and emotional intimacy using EFT techniques.",
      Icon: Heart
    },
    {
      title: "Family Therapy",
      description: "Navigate family dynamics, cultural transitions, and intergenerational challenges in a supportive environment.",
      Icon: Users
    },
    {
      title: "OCD Treatment",
      description: "Specialized exposure and response prevention (ERP) therapy for obsessive-compulsive disorder with proven outcomes.",
      Icon: Brain
    },
    {
      title: "Cultural Support",
      description: "Culturally affirming therapy for immigrants and individuals navigating identity and cultural transitions.",
      Icon: Globe
    },
    {
      title: "Trauma Processing",
      description: "Safe, trauma-informed approaches to healing from past experiences and building resilience for the future.",
      Icon: Shield
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: 'rgba(244, 194, 161, 0.08)' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-sage/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-mint/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Enhanced Section Header */}
        <div 
          ref={titleRef}
          className={`text-center mb-20 transform transition-all duration-700
            ${isTitleVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="relative inline-block mb-8">
            <h2 className="text-5xl lg:text-6xl font-light text-text-primary">
              <span className="block text-sm uppercase tracking-wider text-primary-sage mb-4 font-medium">
                Comprehensive Care
              </span>
              Therapy Services
            </h2>
            {/* Decorative Line */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary-sage to-accent-mint rounded-full" />
          </div>
          
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Evidence-based therapeutic approaches designed to support your unique journey toward 
            <span className="text-primary-sage font-medium"> healing, growth, and lasting change</span>
          </p>
        </div>
        
        {/* Uniform Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  delay: PropTypes.number,
};

export default ServicesSection;