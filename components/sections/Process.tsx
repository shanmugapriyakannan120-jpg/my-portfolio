"use client";

import { useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { gsap, MQ, registerGsap, useGSAP } from "@/lib/animations";

registerGsap();

const STEPS = [
  {
    n: "01",
    title: "Ingestion & Audit",
    body: "Extract raw business tables, audit missing values, detect anomalies, and establish schema relational integrity.",
  },
  {
    n: "02",
    title: "Data Transformation",
    body: "Standardize types, execute multi-table SQL JOINs, and engineer structured Excel pivot calculations.",
  },
  {
    n: "03",
    title: "Statistical & Ratio Analysis",
    body: "Compute financial ratios, workforce turnover metrics, and e-commerce delivery lead time correlations.",
  },
  {
    n: "04",
    title: "Executive Synthesis",
    body: "Synthesize relational outputs into crisp, high-impact business dashboards and decision-ready summaries.",
  },
];

export function Process() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        const list = q("[data-steps]")[0];
        gsap.fromTo(
          q("[data-progress]"),
          { scaleX: 0, scaleY: 0 },
          {
            scaleX: 1,
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: list, start: "top 75%", end: "bottom 55%", scrub: true },
          },
        );
        q("[data-step]").forEach((step) => {
          const tl = gsap.timeline({ scrollTrigger: { trigger: step, start: "top 80%", once: true } });
          tl.fromTo(step.querySelector("[data-num]"), { yPercent: 100 }, { yPercent: 0, duration: 1.1, ease: "expo.out" })
            .fromTo(
              step.querySelectorAll("[data-fade]"),
              { y: 20, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.08, ease: "power3.out" },
              0.15,
            )
            .fromTo(step.querySelector("[data-dot]"), { scale: 0 }, { scale: 1, duration: 0.6, ease: "back.out(3)" }, 0.1);
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} aria-labelledby="process-title" className="relative bg-ivory py-28 md:py-40">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal className="flex items-center gap-3">
              <span className="eyebrow text-accent">(07)</span>
              <span className="eyebrow text-mute">Analytical Methodology</span>
            </Reveal>
            <Reveal kind="words">
              <SplitWords
                as="h2"
                id="process-title"
                text="How raw data becomes *strategic* insight."
                className="display mt-6 block text-[clamp(2.4rem,5vw,5.4rem)]"
              />
            </Reveal>
          </div>
        </div>

        <ol data-steps className="relative mt-16 grid gap-0 md:mt-24 md:grid-cols-4 md:gap-6">
          {/* Track */}
          <span aria-hidden className="absolute left-[7px] top-0 h-full w-px bg-line md:left-0 md:top-[7px] md:h-px md:w-full" />
          <span
            aria-hidden
            data-progress
            className="absolute left-[7px] top-0 h-full w-px origin-top bg-accent md:left-0 md:top-[7px] md:h-px md:w-full md:origin-left"
          />
          {STEPS.map((s) => (
            <li key={s.n} data-step className="relative grid grid-cols-[2.5rem_1fr] pb-12 md:block md:pb-0">
              <span data-dot aria-hidden className="relative z-10 block size-[15px] rounded-full border-[3px] border-ivory bg-ink" />
              <div className="md:mt-10">
                <span className="block overflow-hidden">
                  <span data-num className="display block text-[clamp(4rem,7vw,7rem)] text-ink/[0.08] leading-none">
                    {s.n}
                  </span>
                </span>
                <h3 data-fade className="display -mt-[0.9em] text-[1.85rem] tracking-[-0.035em] md:-mt-[1.1em] text-ink">
                  {s.title}
                </h3>
                <p data-fade className="mt-4 max-w-[19rem] leading-relaxed text-graphite text-sm md:text-base">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
