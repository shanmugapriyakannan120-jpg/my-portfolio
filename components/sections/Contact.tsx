"use client";

import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { site } from "@/data/site";
import { CtaButton } from "@/components/ui/CtaButton";
import { SplitWords } from "@/components/motion/SplitWords";
import { Check, Copy } from "@/components/ui/Icons";
import { Footer } from "@/components/layout/Footer";
import { EASE, gsap, maskReveal, MQ, registerGsap, useGSAP } from "@/lib/animations";

registerGsap();

export function Contact() {
  const root = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        // The dark panel expands from an inset card to full bleed.
        gsap.fromTo(
          q("[data-panel]"),
          { clipPath: "inset(6% 4% 0% 4% round 2.5rem)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 0rem)",
            ease: "none",
            scrollTrigger: { trigger: root.current, start: "top 95%", end: "top 25%", scrub: true },
          },
        );
        maskReveal(q("[data-word]"), {
          stagger: 0.05,
          scrollTrigger: { trigger: q("[data-headline]")[0], start: "top 80%", once: true },
        });
        gsap.fromTo(
          q("[data-orb]"),
          { scale: 0.6, autoAlpha: 0 },
          {
            scale: 1,
            autoAlpha: 1,
            ease: EASE.soft,
            scrollTrigger: { trigger: root.current, start: "top 60%", end: "center center", scrub: true },
          },
        );
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <section id="contact" ref={root} aria-labelledby="contact-title" className="relative bg-ivory">
      <div data-panel data-theme="dark" className="relative overflow-hidden bg-ink text-ivory">
        <div
          data-orb
          aria-hidden
          className="pointer-events-none absolute -right-[20vw] -top-[20vw] size-[60vw] rounded-full bg-[radial-gradient(circle,rgba(46,196,182,0.3),transparent_65%)]"
        />
        <div className="container-x relative pb-16 pt-32 md:pt-44">
          <div className="flex items-center gap-3">
            <span className="eyebrow text-accent">(08)</span>
            <span className="eyebrow text-white/50">Contact &amp; Inquiries</span>
          </div>

          <div data-headline>
            <SplitWords
              as="h2"
              id="contact-title"
              text="Let's turn data into something *meaningful.*"
              className="display mt-8 block max-w-[16ch] text-[clamp(2.8rem,7.5vw,8.5rem)] leading-[0.92]"
            />
          </div>

          <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-12">
            <div className="lg:col-span-5 space-y-6">
              <p className="max-w-md text-[1.1rem] leading-relaxed text-white/75">
                Interested in data analytics, business intelligence, or collaborative projects? Let&apos;s connect.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <CtaButton href={`mailto:${site.email}`} variant="light" cursor="Write">
                  Send an Email
                </CtaButton>
                <CtaButton href={`tel:${site.phone.replace(/\s+/g, "")}`} variant="ghost">
                  Call: {site.phone}
                </CtaButton>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-2 text-sm text-white/60">
                <p className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-500" />
                  <span>Location: <strong className="text-white">{site.location}</strong></span>
                </p>
                <p className="text-xs text-white/40">
                  Open to Entry-Level Data Analyst &amp; BI Analyst positions.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="eyebrow text-white/50">Direct Email</p>
              <div className="mt-4 flex flex-wrap items-center gap-4 border-b border-white/15 pb-6">
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline break-all text-[clamp(1.2rem,2.5vw,2.2rem)] tracking-[-0.03em] font-medium"
                >
                  {site.email}
                </a>
                <button
                  type="button"
                  onClick={copy}
                  className="ml-auto inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs sm:text-sm text-white/80 transition-colors hover:bg-white hover:text-ink"
                  aria-live="polite"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copied ? "done" : "copy"}
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -8, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="inline-flex items-center gap-2"
                    >
                      {copied ? <Check size={15} /> : <Copy size={15} />}
                      {copied ? "Copied" : "Copy email"}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </div>

              <p className="eyebrow mt-8 text-white/50">Telephone</p>
              <div className="mt-3 border-b border-white/15 pb-6">
                <a
                  href={`tel:${site.phone.replace(/\s+/g, "")}`}
                  className="link-underline text-xl text-white/90 hover:text-white font-mono"
                >
                  {site.phone}
                </a>
              </div>

              <p className="eyebrow mt-8 text-white/50">Profiles &amp; Repositories</p>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 sm:grid-cols-3">
                {site.socials.map((s) =>
                  s.href ? (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between border-b border-white/15 py-3 text-white/85 hover:text-white"
                      >
                        {s.label}
                        <span className="text-accent transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                          ↗
                        </span>
                      </a>
                    </li>
                  ) : (
                    <li key={s.label}>
                      <span
                        aria-disabled="true"
                        title="Link pending configuration in config/portfolio.ts"
                        className="flex items-center justify-between border-b border-white/10 py-3 text-white/35"
                      >
                        {s.label}
                        <span className="eyebrow text-[0.6rem] rounded bg-white/5 px-1.5 py-0.5">Config in site.ts</span>
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}
