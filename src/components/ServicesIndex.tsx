"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { services } from "@/lib/site";

export function ServicesIndex() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="relative bg-navy px-5 py-24 text-paper md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="border-b border-paper/15 pb-6">
          <h2 className="font-display text-4xl tracking-tight md:text-6xl">
            What we build
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 pt-10 md:grid-cols-12 md:gap-16">
          {/* The index */}
          <ul className="md:col-span-7">
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.slug} className="border-b border-paper/15">
                  <Link
                    href={`/services/${s.slug}`}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group block w-full py-6 text-left md:py-7"
                  >
                    <div className="flex items-center gap-5">
                      <span
                        className={`h-px w-6 shrink-0 transition-all duration-500 ${
                          isActive ? "bg-orange md:w-10" : "bg-paper/30"
                        }`}
                        aria-hidden
                      />
                      <span
                        className={`font-display text-3xl leading-none tracking-tight transition-all duration-500 md:text-5xl ${
                          isActive
                            ? "text-paper md:translate-x-2"
                            : "text-paper/55 group-hover:text-paper/80"
                        }`}
                      >
                        {s.title}
                      </span>
                    </div>

                    {/* Inline detail — expands for the active service */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="detail"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pl-10 pt-5 md:pl-12">
                            <p className="max-w-md text-paper/70">{s.lede}</p>

                            {/* Mobile-only image */}
                            <div className="relative mt-5 aspect-[4/3] w-full overflow-hidden md:hidden">
                              <Image
                                src={s.image}
                                alt={s.alt}
                                fill
                                sizes="100vw"
                                className="object-cover"
                              />
                            </div>

                            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                              {s.scope.map((item) => (
                                <li
                                  key={item}
                                  className="titleblock text-paper/55"
                                >
                                  · {item}
                                </li>
                              ))}
                            </ul>

                            <span className="titleblock mt-6 inline-flex items-center gap-2 text-orange">
                              View {s.title}
                              <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                              </span>
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Link>
                </li>
              );
            })}

          </ul>

          {/* Sticky preview panel (desktop) */}
          <div className="hidden md:col-span-5 md:block">
            <div className="sticky top-28">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-ink">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.slug}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={current.image}
                      alt={current.alt}
                      fill
                      sizes="40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute bottom-0 left-0 flex w-full items-center gap-3 p-5">
                  <span className="h-px w-6 bg-orange" aria-hidden />
                  <span className="titleblock text-paper">{current.title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
