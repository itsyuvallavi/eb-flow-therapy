import { useState } from "react";
import { Newspaper, Mic, ExternalLink, Calendar, Clock, UserCheck } from "lucide-react";
import SEOHead from "./SEO/SEOHead";
import { generateBreadcrumbSchema } from "./SEO/StructuredData";
import { getSEOData } from "../data/seoData";
import { useIntersectionObserver } from "../components/modal/useIntersectionObserver";
import background from "../assets/tree.png";
import psychchetral from "../assets/PsychCentral.jpg";
import tiredthriving from "../assets/Tired&Thriving.jpg";
import shoutoutla from "../assets/ShoutoutLA.jpg";

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
        className="block relative overflow-hidden rounded-2xl shadow-xl group h-96 bg-mountain-shadow/10"
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
      type: "article",
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
      <div className="relative min-h-screen bg-gradient-to-b from-mountain-peak/15 to-mountain-forest/25">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-center bg-no-repeat transition-opacity duration-500"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "1200px",
          opacity: 0.1,
          zIndex: 0,
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
                ${isTitleVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="relative inline-block">
              <h1 className="relative text-5xl font-light text-mountain-shadow">
                <span className="block text-sm uppercase tracking-wider text-mountain-shadow/80 mb-2">
                  Insights & Resources
                </span>
                Media & Publications
              </h1>
            </div>

            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-0 right-0 h-[1px] top-0 bg-gradient-to-r from-transparent via-mountain-shadow/20 to-transparent" />
              <p className="text-lg text-mountain-shadow/80 py-6">
                Explore featured articles, interviews, and podcast appearances where we share
                insights on mental health, therapeutic approaches, and the
                journey toward healing.
              </p>
              <div className="absolute left-0 right-0 h-[1px] bottom-0 bg-gradient-to-r from-transparent via-mountain-shadow/20 to-transparent" />
            </div>
          </div>

          {/* Media Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {mediaItems.map((item, index) => (
              <MediaCard key={item.id} item={item} delay={index * 100} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-light text-mountain-shadow mb-4">
                Stay Connected
              </h3>
              <p className="text-mountain-shadow/80 mb-6">
                For more insights and updates on mental health topics, check
                back regularly as we continue to share valuable resources and
                perspectives.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-mountain-terra text-white 
                    rounded-full hover:bg-mountain-terra/90 transition-all duration-300 
                    transform hover:scale-105 hover:shadow-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Media;