export type Locale = "en" | "fr" | "de" | "nl" | "ar";

export const locales: { code: Locale; label: string }[] = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "nl", label: "Nederlands" },
  { code: "ar", label: "العربية" },
];

export interface Dictionary {
  dir: "ltr" | "rtl";
  nav: {
    about: string;
    skills: string;
    experience: string;
    services: string;
    contact: string;
    projects: string;
    resume: string;
  };
  hero: {
    location: string;
    years: string;
    headline: string;
    sub: string;
    downloadResume: string;
    viewCaseStudies: string;
    letsConnect: string;
  };
  roles: string[];
  achievementLabels: string[];
  capability: {
    headline: string;
    sub: string;
    domains: { domain: string; description: string; items: string[] }[];
    industriesLabel: string;
    industries: string[];
  };
  about: {
    headline: string;
    intro: string;
    residency: string;
    relocation: string;
    educationLabel: string;
    certifiedLabel: string;
    education: { degree: string; institution: string; note?: string; honors?: string[] }[];
    timeline: { year: string; title: string; description: string }[];
  };
  skillsSection: {
    headline: string;
    categories: Record<string, string>;
    experienceLabel: string;
  };
  experienceSection: {
    headline: string;
    entries: { role: string; period: string; location: string; scope: string; impact: string[] }[];
  };
  featuredWork: {
    headline: string;
    viewAll: string;
    viewCaseStudy: string;
    englishNote?: string;
  };
  servicesSection: {
    headline: string;
    items: { title: string; description: string }[];
  };
  contact: {
    eyebrow: string;
    headline: string;
    bookCall: string;
  };
  footer: {
    rights: string;
  };
}
