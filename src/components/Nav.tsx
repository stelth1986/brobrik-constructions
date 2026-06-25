"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { nav, contact } from "@/lib/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The homepage hero sits behind a transparent bar. Internal pages get a
  // solid header bar so content can sit padded below it.
  const solid = scrolled || !isHome;

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`flex items-center justify-between px-5 py-4 transition-colors duration-500 md:px-10 ${
            solid
              ? "border-b border-paper/10 bg-ink/85 backdrop-blur-md"
              : "border-b border-transparent"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center leading-none"
            aria-label="Brobrik Constructions, home"
          >
            <Image
              src="/media/brobrik-logo.png"
              alt="Brobrik Constructions"
              width={990}
              height={259}
              priority
              className="h-14 w-auto sm:h-16"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 lg:flex lg:gap-9">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="titleblock text-paper/80 transition-colors duration-300 hover:text-orange"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={contact.phoneHref}
              className="titleblock whitespace-nowrap border border-paper/30 px-4 py-2 text-paper transition-colors duration-300 hover:border-orange hover:text-orange"
            >
              {contact.phone}
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(true)}
            className="titleblock text-paper lg:hidden"
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink px-6 py-5 text-paper"
          >
            <div className="flex items-center justify-between">
              <Image
                src="/media/brobrik-logo.png"
                alt="Brobrik Constructions"
                width={990}
                height={259}
                className="h-9 w-auto"
              />
              <button
                onClick={() => setOpen(false)}
                className="titleblock text-paper"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>

            <nav className="mt-16 flex flex-1 flex-col justify-center gap-2">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-5xl leading-tight text-paper transition-colors hover:text-orange"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="titleblock flex flex-col gap-1 text-paper/60">
              <a href={contact.phoneHref}>{contact.phone}</a>
              <a href={contact.emailHref}>{contact.email}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
