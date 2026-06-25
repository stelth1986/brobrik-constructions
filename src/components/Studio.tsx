import Image from "next/image";
import { Reveal, RevealLines } from "./Reveal";

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

export function Studio() {
  return (
    <section id="studio" className="bg-paper-2 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-12 md:grid-cols-12 md:gap-16">
        {/* Image */}
        <div className="md:col-span-5">
          <Reveal className="relative h-full min-h-[60vh] w-full overflow-hidden">
            <Image
              src="/media/g-03.jpg"
              alt="A hedge-framed approach to a renovated Sydney home."
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
            <span className="titleblock absolute bottom-4 left-4 text-paper">
              The Englezos family · since 1994
            </span>
          </Reveal>
        </div>

        {/* Story */}
        <div className="flex flex-col justify-between md:col-span-7">
          <div>
            <h2 className="font-display text-3xl leading-[1.15] tracking-tight text-ink sm:text-4xl md:text-5xl">
              <RevealLines text="A building company is only as good as the standard it refuses to drop." />
            </h2>
            <Reveal delay={0.1} className="mt-8 max-w-2xl">
              <p className="text-lg leading-relaxed text-ink/70">
                For more than thirty years the Englezos family has built across
                Sydney with the same people, the same trades and the same
                insistence on getting it right the first time. We keep the team
                in-house so the person who quotes your job is the person who
                stands behind it.
              </p>
            </Reveal>
          </div>

          {/* Sectors */}
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-line sm:grid-cols-2">
            {sectors.map((s) => (
              <Reveal key={s.k} className="bg-paper p-7">
                <p className="font-display text-2xl text-ink">{s.k}</p>
                <p className="mt-3 text-ink/65">{s.v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
