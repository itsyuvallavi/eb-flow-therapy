import { useState, useEffect } from "react";
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
} from "lucide-react";
import therapistsData from "../data/therapists.json";
import { useIntersectionObserver } from "../components/modal/useIntersectionObserver";
import background from "../assets/tree.png";
import portrait from "../assets/portrait.png";
import woman from "../assets/woman.jpg";

const imageMap = {
  "/portrait.png": portrait,
  "/woman.jpg": woman,
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
    className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-sm 
    hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
  >
    <div className="flex items-center space-x-3">
      <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
        <Star className="w-5 h-5 text-mountain-terra group-hover:scale-110 transition-transform" />
      </div>
      <h3 className="text-xl text-mountain-shadow group-hover:text-mountain-terra transition-colors">
        {title}
      </h3>
    </div>
  </div>
);

const EducationItem = ({ education }) => (
  <div className="flex items-start space-x-3 group">
    <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors mt-1">
      <GraduationCap className="w-5 h-5 text-mountain-terra group-hover:scale-110 transition-transform" />
    </div>
    <span className="text-mountain-shadow group-hover:text-mountain-terra transition-colors">
      {education}
    </span>
  </div>
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
        className="fixed inset-0 bg-center bg-no-repeat transition-opacity duration-500"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "1200px",
          opacity: backgroundOpacity,
          zIndex: 0,
        }}
      />

      <div
        className="relative"
        style={{ paddingTop: "14rem", paddingBottom: "7rem" }}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[300px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src={imageSource}
                  alt={therapist.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
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

                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 md:px-8 py-3 bg-mountain-terra text-white 
                      rounded-full hover:bg-mountain-terra/90 transition-all duration-300 
                      transform hover:scale-105 hover:shadow-lg"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </Link>
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
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`group flex-shrink-0 pb-2 sm:pb-4 text-base sm:text-lg font-medium 
                  transition-all relative whitespace-nowrap
                  ${
                    activeTab === id
                      ? "text-mountain-shadow"
                      : "text-mountain-shadow/60 hover:text-mountain-shadow"
                  }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon
                    className={`w-5 h-5 transition-transform group-hover:scale-110
                    ${
                      activeTab === id
                        ? "text-mountain-terra"
                        : "text-mountain-shadow/60"
                    }`}
                  />
                  <span>{label}</span>
                </div>
                {activeTab === id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-mountain-terra" />
                )}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="space-y-12">
            {activeTab === "background" && (
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Brain className="w-6 h-6 text-mountain-terra" />
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
                </div>
              </div>
            )}

            {activeTab === "specializations" && (
              <div className="grid md:grid-cols-3 gap-6">
                {therapist.specializations.map((specialty, index) => (
                  <Specialization key={index} title={specialty} />
                ))}
              </div>
            )}

            {activeTab === "approach" && (
              <div className="max-w-3xl">
                <div className="flex items-center space-x-3 mb-6">
                  <Flower className="w-6 h-6 text-mountain-terra" />
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
      <div className="relative py-16 bg-gradient-to-t from-mountain-forest/20 to-transparent">
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
                className="inline-flex items-center px-8 py-4 bg-mountain-terra text-white 
                  rounded-full hover:bg-mountain-terra/90 transition-all duration-300 
                  transform hover:scale-105 hover:shadow-lg"
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
