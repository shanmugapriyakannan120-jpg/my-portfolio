import { portfolioConfig } from "@/config/portfolio";

export type SocialLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Shanmuga Priya K",
  shortName: portfolioConfig.personal.shortName,
  initials: portfolioConfig.personal.initials,
  fullName: portfolioConfig.personal.name,
  professionalTitle: portfolioConfig.personal.professionalTitle,
  location: portfolioConfig.personal.location,
  phone: portfolioConfig.personal.phone,
  email: portfolioConfig.personal.email,
  roles: [
    "Aspiring Data Analyst",
    "SQL & Excel Specialist",
    "Corporate Secretaryship",
    "Business Intelligence",
  ],
  headline: ["Turning Raw Data", "Into Meaningful", "Decisions."],
  intro:
    "An aspiring Data Analyst exploring the stories behind data through Excel, SQL, financial analysis, and AI-powered insights.",
  status: portfolioConfig.personal.status,
  currentTraining: portfolioConfig.personal.currentTraining,

  socials: [
    { label: "GitHub", href: portfolioConfig.links.github },
    { label: "LinkedIn", href: portfolioConfig.links.linkedin },
    { label: "Resume", href: portfolioConfig.links.resume },
  ] as SocialLink[],

  about: {
    heading: "Beyond the Numbers",
    statement:
      "My academic background in Corporate Secretaryship has given me an appreciation for financial information, business operations, documentation, and compliance. I'm now applying that foundation to data analytics through hands-on work with Excel, SQL, and business reporting. My projects help me explore how structured data can reveal patterns, answer business questions, and support informed decisions.",
    intro: portfolioConfig.personal.summary,
    principles: [
      {
        title: "Financial & Business Understanding",
        body: "Grounding analytical queries in corporate compliance, statutory disclosure standards, and commercial business operations.",
      },
      {
        title: "Data Exploration & Analysis",
        body: "Uncovering relational patterns through structured SQL multi-table JOINs, rigorous data cleaning, and dynamic Excel pivot models.",
      },
      {
        title: "Turning Insights Into Action",
        body: "Translating statistical distributions, workforce metrics, and solvency ratios into clear, executive-ready dashboards for decision makers.",
      },
    ],
    journey: [
      {
        label: "Corporate Foundation",
        body: "Pursuing B.Com in Corporate Secretaryship at Ethiraj College for Women, mastering corporate law, accounting, and compliance.",
        year: "2023–26",
      },
      {
        label: "Corporate Exposure",
        body: "Corporate Secretarial Internship at Ashok Leyland Limited analyzing annual reports, corporate governance, and statutory filings.",
        year: "2024",
      },
      {
        label: "Data Analytics",
        body: "Currently pursuing comprehensive Data Analytics training at IT Vedant, Chennai, mastering SQL, Excel modeling, and business intelligence.",
        year: "Current",
      },
      {
        label: "Applied Intelligence",
        body: "Developing practical analytics projects: DataSense AI hackathon system, HR Analytics in Excel, and Brazilian E-commerce with SQL.",
        year: "2024",
      },
    ],
  },
} as const;

export const navItems = [
  { id: "home", label: "Home" },
  { id: "work", label: "Projects" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export type NavId = (typeof navItems)[number]["id"];
