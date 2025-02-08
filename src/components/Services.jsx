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
        ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="relative bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl 
        hover:shadow-2xl transition-all duration-300 min-h-[240px]"
      >
        <div className="p-6 md:p-8">
          {/* Main content that's always visible */}
          <button onClick={onToggle} className="w-full text-left">
            <div className="flex justify-between items-center group-hover:text-mountain-terra transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                  <Flower className="w-6 h-6 text-mountain-terra" />
                </div>
                <h3 className="text-2xl font-light text-mountain-shadow group-hover:text-mountain-terra transition-colors">
                  {service.title}
                </h3>
              </div>
              <div className="transform transition-transform duration-700">
                {isExpanded ? (
                  <ChevronUp className="w-6 h-6 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 flex-shrink-0" />
                )}
              </div>
            </div>

            <p className="mt-4 text-mountain-shadow/80 leading-relaxed pl-16 pr-8 min-h-[96px]">
              {service.description}
            </p>
          </button>

          {/* Expandable content */}
          <div
            className={`transition-all duration-700 ease-in-out
              ${
                isExpanded
                  ? "opacity-100 max-h-[800px] mt-6"
                  : "opacity-0 max-h-0 mt-0"
              }`}
          >
            <div
              className={`border-t border-mountain-shadow/10 pt-6 transition-opacity duration-700 ${
                isExpanded ? "opacity-100" : "opacity-0"
              }`}
            >
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
      title: "Individual Therapy",
      description:
        "Individual sessions are available for those looking to gain deeper self-awareness, foster personal growth, develop coping skills, understand behavioral patterns, and create a private space to focus on their unique needs. Together, we will work toward the life you desire.",
      details: [
        "Self-Discovery and Growth",
        "Coping and Stress Management",
        "Understanding Behaviors and Thoughts",
        "Personalized Goal Setting",
        "Managing Life Changes",
        "Ongoing Emotional Support",
      ],
    },
    {
      title: "Couples Therapy",
      description:
        "Couples therapy provides a space for partners to improve communication, rebuild trust, and deepen emotional connection. Together, we will explore relationship dynamics, set shared goals, and navigate life’s challenges as a team, fostering understanding and growth along the way.",
      details: [
        "Improving Communication",
        "Conflict Resolution",
        "Understanding Relationship Patterns",
        "Exploring Emotional Needs",
        "Setting Shared Goals",
        "Navigating Life Transitions",
      ],
    },
    {
      title: "Family Therapy",
      description:
        "Family therapy offers a space for family members to improve communication, strengthen bonds, and address underlying issues. Together, we will explore each member’s perspective, and develop strategies to navigate challenges and conflicts. Through collaboration, we’ll work toward fostering understanding and growth within the family unit.",
      details: [
        "Family Communication",
        "Role Pattern Analysis",
        "Establishing Boundaries ",
        "Conflict Resolution",
        "Strengthening Emotional Bonds",
        "Inter-generational Healing",
      ],
    },
    {
      title: "Personality Disorders",
      description:
        "Therapy for personality disorders provides a supportive space to navigate intense emotions, relationship difficulties, and overwhelming thought patterns. Together, we will explore identity, emotional regulation, and interpersonal dynamics while developing strategies to manage distress and improve daily functioning.",
      details: [
        "Distress Tolerance",
        "Emotion Regulation",
        "Interpersonal Effectiveness",
        "Mindfulness",
        "Develop Sense of Self",
        "Reduce Reactivity",
      ],
    },
    {
      title: "Anxiety and Related Disorders",
      description:
        "Therapy providing a supportive space to navigate intrusive thoughts, overwhelming anxiety, and behavioral patterns that impact daily life. Together, we will explore triggers, emotional responses, and coping strategies while developing tools to manage distress and lack of control.",
      details: [
        "Identifying Triggers",
        "Exposure and Response Prevention",
        "Mindfulness Techniques",
        "Anxiety Management",
        "Cognitive Reframing",
        "Building Resilience",
      ],
    },
    {
      title: "Trauma-Informed Care",
      description:
        "A tailored approach for those seeking to heal from past trauma and build resilience. Through evidence-based techniques, we cultivate a safe, compassionate space to process experiences and develop healthy coping strategies that support your path to healing.",
      details: [
        "Developing Sense of Safety",
        "Processing Trauma",
        "Body-Mind Connection",
        "Learning Coping Skills",
        "Addressing Triggers",
        "Building Support System"
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
            <div key={index} className="grid-item">
              <ServiceCard
                service={service}
                isExpanded={expandedService === index}
                onToggle={() =>
                  setExpandedService(expandedService === index ? null : index)
                }
                delay={index * 100}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="relative py-12">
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
