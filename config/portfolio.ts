/**
 * CENTRALIZED PORTFOLIO CONFIGURATION — SHANMUGA PRIYA K
 * 
 * All editable URLs, contact information, and project links live here.
 * Unknown URLs remain empty strings ("") by default.
 * When a URL is empty, the UI displays a tasteful unavailable/soon state
 * and NEVER renders a dead '#' link.
 */

export const portfolioConfig = {
  personal: {
    name: "Shanmuga Priya K",
    shortName: "Priya",
    initials: "SPK",
    professionalTitle: "Aspiring Data Analyst",
    location: "Chennai, Tamil Nadu, India",
    phone: "+91 9345704318",
    email: "shanmugapriyakannan120@gmail.com",
    currentTraining: {
      institution: "IT Vedant, Chennai",
      program: "Data Analytics Training",
      status: "Currently pursuing",
      details: "Comprehensive hands-on training covering SQL querying, Advanced Excel modeling, business intelligence dashboards, and exploratory data analysis."
    },
    status: "Available for Data Analyst roles in Chennai & Remote",
    summary:
      "I'm Shanmuga Priya K, an aspiring Data Analyst with a background in Corporate Secretaryship, accounting, finance, and compliance. I use SQL and Microsoft Excel to organize, analyze, and interpret data, and I'm developing my skills in Power BI and Tableau. Through practical projects involving HR analytics, e-commerce analysis, financial reporting, and AI-powered data insights, I aim to transform raw data into meaningful business information. I'm currently pursuing Data Analytics training at IT Vedant, Chennai.",
  },

  /**
   * Verified URLs:
   * Keep empty string ("") until a verified URL is provided.
   */
  links: {
    github: "", // e.g. "https://github.com/shanmugapriya"
    linkedin: "", // e.g. "https://linkedin.com/in/shanmugapriya"
    resume: "", // e.g. "/resume-shanmuga-priya.pdf"
    
    // Project Repositories
    datasenseRepo: "", // e.g. "https://github.com/..."
    hrAnalyticsRepo: "",
    ecommerceSqlRepo: "",
    ashokLeylandRepo: "",

    // Live Demos
    datasenseLiveDemo: "",
    hrAnalyticsLiveDemo: "",
    ecommerceSqlLiveDemo: "",
    ashokLeylandLiveDemo: "",
  },

  internship: {
    organization: "Ashok Leyland Limited",
    role: "Corporate Secretarial Intern",
    department: "Corporate Secretarial Department",
    location: "Chennai, India",
    responsibilities: [
      "Analyzed annual reports to understand financial performance, corporate governance, and business operations.",
      "Reviewed Board of Directors information, corporate governance frameworks, and statutory disclosures.",
      "Used Microsoft Excel and Office tools for documentation, financial records, and data reconciliation.",
      "Gained practical exposure to Registrar of Companies (ROC) filing procedures and secretarial audit documentation.",
    ],
  },

  education: [
    {
      degree: "B.Com — Corporate Secretaryship",
      institution: "Ethiraj College for Women, University of Madras",
      period: "2023 – 2026",
      score: "60%",
      status: "Final Year Undergraduate",
      focus: "Corporate Law, Financial Accounting, Statutory Compliance, Company Secretarial Practice",
    },
    {
      degree: "Higher Secondary Certificate (HSSLC / 12th)",
      institution: "TST Rajah Girls Matriculation Higher Secondary School, Chennai",
      period: "2022 – 2023",
      score: "70%",
      status: "Completed",
      focus: "Commerce, Accountancy & Economics",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC / 10th)",
      institution: "TST Rajah Girls Matriculation Higher Secondary School, Chennai",
      period: "2020 – 2021",
      score: "All Pass",
      status: "Completed",
      focus: "General Secondary Curriculum",
    },
  ],

  certifications: [
    {
      title: "Microsoft Excel Certification",
      issuer: "Professional Certification",
      skills: ["Advanced Formulas", "Pivot Tables", "VLOOKUP / XLOOKUP", "Data Cleaning"],
    },
    {
      title: "SQL Certification",
      issuer: "Database & Querying Certification",
      skills: ["Relational Database Queries", "Multi-table JOINs", "Aggregations", "Data Modeling"],
    },
    {
      title: "Quantitative Aptitude, Effective Communication & Interpersonal Skills",
      issuer: "Kingspire India Pvt. Ltd.",
      skills: ["Analytical Thinking", "Professional Communication", "Problem Solving"],
    },
    {
      title: "Business Writing",
      issuer: "Ethiraj College for Women",
      skills: ["Corporate Communication", "Executive Reporting", "Documentation"],
    },
  ],

  activities: [
    {
      role: "Active Member",
      organization: "ENACTUS Club",
      period: "2025 – 2026",
      description: "Collaborated on social entrepreneurship and community outreach initiatives driving sustainable impact.",
    },
    {
      role: "Member",
      organization: "Red Ribbon Club",
      period: "Active",
      description: "Participated in public health advocacy, community awareness programs, and civic engagement.",
    },
    {
      role: "Member",
      organization: "Rotaract Club",
      period: "Active",
      description: "Engaged in leadership development, community service projects, and youth social responsibility programs.",
    },
  ],

  languages: [
    { name: "English", proficiency: "Professional Working Proficiency" },
    { name: "Tamil", proficiency: "Native / Bilingual Proficiency" },
  ],
} as const;
