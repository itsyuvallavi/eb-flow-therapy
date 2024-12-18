import { useState } from 'react';
import { ChevronDown, ChevronUp, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import floralPattern from '../assets/floral-pattern.jpg'; // You'll need to add the image to your assets

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      title: "Adult Therapy",
      description: "Individual sessions are available for those seeking to learn more about themselves, work towards change and improvement, learn coping skills, understand patterns of behavior, and just have a private space to focus on your needs. We will collaborate in working towards your life best lived.",
      details: [
        "Personal Growth & Self-Discovery",
        "Coping Skills Development",
        "Behavioral Pattern Analysis",
        "Individual Goal Setting",
        "Life Transitions",
        "Mental Health Support"
      ]
    },
    {
      title: "Family Therapy",
      description: "Family relationships become complex as maladaptive patterns and roles create obstacles in connection. I provide a safe space for family members to recreate, break down and rebuild patterns of communication as you work towards a cohesive family unit.",
      details: [
        "Family Communication",
        "Role Pattern Analysis",
        "Relationship Building",
        "Conflict Resolution",
        "Family Unity Development",
        "Inter-generational Healing"
      ]
    },
    {
      title: "Couples/Partners Therapy",
      description: "Being in a relationship is a difficult process of ongoing hard work in uniting, connecting and repairing. I hope to join you and you partner(s) in learning more effective tools for communication, recreating trust, and understanding each other to continue growing together.",
      details: [
        "Communication Enhancement",
        "Trust Building",
        "Mutual Understanding",
        "Conflict Resolution",
        "Relationship Growth",
        "Partnership Skills"
      ]
    },
    {
      title: "Relationships",
      description: "Managing the relationships in our life is a challenging and demanding skill. If you are identifying patterns of impairments in important relationships in your life, struggling with professional or casual relationships, or experiencing distress and anxiety in relationships, I can provide interpersonal and mindfulness skills practice.",
      details: [
        "Interpersonal Skills",
        "Relationship Pattern Analysis",
        "Professional Relations",
        "Social Anxiety Management",
        "Mindfulness Practice",
        "Communication Skills"
      ]
    },
    {
      title: "Anxiety and Related Disorders",
      description: "Anxiety has become a prominent concept in popular culture, though we lack the skills to cope with high levels of anxiety. If you experience anxiety, life impairments to relationships/work because of anxiety, or if you have been diagnosed with an anxiety-related disorder, I can provide services to learn how to live with anxiety and reclaim your life best lived.",
      details: [
        "Anxiety Management",
        "Coping Strategies",
        "Work-Life Balance",
        "Stress Reduction",
        "Behavioral Techniques",
        "Life Skills Development"
      ]
    },
    {
      title: "Personality Disorders",
      description: "Personality disorders are highly stigmatized, though frequently misunderstood disorders. You may be struggling with managing relationships in your life, told you are 'too sensitive', struggle with regulating emotions, or have struggled with thoughts of suicide or self-harm. I can provide a non-judgmental, validating environment for those ready to build alternative coping skills and ways of interacting in the world to reach your life best lived.",
      details: [
        "Emotional Regulation",
        "Relationship Management",
        "Coping Skills Development",
        "Self-awareness Building",
        "Support System Development",
        "Life Skills Enhancement"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-beige-50">
      {/* Hero Section with Floral Pattern */}
      <div className="relative bg-brown-400/10 py-20">
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url(${floralPattern})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply'
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-light text-brown-700 mb-6 text-center">
            Our Services
          </h1>
          <p className="text-lg text-brown-500 max-w-2xl mx-auto text-center">
            Specialized therapeutic support tailored to your unique journey of growth and healing
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => setExpandedService(expandedService === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-light text-brown-700">
                    {service.title}
                  </h2>
                  {expandedService === index ? (
                    <ChevronUp className="w-6 h-6 text-brown-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-brown-400" />
                  )}
                </div>
                <p className="mt-2 text-brown-500">
                  {service.description}
                </p>
              </div>

              {expandedService === index && (
                <div className="px-6 pb-6 space-y-4">
                  <div className="border-t border-beige-200 pt-4">
                    <h3 className="text-lg font-medium text-brown-600 mb-3">
                      What's Included
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.details.map((detail, i) => (
                        <div 
                          key={i}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 rounded-full bg-brown-400"></div>
                          <span className="text-brown-500">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-beige-200 pt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-2 bg-brown-500 text-white rounded-full hover:bg-brown-600 transition-colors duration-300"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Inquire About This Service
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;