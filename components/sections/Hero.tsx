"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { site } from "@/data/site";
import { CtaButton } from "@/components/ui/CtaButton";
import { ArrowDown } from "@/components/ui/Icons";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { EASE, gsap, MQ, registerGsap, useGSAP } from "@/lib/animations";

registerGsap();

const WORDMARK = ["P", "R", "I", "Y", "A"];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  // Fail-safe guarantee: if animation is halted, delayed (tunnel network latency), or throttled (background tab), force reveal by 2.2s
  useEffect(() => {
    const timer = setTimeout(() => {
      const curtain = root.current?.querySelector<HTMLElement>("[data-curtain]");
      if (curtain) {
        curtain.dataset.completed = "true";
        curtain.style.display = "none";
        curtain.style.visibility = "hidden";
        curtain.style.pointerEvents = "none";
      }
      const intros = root.current?.querySelectorAll<HTMLElement>("[data-intro]");
      intros?.forEach((el) => {
        el.style.visibility = "visible";
        el.style.opacity = "1";
      });
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const mm = gsap.matchMedia();

      // Handle both motion-enabled and reduced-motion environments
      mm.add(
        {
          isMotion: MQ.motion,
          isReduce: MQ.reduce,
        },
        (context) => {
          const { isReduce } = context.conditions!;

          if (isReduce) {
            // Reduced motion: reveal everything instantly with no blocking curtain
            const curtain = root.current?.querySelector<HTMLElement>("[data-curtain]");
            if (curtain) {
              curtain.dataset.completed = "true";
              curtain.style.display = "none";
              curtain.style.visibility = "hidden";
              curtain.style.pointerEvents = "none";
            }
            gsap.set(q("[data-intro]"), { visibility: "visible", autoAlpha: 1 });
            return;
          }

          const tl = gsap.timeline({
            defaults: { ease: EASE.out },
            onComplete: () => {
              const curtain = root.current?.querySelector<HTMLElement>("[data-curtain]");
              if (curtain) {
                curtain.dataset.completed = "true";
                curtain.style.display = "none";
                curtain.style.visibility = "hidden";
                curtain.style.pointerEvents = "none";
              }
            },
          });

          tl.set(q("[data-intro]"), { visibility: "visible" })
            .fromTo(
              q("[data-curtain-label]"),
              { autoAlpha: 1 },
              { autoAlpha: 0, duration: 0.35, ease: "power2.out" },
              0.1,
            )
            .fromTo(
              q("[data-curtain]"),
              { yPercent: 0 },
              { yPercent: -100, duration: 1, ease: EASE.inOut },
              0.15,
            )
            .set(q("[data-curtain]"), { display: "none", pointerEvents: "none" }, 1.15)
            .fromTo(
              q("[data-grid-line]"),
              { scaleY: 0 },
              { scaleY: 1, transformOrigin: "top", duration: 1.4, stagger: 0.035, ease: EASE.inOut },
              0.45,
            )
            .fromTo(
              q("[data-portrait]"),
              { clipPath: "inset(100% 0% 0% 0%)" },
              { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: EASE.inOut },
              0.5,
            )
            .fromTo(q("[data-letter]"), { yPercent: 108 }, { yPercent: 0, duration: 1.3, stagger: 0.07 }, 0.8)
            .fromTo(q("[data-line]"), { yPercent: 112, rotate: 2 }, { yPercent: 0, rotate: 0, duration: 1.2, stagger: 0.1 }, 0.85)
            .fromTo(q("[data-fade]"), { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.08 }, 1.15)
            .fromTo(q("[data-cta]"), { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.1 }, 1.3);
        },
      );

      // Scroll parallax — desktop only, after the intro.
      mm.add(MQ.desktop, () => {
        const st = { trigger: root.current, start: "top top", end: "bottom top", scrub: true };
        gsap.to(q("[data-portrait]"), { yPercent: 8, ease: "none", scrollTrigger: st });
        gsap.to(q("[data-parallax-copy]"), { y: -80, ease: "none", scrollTrigger: st });
        gsap.to(q("[data-wordmark]"), { yPercent: 18, ease: "none", scrollTrigger: st });
      });

      return () => {
        mm.revert();
        // Prevent unmount/re-render from bringing back the curtain if it already completed
        const curtain = root.current?.querySelector<HTMLElement>("[data-curtain]");
        if (curtain && curtain.dataset.completed === "true") {
          curtain.style.display = "none";
          curtain.style.visibility = "hidden";
          curtain.style.pointerEvents = "none";
        }
      };
    },
    { scope: root },
  );

  return (
    <section
      id="home"
      ref={root}
      aria-label="Introduction"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ivory pt-[4.5rem]"
    >
      {/* Intro curtain (only rendered visible when motion is allowed) */}
      <div
        aria-hidden
        data-curtain
        className="intro-curtain fixed inset-0 z-[150] bg-ink"
      >
        <div data-curtain-label className="flex h-full items-center justify-center gap-3 text-ivory">
          <span className="display text-xl sm:text-2xl tracking-tight">SHANMUGA PRIYA K</span>
          <span className="size-1.5 rounded-full bg-accent" />
          <span className="eyebrow text-xs text-white/50 tracking-widest hidden sm:inline">DATA ANALYST</span>
        </div>
      </div>

      {/* Hairline grid */}
      <div aria-hidden className="container-x pointer-events-none absolute inset-0 -z-10">
        <div className="grid h-full grid-cols-4 lg:grid-cols-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              data-grid-line
              className={`h-full border-l border-line ${i >= 4 ? "hidden lg:block" : ""} ${i === 0 ? "border-transparent" : ""}`}
            />
          ))}
        </div>
      </div>

      <div className="container-x relative grid flex-1 grid-cols-1 gap-y-8 pt-8 lg:grid-cols-12 lg:gap-x-6 lg:pt-10">
        {/* Copy column */}
        <div data-parallax-copy className="relative z-20 flex flex-col lg:col-span-7 lg:pb-[11vw]">
          <div data-intro data-fade className="flex flex-wrap items-center gap-x-3 gap-y-2 text-mute">
            <span className="eyebrow text-ink font-semibold">DATA ANALYTICS &middot; BUSINESS INTELLIGENCE &middot; FINANCIAL INSIGHTS</span>
          </div>

          <div data-intro data-fade className="mt-4 flex items-center gap-3 text-xs font-mono text-mute">
            <span className="rounded-full border border-line bg-paper/80 px-3 py-1 text-ink">
              CHENNAI, INDIA
            </span>
            <span className="text-accent">&bull;</span>
            <span className="rounded-full border border-line bg-paper/80 px-3 py-1 text-ink">
              ASPIRING DATA ANALYST
            </span>
          </div>

          <h1 className="display mt-6 text-[clamp(2.7rem,5.6vw,6.8rem)] text-ink lg:mt-8">
            <span className="sr-only">Turning Raw Data Into Meaningful Decisions. Shanmuga Priya K.</span>
            <span aria-hidden className="block">
              <span data-intro className="mask block">
                <span data-line className="block">Turning Raw Data</span>
              </span>
              <span data-intro className="mask block">
                <span data-line className="block">
                  Into <span className="serif-accent pr-[0.06em] text-accent">Meaningful</span>
                </span>
              </span>
              <span data-intro className="mask block">
                <span data-line className="block">
                  Decisions<span className="text-accent">.</span>
                </span>
              </span>
            </span>
          </h1>

          <div className="mt-6 flex items-baseline gap-3 text-lg font-medium text-ink">
            <span className="eyebrow text-accent">(Candidate)</span>
            <span className="serif-accent text-2xl text-ink">Shanmuga Priya K.</span>
          </div>

          <div className="mt-6 grid gap-8 sm:grid-cols-[minmax(0,28rem)_1fr] lg:mt-8">
            <p data-intro data-fade className="max-w-[28rem] text-[1.05rem] leading-relaxed text-graphite">
              {site.intro}
            </p>
            <div data-intro data-fade className="flex items-start sm:justify-end lg:justify-start">
              <span className="inline-flex items-center gap-3 rounded-full border border-line bg-paper/70 py-2 pl-3 pr-4 text-xs sm:text-sm text-graphite backdrop-blur">
                <span className="relative flex size-2.5">
                  <span className="absolute inset-0 animate-pulse-ring rounded-full bg-emerald-500" />
                  <span className="relative size-2.5 rounded-full bg-emerald-500" />
                </span>
                {site.status}
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div data-intro data-cta>
              <CtaButton href="/#work">Explore My Work</CtaButton>
            </div>
            <div data-intro data-cta>
              <CtaButton href="/#contact" variant="ghost">
                Let&apos;s Connect
              </CtaButton>
            </div>
          </div>

          <Link
            href="/#work"
            data-intro
            data-fade
            className="mt-10 hidden w-fit items-center gap-4 text-mute lg:flex"
            aria-label="Scroll to selected projects"
          >
            <span className="relative h-12 w-px overflow-hidden bg-ink/10">
              <span className="scroll-line absolute inset-0 bg-ink" />
            </span>
            <span className="eyebrow">Scroll to explore analytics projects</span>
          </Link>
        </div>

        {/* Data Telemetry Visual Column (Replacing fake portrait with editorial analytical card) */}
        <div className="relative lg:col-span-5 lg:col-start-8">
          <figure
            data-intro
            data-portrait
            className="relative will-change-transform"
          >
            <HeroVisual />
          </figure>

          {/* Rotating badge / scroll indicator */}
          <Link
            href="/#work"
            data-intro
            data-fade
            aria-label="Scroll to selected work"
            className="group absolute -right-4 top-[56%] z-30 hidden size-28 place-items-center rounded-full bg-ink text-ivory lg:grid"
          >
            <svg viewBox="0 0 100 100" className="absolute inset-0 size-full animate-spin-slow" aria-hidden>
              <defs>
                <path id="badge-circle" d="M50 50 m-37 0 a37 37 0 1 1 74 0 a37 37 0 1 1 -74 0" />
              </defs>
              <text className="fill-current" style={{ fontSize: 8.2, letterSpacing: "0.20em", fontFamily: "var(--font-mono)" }}>
                <textPath href="#badge-circle">SCROLL &bull; ANALYTICS WORK &bull; EXPLORE &bull;</textPath>
              </text>
            </svg>
            <ArrowDown size={20} className="transition-transform duration-500 group-hover:translate-y-1 text-accent" />
          </Link>
        </div>
      </div>

      {/* Giant wordmark — overlaps the base of the telemetry card */}
      <div
        data-wordmark
        aria-hidden
        className="pointer-events-none relative z-10 -mt-[20vw] select-none pb-[1.5vw] sm:-mt-[16vw] lg:-mt-[11vw]"
      >
        <div className="container-x">
          <div
            data-intro
            className="display flex justify-between text-[clamp(6rem,24vw,26rem)] leading-[0.74] tracking-[-0.05em] text-ink lg:text-[17.5vw]"
          >
            {WORDMARK.map((l, i) => (
              <span key={i} className="mask">
                <span data-letter className="block">
                  {l}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
