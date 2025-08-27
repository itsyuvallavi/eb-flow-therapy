// SEO data configurations for each page

export const seoConfig = {
  home: {
    title: "Elinor Bawnik, LMFT - Marriage & Family Therapy in Los Angeles | EB & Flow Therapy",
    description: "Licensed therapist Elinor Bawnik, LMFT provides DBT, CBT, ACT therapy in West Los Angeles. Specializing in couples, OCD, anxiety, personality disorders.",
    keywords: "Elinor Bawnik, LMFT, Marriage and Family Therapist, California Therapist, Therapist Los Angeles, Therapist West Los Angeles, DBT Therapist, CBT Therapist, ACT Therapist, Couples Therapy, OCD, Anxiety Disorder, Personality Disorder",
    url: "/",
    image: "/portrait.png"
  },

  ourTeam: {
    title: "Meet Elinor Bawnik, LMFT - Licensed Therapist in Los Angeles",
    description: "Elinor Bawnik is a licensed marriage and family therapist (LMFT #124458) specializing in DBT, CBT, ACT. Serving West Los Angeles and California.",
    keywords: "Elinor Bawnik, California Therapist, DBT Therapist, Licensed Marriage and Family Therapist, LMFT, West Los Angeles, CBT Therapist, ACT Therapist",
    url: "/our-team",
    image: "/portrait.png"
  },

  services: {
    title: "DBT, CBT & ACT Therapy Services - Elinor Bawnik LMFT Los Angeles",
    description: "Expert DBT, CBT, ACT therapy for OCD, anxiety disorders, personality disorders. Licensed therapist Elinor Bawnik in West Los Angeles.",
    keywords: "DBT Therapist, CBT Therapist, ACT Therapist, OCD, Personality Disorder, Anxiety Disorder, Marriage and Family Therapist, California Therapist, Elinor Bawnik",
    url: "/services", 
    image: "/logo.png"
  },

  contact: {
    title: "Contact Elinor Bawnik, LMFT - West Los Angeles Therapist",
    description: "Schedule therapy with Elinor Bawnik, licensed therapist in West Los Angeles. DBT, CBT, couples therapy. Call (424) 431-1122.",
    keywords: "Therapist West Los Angeles, Elinor Bawnik contact, Marriage and Family Therapist, California Therapist, DBT Therapist, CBT Therapist, ACT Therapist",
    url: "/contact",
    image: "/logo.png"
  },

  media: {
    title: "Media & Articles - Elinor Bawnik, LMFT Los Angeles",
    description: "Articles and media appearances by licensed therapist Elinor Bawnik, LMFT. Expert insights on OCD, personality disorders, and therapy in Los Angeles.",
    keywords: "Elinor Bawnik, Marriage and Family Therapist, California Therapist, OCD, Personality Disorder, DBT Therapist, CBT Therapist, Therapist Los Angeles",
    url: "/media",
    image: "/portrait.png"
  },

  therapistProfile: {
    elinor: {
      title: "Elinor Bawnik, LMFT #124458 - Marriage & Family Therapist Los Angeles",
      description: "Elinor Bawnik, Licensed Marriage and Family Therapist (LMFT #124458) in Los Angeles. Specializing in couples therapy, OCD, DBT, personality disorders.",
      keywords: "Elinor Bawnik, Marriage and Family Therapist, LMFT, Los Angeles, California Therapist, DBT Therapist, CBT Therapist, ACT Therapist, OCD, Personality Disorder, Anxiety Disorder",
      url: "/therapists/elinor",
      image: "/portrait.png",
      type: "profile"
    },
    megan: {
      title: "Megan Adamson, AMFT - Associate Marriage & Family Therapist Los Angeles", 
      description: "Megan Adamson, Associate Marriage and Family Therapist specializing in individual therapy, couples therapy, OCD, anxiety disorders in Los Angeles.",
      keywords: "Megan Adamson, AMFT, Associate Marriage and Family Therapist, California Therapist, Therapist Los Angeles, OCD, Anxiety Disorder, Individual Therapy, Couples Therapy",
      url: "/therapists/megan",
      image: "/Megan.png",
      type: "profile"
    }
  }
};

// Helper function to get SEO data by page
export const getSEOData = (page, subpage = null) => {
  if (subpage && seoConfig[page] && seoConfig[page][subpage]) {
    return seoConfig[page][subpage];
  }
  return seoConfig[page] || seoConfig.home;
};