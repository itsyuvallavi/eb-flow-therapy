import React from 'react';
import SEOHead from "./SEO/SEOHead.jsx";
import { generateBreadcrumbSchema } from "./SEO/StructuredData.jsx";
import { getSEOData } from "../data/seoData.js";
import { useIntersectionObserver } from "./modal/useIntersectionObserver.jsx";
import floralPattern2 from "../assets/floral-pattern2.png";
import treeImage from "../assets/tree.png";

const ProvidersnPrograms = () => {
  const [companyRef, isCompanyVisible] = useIntersectionObserver();
  const [founderRef, isFounderVisible] = useIntersectionObserver();

  const seoData = getSEOData('about') || {
    title: "Programs and Presentations for EB & Flow Therapy - Personalized Mental Health Care",
    description: "Learn about EB & Flow Therapy's mission to provide personalized, evidence-based therapy that adapts to each client's unique needs.",
    keywords: "about EB Flow Therapy, personalized therapy, evidence-based treatment, Elinor Bawnik LMFT",
    url: "https://elinorlmft.github.io/providers-programs",
    image: "/portrait.png"
  };

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "ProvidersnPrograms", path: "/ProvidersnPrograms" }
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
              Information for Providers and Programs
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Offering In person/Virtual Presentations and Supervision Services            </p>
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
                    Presentations
                  </h2>

                  <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                  I offer in-person and virtual presentations for practices, agencies, and programs seeking clinically relevant, evidence-based training. Presentations focus on areas of specialization and are designed to be engaging, practical, and directly applicable to clinical work across disciplines.
                  <br />
                  Topics can be tailored to the needs of your team and may include comprehensive overviews, clinical frameworks, and current best practices. Trainings emphasize real-world application, with concrete tools, resources, and strategies that providers and clinical staff can integrate immediately into their work.
                  <br />
                  Each presentation is structured to support learning at multiple levels, whether for clinicians seeking deeper specialization or multidisciplinary teams looking to strengthen shared understanding and collaboration.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supervision Services Section */}
        <section className="relative px-6 py-16" style={{ backgroundColor: 'rgba(244, 194, 161, 0.1)' }}>
          <div className="max-w-4xl mx-auto">
            <div
              ref={founderRef}
              className={`transform transition-all duration-700 ease-out ${
                isFounderVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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
                    Supervision Services
                  </h2>

                  <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                    <p>
                      I provide clinical supervision for associates and clinical teams seeking supportive, structured, and growth-oriented guidance. I have completed the CAMFT Supervisor Certificate Program and offer supervision that aligns with current ethical, legal, and professional standards.
                    </p>

                    <p>
                      Supervision is available on a contracted basis for both individual and group formats. My approach emphasizes case conceptualization, clinical skill development, ethical decision-making, and integration of evidence-based practices, while supporting clinicians in developing their professional identity and confidence.
                    </p>

                    <p>
                      Supervision services also include guidance with BBS-required documentation, support in accessing appropriate clinical resources, and targeted training as needed to support team and practice goals.
                    </p>
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

export default ProvidersnPrograms;