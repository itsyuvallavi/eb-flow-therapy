// SEO data configurations for each page

export const seoConfig = {
  home: {
    title: "Elinor Bawnik, LMFT - EB & Flow Marriage & Family Therapy Los Angeles",
    description: "Licensed therapist Elinor Bawnik at EB & Flow provides DBT, CBT, ACT, EFT therapy in West Los Angeles. Individual, couples, family therapy for OCD, anxiety, trauma, personality disorders.",
    keywords: "Elinor Bawnik, EB & Flow, LMFT, Marriage and Family Therapist, California Therapist, Therapist Los Angeles, West Los Angeles, DBT Therapist, CBT Therapist, ACT Therapist, EFT, Individual Therapy, Couples Therapy, Family Therapy, OCD, Anxiety Disorders, Personality Disorders, Trauma Therapy, Mindfulness, Attachment-Based Therapy, Cultural Transitions, Sex-Positive, Kink-Friendly",
    url: "/",
    image: "/portrait.png"
  },

  ourTeam: {
    title: "Meet Elinor Bawnik, LMFT - EB & Flow Licensed Therapist Los Angeles",
    description: "Elinor Bawnik at EB & Flow is a licensed marriage and family therapist (LMFT #124458) specializing in DBT, CBT, ACT, EFT, trauma therapy. Serving West Los Angeles and California.",
    keywords: "Elinor Bawnik, EB & Flow, California Therapist, DBT Therapist, Licensed Marriage and Family Therapist, LMFT, West Los Angeles, CBT Therapist, ACT Therapist, EFT, Trauma Therapy, Individual Therapy, Group Therapy, Mindfulness-Based Therapy",
    url: "/our-team",
    image: "/portrait.png"
  },

  services: {
    title: "DBT, CBT, ACT & EFT Therapy Services - EB & Flow | Elinor Bawnik LMFT",
    description: "Expert therapy services at EB & Flow: DBT, CBT, ACT, EFT, trauma therapy, mindfulness. Individual, couples, family therapy for OCD, anxiety, personality disorders. Elinor Bawnik, LMFT in West Los Angeles.",
    keywords: "EB & Flow, DBT Therapist, CBT Therapist, ACT Therapist, EFT, Trauma Therapy, Mindfulness-Based Therapy, Individual Therapy, Couples Therapy, Family Therapy, Group Therapy, OCD, Personality Disorders, Anxiety Disorders, Narrative Therapy, Attachment-Based Therapy, Elinor Bawnik, California Therapist, West Los Angeles",
    url: "/services", 
    image: "/logo.png"
  },

  contact: {
    title: "Contact EB & Flow - Elinor Bawnik, LMFT West Los Angeles Therapist",
    description: "Schedule therapy at EB & Flow with Elinor Bawnik, licensed therapist in West Los Angeles. DBT, CBT, ACT, trauma therapy, couples therapy. Call (424) 431-1122.",
    keywords: "EB & Flow, Contact, Therapist West Los Angeles, Elinor Bawnik, Marriage and Family Therapist, California Therapist, DBT Therapist, CBT Therapist, ACT Therapist, EFT, Trauma Therapy, Individual Therapy, Couples Therapy, Schedule Appointment",
    url: "/contact",
    image: "/logo.png"
  },

  media: {
    title: "Media & Articles - EB & Flow | Elinor Bawnik, LMFT Los Angeles",
    description: "Articles and media appearances by EB & Flow founder Elinor Bawnik, LMFT. Expert insights on OCD, personality disorders, trauma therapy, and evidence-based treatment approaches in Los Angeles.",
    keywords: "EB & Flow, Media, Elinor Bawnik, Marriage and Family Therapist, California Therapist, OCD, Personality Disorders, DBT Therapist, CBT Therapist, ACT Therapist, Trauma Therapy, Evidence-Based Treatment, Therapist Los Angeles, Expert Insights",
    url: "/media",
    image: "/portrait.png"
  },

  therapistProfile: {
    elinor: {
      title: "Elinor Bawnik, LMFT #124458 - EB & Flow Marriage & Family Therapist",
      description: "Elinor Bawnik, founder of EB & Flow and Licensed Marriage and Family Therapist (LMFT #124458) in Los Angeles. Specializing in DBT, CBT, ACT, EFT, trauma therapy, couples therapy, OCD, personality disorders. Individual, family, group therapy with mindfulness and attachment-based approaches.",
      keywords: "Elinor Bawnik, EB & Flow, Marriage and Family Therapist, LMFT, Los Angeles, West Los Angeles, California Therapist, DBT Therapist, CBT Therapist, ACT Therapist, EFT, Trauma Therapy, Individual Therapy, Couples Therapy, Family Therapy, Group Therapy, OCD, Personality Disorders, Anxiety Disorders, Mindfulness-Based Therapy, Attachment-Based Therapy, Cultural Transitions, Sex-Positive, Kink-Friendly",
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