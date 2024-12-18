import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Languages, Mail, CalendarCheck, GraduationCap, Heart } from 'lucide-react';
import therapistsData from '../data/therapists.json';
import floralPattern from "../assets/floral-pattern.jpg";

const TherapistProfile = () => {
  const [activeTab, setActiveTab] = useState('background');
  const { id } = useParams();
  const therapist = therapistsData[id];

  if (!therapist) {
    return <Navigate to="/our-team" replace />;
  }

  const tabs = [
    { id: 'background', icon: GraduationCap, label: 'Background & Education' },
    { id: 'specializations', icon: Heart, label: 'Specializations' },
    { id: 'approach', icon: CalendarCheck, label: 'Therapeutic Approach' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'background':
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

      case 'specializations':
        return (
          <div className="grid md:grid-cols-2 gap-8">
            {therapist.specializations.map((specialty, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-medium text-brown-700">{specialty}</h3>
              </div>
            ))}
          </div>
        );

      case 'approach':
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
    <div className="relative min-h-screen bg-beige-50">
      {/* Main Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${floralPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'multiply'
        }}
      />

      {/* Hero Section */}
      <div className="relative bg-brown-400/10 py-20">
        {/* Decorative top pattern */}
        <div 
          className="absolute top-0 left-0 w-full h-24 opacity-15"
          style={{
            backgroundImage: `url(${floralPattern})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            mixBlendMode: 'multiply'
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-light text-brown-700">
                {therapist.name}
              </h1>
              <p className="text-xl text-brown-500">{therapist.title}</p>
              <p className="text-brown-400">{therapist.license}</p>
              <div className="flex items-center space-x-2 text-brown-500">
                <Languages className="w-5 h-5" />
                <span>{therapist.languages.join(" • ")}</span>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-brown-500 text-white rounded-full hover:bg-brown-600 transition-colors duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src={therapist.image}
                alt={therapist.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        {/* Navigation Tabs */}
        <div className="flex space-x-8 border-b border-beige-200 mb-12 bg-beige-50/80 backdrop-blur-sm rounded-t-lg p-4">
          {tabs.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`pb-4 text-lg font-medium transition-colors relative flex items-center space-x-2 ${
                activeTab === id
                  ? 'text-brown-700'
                  : 'text-brown-400 hover:text-brown-600'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
              {activeTab === id && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brown-500" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-8 bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-md">
          {renderTabContent()}
        </div>

        {/* CTA Section */}
        <div className="relative mt-16 text-center">
          {/* Decorative corner elements */}
          <div 
            className="absolute top-0 right-0 w-24 h-24 opacity-15 transform translate-x-1/2 -translate-y-1/2"
            style={{
              backgroundImage: `url(${floralPattern})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}
          />
          <div 
            className="absolute bottom-0 left-0 w-24 h-24 opacity-15 transform -translate-x-1/2 translate-y-1/2"
            style={{
              backgroundImage: `url(${floralPattern})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}
          />

          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-light text-brown-700 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-brown-500 mb-8">
              Schedule a complimentary 15-minute consultation to see if we're a good fit.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-brown-500 text-white rounded-full hover:bg-brown-600 transition-colors duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistProfile;