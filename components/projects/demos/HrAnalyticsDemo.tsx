"use client";

import { useState } from "react";
import { motion } from "motion/react";

type DeptData = {
  name: string;
  headcount: number;
  attritionRate: number;
  avgTenure: number;
  retentionRate: number;
  salaryAvg: string;
  genderRatio: { f: number; m: number };
  bands: { band: string; count: number; pct: number }[];
};

const DEPARTMENTS: Record<string, DeptData> = {
  All: {
    name: "Enterprise Total (All Departments)",
    headcount: 1452,
    attritionRate: 7.4,
    avgTenure: 3.8,
    retentionRate: 92.6,
    salaryAvg: "₹ 6.4 LPA",
    genderRatio: { f: 46, m: 54 },
    bands: [
      { band: "Entry (₹ 3-5 LPA)", count: 420, pct: 29 },
      { band: "Junior (₹ 5-8 LPA)", count: 510, pct: 35 },
      { band: "Mid-Level (₹ 8-14 LPA)", count: 340, pct: 23 },
      { band: "Senior (₹ 14-22 LPA)", count: 142, pct: 10 },
      { band: "Executive (₹ 22+ LPA)", count: 40, pct: 3 },
    ],
  },
  "R&D": {
    name: "Research & Development / Product",
    headcount: 380,
    attritionRate: 5.2,
    avgTenure: 4.4,
    retentionRate: 94.8,
    salaryAvg: "₹ 8.8 LPA",
    genderRatio: { f: 42, m: 58 },
    bands: [
      { band: "Entry (₹ 3-5 LPA)", count: 60, pct: 16 },
      { band: "Junior (₹ 5-8 LPA)", count: 120, pct: 32 },
      { band: "Mid-Level (₹ 8-14 LPA)", count: 130, pct: 34 },
      { band: "Senior (₹ 14-22 LPA)", count: 55, pct: 14 },
      { band: "Executive (₹ 22+ LPA)", count: 15, pct: 4 },
    ],
  },
  Sales: {
    name: "Sales & Client Partnerships",
    headcount: 420,
    attritionRate: 10.4,
    avgTenure: 2.9,
    retentionRate: 89.6,
    salaryAvg: "₹ 6.1 LPA",
    genderRatio: { f: 48, m: 52 },
    bands: [
      { band: "Entry (₹ 3-5 LPA)", count: 160, pct: 38 },
      { band: "Junior (₹ 5-8 LPA)", count: 150, pct: 36 },
      { band: "Mid-Level (₹ 8-14 LPA)", count: 75, pct: 18 },
      { band: "Senior (₹ 14-22 LPA)", count: 28, pct: 7 },
      { band: "Executive (₹ 22+ LPA)", count: 7, pct: 1 },
    ],
  },
  Operations: {
    name: "Operations & Supply Chain",
    headcount: 340,
    attritionRate: 8.5,
    avgTenure: 4.1,
    retentionRate: 91.5,
    salaryAvg: "₹ 5.6 LPA",
    genderRatio: { f: 44, m: 56 },
    bands: [
      { band: "Entry (₹ 3-5 LPA)", count: 110, pct: 32 },
      { band: "Junior (₹ 5-8 LPA)", count: 130, pct: 38 },
      { band: "Mid-Level (₹ 8-14 LPA)", count: 70, pct: 21 },
      { band: "Senior (₹ 14-22 LPA)", count: 22, pct: 6 },
      { band: "Executive (₹ 22+ LPA)", count: 8, pct: 3 },
    ],
  },
  Finance: {
    name: "Finance, Legal & Corporate Secretarial",
    headcount: 140,
    attritionRate: 4.0,
    avgTenure: 5.2,
    retentionRate: 96.0,
    salaryAvg: "₹ 7.8 LPA",
    genderRatio: { f: 52, m: 48 },
    bands: [
      { band: "Entry (₹ 3-5 LPA)", count: 30, pct: 21 },
      { band: "Junior (₹ 5-8 LPA)", count: 45, pct: 32 },
      { band: "Mid-Level (₹ 8-14 LPA)", count: 42, pct: 30 },
      { band: "Senior (₹ 14-22 LPA)", count: 18, pct: 13 },
      { band: "Executive (₹ 22+ LPA)", count: 5, pct: 4 },
    ],
  },
};

