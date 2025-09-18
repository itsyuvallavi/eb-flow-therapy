import React, { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import {
  CalendarCheck,
  GraduationCap,
  Globe,
  Star,
  Instagram,
  Facebook,
  ArrowLeft
} from "lucide-react";
import SEOHead from "./SEO/SEOHead";
import { generatePersonSchema, generateBreadcrumbSchema } from "./SEO/StructuredData.jsx";
import { getSEOData } from "../data/seoData";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import therapistsData from "../data/therapists.json";
import portrait from "../assets/portrait.png";
import Megan from "../assets/Megan.png";
import Shira from "../assets/Shira.jpg";
import iocdfLogo from "../assets/IOCDF-Logo.png";
import pstLogo from "../assets/PST.png";

// Image mapping object to connect JSON image paths to actual imported images
const imageMap = {
  "/portrait.png": portrait,
  "/Megan.png": Megan,
  "/Shira.jpg": Shira,
  "/IOCDF-Logo.png": iocdfLogo,
};

const TherapistProfile = () => {
  const { id } = useParams();
  const therapist = therapistsData[id];

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

  const seoData = getSEOData('therapistProfile', id);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Our Team", path: "/our-team" },
    { name: therapist.name, path: `/therapists/${id}` }
  ];

  // Generate person schema with specific therapist data
  const personSchemaData = {
    name: therapist.name,
    jobTitle: therapist.title,
    description: `${therapist.name}, ${therapist.title} (${therapist.license}) specializing in ${therapist.specializations.slice(0, 3).join(', ')} in West Los Angeles, California.`,
    image: `https://itsyuvallavi.github.io/eb-flow-therapy${therapist.image}`,
    email: "elinorlmft@gmail.com",
    telephone: "(424) 431-1122",
    license: therapist.license,
    languages: therapist.languages,
    specializations: therapist.specializations,
    socialMedia: therapist.socialMedia
  };

  const structuredData = [
    generatePersonSchema(personSchemaData),
    generateBreadcrumbSchema(breadcrumbs)
  ];

  if (!therapist) {
    return (
      <div className="bg-[#faf9f6] min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-light text-[#5d5043]">Therapist Not Found</h1>
          <Button asChild>
            <Link to="/our-team">Back to Our Team</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        url={seoData.url}
        image={seoData.image}
        type={seoData.type}
        structuredData={structuredData}
      />
      
      <div className="bg-[#faf9f6] min-h-screen">
        {/* Hero Section */}
        <section className="px-6 py-16 bg-[#f7f5f1]">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Button asChild variant="outline" className="border-[#a8b5a0] text-[#6b5d47] hover:bg-[#f2f0eb]">
                <Link to="/our-team">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Team
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Photo */}
              <div className="flex justify-center">
                <div className="w-96 h-96 md:w-[500px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={imageSource}
                    alt={therapist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Basic Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-light text-[#5d5043] mb-2">
                    {therapist.name}
                  </h1>
                  <p className="text-xl text-[#6b5d47] mb-2">{therapist.title}</p>
                  {therapist.license && (
                    <div className="bg-[#e8d5c4] text-[#6b5d47] px-3 py-1 rounded-full text-sm inline-block mb-4">
                      {therapist.license}
                    </div>
                  )}
                </div>

                <p className="text-[#6b5d47] leading-relaxed">{therapist.shortBio}</p>

                {/* Languages */}
                {therapist.languages && (
                  <div className="flex items-center space-x-2 text-[#6b5d47]">
                    <Globe className="w-5 h-5 text-[#a8b5a0]" />
                    <span>{therapist.languages.join(" • ")}</span>
                  </div>
                )}

                {/* Specialties */}
                <div>
                  <h3 className="font-medium text-[#5d5043] mb-3">Specializations</h3>
                  <div className="flex flex-wrap gap-2">
                    {therapist.specializations && therapist.specializations.map((specialty) => (
                      <span 
                        key={specialty}
                        className="bg-[#e8d5c4] text-[#6b5d47] px-3 py-1 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    asChild 
                    className="bg-[#d4a574] hover:bg-[#c4956a] text-[#5d5043]"
                  >
                    <Link to="/contact">
                      <CalendarCheck className="w-4 h-4 mr-2" />
                      Schedule Consultation
                    </Link>
                  </Button>
                  
                  {/* Social Media Links */}
                  {therapist.socialMedia && (
                    <div className="flex items-center gap-3">
                      {therapist.socialMedia.instagram && (
                        <a
                          href={therapist.socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#6b5d47] hover:text-[#a8b5a0] transition-colors"
                          aria-label="Instagram"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                      )}
                      {therapist.socialMedia.facebook && (
                        <a
                          href={therapist.socialMedia.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#6b5d47] hover:text-[#a8b5a0] transition-colors"
                          aria-label="Facebook"
                        >
                          <Facebook className="w-5 h-5" />
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
                </div>

                
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Information */}
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            
            {/* Main Content - Centered */}
            <div className="space-y-8 mb-12">
              
              {/* Therapeutic Approach - Full Width */}
              {therapist.approach && (
                <Card className="bg-[#fefdfb] shadow-lg border-none">
                  <CardContent className="p-8 space-y-6">
                    <h2 className="text-2xl font-light text-[#5d5043]">My Approach</h2>
                    <div className="text-[#6b5d47] leading-relaxed">
                      {/* Split the approach text to handle the bullet points separately */}
                      {(() => {
                        const text = therapist.approach;
                        const parts = text.split('I integrate:');
                        
                        return (
                          <>
                            {/* Main approach text */}
                            <p className="whitespace-pre-line mb-6">{parts[0]}</p>
                            
                            {/* If there's a bullet point section */}
                            {parts[1] && (
                              <div>
                                <h3 className="font-medium text-[#5d5043] mb-4">I integrate:</h3>
                                <div className="grid md:grid-cols-2 gap-3">
                                  {parts[1].split('•').filter(item => item.trim()).map((item, index) => (
                                    <div key={index} className="flex items-start space-x-2">
                                      <div className="w-2 h-2 bg-[#d4a574] rounded-full mt-2 flex-shrink-0"></div>
                                      <span className="text-sm font-medium text-[#6b5d47]">{item.trim()}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </>
                        );
                      })()}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Background & Education - Side by Side */}
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Background */}
                {therapist.background && (
                  <Card className="bg-[#fefdfb] shadow-lg border-none">
                    <CardContent className="p-8 space-y-6">
                      <h2 className="text-2xl font-light text-[#5d5043]">Background</h2>
                      <p className="text-[#6b5d47] leading-relaxed whitespace-pre-line">{therapist.background}</p>
                    </CardContent>
                  </Card>
                )}

                {/* Education */}
                {therapist.education && (
                  <Card className="bg-[#fefdfb] shadow-lg border-none">
                    <CardContent className="p-8 space-y-6">
                      <h2 className="text-2xl font-light text-[#5d5043]">Education & Training</h2>
                      <ul className="space-y-3">
                        {therapist.education.map((item, index) => (
                          <li key={index} className="text-[#6b5d47] flex items-start">
                            <span className="text-[#a8b5a0] mr-3">•</span>
                            <div className="flex-1">
                              {typeof item === 'string' ? (
                                // Check if this is the IOCDF membership line for Elinor
                                item.includes("Member of the International OCD Foundation") && id === "elinor" ? (
                                  <div className="flex items-center space-x-3">
                                    <span>{item}</span>
                                    <a
                                      href="https://iocdf.org/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      aria-label="International OCD Foundation"
                                      className="flex-shrink-0"
                                    >
                                      <img
                                        src={iocdfLogo}
                                        alt="International OCD Foundation (IOCDF) Logo"
                                        className="h-8 object-contain hover:opacity-80 transition-opacity"
                                      />
                                    </a>
                                  </div>
                                ) : (
                                  item
                                )
                              ) : (
                                <div className="flex items-center space-x-2">
                                  <span>{item.text}</span>
                                  {item.logo && (
                                    <img 
                                      src={imageMap[item.logo] || item.logo}
                                      alt="Organization Logo" 
                                      className="h-5 object-contain" 
                                    />
                                  )}
                                </div>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
                
              </div>

            </div>

            {/* Centered CTA */}
            <div className="flex justify-center">
              <div className="max-w-lg">
                <Card className="bg-[#f2e6d6] border-[#e8d5c4] shadow-lg">
                  <CardContent className="p-8 space-y-6 text-center">
                    <h3 className="text-2xl font-light text-[#5d5043]">Ready to Get Started?</h3>
                    <p className="text-[#6b5d47] leading-relaxed">
                      Schedule your initial consultation to see if we're a good fit. Contact us to discuss your needs and goals.
                    </p>
                    <Button 
                      asChild 
                      className="bg-[#d4a574] hover:bg-[#c4956a] text-[#5d5043] px-8 py-3"
                    >
                      <Link to="/contact">
                        <CalendarCheck className="w-5 h-5 mr-2" />
                        Book Consultation
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TherapistProfile;