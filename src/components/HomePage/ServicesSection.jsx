import { useState } from "react";
import { User, Heart, Users, Shield, Globe, Brain, Flower, ArrowRight, Sparkles } from 'lucide-react';
import PropTypes from 'prop-types';
import { useIntersectionObserver } from "../modal/useIntersectionObserver";
import { Link } from 'react-router-dom';
import floralPattern2 from "../../assets/floral-pattern2.png";

const ServiceCard = ({ title, description, Icon, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="space-y-2 text-center">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-sage/10 to-primary-sage/5 rounded-full flex items-center justify-center mx-auto">
          <div className="text-primary-sage">
            <Icon className="w-6 h-6" />
          </div>
        </div>

        <h4 className="text-sm font-medium text-text-primary">
          {title}
        </h4>

        <p className="text-text-secondary text-xs leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Learn More Link */}
        <div className="pt-2">
          <Link
            to="/services"
            className="inline-flex items-center space-x-1 text-primary-sage hover:text-primary-forest
              transition-all duration-300 text-xs font-medium"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [titleRef, isTitleVisible] = useIntersectionObserver();
  const [servicesRef, areServicesVisible] = useIntersectionObserver();

  const services = [
    {
      title: "Individual Therapy",
      description: "Personalized support for anxiety, depression, OCD, and personal growth through evidence-based approaches like DBT, CBT, and ACT.",
      Icon: User
    },
    {
      title: "Couples Therapy",
      description: "Strengthen relationships through improved communication, conflict resolution, and emotional intimacy using attachment-based techniques.",
      Icon: Heart
    },
    {
      title: "Personality Disorders",
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
    <section className="relative py-24" style={{ backgroundColor: 'rgba(244, 194, 161, 0.08)' }}>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header - Matching Welcome Section Style */}
        <div
          ref={titleRef}
          className={`text-center mb-8 transform transition-all duration-700
            ${isTitleVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-text-primary leading-tight">
              Our <span className="font-medium text-primary-sage">Therapy Services</span>
              <span className="block text-2xl lg:text-3xl mt-2 text-text-secondary">
                Comprehensive Care That Adapts
              </span>
            </h2>

            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Evidence-based therapeutic approaches designed to support your unique journey toward
              <span className="text-primary-sage font-medium"> healing, growth, and lasting change</span>
            </p>
          </div>
        </div>
        
        {/* Compact Grid - Matching Welcome Section Style */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
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