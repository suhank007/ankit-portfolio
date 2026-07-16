export const profile = {
  name: "Ankit Parihar",
  roles: [
    "Senior BI & Data Transformation Consultant",
    "Business Intelligence Expert",
    "PLM Data Strategy Consultant",
    "Microsoft Fabric Specialist",
    "Power BI Data Analyst Associate",
    "Azure Data Engineer",
    "AI Automation Consultant",
  ],
  location: "Paris, France",
  experienceYears: "9+",
  email: "parihara90@gmail.com",
  phone: "+33 7 68 60 47 32",
  linkedin: "https://www.linkedin.com/in/futureishere/",
  github: "https://github.com/suhank007",
  calendly: "https://calendly.com/parihara90/30min",
  resumeUrl: "/resume.pdf",
  photo: "/photo.jpg",
};

export const heroHeadline = "Data strategy for teams that can't afford to guess.";
export const heroSub =
  "Enterprise BI, PLM data and AI-enabled reporting across aviation, manufacturing, luxury and finance.";

export type Achievement = {
  value: string;
  label: string;
};

export const achievements: Achievement[] = [
  { value: "+50%", label: "Adoption of enterprise reporting solutions, via stakeholder engagement and change enablement" },
  { value: "+60%", label: "Dashboard utilisation, by improving report usability and performance" },
  { value: "-40%", label: "Critical production issues, through proactive quality assurance" },
  { value: "-30%", label: "Project delivery risk, through planning and dependency governance" },
];

export const industries = [
  "Aviation",
  "Manufacturing",
  "Luxury Retail",
  "Healthcare",
  "Financial Services",
];

export const competencies = [
  "Business Transformation Strategy",
  "Enterprise Data Strategy",
  "AI Strategy & Business Enablement",
  "Digital Transformation",
  "Product Management",
  "Programme & Portfolio Governance",
  "Executive Stakeholder Management",
  "Enterprise Analytics & Business Intelligence",
  "Data Governance & Operating Model",
  "Change Management & Organisational Adoption",
  "Cross-Functional Leadership",
  "Strategic Planning & Decision Support",
];

export type TimelineStop = {
  year: string;
  title: string;
  description: string;
};

export const timeline: TimelineStop[] = [
  {
    year: "2010 - 2014",
    title: "India",
    description:
      "B-Tech in Electronics & Telecommunication at Lovely Professional University, an engineering foundation before the pivot into data and business analysis.",
  },
  {
    year: "2015 - 2018",
    title: "Enterprise Consulting",
    description:
      "Business Analyst / Scrum Coordinator at Capgemini, Bangalore, on the Société Générale (Paris) account, first exposure to enterprise delivery, leading the shift from Waterfall to Agile for a 15-person team.",
  },
  {
    year: "2018 - 2020",
    title: "France & a Master's",
    description:
      "Moved to Toulouse for an MSc in Big Data, Marketing & Management at Toulouse Business School, graduating with distinction. The formal turn toward data.",
  },
  {
    year: "2019 - 2020",
    title: "First Data Role in France",
    description:
      "Data Analyst Intern at Liebherr Aerospace and Transportation, Toulouse: Value Stream Mapping and AS-IS/TO-BE process models adopted by operations leadership.",
  },
  {
    year: "2020 - 2025",
    title: "Power BI, at Scale",
    description:
      "Five years at Cognizant Technologies in Paris, progressing from BI Consultant to Senior Consultant & Product Owner across five enterprise clients, including named outcomes at Air France, Dior (LVMH), AXA, and Sanofi.",
  },
  {
    year: "2025 - 2026",
    title: "Cloud Modernization",
    description:
      "Lead Data & Analytics Consultant at Iris Software for Advarra: migrated a clinical compliance platform from Oracle SQL Server to Databricks and Snowflake, cutting reporting overhead by ~40 hours/week.",
  },
  {
    year: "2026 - Present",
    title: "PLM, Deep",
    description:
      "PLM & Data Transformation Consultant at We.PLM (a Dassault Systèmes partner), leading BI strategy for Atlas Copco's ERP & PLM transformation on 3DEXPERIENCE / ENOVIA across 15+ European product companies.",
  },
  {
    year: "Ongoing",
    title: "AI-Augmented Reporting",
    description:
      "Piloting LLM-assisted commentary generation (Claude, GPT-4) inside executive dashboard workflows, cutting manual narrative prep by ~3 hours per reporting cycle.",
  },
];

export type SkillNode = {
  name: string;
  category: "Analytics" | "Platform" | "Engineering" | "PLM" | "AI & Automation";
  years: string;
  logo?: string;
  blurb: string;
};

