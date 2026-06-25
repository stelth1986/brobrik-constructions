"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { company } from "@/lib/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Foreground drifts up and fades; video drifts down slightly (parallax).
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-[100svh] w-full overflow-hidden bg-ink"
    >
      {/* Media */}
      <motion.div
        style={{ y: mediaY, scale: mediaScale }}
        className="absolute inset-0 h-[112%]"
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/hero-still.jpg"
          aria-hidden
        >
          <source src="/media/brobrik-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink/45" />
        <div className="absolute inset-0 scrim-b" />
      </motion.div>

      {/* Title-block annotations (architectural drawing language) */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.2 }}
          className="titleblock absolute left-5 top-24 text-paper/70 md:left-10 md:top-28"
        >
          {company.ledger.established} · Sydney
        </motion.div>
      </div>

      {/* Headline */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="absolute inset-x-0 bottom-0 z-10 px-5 pb-12 md:px-10 md:pb-16"
      >
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: reduce ? 0 : "108%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.3, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display display-xl max-w-[16ch] text-paper"
          >
            Built around the way you live.
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-6 flex flex-col gap-6 border-t border-paper/20 pt-6 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-base leading-relaxed text-paper/75 md:text-lg">
            {company.blurbShort} New builds, extensions and renovations. For
            homes meant to last.
          </p>
          <a
            href="#work"
            className="titleblock pointer-events-auto group inline-flex items-center gap-3 text-paper"
          >
            <span className="relative">
              See the work
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-orange transition-transform duration-500 group-hover:scale-x-0" />
            </span>
            <span aria-hidden className="text-orange transition-transform duration-500 group-hover:translate-y-1">
              ↓
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
