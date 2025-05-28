import React, { useState, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import {
  Mail,
  CalendarCheck,
  GraduationCap,
  BookOpen,
  Brain,
  Globe,
  MessageSquare,
  UserCheck,
  Flower,
  Star,
  CheckCircle,
  Award,
  Instagram,
  Facebook,
} from "lucide-react";
import therapistsData from "../data/therapists.json";
import { useIntersectionObserver } from "../components/modal/useIntersectionObserver";
import background from "../assets/tree.png";
import portrait from "../assets/portrait.png";
import Megan from "../assets/Megan.png";
import iocdfLogo from "../assets/IOCDF-Logo.png";

// Image mapping object to connect JSON image paths to actual imported images
const imageMap = {
  "/portrait.png": portrait,
  "/Megan.png": Megan,
  "/IOCDF-Logo.png": iocdfLogo,
};

const AnimatedSection = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700
        ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Specialization = ({ title }) => (
  <div
    className="group bg-mountain-forest/80 rounded-2xl shadow-xl 
    hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
  >
    <div className="flex items-center space-x-3 p-6">
      <div className="p-2 rounded-lg transition-colors">
        <Star className="w-5 h-5 text-mountain-terra group-hover:scale-110 transition-transform" />
      </div>
      <h3 className="text-xl text-white/90 group-hover:text-mountain-terra transition-colors">
        {title}
      </h3>
    </div>
  </div>
);

const EducationItem = ({ education }) => {
  if (typeof education === 'string') {
    return (
      <div className="flex items-start space-x-3 group">
        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors mt-1">
          <GraduationCap className="w-5 h-5 text-mountain-terra group-hover:scale-110 transition-transform" />
        </div>
        <span className="text-mountain-shadow group-hover:text-mountain-terra transition-colors">
          {education}
        </span>
      </div>
    );
  } else {
    return (
      <div className="flex items-start space-x-3 group">
        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors mt-1">
          <GraduationCap className="w-5 h-5 text-mountain-terra group-hover:scale-110 transition-transform" />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-mountain-shadow group-hover:text-mountain-terra transition-colors">
            {education.text}
          </span>
          {education.logo && (
            <img 
              src={imageMap[education.logo] || education.logo}
              alt="Organization Logo" 
              className="h-5 object-contain" 
            />
          )}
        </div>
      </div>
    );
  }
};

const TabButton = ({ id, label, Icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`group flex-shrink-0 pb-2 sm:pb-4 text-base sm:text-lg font-medium 
      transition-all relative whitespace-nowrap
      ${
        isActive
          ? "text-mountain-terra"
          : "text-mountain-shadow/80 hover:text-mountain-terra"
      }`}
  >
    <div className="flex items-center space-x-2">
      <Icon
        className={`w-5 h-5 transition-transform group-hover:scale-110
        ${isActive ? "text-mountain-terra" : "text-mountain-shadow/60"}`}
      />
      <span>{label}</span>
    </div>
    {isActive && (
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-mountain-terra" />
    )}
  </button>
);

const TherapistProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("background");
  const therapist = therapistsData[id];
  const [backgroundOpacity, setBackgroundOpacity] = useState(0.1);

  const [sectionRef, isSectionVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  useEffect(() => {
    let timeoutId;
    if (isSectionVisible) {
      timeoutId = setTimeout(() => {
        setBackgroundOpacity(0.15);
      }, 500);
    } else {
      timeoutId = setTimeout(() => {
        setBackgroundOpacity(0.1);
      }, 500);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isSectionVisible]);

  // Add Psychology Today verification script for Elinor specifically
  useEffect(() => {
    if (id === "elinor") {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://member.psychologytoday.com/verified-seal.js";
      script.dataset.badge = "10";
      script.dataset.id = "1015567";
      script.dataset.code =
        "aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy8xMC9wcm9maWxlLzEwMTU1Njc/Y2FsbGJhY2s9c3hjYWxsYmFjaw==";

      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [id]);

  if (!therapist) {
    return <Navigate to="/our-team" replace />;
  }

  const imageSource = imageMap[therapist.image] || therapist.image;

  const tabs = [
    { id: "background", label: "Background", Icon: BookOpen },
    { id: "specializations", label: "Specializations", Icon: Star },
    { id: "approach", label: "Approach", Icon: Brain },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-mountain-peak/15 to-mountain-forest/25"
    >
      <div
        className="fixed inset-0 bg-center bg-no-repeat bg-cover opacity-10"
        style={{
          backgroundImage: `url(${background})`,
        }}
      />

      <div
        className="relative"
        style={{
          paddingTop: "var(--page-padding-top)",
          paddingBottom: "var(--page-padding-bottom)",
        }}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[300px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src={imageSource}
                  alt={therapist.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  style={id === "daniah" ? { objectPosition: "center 25%" } : {}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mountain-shadow/20 to-transparent" />
              </div>

              <div className="space-y-8">
                <div className="relative">
                  <h1 className="text-4xl md:text-5xl font-light text-mountain-shadow mb-3">
                    {therapist.name}
                  </h1>
                  <div className="flex items-center space-x-2 text-mountain-terra">
                    <UserCheck className="w-5 h-5" />
                    <p className="text-xl md:text-2xl">{therapist.title}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-mountain-shadow mt-2">
                    <BookOpen className="w-5 h-5" />
                    <p>{therapist.license}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-mountain-shadow mt-4">
                    <Globe className="w-5 h-5" />
                    <span>{therapist.languages.join(" • ")}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <MessageSquare className="w-5 h-5 text-mountain-terra mt-1.5" />
                    <p className="text-base md:text-lg text-mountain-shadow leading-relaxed">
                      {therapist.shortBio}
                    </p>
                  </div>

                  {/* Action Buttons - horizontal with responsive sizing */}
                  <div className="flex flex-wrap items-center gap-3 mt-8">
                    {/* Schedule Button */}
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-3 sm:px-4 py-2 sm:py-3
                        bg-mountain-terra text-white 
                        rounded-full hover:bg-mountain-terra/90 transition-all duration-300 
                        transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 flex-shrink-0" />
                      <span className="whitespace-nowrap">
                        Schedule Consultation
                      </span>
                    </Link>

                    {/* Social Media Links */}
                    {therapist.socialMedia && (
                      <div className="flex items-center gap-2">
                        {therapist.socialMedia.instagram && (
                          <a
                            href={therapist.socialMedia.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 sm:p-2.5 rounded-full bg-white/10 border border-mountain-shadow/20
                              text-mountain-shadow hover:bg-mountain-terra hover:text-white hover:border-mountain-terra
                              transition-all duration-300 transform hover:scale-110"
                            aria-label="Instagram"
                          >
                            <Instagram className="w-5 h-5 sm:w-5 sm:h-5" />
                          </a>
                        )}
                        {therapist.socialMedia.facebook && (
                          <a
                            href={therapist.socialMedia.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 sm:p-2.5 rounded-full bg-white/10 border border-mountain-shadow/20
                              text-mountain-shadow hover:bg-mountain-terra hover:text-white hover:border-mountain-terra
                              transition-all duration-300 transform hover:scale-110"
                            aria-label="Facebook"
                          >
                            <Facebook className="w-5 h-5 sm:w-5 sm:h-5" />
                          </a>
                        )}
                      </div>
                    )}

                    {/* Psychology Today Verification Badge */}
                    {id === "elinor" && (
                      <a
                        href="https://www.psychologytoday.com/profile/1015567"
                        className="sx-verified-seal flex-shrink-0 hover:opacity-90 transition-opacity"
                        rel="noopener noreferrer"
                      >
                        <div className="bg-white rounded-full px-2 sm:px-4 py-1 sm:py-1.5 flex items-center border border-gray-200 shadow-sm">
                          <div className="flex-shrink-0 mr-1 sm:mr-1.5">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12" cy="12" r="11" stroke="#D8D8D8" strokeWidth="1" fill="white"/>
                              <path d="M19 8L10 17L5 12" stroke="#FF5252" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[8px] sm:text-[10px] text-gray-500 uppercase leading-tight tracking-wide">VERIFIED BY</span>
                            <span className="text-xs sm:text-sm font-bold text-blue-600 leading-tight" style={{fontFamily: 'sans-serif'}}>Psychology Today</span>
                          </div>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-16">
        <AnimatedSection delay={200}>
          <div
            className="flex flex-nowrap overflow-x-auto sm:flex-wrap border-b border-mountain-shadow/10 mb-12 
            gap-2 sm:gap-8 pb-2 sm:pb-0 px-4 sm:px-0"
          >
            {tabs.map(({ id, label, Icon }) => (
              <TabButton
                key={id}
                id={id}
                label={label}
                Icon={Icon}
                isActive={activeTab === id}
                onClick={() => setActiveTab(id)}
              />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="space-y-12">
            {activeTab === "background" && (
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <BookOpen className="w-6 h-6 text-mountain-terra" />
                    <h3 className="text-xl md:text-2xl font-light text-mountain-shadow">
                      Background
                    </h3>
                  </div>
                  <p className="text-mountain-shadow leading-relaxed whitespace-pre-line">
                    {therapist.background}
                  </p>
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <GraduationCap className="w-6 h-6 text-mountain-terra" />
                    <h3 className="text-2xl font-light text-mountain-shadow">
                      Education
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {therapist.education.map((edu, index) => (
                      <EducationItem key={index} education={edu} />
                    ))}
                  </div>

                  {/* IOCDF Logo - Only for Elinor */}
                  {id === "elinor" && (
                    <div className="mt-8 flex ml-12">
                      <a
                        href="https://iocdf.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="International OCD Foundation"
                      >
                        <img
                          src={iocdfLogo}
                          alt="International OCD Foundation (IOCDF) Logo"
                          className="max-w-[160px] object-contain"
                        />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "specializations" && (
              <div className="grid md:grid-cols-3 gap-6">
                {therapist.specializations && therapist.specializations.map((specialty, index) => (
                  <Specialization key={index} title={specialty} />
                ))}
              </div>
            )}

            {activeTab === "approach" && (
              <div className="max-w-3xl">
                <div className="flex items-center space-x-3 mb-6">
                  <Brain className="w-6 h-6 text-mountain-terra" />
                  <h3 className="text-2xl font-light text-mountain-shadow">
                    My Approach
                  </h3>
                </div>
                <p className="text-lg text-mountain-shadow leading-relaxed whitespace-pre-line">
                  {therapist.approach}
                </p>
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>

      {/* CTA Section */}
      <div className="relative py-16">
        <AnimatedSection delay={600}>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 shadow-xl">
              <h2 className="text-3xl font-light text-mountain-shadow mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-mountain-shadow mb-8">
                Schedule a complimentary 15-minute consultation to see if we're
                a good fit.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-mountain-terra text-white 
                  rounded-full hover:bg-mountain-terra/90 transition-all duration-300 
                  transform hover:scale-105 hover:shadow-lg justify-center w-full sm:w-auto max-w-xs mx-auto"
              >
                <CalendarCheck className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default TherapistProfile;