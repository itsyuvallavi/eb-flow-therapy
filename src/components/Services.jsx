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
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
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
      <Card className="bg-[#faf7f2] shadow-2xl hover:shadow-2xl border-none h-full transition-all duration-300 relative overflow-hidden mt-8" style={{ boxShadow: '0 -10px 25px -5px rgba(0, 0, 0, 0.15), 0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
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
        
        <CardContent className="p-8 h-full flex flex-col relative z-10">
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
        </CardContent>
      </Card>
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
        "Managing Life Changes",
        "Ongoing Emotional Support",
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
        "Setting Shared Goals",
        "Navigating Life Transitions",
      ],
    },
    {
      title: "Family Therapy",
      icon: Users,
      description:
        "Family therapy offers a space for family members to improve communication, strengthen bonds, and address underlying issues. Together, we will explore each member's perspective, and develop strategies to navigate challenges and conflicts. Through collaboration, we'll work toward fostering understanding and growth within the family unit.",
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
      icon: Shield,
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
      icon: Brain,
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
      icon: Shield,
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
              Our Services
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of therapeutic services, each tailored to support your unique journey to wellness and personal growth.
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
        <section className="px-6 py-16" style={{ backgroundColor: 'rgba(244, 194, 161, 0.1)' }}>
          <div className="max-w-4xl mx-auto">
            <div
              ref={ctaRef}
              className={`transform transition-all duration-700 ease-out ${
                isCtaVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
            <Card className="bg-[#f2e6d6] border-[#e8d5c4] shadow-lg">
              <CardContent className="p-12 text-center space-y-8">
                <div>
                  <h2 className="text-4xl font-light text-[#5d5043] mb-4">
                    Begin Your Journey Today
                  </h2>
                  <div className="w-24 h-1 bg-[#d4a574] mx-auto" />
                </div>
                
                <p className="text-xl text-[#6b5d47] max-w-2xl mx-auto leading-relaxed">
                  Schedule a complimentary 15-minute consultation to find the right therapist for you.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    asChild 
                    className="bg-[#d4a574] hover:bg-[#c4956a] text-[#5d5043] px-8 py-4 text-lg"
                  >
                    <Link to="/contact">
                      <CalendarCheck className="w-5 h-5 mr-2" />
                      Schedule Consultation
                    </Link>
                  </Button>
                  
                  <p className="text-[#6b5d47]/70 text-sm">
                    *Currently accepting new clients for online therapy sessions
                  </p>
                </div>
              </CardContent>
            </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
