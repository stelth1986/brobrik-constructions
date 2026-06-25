import type { Metadata } from "next";
import Image from "next/image";
import { company, contact } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Reveal, RevealLines } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Brobrik Constructions has been run by the Englezos family since 1994, building across the Sydney metropolitan area.",
};

const ledger: [string, string][] = [
  ["Established", "1994"],
  ["Trade experience", "75 years combined"],
  ["On the tools", "50+ tradespeople"],
  ["Sectors", "Residential · Commercial"],
  ["Region", contact.region],
  ["Family", `The ${company.family}`],
];

const sectors = [
  {
    k: "Residential",
    v: "Family homes, from a single bathroom to a ground-up build, finished to live in for decades.",
  },
  {
    k: "Commercial",
    v: "Commercial buildings and remedial works, run with the program discipline larger projects demand.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="About"
        subtitle="A family building company, run by the Englezos family since 1994."
        image="/media/g-06.jpg"
        imageAlt="An ivy-clad Brobrik home at dusk."
      />

      {/* Story + image */}
      <section className="bg-paper px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal className="relative h-full min-h-[55vh] w-full overflow-hidden">
              <Image
                src="/media/g-03.jpg"
                alt="A hedge-framed approach to a renovated Sydney home."
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
                priority
              />
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <h2 className="font-display text-3xl leading-[1.15] tracking-tight text-ink sm:text-4xl md:text-5xl">
              <RevealLines text="One family, one standard, held across three decades of building." />
            </h2>

            <Reveal delay={0.1} className="mt-8 max-w-2xl">
              <p className="text-lg leading-relaxed text-ink/70">
                Brobrik Constructions has been owned and run by the Englezos
                family since 1994. What began with a pair of trades has grown
                into a team of more than fifty skilled tradespeople and
                labourers, carrying over seventy-five years of combined
                experience in the building industry.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-6 max-w-2xl">
              <p className="text-lg leading-relaxed text-ink/70">
                We work across the Sydney metropolitan area, on homes and
                commercial buildings alike. We keep the team in-house and hold
                to the same standard on every job: high-quality workmanship,
                delivered with honesty, professionalism and the kind of care a
                family puts its name to.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="mt-12 grid grid-cols-1 sm:grid-cols-2">
                {ledger.map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-baseline justify-between gap-4 border-b border-line py-4"
                  >
                    <dt className="titleblock text-ink/45">{k}</dt>
                    <dd className="font-mono text-sm text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-paper-2 px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="titleblock text-ink/45">Where we work</p>
          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-line sm:grid-cols-2">
            {sectors.map((s) => (
              <Reveal key={s.k} className="bg-paper-2 p-8">
                <p className="font-display text-2xl text-ink md:text-3xl">
                  {s.k}
                </p>
                <p className="mt-3 max-w-md text-ink/65">{s.v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Build with a family that's done it for 30 years." />
    </main>
  );
}
