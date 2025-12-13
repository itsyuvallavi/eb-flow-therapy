import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Brain,
  Heart,
  Shield,
  Users,
  CalendarCheck,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import floralPattern from "../assets/floral-pattern.jpg";
import SEOHead from "./SEO/SEOHead";
import { generateBreadcrumbSchema } from "./SEO/StructuredData.jsx";
import { getSEOData } from "../data/seoData";
import treeImage from "../assets/tree.png";
import floralPattern2 from "../assets/floral-pattern2.png";
import { useIntersectionObserver } from "../components/modal/useIntersectionObserver";

const ServiceCard = ({ service, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-[#faf7f2] shadow-2xl hover:shadow-3xl border-none h-full transition-all duration-300 relative overflow-hidden mt-8 transform hover:-translate-y-2 hover:scale-105 rounded-lg" style={{ boxShadow: '0 -10px 25px -5px rgba(0, 0, 0, 0.15), 0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
        {/* Centered tree background */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url(${treeImage})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />

        <div className="p-8 h-full flex flex-col relative z-10">
          {/* Title - smaller size */}
          <h3 className="text-2xl md:text-3xl font-light text-[#5d5043] text-center mb-6">{service.title}</h3>
          
          <p className="text-[#6b5d47] leading-relaxed mb-6 flex-grow">
            {service.description}
          </p>
          
          <div>
            <h4 className="font-medium text-[#5d5043] mb-3">What's Included:</h4>
            <div className="space-y-2">
              {service.details.slice(0, 4).map((detail, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#a8b5a0] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#6b5d47]">{detail}</span>
                </div>
              ))}
              {service.details.length > 4 && (
                <p className="text-xs text-[#6b5d47]/70 mt-2">
                  +{service.details.length - 4} more areas covered
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [ctaRef, isCtaVisible] = useIntersectionObserver();
  const seoData = getSEOData('services');
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" }
  ];
  const structuredData = generateBreadcrumbSchema(breadcrumbs);


  const services = [
    {
      title: "Individual Therapy",
      icon: Brain,
      description:
        "Individual sessions are available for those looking to gain deeper self-awareness, foster personal growth, develop coping skills, understand behavioral patterns, and create a private space to focus on their unique needs. Together, we will work toward the life you desire.",
      details: [
        "Self-Discovery and Growth",
        "Coping and Stress Management",
        "Understanding Behaviors and Thoughts",
        "Personalized Goal Setting",
      ],
    },
    {
      title: "Couples Therapy",
      icon: Heart,
      description:
        "Couples therapy provides a space for partners to improve communication, rebuild trust, and deepen emotional connection. Together, we will explore relationship dynamics, set shared goals, and navigate life's challenges as a team, fostering understanding and growth along the way.",
      details: [
        "Improving Communication",
        "Conflict Resolution",
        "Understanding Relationship Patterns",
        "Exploring Emotional Needs",
      ],
    },
    {
      title: "OCD and Anxiety Disorder",
      icon: Brain,
      description:
        "Therapy providing a supportive space to navigate intrusive thoughts, overwhelming anxiety, and behavioral patterns that impact daily life. Together, we will explore triggers, emotional responses, and coping strategies while developing tools to manage distress and lack of control.",
      details: [
        "Identifying Triggers",
        "Exposure and Response Prevention",
        "Mindfulness Techniques",
        "Anxiety Management",
      ],
    },
    {
      title: "Personality Disorders",
      icon: Shield,
      description:
        "Therapy for personality disorders provides a supportive space to navigate intense emotions, relationship difficulties, and overwhelming thought patterns. Together, we will explore identity, emotional regulation, and interpersonal dynamics while developing strategies to manage distress and improve daily functioning.",
      details: [
        "Distress Tolerance",
        "Emotion Regulation",
        "Interpersonal Effectiveness",
        "Mindfulness",
      ],
    },
    {
      title: "Inclusive and Collaborative Approach",
      icon: Users,
      description:
        "Inclusive and Collaborative Approach for those seeking affirming care around identity, relationships, and sexuality. Through promoting sex-positive and kink-affirming values, I provide a supportive environment that respects your unique experiences. Partnership with psychiatrists, medical providers, family, and members of your personal system ensures your care is comprehensive and aligned with your goals.",
      details: [
        "Affirming Identity and Expression",
        "Exploring Sexuality and Relationships without Judgment",
        "Collaborative Care with Providers and Supports ",
        "Building Communication and Connection Skills",
      ],
    },
    {
      title: "Trauma-Informed Care",
      icon: Shield,
      description:
        "A tailored approach for those seeking to heal from past trauma and build resilience. Through evidence-based techniques, a safe, compassionate space is cultivated to process experiences and develop healthy coping strategies that support your path to healing.",
      details: [
        "Developing Sense of Safety",
        "Processing Trauma",
        "Body-Mind Connection",
        "Learning Coping Skills",
      ],
    },
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
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative px-6 py-16 overflow-hidden" style={{ backgroundColor: 'rgba(244, 194, 161, 0.1)' }}>
          {/* Background Pattern with fade effect - same as teams section */}
          <div 
            className="absolute inset-0 opacity-15 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${floralPattern2})`,
              backgroundPosition: 'center top',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0) 100%)',
              zIndex: 0
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6" style={{ paddingTop: '8rem' }}>
            <h1 className="text-4xl md:text-5xl font-light text-text-primary">
              Services
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Discover the comprehensive range of therapeutic services, each tailored to support your unique journey to wellness and personal growth.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative px-6 pt-24 pb-16 z-20" style={{ backgroundColor: 'rgba(244, 194, 161, 0.1)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  service={service}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden" style={{ backgroundColor: 'rgba(244, 194, 161, 0.1)' }}>
          {/* Decorative overlay */}
          <div className="absolute inset-0" />

          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <div
              className="relative bg-white backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-gray-200
                transform transition-all duration-700
                group"
            >
              {/* Background image that appears when scrolled into view */}
              <div
                className={`absolute inset-0 z-[-1] transition-opacity duration-1000
                           bg-cover bg-center bg-no-repeat rounded-2xl
                           ${isCtaVisible ? 'opacity-20' : 'opacity-0'}`}
                style={{
                    backgroundImage: `url(${floralPattern})`,
                }}
              />

              <div className="text-center space-y-6">
                {/* Animated Title */}
                <div
                  ref={ctaRef}
                  className={`transform transition-all duration-700
                    ${isCtaVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                  <h2 className="text-4xl font-light text-mountain-shadow mb-2">
                    Contact Now To Get Started!
                  </h2>
                  <div className="w-24 h-1 bg-sunset-coral mx-auto mt-4" />
                </div>

                {/* Content */}
                <div>
                  <p className="text-xl text-mountain-shadow/90 max-w-2xl mx-auto">
                   Ready to take the first step? Schedule a complimentary 15-minute consultation.
                  </p>
                </div>

                {/* Button */}
                <div className="pt-6">
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
      </div>
    </>
  );
};

export default Services;
