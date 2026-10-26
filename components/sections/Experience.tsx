"use client";

import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { portfolioConfig } from "@/config/portfolio";

export function Experience() {
  const { internship } = portfolioConfig;

  return (
    <section id="experience" aria-labelledby="experience-title" className="relative bg-ivory py-28 md:py-40 border-t border-line">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal className="flex items-center gap-3">
              <span className="eyebrow text-accent">(05)</span>
              <span className="eyebrow text-mute">Corporate Experience</span>
            </Reveal>
            <Reveal kind="words">
              <SplitWords
                as="h2"
                id="experience-title"
                text="Corporate secretarial diligence at *Ashok Leyland.*"
                className="display mt-6 block text-[clamp(2.4rem,5.2vw,5.6rem)]"
              />
            </Reveal>
          </div>
          <Reveal className="self-end lg:col-span-4 lg:col-start-9">
            <p className="text-[0.95rem] leading-relaxed text-graphite">
              Practical exposure to enterprise annual reports, Board governance disclosures, statutory audit procedures,
              and executive record management.
            </p>
          </Reveal>
        </div>

        {/* Experience Timeline Card */}
        <div className="mt-16 md:mt-24 border-t border-line">
          <Reveal className="grid gap-10 py-12 lg:grid-cols-12 lg:items-start">
            {/* Left: Organization & Role metadata */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 text-xs font-mono text-mute">
                <span className="rounded-full bg-stone px-3 py-1 font-semibold text-ink">INTERNSHIP</span>
                <span>{internship.location}</span>
              </div>
              <h3 className="display mt-4 text-[clamp(2rem,3.8vw,3.6rem)] tracking-tight text-ink">
                {internship.organization}
              </h3>
              <p className="serif-accent mt-2 text-xl text-accent font-medium">
                {internship.role}
              </p>
              <p className="mt-1 text-sm text-mute font-mono">
                Department: {internship.department}
              </p>
              <div className="mt-8 rounded-xl border border-line bg-paper/80 p-5">
                <span className="eyebrow text-mute block">Core Competencies Developed</span>
                <div className="mt-3 flex flex-wrap gap-2 text-xs font-mono">
                  {["Annual Reports Analysis", "Statutory Disclosures", "ROC Filing Procedures", "Excel Record Keeping", "Secretarial Audit"].map(
                    (tag) => (
                      <span key={tag} className="rounded-full border border-line bg-white px-3 py-1 text-graphite">
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Right: Key Responsibilities and Deliverables */}
            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow text-mute block">Verified Responsibilities &amp; Exposure</span>
              <ol className="divide-y divide-line border-y border-line">
                {internship.responsibilities.map((resp, idx) => (
                  <li key={idx} className="grid grid-cols-[2.5rem_1fr] gap-4 py-5 items-baseline">
                    <span className="eyebrow text-accent font-mono font-bold">0{idx + 1}</span>
                    <p className="text-[1.05rem] leading-relaxed text-graphite font-normal">
                      {resp}
                    </p>
                  </li>
                ))}
              </ol>

              <div className="rounded-lg bg-stone/40 p-4 text-xs leading-relaxed text-mute font-mono">
                <span className="font-semibold text-ink">Analytical Bridge:</span> The Corporate Secretarial Internship
                provided direct exposure to primary source documents—annual financial statements, Director reports, and
                compliance schedules—which now informs my practical data modeling and relational reporting in SQL and Excel.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
