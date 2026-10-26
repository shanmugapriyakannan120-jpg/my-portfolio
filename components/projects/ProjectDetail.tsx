"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type CSSProperties } from "react";
import type { Project } from "@/data/projects";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, ArrowUpRight } from "@/components/ui/Icons";
import { ProjectDemo } from "@/components/projects/demos";

const EASE = [0.16, 1, 0.3, 1] as const;

const inView = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.9, ease: EASE },
} as const;

export function ProjectDetail({ project, next }: { project: Project; next: Project }) {
  const { theme } = project;
  const coverRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: coverRef, offset: ["start end", "end start"] });
  const coverY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const vars = {
    "--p-bg": theme.bg,
    "--p-fg": theme.fg,
    "--p-accent": theme.accent,
    "--p-muted": theme.muted,
  } as CSSProperties;

  const border = theme.dark ? "border-white/10" : "border-black/10";

  return (
    <main id="main" tabIndex={-1} style={vars} className="bg-[var(--p-bg)] text-[var(--p-fg)] outline-none">
      {/* Hero */}
      <section data-theme={theme.dark ? "dark" : undefined} className="relative overflow-hidden pt-[4.5rem]">
        <div className="container-x pb-14 pt-10 md:pt-16">
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: EASE }}>
            <Link
              href="/#work"
              className="group inline-flex items-center gap-2 text-sm text-[var(--p-muted)] hover:text-[var(--p-fg)]"
            >
              <ArrowLeft size={16} className="transition-transform duration-500 group-hover:-translate-x-1" />
              All Analytics Work
            </Link>
          </motion.div>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <span className="eyebrow text-[var(--p-accent)]">({project.index})</span>
            <span className="eyebrow text-[var(--p-muted)]">{project.category}</span>
            {project.note && (
              <span className="rounded-full border border-[var(--p-accent)]/30 bg-[var(--p-accent)]/10 px-2.5 py-0.5 text-[0.65rem] font-mono text-[var(--p-accent)]">
                {project.note}
              </span>
            )}
          </div>

          <h1
            className={`display mt-6 flex flex-wrap gap-x-[0.18em] leading-[0.88] ${
              project.title.replace(" ", "").length > 10
                ? "text-[clamp(2.5rem,8.5vw,8.5rem)]"
                : "text-[clamp(3.2rem,12vw,12rem)]"
            }`}
            aria-label={project.title}
          >
            {project.title.split(" ").map((word, w) => (
              <span key={w} className="whitespace-nowrap" aria-hidden>
                {word.split("").map((ch, i) => (
                  <span key={i} className="mask">
                    <motion.span
                      className="inline-block"
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 1.1, ease: EASE, delay: 0.15 + (w * 6 + i) * 0.045 }}
                    >
                      {ch}
                    </motion.span>
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.6 }}
            className={`mt-12 grid gap-8 border-t ${border} pt-8 md:grid-cols-12`}
          >
            <div className="md:col-span-6 space-y-5">
              <p className="serif-accent text-[clamp(1.5rem,2.5vw,2.4rem)] leading-[1.15]">{project.tagline}</p>
              
              {/* Project Action Links (safe external links, or tasteful inactive status) */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--p-accent)] px-5 py-2.5 text-xs font-semibold text-black transition hover:opacity-90"
                  >
                    GitHub Repository ↗
                  </a>
                ) : null}

                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--p-fg)]/25 px-5 py-2.5 text-xs font-semibold text-[var(--p-fg)] transition hover:border-[var(--p-fg)]"
                  >
                    Live Demo ↗
                  </a>
                ) : null}

                {!project.repoUrl && !project.demoUrl && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--p-fg)]/15 px-3.5 py-1.5 text-[0.75rem] font-mono opacity-60">
                    <span className="size-1.5 rounded-full bg-[var(--p-accent)]" />
                    Project code available upon request
                  </span>
                )}
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-6 text-sm md:col-span-5 md:col-start-8">
              {[
                ["Focus", project.category],
                ["Type", project.year],
                ["Discipline", "Data Analytics & Business Intelligence"],
                ["Stack", project.stack.join(", ")],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="eyebrow text-[var(--p-muted)]">{k}</dt>
                  <dd className="mt-2 leading-snug font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>

        {/* Cover Image */}
        <motion.div
          ref={coverRef}
          initial={{ clipPath: "inset(18% 6% 0% 6%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.4, ease: [0.87, 0, 0.13, 1], delay: 0.35 }}
          className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[16/8]"
        >
          <motion.div style={{ y: coverY }} className="absolute inset-[-7%_0]">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Visual Workflow Breadcrumbs */}
      {project.workflow && (
        <section className={`border-b ${border} py-8`}>
          <div className="container-x">
            <span className="eyebrow text-[var(--p-accent)] block mb-3">Project Analysis Workflow</span>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              {project.workflow.split("→").map((step, idx, arr) => (
                <span key={idx} className="flex items-center gap-2">
                  <span className={`rounded px-3 py-1.5 ${theme.dark ? "bg-white/10 text-white" : "bg-black/5 text-ink"} font-medium`}>
                    {step.trim()}
                  </span>
                  {idx < arr.length - 1 && <span className="text-[var(--p-accent)] font-bold">&rarr;</span>}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Overview & Analytical Approach */}
      <section className="container-x grid gap-12 py-24 md:grid-cols-12 md:py-36" aria-labelledby="overview-title">
        <motion.div {...inView} className="md:col-span-4">
          <p className="eyebrow text-[var(--p-accent)]">Business Objective</p>
          <h2 id="overview-title" className="display mt-4 text-[clamp(2rem,3.4vw,3.2rem)]">
            Problem statement &amp; analytical inquiry
          </h2>
        </motion.div>
        <div className="md:col-span-7 md:col-start-6">
          <motion.p {...inView} className="text-[1.18rem] leading-relaxed md:text-[1.32rem]">
            {project.challenge}
          </motion.p>
          <ol className={`mt-12 border-t ${border}`}>
            {project.approach.map((a, i) => (
              <motion.li
                key={a}
                {...inView}
                transition={{ ...inView.transition, delay: i * 0.06 }}
                className={`grid grid-cols-[3rem_1fr] gap-4 border-b ${border} py-5`}
              >
                <span className="eyebrow pt-1 text-[var(--p-accent)]">0{i + 1}</span>
                <span className="leading-relaxed opacity-90">{a}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Interactive Project Demo */}
      <section className="container-x pb-24 md:pb-36" aria-labelledby="demo-title">
        <motion.div {...inView} className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-[var(--p-accent)]">Interactive Project Console</p>
            <h2 id="demo-title" className="display mt-4 text-[clamp(2rem,3.4vw,3.2rem)]">
              Explore the data interaction
            </h2>
          </div>
          <p className="max-w-xs text-xs text-[var(--p-muted)] font-mono">
            Interactive analytical demonstration prototype developed for this case study.
          </p>
        </motion.div>
        <motion.div {...inView}>
          <ProjectDemo slug={project.slug} />
        </motion.div>
      </section>

      {/* Key Capabilities / Analysis Checklist */}
      {project.keyCapabilities && (
        <section className={`border-y ${border} py-20`}>
          <div className="container-x grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="eyebrow text-[var(--p-accent)]">Analytical Scope</span>
              <h3 className="display text-2xl md:text-3xl mt-3">Key analysis &amp; capabilities</h3>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {project.keyCapabilities.map((cap) => (
                  <li key={cap} className={`rounded-xl border ${border} p-4 text-xs sm:text-sm font-medium flex items-center gap-3`}>
                    <span className="size-2 rounded-full bg-[var(--p-accent)] shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Project Evidence Frames */}
      <section className="container-x grid gap-6 py-24 md:grid-cols-12 md:gap-8 md:py-36" aria-label="Project artwork and visual analysis">
        {[project.frames[0], project.frames[1]].map((f, i) => (
          <motion.figure
            key={f.src}
            {...inView}
            transition={{ ...inView.transition, delay: i * 0.1 }}
            className={i === 0 ? "md:col-span-5" : "md:col-span-7 md:mt-32"}
          >
            <div className={`relative overflow-hidden rounded-[2px] shadow-lg ${i === 0 ? "aspect-[4/5]" : "aspect-[16/10]"}`}>
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-expo)] hover:scale-105"
              />
            </div>
            <figcaption className="eyebrow mt-4 text-[var(--p-muted)]">
              Fig. {project.index}.{i + 2} &mdash; {f.alt}
            </figcaption>
          </motion.figure>
        ))}
      </section>

      {/* Design System & Palettes */}
      <section className={`border-t ${border}`} aria-labelledby="system-title">
        <div className="container-x grid gap-12 py-24 md:grid-cols-12 md:py-32">
          <motion.div {...inView} className="md:col-span-4">
            <p className="eyebrow text-[var(--p-accent)]">Visual &amp; Data System</p>
            <h2 id="system-title" className="display mt-4 text-[clamp(2rem,3.4vw,3.2rem)]">
              Palette &amp; typography
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed opacity-80 text-sm">{project.typography}</p>
          </motion.div>
          <ul className="grid grid-cols-2 gap-4 md:col-span-7 md:col-start-6 md:grid-cols-4">
            {project.palette.map((c, i) => (
              <motion.li key={c.hex} {...inView} transition={{ ...inView.transition, delay: i * 0.07 }}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`aspect-[3/4] rounded-[2px] border ${border}`}
                  style={{ background: c.hex }}
                />
                <p className="mt-3 text-sm font-medium">{c.name}</p>
                <p className="eyebrow mt-1 text-[var(--p-muted)] font-mono">{c.hex}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Next project + footer */}
      <section data-theme="dark" className="bg-ink text-ivory" aria-label="Next project">
        <Link href={`/projects/${next.slug}`} className="group relative block overflow-hidden" data-cursor="Next">
          <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-40 group-focus-visible:opacity-40">
            <Image
              src={next.cover.src}
              alt=""
              fill
              sizes="100vw"
              className="scale-110 object-cover transition-transform duration-[1.6s] ease-[var(--ease-expo)] group-hover:scale-100"
            />
          </div>
          <div className="container-x relative flex flex-wrap items-end justify-between gap-6 py-24 md:py-36">
            <div>
              <p className="eyebrow text-white/50">Next Project &mdash; ({next.index})</p>
              <p className="display mt-6 text-[clamp(3rem,9vw,9rem)] leading-[0.88] transition-transform duration-700 ease-[var(--ease-expo)] group-hover:translate-x-4">
                {next.title}
              </p>
              <p className="mt-4 text-white/60">{next.category}</p>
            </div>
            <span className="grid size-20 place-items-center rounded-full bg-accent text-white transition-transform duration-700 ease-[var(--ease-expo)] group-hover:rotate-45 md:size-28">
              <ArrowUpRight size={28} />
            </span>
          </div>
        </Link>
        <Footer />
      </section>
    </main>
  );
}
