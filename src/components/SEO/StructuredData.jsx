// Structured Data generators for SEO

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "EB & Flow Marriage Therapy, Inc.",
  "image": "https://itsyuvallavi.github.io/eb-flow-therapy/logo.png",
  "description": "Licensed marriage and family therapy services by Elinor Bawnik, LMFT. Specializing in DBT, CBT, ACT, couples therapy, OCD, anxiety, personality disorders in West Los Angeles, California.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "West Los Angeles",
    "addressRegion": "California", 
    "addressCountry": "US"
  },
  "telephone": "(424) 431-1122",
  "email": "elinorlmft@gmail.com",
  "url": "https://itsyuvallavi.github.io/eb-flow-therapy",
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "34.0522",
      "longitude": "-118.2437"
    },
    "geoRadius": "50000"
  },
  "knowsAbout": [
    "Marriage and Family Therapy",
    "DBT Therapy",
    "CBT Therapy", 
    "ACT Therapy",
    "Couples Therapy",
    "Individual Therapy",
    "OCD Treatment",
    "Anxiety Disorders",
    "Personality Disorders"
  ]
});

export const generatePersonSchema = (therapistData = {}) => {
  const defaultData = {
    name: "Elinor Bawnik",
    jobTitle: "Licensed Marriage and Family Therapist",
    description: "Licensed Marriage and Family Therapist (LMFT #124458) specializing in DBT, CBT, ACT, couples therapy, OCD, anxiety disorders, and personality disorders in West Los Angeles, California.",
    image: "https://itsyuvallavi.github.io/eb-flow-therapy/portrait.png",
    email: "elinorlmft@gmail.com",
    telephone: "(424) 431-1122",
    license: "LMFT #124458",
    languages: ["English", "Hebrew"],
    specializations: [
      "DBT Therapy",
      "CBT Therapy", 
      "ACT Therapy",
      "Couples Therapy",
      "Individual Therapy",
      "OCD Treatment",
      "Anxiety Disorders",
      "Personality Disorders"
    ],
    socialMedia: {
      instagram: "https://www.instagram.com/elinorlmft/",
      facebook: "https://www.facebook.com/people/Elinor-Bawnik/100073185439886/"
    }
  };

  const data = { ...defaultData, ...therapistData };

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": data.name,
    "jobTitle": data.jobTitle,
    "description": data.description,
    "image": data.image,
    "email": data.email,
    "telephone": data.telephone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "West Los Angeles",
      "addressRegion": "California",
      "addressCountry": "US"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Alliant International University"
    },
    "knowsAbout": data.specializations,
    "memberOf": {
      "@type": "Organization",
      "name": "International OCD Foundation"
    },
    "sameAs": [
      data.socialMedia.instagram,
      data.socialMedia.facebook
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional License",
      "recognizedBy": {
        "@type": "Organization", 
        "name": "California Board of Behavioral Sciences"
      }
    },
    "knowsLanguage": data.languages.map(lang => ({
      "@type": "Language",
      "name": lang
    }))
  };
};

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "EB & Flow Marriage Therapy",
  "alternateName": "Elinor Bawnik LMFT",
  "url": "https://itsyuvallavi.github.io/eb-flow-therapy",
  "description": "Marriage and family therapy services by Elinor Bawnik, LMFT in West Los Angeles. Specializing in DBT, CBT, ACT therapy for couples, OCD, anxiety, personality disorders.",
  "inLanguage": "en-US",
  "author": {
    "@type": "Person",
    "name": "Elinor Bawnik"
  }
});

export const generateBreadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": `https://itsyuvallavi.github.io/eb-flow-therapy${crumb.path}`
  }))
});