"use client";

import { useState } from "react";
import { motion } from "motion/react";

type RatioDetail = {
  name: string;
  category: "Liquidity" | "Solvency" | "Profitability" | "Efficiency";
  formula: string;
  fy24Val: string;
  fy23Val: string;
  trend: "up" | "down" | "stable";
  components: string;
  insight: string;
};

const RATIOS: RatioDetail[] = [
  {
    name: "Current Ratio",
    category: "Liquidity",
    formula: "Current Assets / Current Liabilities",
    fy24Val: "1.35x",
    fy23Val: "1.28x",
    trend: "up",
    components: "₹ 23,500 Cr (Current Assets) / ₹ 17,400 Cr (Current Liabilities)",
    insight: "Healthy liquidity buffer (> 1.2x) ensuring smooth short-term working capital for commercial vehicle manufacturing operations.",
  },
  {
    name: "Debt-to-Equity Ratio",
    category: "Solvency",
    formula: "Total Debt / Shareholders' Equity",
    fy24Val: "0.68x",
    fy23Val: "0.78x",
    trend: "down",
    components: "₹ 5,100 Cr (Total Borrowings) / ₹ 7,500 Cr (Net Worth)",
    insight: "Prudent leverage reduction down to 0.68x, reflecting lower debt reliance and sound capital structure management.",
  },
  {
    name: "Operating Profit Margin (EBITDA %)",
    category: "Profitability",
    formula: "EBITDA / Total Revenue × 100",
    fy24Val: "11.2%",
    fy23Val: "10.1%",
    trend: "up",
    components: "₹ 4,120 Cr (EBITDA) / ₹ 36,450 Cr (Revenue)",
    insight: "Margin expansion driven by softening raw material steel input costs and higher realization per commercial vehicle unit.",
  },
  {
    name: "Return on Capital Employed (ROCE)",
    category: "Profitability",
    formula: "EBIT / Capital Employed × 100",
    fy24Val: "19.1%",
    fy23Val: "16.8%",
    trend: "up",
    components: "₹ 3,250 Cr (EBIT) / ₹ 17,000 Cr (Capital Employed)",
    insight: "Strong capital efficiency reflecting robust fleet replacement demand and improved assembly line throughput.",
  },
  {
    name: "Interest Coverage Ratio",
    category: "Solvency",
    formula: "EBIT / Finance Costs",
    fy24Val: "6.2x",
    fy23Val: "4.8x",
    trend: "up",
    components: "₹ 3,250 Cr (EBIT) / ₹ 524 Cr (Interest Expenses)",
    insight: "Substantial earnings cushion to service debt obligations comfortably, supporting creditworthiness.",
  },
];

export function AshokLeylandDemo() {
  const [selectedRatio, setSelectedRatio] = useState<string>("Current Ratio");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Liquidity", "Solvency", "Profitability"];
  const filtered = selectedCategory === "All" ? RATIOS : RATIOS.filter((r) => r.category === selectedCategory);
  const current = RATIOS.find((r) => r.name === selectedRatio) || RATIOS[0];

  return (
    <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#121316] p-5 text-[#F3EFE7] md:p-8">
      {/* Background glow */}
      <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-[#D4AF37]/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-10 size-80 rounded-full bg-[#DC2626]/10 blur-3xl" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-[#D4AF37]">
            FINANCIAL STATEMENT ANALYSIS // ASHOK LEYLAND LIMITED
          </span>
          <h3 className="display text-xl font-semibold text-white mt-1">
            Annual Report Financial Ratio Decomposition (FY 2023–24)
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-mono text-white/80">
            Sector: Commercial Vehicles
          </span>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="mt-5 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
              selectedCategory === cat
                ? "bg-[#D4AF37] text-[#121316] font-semibold"
                : "border border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Ratio Selector Cards */}
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {filtered.map((r) => {
          const isSelected = r.name === selectedRatio;
          return (
            <button
              key={r.name}
              type="button"
              onClick={() => setSelectedRatio(r.name)}
              className={`rounded-xl border p-3.5 text-left transition ${
                isSelected
                  ? "border-[#D4AF37] bg-white/10 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]"
              }`}
            >
              <span className="text-[0.65rem] font-mono uppercase tracking-wider text-white/50 block">
                {r.category}
              </span>
              <p className="mt-1 text-sm font-semibold text-white truncate">{r.name}</p>
              <div className="mt-2 flex items-baseline justify-between">
                <span className="text-lg font-bold text-[#D4AF37]">{r.fy24Val}</span>
                <span className="text-[0.65rem] text-emerald-400">
                  {r.trend === "up" ? "▲ YoY" : "▼ YoY"}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep Dive Panel */}
      <motion.div
        key={current.name}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur"
      >
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left: Accounting Formula and Breakdown */}
          <div className="space-y-4 lg:col-span-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                FORMULA &amp; BALANCE SHEET SOURCE
              </span>
              <span className="text-xs font-mono text-white/50">FY 2023–24 Audited Figures</span>
            </div>

            <div>
              <p className="text-xs text-white/50 font-mono">Accounting Equation:</p>
              <p className="text-base font-semibold text-white font-mono mt-0.5">{current.formula}</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs text-white/50 font-mono">Calculated from Annual Report Disclosures:</p>
              <p className="mt-1 text-sm font-mono text-[#D4AF37] font-semibold">{current.components}</p>
              <div className="mt-3 flex items-center gap-6 text-xs text-white/70 font-mono">
                <span>FY24: <strong className="text-white">{current.fy24Val}</strong></span>
                <span>FY23: <strong className="text-white">{current.fy23Val}</strong></span>
              </div>
            </div>
          </div>

          {/* Right: Corporate Secretarial & Business Takeaway */}
          <div className="rounded-xl border border-white/10 bg-[#D4AF37]/5 p-5 lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
                <span>⚖</span> Corporate Financial &amp; Secretarial Insight
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                {current.insight}
              </p>
            </div>

            <div className="mt-6 border-t border-white/10 pt-3 text-[0.7rem] text-white/50 font-mono">
              Source: Standalone Statement of Profit and Loss &amp; Balance Sheet disclosures of Ashok Leyland Limited.
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-4 text-right">
        <span className="text-[0.7rem] text-white/40 font-mono">
          * Academic financial analysis evaluating published corporate annual report figures and statutory filings.
        </span>
      </div>
    </div>
  );
}
