export type SkillGroup = {
  id: string;
  title: string;
  /** How this group shows up in the work — framed as methodology, not arbitrary percentage claims. */
  note: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "data-tools",
    title: "Data Analysis Tools",
    note: "Core analytical platforms used to query databases, build interactive dashboards, and synthesize business metrics.",
    items: ["SQL", "Microsoft Excel", "Power BI", "Tableau"],
  },
  {
    id: "excel",
    title: "Excel Skills",
    note: "Advanced spreadsheet modeling, multidimensional pivot tables, conditional formulas, and executive HR reports.",
    items: [
      "Formulas (XLOOKUP, INDEX/MATCH)",
      "Pivot Tables",
      "Dynamic Charts",
      "Data Cleaning",
      "HR Analytics",
      "Reporting Dashboards",
    ],
  },
  {
    id: "sql",
    title: "SQL & Data Analysis",
    note: "Relational querying, multi-table operations, and grouped aggregations across large-scale commercial datasets.",
    items: [
      "SELECT Queries",
      "Filtering & Sorting",
      "JOIN Operations (INNER, LEFT)",
      "Aggregations (SUM, AVG, COUNT)",
      "GROUP BY & HAVING",
      "Data Summarization",
      "E-commerce Analysis",
    ],
  },
  {
    id: "core",
    title: "Core Analytical Skills",
    note: "Foundational data hygiene, financial statement ratio interpretation, and transforming numbers into decision-ready insights.",
    items: [
      "Data Cleaning",
      "Data Visualization",
      "Financial Ratio Analysis",
      "Report Preparation",
      "Business Insights",
    ],
  },
  {
    id: "productivity",
    title: "Productivity Tools",
    note: "Structured business documentation, corporate correspondence, and presentation decks for executive stakeholders.",
    items: ["Microsoft Word", "Microsoft PowerPoint"],
  },
  {
    id: "professional",
    title: "Professional Skills",
    note: "Workplace rigor rooted in corporate governance, statutory secretarial standards, and continuous adaptation.",
    items: [
      "Organizational Skills",
      "Adaptability",
      "Documentation",
      "Record Keeping",
      "Statutory Compliance",
    ],
  },
];
