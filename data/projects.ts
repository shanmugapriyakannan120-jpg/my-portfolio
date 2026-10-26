import { portfolioConfig } from "@/config/portfolio";

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  year: string;
  tagline: string;
  summary: string;
  challenge: string;
  approach: string[];
  stack: string[];
  palette: { name: string; hex: string }[];
  typography: string;
  theme: {
    bg: string;
    fg: string;
    accent: string;
    muted: string;
    dark: boolean;
  };
  cover: ProjectImage;
  frames: [ProjectImage, ProjectImage];
  repoUrl?: string;
  demoUrl?: string;
  workflow?: string;
  keyCapabilities?: string[];
  note?: string;
};

const img = (slug: string, name: "cover" | "frame-a" | "frame-b", alt: string): ProjectImage => ({
  src: `/projects/${slug}/${name}.jpg`,
  alt,
  width: name === "frame-a" ? 1200 : 1600,
  height: name === "frame-a" ? 1500 : 1000,
});

export const projects: Project[] = [
  {
    slug: "datasense-ai",
    index: "01",
    title: "DataSense AI",
    category: "AI-Powered Analytics / Hackathon Project",
    year: "AI Hackathon",
    tagline: "From Raw Data to Actionable Intelligence.",
    summary:
      "An AI hackathon project designed to transform raw, messy data into useful business insights, dynamic visualizations, and automated executive reports.",
    challenge:
      "Enterprise datasets frequently enter business pipelines with missing values, structural anomalies, and unstandardized formats. Analysts spend up to 70% of their time on mundane data preparation rather than high-level strategic reasoning. DataSense AI explores how an automated pipeline can perform data health checks, detect KPIs, and synthesize business recommendations with clear evidence.",
    approach: [
      "End-to-end data pipeline: Raw Ingestion → Quality Audit → Analysis → Visualization → Executive Reporting.",
      "Automated data hygiene: duplicate detection, missing-value imputation flags, and statistical outlier isolation.",
      "KPI identification: algorithmic candidate detection based on numerical variance and categorical distributions.",
      "Decision simulation: what-if business parameter modeling coupled with automated PDF executive summary generation.",
    ],
    stack: ["Python", "Machine Learning", "Prompt Engineering", "Data Health Pipeline", "Streamlit / Next.js"],
    palette: [
      { name: "Deep Charcoal", hex: "#0D1117" },
      { name: "Teal Matrix", hex: "#2EC4B6" },
      { name: "Electric Lime", hex: "#C6F432" },
      { name: "Slate Mist", hex: "#E2E8F0" },
    ],
    typography: "Inter Tight display paired with JetBrains Mono for telemetry metrics.",
    theme: { bg: "#0D1117", fg: "#F0F6FC", accent: "#2EC4B6", muted: "#8B949E", dark: true },
    cover: img("datasense-ai", "cover", "DataSense AI neural knowledge graph dashboard with real-time data streams and quality scoring matrix"),
    frames: [
      img("datasense-ai", "frame-a", "DataSense AI stream data quality monitoring card showing anomaly distribution histogram and correlation matrix"),
      img("datasense-ai", "frame-b", "DataSense AI executive summary dashboard with predictive growth models and automated business recommendations"),
    ],
    repoUrl: portfolioConfig.links.datasenseRepo,
    demoUrl: portfolioConfig.links.datasenseLiveDemo,
    workflow: "Raw Data → Data Quality Assessment → Analysis → Visualization → Insights → Recommendations & Reports",
    keyCapabilities: [
      "Data upload & exploratory data analysis",
      "Missing-value and duplicate checks",
      "Automatic KPI candidate detection",
      "Data health score & anomaly alerts",
      "Recommended charts & visualizations",
      "Evidence-backed generated summaries",
      "What-if business scenario simulation",
    ],
    note: "AI hackathon project designed to turn raw data into strategic intelligence.",
  },
  {
    slug: "hr-analytics",
    index: "02",
    title: "HR Analytics",
    category: "Excel Analytics / Human Resources",
    year: "Practical Analytics",
    tagline: "Understanding workforce trends through structured Excel analysis.",
    summary:
      "An Excel-based HR analytics project focused on exploring workforce data and presenting HR-related patterns through structured analysis and visual reporting.",
    challenge:
      "Workforce planning requires synthesizing multi-department records spanning headcount, tenure, salary brackets, and voluntary turnover. Without structured data cleaning and multidimensional pivot tables, critical workforce patterns—such as early-tenure attrition or department-specific turnover spikes—remain obscured.",
    approach: [
      "Data hygiene in Excel: removing duplicates, normalizing job classifications, and standardizing tenure brackets.",
      "Formulas & lookups: deploying XLOOKUP, INDEX/MATCH, and nested COUNTIFS for departmental aggregation.",
      "Pivot modeling: dynamic Pivot Tables with slicers for multi-variable filtering across salary bands and departments.",
      "Executive reporting: designing high-contrast dashboard cards showing turnover rate, headcount growth, and retention curves.",
    ],
    stack: ["Microsoft Excel", "XLOOKUP / INDEX-MATCH", "Pivot Tables & Pivot Charts", "Data Cleaning", "Executive Reporting"],
    palette: [
      { name: "Warm Ivory", hex: "#F5F2EB" },
      { name: "Corporate Navy", hex: "#1B2A4A" },
      { name: "Teal Accent", hex: "#0E7490" },
      { name: "Graphite", hex: "#334155" },
    ],
    typography: "Structured tabular typography paired with high-contrast corporate headers.",
    theme: { bg: "#F5F2EB", fg: "#1A202C", accent: "#0E7490", muted: "#64748B", dark: false },
    cover: img("hr-analytics", "cover", "HR Analytics executive Excel dashboard showing headcount, attrition breakdown, tenure curves, and gender diversity"),
    frames: [
      img("hr-analytics", "frame-a", "Excel spreadsheet pivot table analysis card displaying salary band distributions and department retention rates"),
      img("hr-analytics", "frame-b", "Corporate HR quarterly report layout showing recruitment channels, promotion velocity, and headcount forecasting"),
    ],
    repoUrl: portfolioConfig.links.hrAnalyticsRepo,
    demoUrl: portfolioConfig.links.hrAnalyticsLiveDemo,
    workflow: "HR Dataset → Data Cleaning → Excel Formulas → Pivot Tables → Charts → HR Insights",
    keyCapabilities: [
      "Employee headcount & growth overview",
      "Department-wise employee distribution",
      "Gender & age-group demographic mix",
      "Turnover and attrition trend analysis",
      "Salary band distribution across roles",
      "Tenure curve & retention forecasting",
    ],
    note: "Analytical views and dashboard metrics are structured business demonstrations developed in Microsoft Excel.",
  },
  {
    slug: "brazilian-ecommerce",
    index: "03",
    title: "Brazilian E-commerce",
    category: "SQL / Relational Data Analytics",
    year: "SQL Analytics",
    tagline: "Discovering commercial patterns across 100,000+ orders with SQL.",
    summary:
      "A SQL-based data analytics project exploring Brazilian e-commerce data to understand orders, customers, products, payments, and sales patterns.",
    challenge:
      "The Brazilian e-commerce ecosystem encompasses over 100,000 orders distributed across multiple relational tables: orders, customers, payments, products, reviews, and geolocation. Uncovering delivery bottlenecks between states, customer payment preferences, and high-frequency purchasing patterns requires precise SQL joins, subqueries, and aggregations.",
    approach: [
      "Relational schema modeling: joining orders, order_items, payments, and customer tables via primary and foreign keys.",
      "Revenue & order volume queries: computing monthly gross merchandise value (GMV) and category performance.",
      "Logistics & fulfillment analysis: calculating delivery lead times against estimated arrival dates and cross-referencing with customer review scores.",
      "Customer behavior segmentation: analyzing payment method preference (Boleto, Credit Card, Voucher) across Brazilian states.",
    ],
    stack: ["SQL", "Relational Database Design", "Multi-Table JOINs", "GROUP BY & Aggregations", "Data Summarization"],
    palette: [
      { name: "Void Black", hex: "#080B0E" },
      { name: "SQL Cyan", hex: "#00F5D4" },
      { name: "Amber Highlight", hex: "#FBBF24" },
      { name: "Steel Mute", hex: "#64748B" },
    ],
    typography: "Monospaced query syntax combined with geometric sans-serif displays.",
    theme: { bg: "#080B0E", fg: "#F1F5F9", accent: "#00F5D4", muted: "#64748B", dark: true },
    cover: img("brazilian-ecommerce", "cover", "SQL analytics dashboard with glowing relational schema, query console, Brazil order density map, and fulfillment trends"),
    frames: [
      img("brazilian-ecommerce", "frame-a", "Entity relationship diagram (ERD) with syntax-highlighted SQL query console and tabular query output preview"),
      img("brazilian-ecommerce", "frame-b", "Fulfillment analytics overview correlating delivery lead times with customer review ratings and regional volume heatmaps"),
    ],
    repoUrl: portfolioConfig.links.ecommerceSqlRepo,
    demoUrl: portfolioConfig.links.ecommerceSqlLiveDemo,
    workflow: "Relational Dataset → SQL Queries → Joins & Aggregations → Analysis → Business Insights",
    keyCapabilities: [
      "Order status & fulfillment velocity",
      "Gross merchandise value & revenue by category",
      "Customer geographic distribution across states (SP, RJ, MG)",
      "Payment method share (Boleto vs Credit Card vs Debit)",
      "Delivery delay correlation with customer review ratings",
      "Seller concentration & repeat purchasing frequency",
    ],
    note: "Comprehensive SQL queries and analysis developed to extract commercial intelligence from multi-table relational datasets.",
  },
  {
    slug: "ashok-leyland-finance",
    index: "04",
    title: "Financial Performance Analysis",
    category: "Financial Analysis / Academic Project",
    year: "Academic Project",
    tagline: "Deconstructing corporate financial statements and solvency ratios.",
    summary:
      "Analyzed company financial statements of commercial vehicle manufacturer Ashok Leyland Limited to understand financial performance and business operations.",
    challenge:
      "Evaluating a major commercial vehicle manufacturer requires looking past top-line revenue to examine working capital health, operating leverage, debt coverage, and asset utilization. Interpreting the Balance Sheet and Statement of Profit and Loss demands meticulous calculation of financial ratios and corporate secretarial contextualization.",
    approach: [
      "Financial statement deconstruction: analyzing annual report Balance Sheets and Statements of Profit and Loss.",
      "Excel ratio calculation: computing Liquidity (Current & Quick), Solvency (Debt-to-Equity), Profitability (Operating Margin, ROCE), and Efficiency ratios.",
      "SQL data structuring: organizing multi-year financial figures into queryable relational records for trend analysis.",
      "Synthesis & conclusion: drawing evidence-based inferences on capital expenditure, operating margins, and corporate financial stability.",
    ],
    stack: ["Financial Statement Analysis", "Microsoft Excel", "SQL Queries", "Ratio Modeling", "Annual Report Disclosures"],
    palette: [
      { name: "Executive Charcoal", hex: "#141517" },
      { name: "Corporate Gold", hex: "#D4AF37" },
      { name: "Ivory Ledger", hex: "#F7F4EE" },
      { name: "Steel Mute", hex: "#8C8C8C" },
    ],
    typography: "Instrument Serif headlines paired with precise tabular figures for financial statements.",
    theme: { bg: "#141517", fg: "#F3EFE7", accent: "#D4AF37", muted: "#8C8C8C", dark: true },
    cover: img("ashok-leyland-finance", "cover", "Ashok Leyland Limited annual performance dashboard showing financial ratios, trend analysis, balance sheet, and P&L"),
    frames: [
      img("ashok-leyland-finance", "frame-a", "Financial ratios and balance sheet breakdown analysis document with corporate secretarial compliance notes"),
      img("ashok-leyland-finance", "frame-b", "Corporate annual report overview showing corporate governance framework, secretarial audit compliance, and financial health trends"),
    ],
    repoUrl: portfolioConfig.links.ashokLeylandRepo,
    demoUrl: portfolioConfig.links.ashokLeylandLiveDemo,
    workflow: "Financial Statements → Excel Ratio Calculations → SQL Query Organization → Performance Evaluation → Conclusions",
    keyCapabilities: [
      "Balance Sheet asset & liability decomposition",
      "Statement of Profit and Loss revenue & margin analysis",
      "Liquidity ratios (Current Ratio, Quick Ratio)",
      "Solvency ratios (Debt-to-Equity, Interest Coverage)",
      "Profitability ratios (Operating Profit Margin, ROCE)",
      "Operational efficiency & working capital evaluation",
      "Corporate governance & statutory disclosure review",
    ],
    note: "Academic financial analysis conducted on published corporate annual reports and statutory disclosures of Ashok Leyland Limited.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
