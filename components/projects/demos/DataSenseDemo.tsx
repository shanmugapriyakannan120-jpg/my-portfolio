"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Sparkle } from "@/components/ui/Icons";

const EASE = [0.16, 1, 0.3, 1] as const;

const MODES = [
  {
    id: "quality",
    label: "01 · Data Quality & Hygiene",
    headline: "Automated Data Health Assessment",
    sub: "Detecting missing values, inconsistent formats, and statistical outliers before downstream modeling.",
    metrics: [
      { label: "Data Quality Score", value: "98.4%", note: "+4.2% post-hygiene" },
      { label: "Missing Values Flagged", value: "1,248 rows", note: "Imputation candidate flagged" },
      { label: "Duplicate Records", value: "0 Detected", note: "100% unique primary keys" },
    ],
    streamLogs: [
      { tag: "AUDIT", text: "Null rate in customer_zip_code < 0.08% (within tolerance threshold)", status: "optimal" },
      { tag: "ALERT", text: "Detected 14 anomalous spikes in transaction_amount (> 3.8 IQR)", status: "warning" },
      { tag: "RESOLVE", text: "Auto-cast order_timestamp from VARCHAR to TIMESTAMP(UTC)", status: "optimal" },
    ],
  },
  {
    id: "kpis",
    label: "02 · Auto KPI Detection",
    headline: "Algorithmic KPI & Metric Identification",
    sub: "Scanning numerical variance and categorical distributions to recommend strategic business indicators.",
    metrics: [
      { label: "Recommended KPIs", value: "6 Core Metrics", note: "High statistical significance" },
      { label: "Target Anomaly Rate", value: "0.41%", note: "Normal distribution verified" },
      { label: "Correlation Confidence", value: "94.6%", note: "Pearson r = 0.82" },
    ],
    streamLogs: [
      { tag: "KPI", text: "Candidate identified: Gross Margin % grouped by product_category", status: "optimal" },
      { tag: "KPI", text: "Candidate identified: Order Fulfillment Velocity (Days to Dispatch)", status: "optimal" },
      { tag: "INSIGHT", text: "Customer repeat purchase frequency peaks at Day 42 across cohorts", status: "optimal" },
    ],
  },
  {
    id: "simulation",
    label: "03 · What-If Simulation & Report",
    headline: "Decision Simulation & Executive Summary",
    sub: "Testing business parameter scenarios to evaluate projected revenue impact and operational risk.",
    metrics: [
      { label: "Simulated Revenue Gain", value: "+18.2%", note: "Optimistic scenario" },
      { label: "Risk Factor", value: "Minimal", note: "Standard deviation 1.2%" },
      { label: "Executive Report", value: "Ready (PDF)", note: "Synthesized in 2.4s" },
    ],
    streamLogs: [
      { tag: "SIMULATE", text: "Scenario A: 5% reduction in dispatch lead time yields +12% repeat rate", status: "optimal" },
      { tag: "REPORT", text: "Generated 3-page C-suite summary with visual evidence charts", status: "optimal" },
      { tag: "EXPORT", text: "PDF export packaged with compliance audit trails & metadata", status: "optimal" },
    ],
  },
];

export function DataSenseDemo() {
  const [active, setActive] = useState(MODES[0].id);
  const current = MODES.find((m) => m.id === active)!;

  return (
    <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#0F141C] p-5 text-[#F0F6FC] md:p-8">
      {/* Background glow */}
      <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-[#2EC4B6]/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-10 size-80 rounded-full bg-[#C6F432]/15 blur-3xl" />

      {/* Tabs */}
      <div className="relative flex flex-wrap gap-2 border-b border-white/10 pb-5" role="tablist" aria-label="DataSense AI pipeline modules">
        {MODES.map((m) => {
          const selected = m.id === active;
          return (
            <button
              key={m.id}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(m.id)}
              className="relative rounded-full px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition-colors"
            >
              {selected && (
                <motion.span
                  layoutId="datasense-tab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2EC4B6] to-[#C6F432]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className={`relative ${selected ? "font-semibold text-[#091017]" : "text-white/70 hover:text-white"}`}>
                {m.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Panel content */}
      <div className="relative mt-6 grid gap-6 lg:grid-cols-12" role="tabpanel">
        {/* Left column: Overview & logs */}
        <div className="space-y-6 lg:col-span-7">
          <motion.div layout className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.16em] text-[#2EC4B6] font-mono">
                Pipeline Stage // {current.id.toUpperCase()}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2EC4B6]/30 bg-[#2EC4B6]/10 px-2.5 py-0.5 text-[0.65rem] font-mono text-[#2EC4B6]">
                <span className="size-1.5 animate-pulse rounded-full bg-[#2EC4B6]" /> LIVE STREAM
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="mt-3"
              >
                <h3 className="display text-2xl font-semibold text-white">{current.headline}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{current.sub}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 border-t border-white/10 pt-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#C6F432]">
                <Sparkle size={14} /> Automated Ingestion Log
              </div>
              <AnimatePresence mode="wait">
                <motion.ul key={current.id} className="mt-4 space-y-2.5 font-mono text-xs">
                  {current.streamLogs.map((log, i) => (
                    <motion.li
                      key={log.text}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE, delay: 0.1 + i * 0.08 }}
                      className="flex items-start gap-3 rounded-lg border border-white/5 bg-black/30 px-3.5 py-2.5"
                    >
                      <span
                        className={`rounded px-1.5 py-0.5 text-[0.65rem] font-bold ${
                          log.status === "warning" ? "bg-amber-500/20 text-amber-300" : "bg-[#2EC4B6]/20 text-[#2EC4B6]"
                        }`}
                      >
                        {log.tag}
                      </span>
                      <span className="leading-relaxed text-white/80">{log.text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Right column: Metric telemetry tiles */}
        <div className="space-y-4 lg:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="space-y-3"
            >
              {current.metrics.map((m, i) => (
                <div key={m.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center justify-between text-xs text-white/50 font-mono">
                    <span>0{i + 1} / METRIC</span>
                    <span className="text-[#C6F432]">{m.note}</span>
                  </div>
                  <p className="mt-2 text-2xl font-bold tracking-tight text-white">{m.value}</p>
                  <p className="mt-1 text-xs text-white/70">{m.label}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="rounded-xl border border-white/5 bg-black/40 p-4 text-[0.725rem] text-white/45">
            <p>
              * Prototyped for DataSense AI hackathon exploration. Clearly labelled illustrative pipeline demonstration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
