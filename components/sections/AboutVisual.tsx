"use client";

import { motion } from "motion/react";

export function AboutVisual() {
  return (
    <figure className="lg:col-span-4">
      <div
        data-arch
        className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-t-full border border-ink/15 bg-[#17191E] text-ivory shadow-[0_20px_50px_rgba(0,0,0,0.15)] lg:max-w-none flex flex-col justify-between p-6"
      >
        <div data-arch-img className="absolute inset-0 will-change-transform flex flex-col justify-between p-7">
          {/* Subtle Grid overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Arched Header */}
          <div className="relative z-10 pt-8 text-center">
            <span className="eyebrow text-[#2EC4B6]">Pillar Architecture</span>
            <h3 className="serif-accent text-2xl text-white mt-1">
              Data &times; Governance
            </h3>
            <p className="eyebrow text-white/50 text-[0.65rem] mt-0.5">Ethiraj &middot; Ashok Leyland &middot; IT Vedant</p>
          </div>

          {/* Core Concept Geometry Diagram */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center gap-4 py-4">
            <div className="relative size-36">
              {/* Concentric Arcs */}
              <svg viewBox="0 0 100 100" className="size-full">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1.5"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="34"
                  fill="none"
                  stroke="#2EC4B6"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "50% 50%" }}
                />
                <circle
                  cx="50"
                  cy="50"
                  r="26"
                  fill="none"
                  stroke="#C6F432"
                  strokeWidth="1.5"
                  strokeOpacity="0.8"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="font-mono text-[0.65rem] uppercase tracking-wider text-white/60">Core</span>
                <span className="serif-accent text-lg text-white font-semibold">Insight</span>
              </div>
            </div>

            {/* Three Pillar Chips */}
            <div className="w-full space-y-2 text-center font-mono text-[0.725rem]">
              <div className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-white/90">
                01 &middot; Financial Law &amp; Compliance
              </div>
              <div className="rounded-lg border border-[#2EC4B6]/30 bg-[#2EC4B6]/10 px-3 py-1.5 text-[#2EC4B6]">
                02 &middot; Structured SQL &amp; Excel Modeling
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-white/90">
                03 &middot; Business Intelligence Dashboards
              </div>
            </div>
          </div>

          {/* Arched Base Footer */}
          <div className="relative z-10 border-t border-white/10 pt-3 text-center">
            <span className="eyebrow text-white/50 text-[0.65rem]">
              Transforming Numbers into Decisions
            </span>
          </div>
        </div>
      </div>
      <figcaption className="mx-auto mt-4 flex max-w-sm items-center justify-between lg:max-w-none">
        <span className="eyebrow text-mute">Fig. 02</span>
        <span className="serif-accent text-lg">Corporate Secretaryship &times; Data Analytics</span>
      </figcaption>
    </figure>
  );
}
