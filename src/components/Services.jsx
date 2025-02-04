import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Mail,
  Brain,
  Leaf,
  Heart,
  Shield,
  Globe,
  Flower,
  Users,
  CalendarCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useIntersectionObserver } from "../components/modal/useIntersectionObserver";
import background from "../assets/tree.png";
import floralPattern from "../assets/floral-pattern.jpg";

const ServiceCard = ({ service, isExpanded, onToggle, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out
        ${isExpanded ? "h-auto" : "min-h-[200px]"}
        ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="h-full group bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl 
        hover:shadow-2xl transition-all duration-300"
      >
        <div className="h-full p-6 md:p-8">
          <button onClick={onToggle} className="w-full text-left">
            <div className="flex justify-between items-center group-hover:text-mountain-terra transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                  <Brain className="w-6 h-6 text-mountain-terra" />
                </div>
                <h3 className="text-2xl font-light text-mountain-shadow group-hover:text-mountain-terra transition-colors">
                  {service.title}
                </h3>
              </div>
              <div className="transform transition-transform duration-300">
                {isExpanded ? (
                  <ChevronUp className="w-6 h-6 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 flex-shrink-0" />
                )}
              </div>
            </div>

            <p className="mt-4 text-mountain-shadow/80 leading-relaxed pl-16 pr-8">
              {service.description}
            </p>
          </button>

          <div
            className={`transition-all duration-300 ease-in-out
              ${
                isExpanded ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
              }`}
          >
            <div className="mt-6">
              <div className="border-t border-mountain-shadow/10 pt-6">
                <div className="pl-16 pr-8">
                  <h4 className="text-lg font-medium text-mountain-terra mb-4">
                    What's Included
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.details.map((detail, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-3 text-mountain-shadow"
                      >
                        <Leaf className="w-4 h-4 text-mountain-terra flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [titleRef, isTitleVisible] = useIntersectionObserver();
  const [contentRef, isContentVisible] = useIntersectionObserver();
  const [buttonRef, isButtonVisible] = useIntersectionObserver();
  const [ctaTitleRef, isCTATitleVisible] = useIntersectionObserver();

  const services = [
    {
      title: "Adult Therapy",
      description:
        "Individual sessions are available for those seeking to learn more about themselves, work towards change and improvement, learn coping skills, understand patterns of behavior, and just have a private space to focus on your needs. We will collaborate in working towards your life best lived.",
      details: [
        "Personal Growth & Self-Discovery",
        "Coping Skills Development",
        "Behavioral Pattern Analysis",
        "Individual Goal Setting",
        "Life Transitions",
        "Mental Health Support",
      ],
    },
    {
      title: "Family Therapy",
      description:
        "Family relationships become complex as maladaptive patterns and roles create obstacles in connection. I provide a safe space for family members to recreate, break down and rebuild patterns of communication as you work towards a cohesive family unit.",
      details: [
        "Family Communication",
        "Role Pattern Analysis",
        "Relationship Building",
        "Conflict Resolution",
        "Family Unity Development",
        "Inter-generational Healing",
      ],
    },
    {
      title: "Couples/Partners Therapy",
      description:
        "Being in a relationship is a difficult process of ongoing hard work in uniting, connecting and repairing. I hope to join you and you partner(s) in learning more effective tools for communication, recreating trust, and understanding each other to continue growing together.",
      details: [
        "Communication Enhancement",
        "Trust Building",
        "Mutual Understanding",
        "Conflict Resolution",
        "Relationship Growth",
        "Partnership Skills",
      ],
    },
    {
      title: "Relationships",
      description:
        "Managing the relationships in our life is a challenging and demanding skill. If you are identifying patterns of impairments in important relationships in your life, struggling with professional or casual relationships, or experiencing distress and anxiety in relationships, I can provide interpersonal and mindfulness skills practice.",
      details: [
        "Interpersonal Skills",
        "Relationship Pattern Analysis",
        "Professional Relations",
        "Social Anxiety Management",
        "Mindfulness Practice",
        "Communication Skills",
      ],
    },
    {
      title: "Anxiety and Related Disorders",
      description:
        "Anxiety has become a prominent concept in popular culture, though we lack the skills to cope with high levels of anxiety. If you experience anxiety, life impairments to relationships/work because of anxiety, or if you have been diagnosed with an anxiety-related disorder, I can provide services to learn how to live with anxiety and reclaim your life best lived.",
      details: [
        "Anxiety Management",
        "Coping Strategies",
        "Work-Life Balance",
        "Stress Reduction",
        "Behavioral Techniques",
        "Life Skills Development",
      ],
    },
    {
      title: "Trauma-Informed Care",
      description:
        "A specialized approach for individuals seeking to heal from past trauma and build resilience. Using evidence-based techniques, we create a safe environment for processing experiences and developing healthy coping mechanisms to support your healing journey.",
      details: [
        "PTSD Treatment",
        "Complex Trauma Support",
        "Emotional Regulation",
        "Somatic Experiencing",
        "Resilience Building",
        "Safety Planning",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-mountain-peak/15 to-mountain-forest/25">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-center bg-no-repeat transition-opacity duration-500"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "1200px",
          opacity: 0.1,
          zIndex: 0,
        }}
      />

      {/* Hero Section */}
      <div
        className="relative"
        style={{
          paddingTop: "var(--page-padding-top)",
          paddingBottom: "var(--page-padding-bottom)",
        }}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div
            ref={titleRef}
            className={`text-center transform transition-all duration-700
              ${
                isTitleVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
          >
            <div className="relative inline-block">
              <h1 className="relative text-5xl font-light text-mountain-shadow">
                <span className="block text-sm uppercase tracking-wider text-mountain-shadow/80 mb-2">
                  Welcome to Our Practice
                </span>
                Our Services
              </h1>
            </div>

            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-0 right-0 h-[1px] top-0 bg-gradient-to-r from-transparent via-mountain-shadow/20 to-transparent" />
              <p className="text-lg text-mountain-shadow/80 py-6">
                Discover our comprehensive range of therapeutic services, each
                tailored to support your unique journey to wellness and personal
                growth.
              </p>
              <div className="absolute left-0 right-0 h-[1px] bottom-0 bg-gradient-to-b from-mountain-peak/20 to-mountain-forest/40" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isExpanded={expandedService === index}
              onToggle={() =>
                setExpandedService(expandedService === index ? null : index)
              }
              delay={index * 100}
            />
          ))}
        </div>
      </div>

      {/* Contact Section */}
      {/* Updated CTA Section */}
      <section className="relative py-12 ">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div
            className="relative bg-mountain-terra/20 backdrop-blur-sm rounded-2xl p-12 shadow-xl
          transform transition-all duration-700 
          hover:bg-opacity-80 
          group"
          >
            {/* Background image that appears on hover */}
            <div
              className="absolute inset-0 z-[-1] opacity-0 group-hover:opacity-20 
                     transition-opacity duration-700 
                     bg-cover bg-center bg-no-repeat rounded-2xl"
              style={{
                backgroundImage: `url(${floralPattern})`,
              }}
            />

            <div className="text-center space-y-6">
              {/* Animated Title */}
              <div
                ref={ctaTitleRef}
                className={`transform transition-all duration-700
              ${
                isCTATitleVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              >
                <h2 className="text-4xl font-light text-mountain-shadow mb-2">
                  Begin Your Journey Today
                </h2>
                <div className="w-24 h-1 bg-mountain-terra mx-auto mt-4" />
              </div>

              {/* Animated Content */}
              <div
                ref={contentRef}
                className={`transform transition-all duration-700 delay-200
              ${
                isContentVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
                style={{ transitionDelay: "200ms" }}
              >
                <p className="text-xl text-mountain-shadow/90 max-w-2xl mx-auto">
                  Schedule a complimentary 15-minute consultation to find the
                  right therapist for you.
                </p>
              </div>

              {/* Animated Button */}
              <div
                ref={buttonRef}
                className={`pt-6 transform transition-all duration-700 delay-400
              ${
                isButtonVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
                style={{ transitionDelay: "400ms" }}
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center px-8 py-4 bg-mountain-terra/70 hover:bg-mountain-terra 
                text-white rounded-full transition-all duration-300 transform hover:scale-105 
                hover:shadow-lg backdrop-blur-sm"
                >
                  <CalendarCheck className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                  <span className="font-medium">Schedule Consultation</span>
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
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
  );
};

export default Services;
