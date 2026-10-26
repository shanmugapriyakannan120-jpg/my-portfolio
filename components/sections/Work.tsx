import { projects } from "@/data/projects";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { ProjectMedia } from "@/components/projects/ProjectMedia";
import { ProjectMeta, ProjectNumber } from "@/components/projects/ProjectMeta";
import { HorizontalShowcase } from "@/components/projects/HorizontalShowcase";

const [dataSense, hrAnalytics, ecommerce, ashokLeyland] = projects;

const href = (slug: string) => `/projects/${slug}`;

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="relative bg-ivory">
      {/* Section header */}
      <div className="container-x grid gap-10 pb-16 pt-28 md:pt-40 lg:grid-cols-12 lg:pb-24">
        <div className="lg:col-span-8">
          <Reveal className="flex items-center gap-3">
            <span className="eyebrow text-accent">(02)</span>
            <span className="eyebrow text-mute">Selected Analytics Projects — 04 Works</span>
          </Reveal>
          <Reveal kind="words">
            <SplitWords
              as="h2"
              id="work-title"
              text="Turning raw enterprise data into *actionable* business intelligence."
              className="display mt-6 block text-[clamp(2.5rem,5.8vw,6.2rem)]"
            />
          </Reveal>
        </div>
        <Reveal className="self-end lg:col-span-3 lg:col-start-10">
          <p className="text-[0.95rem] leading-relaxed text-graphite">
            Four practical data analytics projects spanning an AI hackathon reporting system, advanced Excel HR analytics,
            relational SQL e-commerce querying, and corporate financial statement analysis.
          </p>
        </Reveal>
      </div>

      {/* 01 — DataSense AI: full-width cinematic feature */}
      <article className="container-x pb-28 md:pb-40">
        <div className="mb-8 flex items-end justify-between gap-6 border-t border-line pt-6">
          <ProjectNumber index={dataSense.index} className="text-[clamp(4rem,12vw,12rem)] text-ink/80" />
          <div className="text-right">
            <span className="eyebrow block text-mute">{dataSense.year} / {dataSense.category}</span>
            <span className="font-mono text-xs text-accent mt-1 block">AI-Driven Pipeline</span>
          </div>
        </div>

        {/* Workflow breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center gap-2 overflow-x-auto text-[0.7rem] font-mono text-mute pb-2">
          {["Raw Data", "Quality Assessment", "Analysis", "Visualization", "Insights", "Recommendations"].map(
            (step, idx, arr) => (
              <span key={step} className="flex items-center gap-2 shrink-0">
                <span className="rounded bg-paper px-2.5 py-1 border border-line text-ink">{step}</span>
                {idx < arr.length - 1 && <span className="text-accent">&rarr;</span>}
              </span>
            ),
          )}
        </div>

        <ProjectMedia
          image={dataSense.cover}
          href={href(dataSense.slug)}
          label={`View ${dataSense.title} case study`}
          className="aspect-[4/3] w-full md:aspect-[16/8]"
          sizes="100vw"
          parallax={6}
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <ProjectMeta project={dataSense} className="lg:col-span-7" />
          <div className="hidden lg:col-span-4 lg:col-start-9 lg:block">
            <ProjectMedia
              image={dataSense.frames[0]}
              href={href(dataSense.slug)}
              label={`View ${dataSense.title} anomaly detection detail`}
              className="aspect-[4/5] w-full"
              sizes="30vw"
              from="right"
            />
          </div>
        </div>
      </article>

      {/* 02 — HR ANALYTICS: split, image right with overlapping detail */}
      <article className="relative bg-stone py-28 md:py-40">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <ProjectNumber
              index={hrAnalytics.index}
              className="absolute -top-24 right-0 text-[clamp(5rem,12vw,12rem)] text-ink/15 lg:-top-44"
            />
            <ProjectMeta project={hrAnalytics} />
          </div>
          <div className="relative lg:col-span-7">
            <ProjectMedia
              image={hrAnalytics.cover}
              href={href(hrAnalytics.slug)}
              label={`View ${hrAnalytics.title} Excel dashboard`}
              className="aspect-[16/10] w-full rounded-[2px] shadow-[0_40px_80px_-30px_rgba(20,10,60,0.35)]"
              from="right"
            />
            <ProjectMedia
              image={hrAnalytics.frames[0]}
              href={href(hrAnalytics.slug)}
              label={`View ${hrAnalytics.title} pivot table model`}
              className="absolute -bottom-14 -left-8 hidden aspect-[4/5] w-[32%] border-[6px] border-stone md:block"
              sizes="20vw"
              parallax={12}
            />
          </div>
        </div>
      </article>

      {/* 03 — BRAZILIAN E-COMMERCE: pinned horizontal story */}
      <HorizontalShowcase project={ecommerce} />

      {/* 04 — ASHOK LEYLAND FINANCIAL ANALYSIS: dark financial ledger story */}
      <article data-theme="dark" className="bg-[#121316] py-28 text-ivory md:py-40">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12">
          <div className="relative lg:col-span-7">
            <ProjectMedia
              image={ashokLeyland.cover}
              href={href(ashokLeyland.slug)}
              label={`View ${ashokLeyland.title} case study`}
              className="aspect-[16/10] w-full"
              from="left"
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {["Balance Sheet Decomposition", "Liquidity & Solvency", "P&L Margin Analysis", "Corporate Governance"].map(
                (t) => (
                  <span key={t} className="eyebrow rounded-full border border-white/15 px-3 py-2 text-white/75 font-mono">
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="relative lg:col-span-4 lg:col-start-9">
            <ProjectNumber index={ashokLeyland.index} className="mb-6 block text-[clamp(5rem,10vw,10rem)] text-white/20" />
            <ProjectMeta project={ashokLeyland} tone="light" titleClassName="text-[clamp(2.4rem,4.5vw,4.8rem)]" />
          </div>
        </div>
      </article>
    </section>
  );
}
