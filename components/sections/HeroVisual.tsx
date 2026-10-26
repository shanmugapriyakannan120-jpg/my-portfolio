"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

export function HeroVisual() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[34rem] overflow-hidden rounded-[2px] border border-ink/15 bg-[#121417] p-5 sm:p-6 text-ivory lg:max-w-none lg:aspect-auto lg:h-[min(76svh,52rem)] flex flex-col justify-between select-none shadow-[0_30px_70px_-20px_rgba(0,0,0,0.45)]">
      {/* Editorial Hairline Grid Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Glowing Ambient Radial Accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 size-72 rounded-full bg-[#ff3f6c]/18 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-16 size-72 rounded-full bg-[#2EC4B6]/12 blur-3xl"
      />

      {/* Outer Telemetry Card Corner Marks */}
      <span aria-hidden className="absolute left-3 top-3 size-4 border-l border-t border-white/40" />
      <span aria-hidden className="absolute right-3 top-3 size-4 border-r border-t border-white/40" />
      <span aria-hidden className="absolute left-3 bottom-3 size-4 border-l border-b border-white/40" />
      <span aria-hidden className="absolute right-3 bottom-3 size-4 border-r border-b border-white/40" />

      {/* Top Metadata Header */}
      <div className="relative z-10 flex items-start justify-between border-b border-white/10 pb-3">
        <div>
          <span className="eyebrow text-[#ff3f6c] flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-[#ff3f6c] animate-pulse" />
            Fig. 01 — Data Telemetry
          </span>
          <p className="serif-accent text-xl sm:text-2xl text-white mt-1">Shanmuga Priya K.</p>
        </div>
        <div className="text-right">
          <span className="eyebrow text-white/50">Location</span>
          <p className="eyebrow text-white/90 mt-0.5">Chennai, India</p>
        </div>
      </div>

      {/* Center Main Visual: Framed Real Profile Photograph with Animated Pink Pipeline Border */}
      <div className="relative z-10 my-3 flex-1 min-h-[300px] sm:min-h-[360px] lg:min-h-0 w-full flex flex-col justify-center">
        {/* Photo Frame Container */}
        <div className="relative size-full min-h-0">
          {/* Inner Photo Viewport */}
          <div className="relative size-full overflow-hidden rounded-[4px] bg-[#0c0d0f] shadow-inner">
            {!imageError ? (
              <div className="relative size-full flex items-center justify-center">
                {/* Ambient softened backdrop filling any subtle margin with the photo's natural studio pink hue */}
                <div aria-hidden className="pointer-events-none absolute inset-0 size-full overflow-hidden opacity-25">
                  <Image
                    src="/shanmuga-priya.jpg"
                    alt=""
                    fill
                    sizes="100px"
                    className="object-cover blur-2xl scale-110"
                  />
                </div>

                {/* Natural Scale Profile Photograph (Uncropped, Full Headroom, Hair & Suit Visible) */}
                <Image
                  src="/shanmuga-priya.jpg"
                  alt="Shanmuga Priya K. — Aspiring Data Analyst"
                  fill
                  priority
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="relative z-10 object-contain object-center"
                  onError={() => setImageError(true)}
                />
              </div>
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center bg-[#17191d]">
                <div className="size-12 rounded-full border border-[#ff3f6c]/40 bg-[#ff3f6c]/10 flex items-center justify-center mb-3">
                  <span className="size-2 rounded-full bg-[#ff3f6c]" />
                </div>
                <p className="font-mono text-xs uppercase tracking-wider text-white/80">Profile Photo Missing</p>
                <p className="mt-1 text-[0.7rem] text-white/50 max-w-[16rem]">
                  Please place the real portrait photo at <code className="text-[#ff3f6c]">/public/shanmuga-priya.jpg</code>
                </p>
              </div>
            )}

            {/* Photo Reveal: Single-pass Fine Pink Scanline Sweep */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 z-30 h-[2px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,63,108,0.3) 15%, #ff3f6c 50%, rgba(255,63,108,0.3) 85%, transparent 100%)",
                boxShadow: "0 0 12px #ff3f6c, 0 0 4px #ffffff",
              }}
              initial={{ top: "-2%", opacity: 0 }}
              animate={{ top: "102%", opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 2.2,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.9,
              }}
            />

            {/* Trailing soft scan veil */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 z-20 h-16 -translate-y-full"
              style={{
                background: "linear-gradient(to bottom, transparent, rgba(255, 63, 108, 0.08))",
              }}
              initial={{ top: "-2%", opacity: 0 }}
              animate={{ top: "102%", opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 2.2,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.9,
              }}
            />

            {/* Integrated Telemetry Skill Badges (Secondary to photo) */}
            <div className="absolute inset-x-3 bottom-3 z-30 flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 rounded-md border border-white/15 bg-[#121417]/85 px-2.5 py-1 backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-[#ff3f6c]" />
                <span className="font-mono text-[0.65rem] tracking-wider text-white/90 uppercase">
                  Data Analytics
                </span>
              </div>
              <div className="flex items-center gap-1.5 rounded-md border border-white/15 bg-[#121417]/85 px-2.5 py-1 backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-[#2EC4B6]" />
                <span className="font-mono text-[0.65rem] tracking-wider text-white/90 uppercase">
                  SQL Relational
                </span>
              </div>
              <div className="flex items-center gap-1.5 rounded-md border border-white/15 bg-[#121417]/85 px-2.5 py-1 backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-[#C6F432]" />
                <span className="font-mono text-[0.65rem] tracking-wider text-white/90 uppercase">
                  Excel Modelling
                </span>
              </div>
            </div>
          </div>

          {/* Animated Pink Pipeline Border (SVG stroke around rectangular frame) */}
          <svg
            className="pointer-events-none absolute inset-0 size-full z-20 overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="pink-pipeline-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Permanent underlying muted border: visible at all times */}
            <rect
              x="1"
              y="1"
              width="calc(100% - 2px)"
              height="calc(100% - 2px)"
              rx="4"
              stroke="rgba(255, 63, 108, 0.22)"
              strokeWidth="1.5"
              style={{ width: "calc(100% - 2px)", height: "calc(100% - 2px)" }}
            />

            {/* Glowing animated pipeline segment circulating around all 4 sides */}
            <rect
              x="1"
              y="1"
              width="calc(100% - 2px)"
              height="calc(100% - 2px)"
              rx="4"
              stroke="#ff3f6c"
              strokeWidth="1.75"
              strokeLinecap="round"
              pathLength="1000"
              strokeDasharray="140 860"
              filter="url(#pink-pipeline-glow)"
              className="pipeline-beam"
              style={{ width: "calc(100% - 2px)", height: "calc(100% - 2px)" }}
            />
          </svg>

          {/* Subtle Corner Pulse Nodes */}
          <span
            aria-hidden
            className="pointer-events-none absolute -left-1 -top-1 size-2 rounded-full bg-[#ff3f6c] shadow-[0_0_8px_#ff3f6c] z-30 opacity-80"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -right-1 -top-1 size-2 rounded-full bg-[#ff3f6c] shadow-[0_0_8px_#ff3f6c] z-30 opacity-80"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -left-1 -bottom-1 size-2 rounded-full bg-[#ff3f6c] shadow-[0_0_8px_#ff3f6c] z-30 opacity-80"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -right-1 -bottom-1 size-2 rounded-full bg-[#ff3f6c] shadow-[0_0_8px_#ff3f6c] z-30 opacity-80"
          />

          {/* Subtle Pipeline Corner Crop Marks */}
          <span aria-hidden className="pointer-events-none absolute left-0 top-0 size-3 border-l-2 border-t-2 border-[#ff3f6c] z-30" />
          <span aria-hidden className="pointer-events-none absolute right-0 top-0 size-3 border-r-2 border-t-2 border-[#ff3f6c] z-30" />
          <span aria-hidden className="pointer-events-none absolute left-0 bottom-0 size-3 border-l-2 border-b-2 border-[#ff3f6c] z-30" />
          <span aria-hidden className="pointer-events-none absolute right-0 bottom-0 size-3 border-r-2 border-b-2 border-[#ff3f6c] z-30" />
        </div>
      </div>

      {/* Bottom Secondary Telemetry Bar */}
      <div className="relative z-10 border-t border-white/10 pt-3 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-white/50">
        <span>LAT 13.0827° N · LON 80.2707° E</span>
        <div className="flex items-center gap-2">
          {/* Secondary mini analytical signal */}
          <svg viewBox="0 0 60 14" className="h-3.5 w-14 stroke-[#ff3f6c]/60 fill-none" aria-hidden>
            <path d="M 0 7 Q 15 1 30 9 T 60 5" strokeWidth="1.2" />
          </svg>
          <span className="text-[#2EC4B6] text-[0.6875rem]">SYS // ONLINE</span>
        </div>
      </div>

      {/* Embedded performant CSS keyframes for perimeter pipeline animation & reduced-motion */}
      <style>{`
        @keyframes pipelineTravel {
          0% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        .pipeline-beam {
          animation: pipelineTravel 8s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .pipeline-beam {
            animation: none !important;
            stroke-dasharray: none !important;
            stroke: rgba(255, 63, 108, 0.6) !important;
          }
        }
      `}</style>
    </div>
  );
}