export const skills: SkillNode[] = [
  { name: "Power BI", category: "Analytics", years: "6+ yrs · PL-300 Certified", logo: "/logos/powerbi.svg", blurb: "Advanced DAX, RLS, paginated reports, flagship platform across Air France, Dior, AXA, and Sanofi engagements." },
  { name: "SQL", category: "Engineering", years: "9+ yrs", blurb: "T-SQL and Oracle SQL across warehousing, reporting, and migration projects since Capgemini." },
  { name: "Azure", category: "Platform", years: "5+ yrs", logo: "/logos/azure.svg", blurb: "Data Factory, DevOps, and Power Platform for enterprise analytics pipelines." },
  { name: "AWS", category: "Platform", years: "Applied on select engagements", logo: "/logos/aws.svg", blurb: "Cloud infrastructure familiarity alongside the primary Microsoft analytics stack." },
  { name: "Databricks", category: "Platform", years: "Since 2025 · Advarra migration", logo: "/logos/databricks.svg", blurb: "Led migration off Oracle SQL Server to a cloud-native lakehouse architecture." },
  { name: "Microsoft Fabric", category: "Platform", years: "Applied 2025-26", logo: "/logos/fabric.svg", blurb: "Part of the modern analytics stack alongside Databricks and Snowflake on recent programmes." },
  { name: "Snowflake", category: "Platform", years: "Since 2025 · Advarra", logo: "/logos/snowflake.svg", blurb: "Governed on dbt for regulated, self-service reporting suites." },
  { name: "dbt", category: "Engineering", years: "Since 2025", logo: "/logos/dbt.svg", blurb: "Transformation layer for Snowflake-governed analytics at Advarra." },
  { name: "Python", category: "Engineering", years: "6+ yrs", logo: "/logos/python.svg", blurb: "Data engineering scripts, automation, and AI tooling across engagements." },
  { name: "Power Automate", category: "AI & Automation", years: "4+ yrs", blurb: "Power Platform workflow automation across enterprise systems." },
  { name: "Office Scripts", category: "AI & Automation", years: "3+ yrs", blurb: "Excel automation for reporting teams inside Microsoft 365." },
  { name: "Power Query", category: "Analytics", years: "6+ yrs", blurb: "ETL and data modelling logic inside the Power BI / Microsoft stack." },
  { name: "GitHub", category: "Engineering", years: "5+ yrs", blurb: "Version control and collaboration across delivery teams." },
  { name: "Azure DevOps", category: "Engineering", years: "4+ yrs", blurb: "Pipelines, boards, and release management for analytics platforms." },
  { name: "Tableau", category: "Analytics", years: "3+ yrs", logo: "/logos/tableau.svg", blurb: "Dashboard design for clients running outside the Microsoft stack." },
  { name: "Looker Studio", category: "Analytics", years: "Lightweight reporting", logo: "/logos/looker.svg", blurb: "Used for smaller-scope client reporting needs." },
  { name: "PLM", category: "PLM", years: "Current focus · Atlas Copco", blurb: "Product lifecycle data strategy across 15+ European product companies." },
  { name: "ENOVIA", category: "PLM", years: "Since 2026", blurb: "EBOM/MBOM workflows and ENOVIA data structures on the 3DEXPERIENCE platform." },
  { name: "3DEXPERIENCE", category: "PLM", years: "Since 2026", blurb: "Dassault Systèmes platform for the Atlas Copco PLM transformation." },
  { name: "AI Agents", category: "AI & Automation", years: "Applied since 2024", blurb: "AI/ML and intelligent automation use-case roadmaps for enterprise clients." },
  { name: "Claude", category: "AI & Automation", years: "Applied in production workflows", blurb: "LLM-assisted commentary generation inside executive dashboards." },
  { name: "OpenAI", category: "AI & Automation", years: "Applied in production workflows", blurb: "GPT-4 piloted for automated narrative generation on reporting cycles." },
  { name: "n8n", category: "AI & Automation", years: "Independent projects", blurb: "Self-hosted workflow orchestration for personal automation projects." },
  { name: "Zapier", category: "AI & Automation", years: "Independent projects", blurb: "No-code automation for operational workflows." },
  { name: "Supabase", category: "Engineering", years: "Independent projects", blurb: "Backend-as-a-service for prototypes and tooling." },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  impact: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "We.PLM",
    role: "PLM & Data Transformation Consultant",
    period: "Mar 2026 - Present",
    location: "Paris, France",
    impact: [
      "Leading enterprise analytics and BI initiatives for a multi-million-euro digital transformation programme spanning 15+ European business entities on 3DEXPERIENCE / ENOVIA.",
      "Defined analytics strategy, reporting governance and KPI frameworks with senior programme leadership, improving executive decision-making across complex transformation workstreams.",
      "Established enterprise data governance, quality and reporting standards that became the benchmark for large-scale PLM-to-ERP migration activity.",
      "Introduced AI-assisted executive reporting, integrating LLMs into reporting workflows to automate narrative generation and accelerate leadership decision support.",
    ],
  },
  {
    company: "Iris Software",
    role: "Lead Data & Analytics Consultant",
    period: "Nov 2025 - Feb 2026",
    location: "India · Remote",
    impact: [
      "Client: Advarra (Clinical Research Compliance & Technology Platform).",
      "Migrated clinical analytics off legacy Oracle SQL Server onto a cloud-native Databricks, Snowflake and dbt ecosystem, cutting weekly reporting overhead by roughly 40 hours.",
      "Designed and delivered 3 governed self-service analytics solutions on Sigma BI, translating clinical compliance and regulatory requirements into intuitive reporting.",
      "Directed Agile delivery for an 8-person cross-functional team, managing sprint planning and risk to deliver 4 enterprise reporting initiatives on time and in scope.",
    ],
  },
  {
    company: "Cognizant Technologies",
    role: "Product Owner & Senior BI Analytics Consultant",
    period: "Jan 2020 - Sept 2025",
    location: "Paris, France",
    impact: [
      "Progressed from BI Consultant to Senior Consultant & Product Owner (2022-2025) across 5+ enterprise clients.",
      "Air France: developed a commercial intelligence platform covering OTP, Revenue, Delay Root Cause and CSAT KPIs, reducing decision cycles from 10-15 days.",
      "Dior (LVMH): delivered a governed brand-intelligence platform enabling real-time counterfeit monitoring across 30+ global markets, informing IP enforcement and marketing strategy.",
      "AXA Insurance: delivered an integrated cybersecurity and budget-intelligence platform, replacing a 3-day manual consolidation process.",
      "Danone: built a unified UK and France retail analytics platform spanning pricing intelligence, market share, and retailer performance.",
      "Sanofi: governed commercial data quality and sales forecasting across 5+ regions, restoring real-time revenue visibility for 200+ global sales staff.",
      "Altares: modernised the BI platform, resolving a critical performance bottleneck to deliver sub-second query response for 50+ concurrent users.",
    ],
  },
  {
    company: "Liebherr Aerospace and Transportation",
    role: "Data Analyst Intern",
    period: "Jul 2019 - Jan 2020",
    location: "Toulouse, France",
    impact: [
      "Applied Value Stream Mapping to identify critical KPIs and define improvement roadmaps adopted by operations leadership.",
      "Produced data-driven AS-IS/TO-BE process models translating analysis into actionable recommendations.",
    ],
  },
  {
    company: "Capgemini",
    role: "Business Analyst / Scrum Coordinator",
    period: "Aug 2015 - Aug 2018",
    location: "Bangalore, India",
    impact: [
      "Client: Société Générale (Paris), security operations reporting across 3 global regions.",
      "Facilitated the shift from Waterfall to Agile for a 15-person delivery team, defining the initial product backlog.",
    ],
  },
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
  note?: string;
};

