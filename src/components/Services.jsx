import { useState } from 'react';
import { ChevronDown, ChevronUp, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      title: "Individual Therapy",
      description: "A collaborative space to explore personal challenges, develop coping strategies, and work towards meaningful change.",
      details: [
        "Anxiety & Depression",
        "Life Transitions",
        "Personal Growth",
        "Cultural Identity",
        "Self-Esteem",
        "Trauma Recovery"
      ]
    },
    {
      title: "Couples Therapy",
      description: "Supporting couples in strengthening their relationship through improved communication, understanding, and connection.",
      details: [
        "Communication Issues",
        "Trust Building",
        "Conflict Resolution",
        "Premarital Counseling",
        "Intimacy Concerns",
        "Life Transitions as a Couple"
      ]
    },
    {
      title: "Group Therapy",
      description: "A supportive environment where individuals can connect, share experiences, and grow together.",
      details: [
        "Women's Support Group",
        "Anxiety Management",
        "Cultural Identity",
        "Relationship Skills",
        "Personal Development",
        "Stress Management"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-beige-50">
      {/* Hero Section */}
      <div className="bg-brown-400/10 py-20">
        <div className="max-w-6xl mx-auto px-4">
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

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-light text-brown-700 mb-4">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-brown-500 mb-8">
            Schedule a complimentary 15-minute consultation to discuss how we can best support your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-brown-500 text-white rounded-full hover:bg-brown-600 transition-colors duration-300"
          >
            <Mail className="w-5 h-5 mr-2" />
            Schedule Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;