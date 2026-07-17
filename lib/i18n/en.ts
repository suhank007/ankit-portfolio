import type { Dictionary } from "./types";
import {
  profile,
  heroHeadline,
  heroSub,
  achievements,
  capabilityMap,
  industries,
  timeline,
  education,
  experience,
  services,
} from "@/lib/data";

export const en: Dictionary = {
  dir: "ltr",
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    services: "Services",
    contact: "Contact",
    projects: "Projects",
    resume: "Resume",
  },
  hero: {
    location: profile.location,
    years: `${profile.experienceYears} Years Experience`,
    headline: heroHeadline,
    sub: heroSub,
    downloadResume: "Download Resume",
    viewCaseStudies: "View Case Studies",
    letsConnect: "Let's Connect",
  },
  roles: profile.roles,
  achievementLabels: achievements.map((a) => a.label),
  capability: {
    headline: "Business transformation first. Data platforms second.",
    sub: "Nine years leading cross-functional programmes by aligning business priorities, engaging senior stakeholders, and establishing governance that survives contact with a real transformation.",
    domains: capabilityMap,
    industriesLabel: "Industries served",
    industries,
  },
  about: {
    headline: "A decade turning raw data into decisions.",
    intro:
      "From India to Paris, across enterprise consulting engagements and PLM transformation programmes, every stop sharpened one obsession: making data legible enough to act on.",
    residency: profile.residency,
    relocation: profile.relocation,
    educationLabel: "Education",
    certifiedLabel: "Certified",
    education: education.map(({ degree, institution, note, honors }) => ({
      degree,
      institution,
      note,
      honors,
    })),
    timeline,
  },
  skillsSection: {
    headline: "A stack built across analytics, platform, and automation.",
    categories: {
      Analytics: "Analytics",
      Platform: "Platform",
      Engineering: "Engineering",
      PLM: "PLM",
      "AI & Automation": "AI & Automation",
    },
    experienceLabel: "Experience",
  },
  experienceSection: {
    headline: "Enterprise engagements, end to end.",
    entries: experience.map(({ role, period, location, scope, impact }) => ({
      role,
      period,
      location,
      scope,
      impact,
    })),
  },
  featuredWork: {
    headline: "Selected engagements, not GitHub repos.",
    viewAll: "View all case studies",
    viewCaseStudy: "View case study",
  },
  servicesSection: {
    headline: "Where I create leverage for enterprise teams.",
    items: services,
  },
  contact: {
    eyebrow: "Get in touch",
    headline: "Let's turn your data into a decision advantage.",
    bookCall: "Book a Call",
  },
  footer: {
    rights: "All rights reserved.",
  },
};
