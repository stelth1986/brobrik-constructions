import Link from "next/link";
import { Reveal, RevealLines } from "./Reveal";

/**
 * Closing call-to-action band for inner pages — navy ground, statement + link
 * through to the contact page.
 */
export function CtaBand({
  title = "Tell us what you want built.",
  cta = "Start a project",
}: {
  title?: string;
  cta?: string;
}) {
  return (
    <section className="bg-navy px-5 py-20 text-paper md:px-10 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
        <h2 className="font-display display-lg max-w-[16ch] text-paper">
          <RevealLines text={title} />
        </h2>
        <Reveal>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-4 border border-paper/30 px-7 py-4 transition-colors duration-300 hover:border-orange"
          >
            <span className="font-display text-xl text-paper transition-colors group-hover:text-orange md:text-2xl">
              {cta}
            </span>
            <span
              aria-hidden
              className="text-orange transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