export const education: Education[] = [
  {
    degree: "MSc Big Data, Marketing & Management",
    institution: "Toulouse Business School, France",
    period: "2018 - 2020",
    note: "Graduated with Distinction",
  },
  {
    degree: "B-Tech, Electronics & Telecommunication",
    institution: "Lovely Professional University, India",
    period: "2010 - 2014",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  verifyUrl?: string;
};

export const certifications: Certification[] = [
  {
    name: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    issuer: "Microsoft",
    date: "Earned May 2023 · Valid through May 2026",
    credentialId: "F4AF1568F136CD0A",
    verifyUrl: "/credentials/power-bi-pl300.pdf",
  },
  {
    name: "Dataiku Core Designer",
    issuer: "Dataiku",
  },
  {
    name: "DELF B1, French Language Certification",
    issuer: "France Éducation international",
  },
];

export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  { title: "Business Intelligence", description: "End-to-end BI strategy, from data model to boardroom-ready reporting." },
  { title: "Dashboard Development", description: "Power BI and Tableau dashboards built for clarity, speed, and adoption." },
  { title: "Microsoft Fabric", description: "Migration and architecture on Microsoft's unified analytics platform." },
  { title: "Power BI", description: "Enterprise-grade semantic models, DAX, and governance at scale." },
  { title: "Data Strategy", description: "Roadmaps that align data architecture with business outcomes." },
  { title: "PLM Consulting", description: "Product lifecycle data strategy for manufacturing and engineering teams." },
  { title: "Azure Analytics", description: "Data Factory, Synapse, and Databricks pipelines built for scale." },
  { title: "AI Workflow Automation", description: "Agentic automation with Claude, n8n, and Zapier for operational leverage." },
  { title: "Enterprise Reporting", description: "Governed, self-service reporting ecosystems for large organizations." },
];

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  role: string;
  period: string;
  problem: string;
  approach: string[];
  architecture: string[];
  technology: string[];
  outcome: string[];
  dashboardFile: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "air-france",
    client: "Air France",
    industry: "Aviation",
    role: "Product Owner & Senior BI Analytics Consultant, at Cognizant Technologies",
    period: "2020 - 2025",
    problem:
      "Operations, revenue, and customer experience data lived in disconnected systems, so leadership decisions on delay root cause and commercial performance lagged 10 to 15 days behind the data.",
    approach: [
      "Consolidated flight operations, ticketing, and customer feedback sources into a single Kimball-style star schema.",
      "Defined KPI governance and business rules for OTP, revenue, delay root cause, and CSAT across regional and executive audiences.",
      "Built row-level security so executives, regional managers, and sales teams each see the slice of data relevant to their role.",
    ],
    architecture: [
      "Flight ops, SAP CRM, customer feedback, GDS ticketing, and telemetry sources",
      "SSIS ETL into a SQL Server star schema warehouse",
      "Power BI semantic model with DirectQuery for live ops and Import mode for historical trend",
    ],
    technology: ["Power BI", "SQL Server", "SSIS", "DAX", "Row-Level Security"],
    outcome: [
      "Reduced decision cycles from 10-15 days to same-day for commercial and operations leadership.",
      "Unified 4 previously siloed reporting systems into one governed platform.",
    ],
    dashboardFile: "/dashboards/air-france.html",
  },
  {
    slug: "axa-insurance",
    client: "AXA Insurance",
    industry: "Financial Services",
    role: "Product Owner & Senior BI Analytics Consultant, at Cognizant Technologies",
    period: "2020 - 2025",
    problem:
      "Cybersecurity incident data and budget governance were reconciled manually across teams, taking roughly 3 days per cycle and leaving the CISO's office without a real-time view of risk or spend.",
    approach: [
      "Integrated incident ticketing, Oracle SQL databases, and financial ERP data into a single Azure-based semantic layer.",
      "Modelled cost-per-incident, MTTR, and compliance scoring against regulatory frameworks (ISO 27001, GDPR, DORA, and others).",
      "Delivered role-based dashboards for the CISO, regional managers, department heads, and the audit team.",
    ],
    architecture: [
      "Oracle SQL, ticketing, GRC, and ERP sources",
      "Azure Data Factory pipelines into an Azure Data Lake and star-schema warehouse",
      "Power BI semantic model with DirectQuery for live threat data and Import mode for historical analytics",
    ],
    technology: ["Microsoft Azure", "Azure Data Factory", "Power BI", "Oracle SQL", "DAX", "Row-Level Security"],
    outcome: [
      "Replaced a 3-day manual consolidation process with governed, near real-time reporting.",
      "Gave the CISO's office a single view spanning threat intelligence, budget governance, and regulatory compliance.",
    ],
    dashboardFile: "/dashboards/axa-cybersecurity.html",
  },
  {
    slug: "danone-retail",
    client: "Danone",
    industry: "Luxury Retail",
    role: "Product Owner & Senior BI Analytics Consultant, at Cognizant Technologies",
    period: "2020 - 2025",
    problem:
      "Pricing and market-share decisions across the UK and France depended on manually reconciling 12+ retailer, syndicated market, and ERP data sources, a process that took roughly 3 weeks per pricing cycle.",
    approach: [
      "Built a medallion architecture on Databricks, unifying retailer POS, Nielsen market data, and ERP financials.",
      "Modelled price elasticity and market-share velocity as reusable DAX measures for the category management team.",
      "Delivered a self-service Power BI app so category managers could explore pricing and share data without waiting on ad hoc reports.",
    ],
    architecture: [
      "Retailer POS, syndicated market data, and ERP financial sources",
      "Azure Data Factory orchestration into Databricks (Spark) bronze, silver, and gold layers",
      "Power BI semantic model in hybrid Import and DirectQuery mode",
    ],
    technology: ["Databricks", "Apache Spark", "Azure Data Factory", "Power BI", "Python", "DAX"],
    outcome: [
      "Cut pricing decision time from about 3 weeks to 3 days.",
      "Unified 12+ previously manual data sources into one governed, self-service platform.",
    ],
    dashboardFile: "/dashboards/danone-retail.html",
  },
];
