"use client";

import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { portfolioConfig } from "@/config/portfolio";

export function Education() {
  const { education, certifications, activities, languages } = portfolioConfig;

  return (
    <section id="education" aria-labelledby="education-title" className="relative bg-stone py-28 md:py-40 border-t border-ink/10">
      <div className="container-x">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal className="flex items-center gap-3">
              <span className="eyebrow text-accent">(06)</span>
              <span className="eyebrow text-mute">Education &amp; Credentials</span>
            </Reveal>
            <Reveal kind="words">
              <SplitWords
                as="h2"
                id="education-title"
                text="Academic rigor, professional training &amp; *certifications.*"
                className="display mt-6 block text-[clamp(2.4rem,5vw,5.4rem)]"
              />
            </Reveal>
          </div>
          <Reveal className="self-end lg:col-span-4 lg:col-start-9">
            <p className="text-[0.95rem] leading-relaxed text-graphite">
              A solid foundation in Corporate Secretaryship and corporate law, complemented by continuous practical training
              in data analytics and professional certifications.
            </p>
          </Reveal>
        </div>

        {/* Current Professional Training Highlight */}
        <div className="mt-16 md:mt-24">
          <Reveal className="rounded-2xl border border-ink/15 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 pb-5">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 border border-emerald-300 px-3 py-1 text-xs font-mono font-medium text-emerald-800">
                  <span className="size-2 rounded-full bg-emerald-600 animate-pulse" /> CURRENT PROFESSIONAL TRAINING
                </span>
                <h3 className="display text-2xl sm:text-3xl font-semibold text-ink mt-3">
                  Data Analytics Training — IT Vedant, Chennai
                </h3>
              </div>
              <div className="text-right">
                <span className="eyebrow text-accent font-semibold">Status: Currently Pursuing</span>
                <p className="text-xs font-mono text-mute mt-0.5">Chennai, Tamil Nadu</p>
              </div>
            </div>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-graphite">
              Focused hands-on training spanning SQL database operations (complex multi-table JOINs, nested subqueries,
              aggregations), Advanced Microsoft Excel modeling (pivot tables, formula logic, lookups), business intelligence
              reporting, and data hygiene workflows.
            </p>
          </Reveal>
        </div>

        {/* Academic Qualifications Timeline */}
        <div className="mt-14">
          <Reveal className="mb-6 flex items-center justify-between">
            <span className="eyebrow text-mute">Academic Qualifications</span>
            <span className="eyebrow text-mute font-mono">University &amp; Higher Secondary</span>
          </Reveal>

          <ol className="divide-y divide-ink/15 border-y border-ink/15">
            {education.map((edu, idx) => (
              <li key={idx} className="group py-8 grid gap-4 lg:grid-cols-12 lg:items-baseline">
                <div className="lg:col-span-3">
                  <span className="eyebrow text-accent font-mono">0{idx + 1} &middot; {edu.period}</span>
                  <p className="text-xs font-mono text-mute mt-1">{edu.status}</p>
                </div>

                <div className="lg:col-span-6">
                  <h4 className="display text-xl sm:text-2xl text-ink font-semibold group-hover:text-accent transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="serif-accent text-lg text-graphite mt-1">{edu.institution}</p>
                  <p className="text-xs font-mono text-mute mt-2">Discipline: {edu.focus}</p>
                </div>

                <div className="lg:col-span-3 text-left lg:text-right">
                  <span className="inline-block rounded-full border border-ink/20 bg-ivory px-4 py-1.5 text-xs font-mono font-bold text-ink">
                    Result: {edu.score}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Certifications & Co-Curricular Grid */}
        <div className="mt-20 grid gap-12 lg:grid-cols-12">
          {/* Left: Certifications */}
          <div className="lg:col-span-7">
            <Reveal className="flex items-center gap-2 mb-6">
              <span className="eyebrow text-accent font-mono">&bull;</span>
              <h3 className="eyebrow text-ink font-bold">Certifications &amp; Executive Credentials</h3>
            </Reveal>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div key={i} className="rounded-xl border border-ink/10 bg-white/70 p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-base font-semibold text-ink">{cert.title}</h4>
                      <p className="text-xs font-mono text-mute mt-0.5">{cert.issuer}</p>
                    </div>
                    <span className="text-[0.65rem] font-mono text-accent font-bold uppercase border border-accent/30 rounded px-2 py-0.5">
                      Verified
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cert.skills.map((s) => (
                      <span key={s} className="rounded bg-stone/50 px-2.5 py-0.5 text-[0.7rem] font-mono text-graphite">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Leadership, Activities & Languages */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <Reveal className="flex items-center gap-2 mb-6">
                <span className="eyebrow text-accent font-mono">&bull;</span>
                <h3 className="eyebrow text-ink font-bold">Activities &amp; Community Leadership</h3>
              </Reveal>

              <div className="space-y-4">
                {activities.map((act, i) => (
                  <div key={i} className="rounded-xl border border-ink/10 bg-white/70 p-4">
                    <div className="flex items-center justify-between text-xs font-mono text-mute">
                      <span className="font-semibold text-ink">{act.organization}</span>
                      <span className="text-accent">{act.period}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-ink">{act.role}</p>
                    <p className="mt-1 text-xs text-graphite leading-relaxed">{act.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <span className="eyebrow text-mute block mb-3">Languages</span>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((l) => (
                  <div key={l.name} className="rounded-xl border border-ink/10 bg-white/70 p-4 text-center">
                    <p className="text-base font-bold text-ink">{l.name}</p>
                    <p className="text-[0.7rem] font-mono text-mute mt-1">{l.proficiency}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
