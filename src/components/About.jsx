import React, { useEffect } from 'react';
import {
  CalendarCheck,
  Globe,
  Instagram,
  Facebook,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "./SEO/SEOHead";
import { generateBreadcrumbSchema } from "./SEO/StructuredData.jsx";
import { getSEOData } from "../data/seoData";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import portrait from "../assets/portrait.png";
import iocdfLogo from "../assets/IOCDF-Logo.png";
import pstLogo from "../assets/PST.png";
import lmft from "../assets/lmft.png";
import whoswhoBadge from "../assets/whoswho-badge.png";

const About = () => {
  // Add Psychology Today verification script for Elinor
  useEffect(() => {
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
  }, []);

  const seoData = getSEOData('about') || {
    title: "About EB & Flow Therapy - Personalized Mental Health Care",
    description: "Learn about EB & Flow Therapy's mission to provide personalized, evidence-based therapy that adapts to each client's unique needs.",
    keywords: "about EB Flow Therapy, personalized therapy, evidence-based treatment, Elinor Bawnik LMFT",
    url: "https://elinorlmft.github.io/about",
    image: "/portrait.png"
  };

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" }
  ];
  const structuredData = generateBreadcrumbSchema(breadcrumbs);

  const therapist = {
    name: "Elinor Bawnik",
    title: "Lead Therapist, LMFT",
    license: "LMFT #127577",
    languages: ["English", "Hebrew"],
    socialMedia: {
      instagram: "https://www.instagram.com/elinorlmft/",
      facebook: "https://www.facebook.com/people/Elinor-Bawnik/100073185439886/",
      psychologyToday: "https://www.psychologytoday.com/us/therapists/eb-flow-marriage-therapy-inc-los-angeles-ca/1015567"
    },
    shortBio: "With extensive experience in individual and couples therapy, I am dedicated to fostering a supportive and safe space where growth and healing can thrive. By integrating evidence-based practices with a deep commitment to authentic human connection, I help clients navigate challenges and uncover their full potential.",
    education: [
      "MA in Marriage and Family Therapy from Alliant International University, Los Angeles CA",
      "Additional training: Couples therapy, Obsessive compulsive disorder, Personality disorders, Hoarding, and therapeutic modalities such as ACT, DBT, and iCBT",
      "Member of the International OCD Foundation",
      "Honored Listee of the Marquis Who's Who in 2025"
    ],
    background: "As a passionate therapist with extensive experience, I offer a thorough and straightforward approach to therapy. I have had the privilege of working with adults, couples, families, and teens across a variety of settings, including hospitals, high schools, residential programs, and PHP/IOP environments. Additionally, I bring experience in group therapy and working with underserved populations, including homeless individuals and veterans.",
    specializations: [
      "Individual Therapy",
      "Couples Therapy",
      "OCD & Anxiety Disorders",
      "Personality Disorders",
      "Cultural Transitions",
      "Sex-Positivity & Kink-Friendly"
    ],
    approach: "At EB & Flow Therapy, every client's story is unique, and therapy should honor that individuality. I provide personalized, evidence-based care that adapts to your needs. With a speciality in OCD, anxiety, personality disorders, and relationship challenges, I create an inclusive space where all identities and experiences are respected.\n\nI view therapy as a collaborative journey, partnering with my clients to achieve their personalized goals. I also believe in the power of humor to create connection and lightness, making the process both meaningful and relatable. My therapeutic approach blends a variety of evidence-based methods with psychodynamic processing and creative, out-of-the-box techniques. I tailor each session to meet the unique needs of my clients, ensuring a personalized and effective experience. I integrate:\n\n• Dialectial Behavioral Therapy (DBT)\n• Acceptance and Commitment Therapy (ACT)\n• Cognitive Behavioral Techniques\n• Emotionally Focused Therapy (EFT)\n• Narrative & Experiential Therapy\n• Mindfulness-Based Approaches\n• Attachment-Based Therapy"
  };

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

      <div className="bg-[#faf9f6] min-h-screen">
        {/* Hero Section */}
        <section className="px-6 py-16 pt-32 md:pt-28 bg-[#f7f5f1]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Photo */}
              <div className="flex justify-center">
                <div className="w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] max-w-full rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={portrait}
                    alt={therapist.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Basic Info */}
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-4xl font-light text-[#5d5043] mb-2">
                      {therapist.name}
                    </h1>
                    <p className="text-xl text-[#6b5d47] mb-2">{therapist.title}</p>
                    <div className="bg-[#e8d5c4] text-[#6b5d47] px-3 py-1 rounded-full text-sm inline-block mb-4">
                      {therapist.license}
                    </div>
                  </div>
                  {/* LMFT logo on right side */}
                  <img
                    src={lmft}
                    alt="LMFT Credential"
                    className="w-40 h-20 object-contain"
                  />
                </div>

                <p className="text-[#6b5d47] leading-relaxed">{therapist.shortBio}</p>

                {/* Languages */}
                <div className="flex items-center space-x-2 text-[#6b5d47]">
                  <Globe className="w-5 h-5 text-[#a8b5a0]" />
                  <span>{therapist.languages.join(" • ")}</span>
                </div>

                {/* Specialties */}
                <div>
                  <h3 className="font-medium text-[#5d5043] mb-3">Specializations</h3>
                  <div className="flex flex-wrap gap-2">
                    {therapist.specializations.map((specialty) => (
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
                  <div className="flex items-center gap-3">
                    <a
                      href={therapist.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6b5d47] hover:text-[#a8b5a0] transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href={therapist.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6b5d47] hover:text-[#a8b5a0] transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
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
                  </div>
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
              <Card className="bg-[#fefdfb] shadow-lg border-none">
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-2xl font-light text-[#5d5043]">My Approach</h2>
                  <div className="text-[#6b5d47] leading-relaxed">
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

              {/* Background & Education - Side by Side */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Background */}
                <Card className="bg-[#fefdfb] shadow-lg border-none">
                  <CardContent className="p-8 space-y-6">
                    <h2 className="text-2xl font-light text-[#5d5043]">Background</h2>
                    <p className="text-[#6b5d47] leading-relaxed whitespace-pre-line">{therapist.background}</p>
                  </CardContent>
                </Card>

                {/* Education */}
                <Card className="bg-[#fefdfb] shadow-lg border-none">
                  <CardContent className="p-8 space-y-6">
                    <h2 className="text-2xl font-light text-[#5d5043]">Education & Training</h2>
                    <ul className="space-y-3">
                      {therapist.education.map((item, index) => (
                        <li key={index} className="text-[#6b5d47] flex items-start">
                          <span className="text-[#a8b5a0] mr-3">•</span>
                          <div className="flex-1">
                            {item.includes("Member of the International OCD Foundation") ? (
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
                            ) : item.includes("Honored Listee of the Marquis Who's Who in 2025") ? (
                              <div className="flex items-center space-x-3">
                                <span>{item}</span>
                                <img
                                  src={whoswhoBadge}
                                  alt="Marquis Who's Who 2025 Honored Listee Badge"
                                  className="h-10 object-contain"
                                />
                              </div>
                            ) : (
                              item
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
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

export default About;
