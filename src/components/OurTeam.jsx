import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useIntersectionObserver } from "../components/modal/useIntersectionObserver";
import portrait from "../assets/portrait.png";
import Taylor from "../assets/Taylor.png";
import Megan from "../assets/Megan.png";
import Daniah from "../assets/Daniah.png";
import floralPattern2 from "../assets/floral-pattern2.png";
import therapistsData from "../data/therapists.json";

// Image mapping object to connect JSON image paths to actual imported images
const imageMap = {
  "/portrait.png": portrait,
  "/Taylor.png": Taylor,
  "/Megan.png": Megan,
  "/Daniah.png": Daniah
};

const TeamMemberCard = ({ therapist, isFeatured }) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  // Get the correct image source from our mapping
  const imageSource = imageMap[therapist.image] || therapist.image;

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      {isFeatured ? (
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-[550px] overflow-hidden">
              <img
                src={imageSource}
                alt={therapist.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-light text-mountain-shadow mb-4">
                {therapist.name}
              </h2>
              <p className="text-xl text-mountain-shadow/90 mb-6">
                {therapist.title}
              </p>
              <p className="text-mountain-shadow/80 mb-6">
                {therapist.shortBio}
              </p>
              <div className="mb-6">
                <h3 className="text-lg font-medium text-mountain-shadow mb-3">
                  Specialties
                </h3>
                <div className="flex flex-wrap gap-2">
                  {therapist.specializations && therapist.specializations.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/20 text-mountain-shadow/90 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-medium text-mountain-shadow mb-2">
                  Languages
                </h3>
                <p className="text-mountain-shadow/80">
                  {therapist.languages.join(" • ")}
                </p>
              </div>
              <Link
                to={`/therapists/${therapist.id}`}
                className="inline-block px-6 py-3 bg-mountain-terra text-white rounded-full 
                  hover:bg-mountain-terra/90 transition-all duration-300 transform hover:scale-105 text-center"
              >
                View Full Profile
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="group bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden 
            hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="h-[300px] overflow-hidden relative">
            <img
              src={imageSource}
              alt={therapist.name}
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              style={therapist.id === "daniah" ? { objectPosition: "center 20%" } : {}}
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-medium text-mountain-shadow mb-2">
              {therapist.name}
            </h2>
            <p className="text-mountain-shadow/90 mb-4">{therapist.title}</p>
            <p className="text-mountain-shadow/80 mb-4 line-clamp-3">
              {therapist.shortBio}
            </p>
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {therapist.specializations && therapist.specializations.slice(0, 3).map((specialty, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-white/20 text-mountain-shadow/90 rounded-full text-sm"
                  >
                    {specialty}
                  </span>
                ))}
                {therapist.specializations && therapist.specializations.length > 3 && (
                  <span className="px-2 py-1 bg-white/20 text-mountain-shadow/90 rounded-full text-sm">
                    +{therapist.specializations.length - 3} more
                  </span>
                )}
              </div>
            </div>
            <Link
              to={`/therapists/${therapist.id}`}
              className="inline-block w-full px-4 py-2 bg-mountain-terra text-white rounded-full 
                hover:bg-mountain-terra/90 transition-all duration-300 transform hover:scale-105 text-center"
            >
              View Profile
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const OurTeam = () => {
  const [titleRef, isTitleVisible] = useIntersectionObserver();
  const [therapists, setTherapists] = useState([]);

  useEffect(() => {
    // Convert the therapists object to an array
    const therapistsArray = Object.values(therapistsData);
    setTherapists(therapistsArray);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-mountain-peak/20 to-mountain-forest/40">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10 transition-opacity duration-500"
        style={{
          backgroundImage: `url(${floralPattern2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "multiply",
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
          {/* Header */}
          <div 
            ref={titleRef}
            className={`text-center mb-16 transform transition-all duration-700
              ${isTitleVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <div className="relative inline-block">
              <h1 className="relative text-5xl font-light text-mountain-shadow">
                <span className="block text-sm uppercase tracking-wider text-mountain-shadow/80 mb-2">
                  Welcome to Our Practice
                </span>
                Our Team
              </h1>
            </div>

            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-0 right-0 h-[1px] top-0 bg-gradient-to-r from-transparent via-mountain-shadow/20 to-transparent" />
              <p className="text-lg text-mountain-shadow/80 py-6">
                Meet our dedicated team of experienced therapists, each bringing
                unique expertise to support your journey to wellness.
              </p>
              <div className="absolute left-0 right-0 h-[1px] bottom-0 bg-gradient-to-r from-transparent via-mountain-shadow/20 to-transparent" />
            </div>
          </div>

          {/* Featured Therapist */}
          <div className="mb-20">
            {therapists
              .filter((member) => member.featured)
              .map((therapist) => (
                <TeamMemberCard 
                  key={therapist.id} 
                  therapist={therapist} 
                  isFeatured={true}
                />
              ))}
          </div>

          {/* Other Team Members */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapists
              .filter((member) => !member.featured)
              .map((therapist) => (
                <TeamMemberCard 
                  key={therapist.id} 
                  therapist={therapist} 
                  isFeatured={false}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;