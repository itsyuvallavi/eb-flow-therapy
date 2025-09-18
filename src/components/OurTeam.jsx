import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CalendarCheck } from "lucide-react";
import SEOHead from "./SEO/SEOHead";
import { generatePersonSchema, generateBreadcrumbSchema } from "./SEO/StructuredData.jsx";
import { getSEOData } from "../data/seoData";
import { useIntersectionObserver } from "./modal/useIntersectionObserver";
import portrait from "../assets/portrait.png";
import Megan from "../assets/Megan.png";
import Shira from "../assets/Shira.jpg";
import lmft from "../assets/lmft.png";
import pstLogo from "../assets/PST.png";
import therapistsData from "../data/therapists.json";
import floralPattern from "../assets/floral-pattern.jpg";
import floralPattern2 from "../assets/floral-pattern2.png";

// Image mapping
const imageMap = {
  "/portrait.png": portrait,
  "/Megan.png": Megan,
  "/Shira.jpg": Shira,
  "/lmft.png": lmft,
};


// TherapistCard component to handle individual therapist rendering with hooks
const TherapistCard = ({ therapist, index, imageSource }) => {
  const [therapistRef, isTherapistVisible] = useIntersectionObserver();
  
  return (
    <div>
      {/* Divider between therapists */}
      {index > 0 && (
        <div className="flex items-center justify-center my-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary-sage/20 to-transparent max-w-md"></div>
        </div>
      )}
      
      <div
        ref={therapistRef}
        className={`rounded-2xl p-8 shadow-lg border border-primary-sage/10 transform transition-all duration-700 ease-out ${
          isTherapistVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        style={{
          transitionDelay: `${index * 200}ms`,
          background: 'linear-gradient(135deg, rgba(143, 166, 142, 0.15) 0%, rgba(255,255,255,0.8) 100%)'
        }}
      >
        <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
        {/* Photo */}
        <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
          <div className="aspect-square w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-lg">
            <img
              src={imageSource}
              alt={therapist.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className={`space-y-5 ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-light text-text-primary mb-2">
                {therapist.name}
              </h2>
              <p className="text-lg text-text-secondary mb-2">{therapist.title}</p>
              {/* License number under title */}
              {therapist.license && (
                <div className="bg-primary-sage/10 px-3 py-1 rounded-full inline-block mb-4">
                  <p className="text-xs text-primary-sage font-medium">{therapist.license}</p>
                </div>
              )}
            </div>
            {/* LMFT logo on right side */}
            {therapist.logo && (
              <img
                src={imageMap[therapist.logo] || therapist.logo}
                alt="LMFT Credential"
                className="w-40 h-20 object-contain"
              />
            )}
          </div>

          <p className="text-text-secondary leading-relaxed">
            {therapist.shortBio}
          </p>

          {/* Specializations */}
          {therapist.specializations && (
            <div>
              <h3 className="font-medium text-text-primary mb-3">Specializations</h3>
              <div className="flex flex-wrap gap-2">
                {therapist.specializations.map((specialty) => (
                  <span 
                    key={specialty}
                    className="bg-sunset-peach/30 text-text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Education & Credentials */}
          {therapist.education && (
            <div>
              <h3 className="font-medium text-text-primary mb-3">Education & Training</h3>
              <ul className="space-y-1 text-text-secondary">
                {therapist.education.map((item, idx) => (
                  <li key={idx} className="text-sm">• {item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Languages */}
          {therapist.languages && (
            <div>
              <p className="text-sm text-text-muted">
                <span className="font-medium">Languages:</span> {therapist.languages.join(" • ")}
              </p>
            </div>
          )}

          {/* Social Media Links */}
          {therapist.socialMedia && (
            <div className="flex items-center gap-3">
              {therapist.socialMedia.instagram && (
                <a
                  href={therapist.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary-sage transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                  </svg>
                </a>
              )}
              {therapist.socialMedia.facebook && (
                <a
                  href={therapist.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary-sage transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              )}
              {therapist.socialMedia.psychologyToday && (
                <a
                  href={therapist.socialMedia.psychologyToday}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Psychology Today"
                >
                  <img
                    src={pstLogo}
                    alt="Psychology Today"
                    className="h-5 w-auto object-contain"
                  />
                </a>
              )}
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to={`/therapists/${therapist.id}`}
              className="inline-block px-6 py-3 bg-primary-sage hover:bg-primary-forest text-white rounded-full
                transition-all duration-300 transform hover:scale-105"
            >
              View Full Profile
            </Link>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 border-2 border-primary-sage text-primary-sage 
                hover:bg-primary-sage hover:text-white rounded-full transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

const OurTeam = () => {
  const [therapists, setTherapists] = useState([]);

  useEffect(() => {
    const therapistsArray = Object.values(therapistsData);
    setTherapists(therapistsArray);
  }, []);

  const seoData = getSEOData('ourTeam');
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Our Team", path: "/our-team" }
  ];
  const structuredData = [
    generatePersonSchema(),
    generateBreadcrumbSchema(breadcrumbs)
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
          {/* Background Pattern with fade effect - same as welcome section */}
          <div 
            className="absolute inset-0 opacity-15 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${floralPattern2})`,
              backgroundPosition: 'center top',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0) 100%)',
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6" style={{ paddingTop: '8rem' }}>
            <h1 className="text-4xl md:text-5xl font-light text-text-primary">
              Meet the Therapists
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Our experienced therapists are here to support you on your journey toward healing and growth. 
              Each member of our team brings unique specialties and a commitment to compassionate care.
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="px-6 py-16" style={{ backgroundColor: 'rgba(244, 194, 161, 0.1)' }}>
          <div className="max-w-7xl mx-auto space-y-20">
            {therapists.map((therapist, index) => {
              const imageSource = imageMap[therapist.image] || therapist.image;
              return (
                <TherapistCard
                  key={therapist.id}
                  therapist={therapist}
                  index={index}
                  imageSource={imageSource}
                />
              );
            })}
          </div>
        </section>

        {/* Call to Action - Same as HomePage CTASection */}
        <section className="relative py-20 overflow-hidden" style={{ backgroundColor: 'rgba(244, 194, 161, 0.1)' }}>
          {/* Decorative overlay */}
          <div className="absolute inset-0" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <div 
              className="relative bg-white backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-gray-200
                transform transition-all duration-700 
                group"
            >
              {/* Background image that appears when scrolled into view */}
              <div 
                className="absolute inset-0 z-[-1] transition-opacity duration-1000 
                           bg-cover bg-center bg-no-repeat rounded-2xl opacity-20"
                style={{
                    backgroundImage: `url(${floralPattern})`,
                }}
              />

              <div className="text-center space-y-6">
                {/* Title */}
                <div>
                  <h2 className="text-4xl font-light text-mountain-shadow mb-2">
                    Begin Your Journey Today
                  </h2>
                  <div className="w-24 h-1 bg-sunset-coral mx-auto mt-4" />
                </div>
                
                {/* Content */}
                <div>
                  <p className="text-xl text-mountain-shadow/90 max-w-2xl mx-auto">
                  Ready to take the first step? Schedule a complimentary 15-minute consultation to find the right
                    therapist for you.
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

export default OurTeam;