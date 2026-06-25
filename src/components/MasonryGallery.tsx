"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

type Item = { src: string; ratio: string };

function Tile({ src, ratio, i }: { src: string; ratio: string; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["-6%", "6%"]
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: reduce ? 0 : 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.9, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group mb-4 break-inside-avoid md:mb-6"
    >
      <div className={`relative ${ratio} w-full overflow-hidden`}>
        <motion.div style={{ y }} className="absolute inset-[-6%]">
          <Image
            src={src}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
      </div>
    </motion.div>
  );
}

export function MasonryGallery({ items }: { items: Item[] }) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 md:gap-6 lg:columns-3">
      {items.map((item, i) => (
        <Tile key={item.src} src={item.src} ratio={item.ratio} i={i} />
      ))}
    </div>
  );
}
