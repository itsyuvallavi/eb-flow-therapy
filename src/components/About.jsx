import React from 'react';
import SEOHead from "./SEO/SEOHead";
import { generateBreadcrumbSchema } from "./SEO/StructuredData.jsx";
import { getSEOData } from "../data/seoData";
import { useIntersectionObserver } from "./modal/useIntersectionObserver";
import floralPattern2 from "../assets/floral-pattern2.png";
import portrait from "../assets/portrait.png";
import treeImage from "../assets/tree.png";

const About = () => {
  const [companyRef, isCompanyVisible] = useIntersectionObserver();
  const [founderRef, isFounderVisible] = useIntersectionObserver();

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
          {/* Background Pattern */}
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
              About EB & Flow Therapy
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Therapy that adapts to your unique story, honoring your journey toward healing and growth.
            </p>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="relative px-6 py-16" style={{ backgroundColor: 'rgba(244, 194, 161, 0.1)' }}>
          <div className="max-w-4xl mx-auto">
            <div
              ref={companyRef}
              className={`transform transition-all duration-700 ease-out ${
                isCompanyVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-lg relative overflow-hidden">
                {/* Centered tree background */}
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: `url(${treeImage})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                  }}
                />

                <div className="relative z-10">
                  <h2 className="text-3xl lg:text-4xl font-light text-text-primary mb-8 text-center">
                    Our Mission
                  </h2>

                  <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                    <p>
                      EB & Flow Therapy was created with one guiding principle: every client's story is unique, and therapy should honor that individuality. We see you as the expert on your own life. Our role is to provide the structure, insight, and evidence-based tools that help you move toward the changes you want while supporting your evolving sense of self.
                    </p>

                    <p>
                      Our vision is to offer therapy that adapts. No two people are the same, so no two therapy paths should look alike. We specialize in working with OCD and anxiety, personality disorders, couples and relationship challenges, and alternative partnerships. We are sex-positive, kink-affirming, and committed to creating an inclusive space where all identities and experiences are respected.
                    </p>

                    <p>
                      Our team integrates a range of approaches to best fit your needs. Alongside DBT and ACT, we draw from attachment-based therapy to explore how relationships shape the way you connect, and narrative therapy to help you reauthor the stories that guide your life. Each session is designed to meet you where you are, offering both structure and flexibility as you navigate challenges and growth.
                    </p>

                    <p>
                      Whether you are seeking individual therapy, couples counseling, or support for complex patterns, EB & Flow Therapy provides a collaborative and affirming space. Together, we help you find steadiness and possibility within the ebbs and flows of life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Bio Section */}
        <section className="relative px-6 py-16" style={{ backgroundColor: 'rgba(244, 194, 161, 0.1)' }}>
          <div className="max-w-6xl mx-auto">
            <div
              ref={founderRef}
              className={`transform transition-all duration-700 ease-out ${
                isFounderVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
                  {/* Founder Image */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img
                        src={portrait}
                        alt="Elinor Bawnik, LMFT - Founder of EB & Flow Therapy"
                        className="w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover ring-4 ring-white shadow-lg"
                      />
                      <div className="absolute -inset-2 bg-gradient-to-r from-primary-sage/20 to-accent-mint/20 rounded-full blur-xl -z-10"></div>
                    </div>
                  </div>

                  {/* Founder Content */}
                  <div className="flex-1 space-y-6">
                    <div className="text-center lg:text-left">
                      <h2 className="text-3xl lg:text-4xl font-light text-text-primary mb-2">
                        About the Founder
                      </h2>
                      <h3 className="text-2xl font-medium text-primary-sage mb-6">
                        Elinor Bawnik, LMFT
                      </h3>
                    </div>

                    <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
                      <p>
                        I started EB & Flow Therapy with a clear vision: therapy should be personalized and shaped around each client's unique needs. No two people experience life in the same way, so I believe no two therapy journeys should look the same. My goal is always to match each client with the right therapist, approach, and tools to support meaningful healing and growth.
                      </p>

                      <p>
                        Therapy is serious work. We are trusted with people's mental health—something that impacts every part of their lives. I see each client within the larger systems they live in, and I focus on helping them navigate those systems while building resilience and self-understanding. This sometimes means thinking outside of the box to create care that truly fits the person in front of me.
                      </p>

                      <p>
                        Part of this vision also includes the structure of my practice. We do not contract with insurance companies, which allows us to prioritize client needs rather than administrative requirements. At the same time, I believe therapy should be accessible, so we remain open to sliding-scale options when needed.
                      </p>

                      <p>
                        Because I take this work seriously, I've expanded EB & Flow Therapy to include associates whom I personally train and challenge. My goal is to ensure that every therapist here embodies the same commitment to personalized, thoughtful, and effective care. Together, we strive to create a practice that clients can trust during the most important and difficult times in their lives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;