export function HrAnalyticsDemo() {
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [showFormula, setShowFormula] = useState(false);
  const data = DEPARTMENTS[selectedDept] || DEPARTMENTS.All;

  return (
    <div className="relative overflow-hidden rounded-[20px] border border-ink/15 bg-[#F9F7F2] p-5 text-ink md:p-8">
      {/* Header bar mimicking Excel title and sheet styling */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded bg-[#107C41] text-xs font-bold text-white font-mono">
            XLS
          </span>
          <div>
            <h3 className="text-base font-semibold tracking-tight text-ink">
              HR_Workforce_Attrition_Model.xlsx [Dashboard]
            </h3>
            <p className="text-xs text-mute font-mono">Formula: =PIVOT.SUMMARY(HR_Dataset, Department)</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowFormula((v) => !v)}
          className="rounded-full border border-ink/20 bg-white px-3.5 py-1.5 text-xs font-medium text-graphite transition hover:border-ink hover:text-ink"
        >
          {showFormula ? "Hide Formula Bar" : "View Excel Formulas"}
        </button>
      </div>

      {/* Formula Bar inspection */}
      {showFormula && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-3 rounded-lg border border-emerald-700/20 bg-emerald-50/70 p-3 font-mono text-xs text-emerald-950"
        >
          <p className="font-semibold text-emerald-800">Excel Formula Engine:</p>
          <p className="mt-1">
            <span className="font-bold text-emerald-900">Attrition %:</span> =COUNTIFS(Emp_Data[Dept], &quot;{selectedDept}&quot;, Emp_Data[Status], &quot;Terminated&quot;) / COUNTIF(Emp_Data[Dept], &quot;{selectedDept}&quot;)
          </p>
          <p className="mt-1">
            <span className="font-bold text-emerald-900">Salary Lookup:</span> =XLOOKUP(@EmpID, Salary_Master[EmpID], Salary_Master[CTC_Bracket], &quot;Unassigned&quot;)
          </p>
        </motion.div>
      )}

      {/* Interactive Slicer / Department Filter */}
      <div className="mt-6">
        <label className="eyebrow block text-mute">Interactive Slicer — Filter by Department</label>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {Object.keys(DEPARTMENTS).map((dept) => {
            const active = dept === selectedDept;
            return (
              <button
                key={dept}
                type="button"
                onClick={() => setSelectedDept(dept)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                  active
                    ? "bg-[#1B2A4A] text-white shadow-sm"
                    : "border border-ink/15 bg-white text-graphite hover:border-ink/40"
                }`}
              >
                {dept}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic KPI Tiles */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl border border-ink/10 bg-white p-4 shadow-sm">
          <span className="eyebrow text-mute">Active Headcount</span>
          <p className="mt-1.5 text-2xl font-bold tracking-tight text-ink">{data.headcount.toLocaleString()}</p>
          <span className="text-[0.7rem] text-emerald-600 font-medium">+2.1% YoY</span>
        </div>

        <div className="rounded-xl border border-ink/10 bg-white p-4 shadow-sm">
          <span className="eyebrow text-mute">Turnover Rate</span>
          <p className="mt-1.5 text-2xl font-bold tracking-tight text-ink">{data.attritionRate}%</p>
          <span className="text-[0.7rem] text-muted-foreground">Calculated across 12M</span>
        </div>

        <div className="rounded-xl border border-ink/10 bg-white p-4 shadow-sm">
          <span className="eyebrow text-mute">Average Tenure</span>
          <p className="mt-1.5 text-2xl font-bold tracking-tight text-ink">{data.avgTenure} Yrs</p>
          <span className="text-[0.7rem] text-muted-foreground">Median: 3.2 Yrs</span>
        </div>

        <div className="rounded-xl border border-ink/10 bg-white p-4 shadow-sm">
          <span className="eyebrow text-mute">Retention Rate</span>
          <p className="mt-1.5 text-2xl font-bold tracking-tight text-[#0E7490]">{data.retentionRate}%</p>
          <span className="text-[0.7rem] text-emerald-600 font-medium">Optimal Health</span>
        </div>
      </div>

      {/* Detail Grid */}
      <div className="mt-6 grid gap-6 lg:grid-cols-12">
        {/* Left: Salary Band Distribution */}
        <div className="rounded-xl border border-ink/10 bg-white p-5 shadow-sm lg:col-span-7">
          <div className="flex items-center justify-between border-b border-ink/10 pb-3">
            <h4 className="text-sm font-semibold text-ink">Salary Band Distribution</h4>
            <span className="eyebrow text-mute">Pivot Summary</span>
          </div>

          <div className="mt-4 space-y-3">
            {data.bands.map((b) => (
              <div key={b.band}>
                <div className="flex justify-between text-xs text-graphite mb-1">
                  <span>{b.band}</span>
                  <span className="font-mono font-medium">{b.count} ({b.pct}%)</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-stone/50">
                  <motion.div
                    className="h-full rounded-full bg-[#1B2A4A]"
                    initial={{ width: 0 }}
                    animate={{ width: `${b.pct * 2.2}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Gender & Demographics */}
        <div className="rounded-xl border border-ink/10 bg-white p-5 shadow-sm lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-ink/10 pb-3">
              <h4 className="text-sm font-semibold text-ink">Gender Diversity Mix</h4>
              <span className="eyebrow text-mute">Ratio</span>
            </div>

            <div className="mt-5 space-y-3">
              <div>
                <div className="flex justify-between text-xs text-graphite mb-1">
                  <span>Female Employees</span>
                  <span className="font-mono font-medium">{data.genderRatio.f}%</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-stone/50 overflow-hidden">
                  <div className="h-full bg-[#0E7490] rounded-full" style={{ width: `${data.genderRatio.f}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-graphite mb-1">
                  <span>Male Employees</span>
                  <span className="font-mono font-medium">{data.genderRatio.m}%</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-stone/50 overflow-hidden">
                  <div className="h-full bg-[#1B2A4A] rounded-full" style={{ width: `${data.genderRatio.m}%` }} />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-stone/30 p-3 text-[0.725rem] text-mute">
            <span className="font-semibold text-ink">Analytical Takeaway:</span> {data.name} exhibits {data.retentionRate > 92 ? "strong retention stability" : "targeted turnover requiring compensation and tenure review"}.
          </div>
        </div>
      </div>

      <div className="mt-5 text-right">
        <span className="text-[0.7rem] text-mute font-mono">
          * Illustrative demonstration data constructed in Microsoft Excel to showcase pivot modeling and HR metrics.
        </span>
      </div>
    </div>
  );
}
