import { useState } from "react";
import { Newspaper, Mic, ExternalLink, Calendar, Clock, UserCheck, CalendarCheck } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "./SEO/SEOHead";
import floralPattern from "../assets/floral-pattern.jpg";
import { generateBreadcrumbSchema } from "./SEO/StructuredData.jsx";
import { getSEOData } from "../data/seoData";
import { useIntersectionObserver } from "../components/modal/useIntersectionObserver";
import background from "../assets/tree.png";
import psychchetral from "../assets/PsychCentral.jpg";
import tiredthriving from "../assets/Tired&Thriving.jpg";
import shoutoutla from "../assets/ShoutoutLA.jpg";
import voyagela from "../assets/VoyageLA-2.webp";
import floralPattern2 from "../assets/floral-pattern2.png";
import aiBrainChip from "../assets/ai-brain-chip.jpg";

// Media Item Component with Hover Effect
const MediaCard = ({ item, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = () => {
    switch (item.type) {
      case "article":
        return <Newspaper className="w-6 h-6" />;
      case "podcast":
        return <Mic className="w-6 h-6" />;
      case "interview":
        return <UserCheck className="w-6 h-6" />;
      default:
        return <Newspaper className="w-6 h-6" />;
    }
  };

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out
          ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden rounded-2xl shadow-xl group h-96 bg-white/90"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 will-change-transform"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: item.bgColor || "#f0f0f0",
            }}
          />
        </div>

        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 z-[1]
            ${isHovered
                ? "from-mountain-shadow/95 via-mountain-shadow/85 to-mountain-shadow/70"
                : "from-mountain-shadow/85 via-mountain-shadow/50 to-transparent"
            }`}
        />

        {/* Content Container */}
        <div className="absolute inset-0 p-6 z-[2]">
          {/* Type Label - Fixed at Top */}
          <div className="flex items-center space-x-2 text-mountain-terra mb-3">
            {getIcon()}
            <span className="text-sm font-medium uppercase tracking-wider">
              {item.type}
            </span>
          </div>

          {/* Here's the key change: Title is inside a flex justify-end container */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h3 className="text-xl lg:text-2xl font-medium text-white leading-tight">
              {item.title}
            </h3>
            
            {/* Description - Only visible on hover */}
            <div
              className={`transition-all duration-300 transform
                ${isHovered
                    ? "opacity-100 translate-y-0 mt-4"
                    : "opacity-0 translate-y-4 h-0 overflow-hidden"
                }`}
            >
              <p className="text-white/90 text-sm lg:text-base leading-relaxed line-clamp-3">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between text-white/70 text-xs lg:text-sm mt-4">
                <div className="flex items-center space-x-3">
                  {item.date && (
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                      <span>{item.date}</span>
                    </span>
                  )}
                  {item.duration && (
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 lg:w-4 lg:h-4" />
                      <span>{item.duration}</span>
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2 text-mountain-terra">
                  <span className="text-white/90 text-xs lg:text-sm">{item.source}</span>
                  <ExternalLink className="w-4 h-4 lg:w-5 lg:h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const Media = () => {
  const [titleRef, isTitleVisible] = useIntersectionObserver();
  const [ctaRef, isCtaVisible] = useIntersectionObserver();

  const seoData = getSEOData('media');
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Media", path: "/media" }
  ];
  const structuredData = generateBreadcrumbSchema(breadcrumbs);

  // Media items data
  const mediaItems = [
    {
      id: 1,
      type: "podcast",
      title: "Understanding OCD: A Therapeutic Perspective",
      description:
        "Join me on Tired & Thriving podcast where we discuss obsessive-compulsive disorder, effective treatment approaches, and the journey toward recovery. We explore the complexities of OCD and how therapy can help individuals reclaim their lives.",
      image: tiredthriving,
      bgColor: "#2C394B",
      link: "https://creators.spotify.com/pod/profile/tiredandthriving/",
      date: "November 22, 2023",
      duration: "45 min",
      source: "Tired & Thriving Podcast",
    },
    {
      id: 2,
      type: "interview",
      title: "Expert Insights on Cluster B Personality Disorders",
      description:
        "Featured as an expert contributor in this comprehensive PsychCentral article exploring Cluster B personality disorders, including borderline personality disorder. The article discusses symptoms, treatment approaches, and the importance of specialized therapeutic support.",
      image: psychchetral,
      bgColor: "#566176",
      link: "https://psychcentral.com/disorders/cluster-b-personality-disorders#borderline",
      date: "2023",
      source: "PsychCentral",
    },
    {
      id: 3,
      type: "interview",
      title: "Meet Elinor Bawnik: Licensed Marriage and Family Therapist",
      description:
        "An in-depth interview discussing my journey as a therapist, the importance of cultural competence in therapy, and my approach to helping clients navigate complex mental health challenges. Learn about my background, therapeutic philosophy, and what drives my passion for healing.",
      image: shoutoutla,
      bgColor: "#C7A693",
      link: "https://shoutoutla.com/meet-elinor-bawnik-licensed-marriage-and-family-therapist-head-therapist-and-supervisor/",
      date: "2023",
      source: "ShoutoutLA",
    },
    {
      id: 4,
      type: "interview",
      title: "An Inspired Chat with Elinor Bawnik of Santa Monica",
      description:
        "Featured in VoyageLA, this interview highlights my journey as a therapist in Santa Monica, exploring the challenges and rewards of building a practice focused on personalized, evidence-based care. Discover the inspiration behind EB & Flow Therapy and my commitment to creating an inclusive therapeutic space.",
      image: voyagela,
      bgColor: "#8FA3B0",
      link: "https://voyagela.com/interview/an-inspired-chat-with-elinor-bawnik-of-santa-monica-highlight/",
      date: "2024",
      source: "VoyageLA",
    },
    {
      id: 5,
      type: "article",
      title: "AI Made Safe: Navigating Mental Health in the Age of Technology",
      description:
        "A comprehensive exploration of AI safety in mental health contexts. This article examines the risks of AI engagement optimization, the emerging concern of 'AI psychosis,' and provides evidence-based guidelines for safe, intentional AI use. Written by Elinor Bawnik, LMFT, this piece offers critical insights for clinicians, clients, and anyone using AI tools while prioritizing wellbeing and human connection.",
      image: aiBrainChip,
      bgColor: "#E67E22",
      link: "https://drive.google.com/file/d/1JkVXxkGw5sX2-YJWiNXtFV3PnvcrERHp/view?usp=sharing",
      date: "October 2025",
      source: "EB & Flow Therapy",
    },
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
          {/* Background Pattern with fade effect - same as teams section */}
          <div 
            className="absolute inset-0 opacity-15 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${floralPattern2})`,
              backgroundPosition: 'center top',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0) 100%)',
              zIndex: 0
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6" style={{ paddingTop: '8rem' }}>
            <h1 className="text-4xl md:text-5xl font-light text-text-primary">
              Media & Publications
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Explore featured articles, interviews, and podcast appearances sharing insights on mental health, therapeutic approaches, and the journey toward healing.
            </p>
          </div>
        </section>

        {/* Media Grid */}
        <section className="relative px-6 pt-24 pb-16 z-20" style={{ backgroundColor: 'rgba(244, 194, 161, 0.1)' }}>
          <div className="max-w-6xl mx-auto">

          {/* Media Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {mediaItems.map((item, index) => (
              <MediaCard key={item.id} item={item} delay={index * 100} />
            ))}
          </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden" style={{ backgroundColor: 'rgba(244, 194, 161, 0.1)' }}>
          {/* Decorative overlay */}
          <div className="absolute inset-0" />

          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <div
              className="relative bg-white backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-gray-200
                transform transition-all duration-700
                group"
            >
              {/* Background image that appears when scrolled into view */}
              <div
                className={`absolute inset-0 z-[-1] transition-opacity duration-1000
                           bg-cover bg-center bg-no-repeat rounded-2xl
                           ${isCtaVisible ? 'opacity-20' : 'opacity-0'}`}
                style={{
                    backgroundImage: `url(${floralPattern})`,
                }}
              />

              <div className="text-center space-y-6">
                {/* Animated Title */}
                <div
                  ref={ctaRef}
                  className={`transform transition-all duration-700
                    ${isCtaVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                  <h2 className="text-4xl font-light text-mountain-shadow mb-2">
                    Contact Now To Get Started!
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

export default Media;