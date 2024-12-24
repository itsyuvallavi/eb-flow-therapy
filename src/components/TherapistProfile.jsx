import { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import {
  Languages,
  Mail,
  CalendarCheck,
  GraduationCap,
  Heart,
  BookOpen,
  Brain,
  Globe,
  MessageSquare,
  UserCheck,
} from "lucide-react";
import therapistsData from "../data/therapists.json";
import background from "../assets/tree.png";

const TherapistProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("background");
  const therapist = therapistsData[id];

  if (!therapist) {
    return <Navigate to="/our-team" replace />;
  }

  const tabs = [
    { id: "background", icon: GraduationCap, label: "Background & Education" },
    { id: "specializations", icon: Heart, label: "Specializations" },
    { id: "approach", icon: CalendarCheck, label: "Therapeutic Approach" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "background":
        return (
          <div className="space-y-8">
            <div className="prose max-w-none text-brown-500">
              <p className="text-lg leading-relaxed whitespace-pre-line">
                {therapist.background}
              </p>
            </div>
            <div>
              <h3 className="text-xl text-brown-700 mb-4">Education</h3>
              <ul className="space-y-3">
                {therapist.education.map((edu, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-brown-400" />
                    <span className="text-brown-500">{edu}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case "specializations":
        return (
          <div className="grid md:grid-cols-2 gap-8">
            {therapist.specializations.map((specialty, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-medium text-brown-700">
                  {specialty}
                </h3>
              </div>
            ))}
          </div>
        );

      case "approach":
        return (
          <div className="prose max-w-none text-brown-500">
            <p className="text-lg leading-relaxed whitespace-pre-line">
              {therapist.approach}
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-mountain-peak/20 to-mountain-forest/40">
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
      <div className="relative py-20">
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={therapist.image}
                alt={therapist.name}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-mountain-shadow/20 to-transparent" />
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <div className="relative">
                <h1 className="text-5xl font-light text-mountain-shadow mb-3">
                  {therapist.name}
                </h1>
                <div className="flex items-center space-x-2 text-mountain-terra">
                  <UserCheck className="w-5 h-5" />
                  <p className="text-2xl">{therapist.title}</p>
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
                  <p className="text-lg text-mountain-shadow leading-relaxed">
                    {therapist.shortBio}
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-mountain-terra text-white 
                    rounded-full hover:bg-mountain-terra/90 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-16">
        {/* Navigation Tabs */}
        <div className="flex space-x-8 border-b border-mountain-shadow/10 mb-12">
          {["background", "specializations", "approach"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-lg font-medium transition-colors relative
                ${
                  activeTab === tab
                    ? "text-mountain-shadow"
                    : "text-mountain-shadow/60 hover:text-mountain-shadow"
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-mountain-terra" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {activeTab === "background" && (
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Brain className="w-6 h-6 text-mountain-terra" />
                  <h3 className="text-2xl font-light text-mountain-shadow">
                    Background
                  </h3>
                </div>
                <p className="text-mountain-shadow/ leading-relaxed whitespace-pre-line">
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
                    <div key={index} className="flex items-start space-x-3">
                      <BookOpen className="w-5 h-5 text-mountain-terra mt-1" />
                      <span className="text-mountain-shadow">{edu}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "specializations" && (
            <div className="grid md:grid-cols-3 gap-6">
              {therapist.specializations.map((specialty, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/5 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <Heart className="w-5 h-5 text-mountain-terra" />
                    <h3 className="text-xl text-mountain-shadow">
                      {specialty}
                    </h3>
                  </div>
                </div>
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
      </div>

      {/* CTA Section */}
      <div className="relative py-16 bg-gradient-to-t from-mountain-forest/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-mountain-shadow mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-mountain-shadow mb-8">
            Schedule a complimentary 15-minute consultation to see if we're a
            good fit.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-mountain-terra text-white rounded-full
              hover:bg-mountain-terra/90 transition-all duration-300 transform hover:scale-105"
          >
            <CalendarCheck className="w-5 h-5 mr-2" />
            Schedule Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TherapistProfile;
