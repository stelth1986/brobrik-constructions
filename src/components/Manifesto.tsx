import { company } from "@/lib/site";
import { Reveal, RevealLines } from "./Reveal";
import { BrandDivider } from "./BrandDivider";

const ledger = [
  ["Established", company.ledger.established.replace("Est. ", "")],
  ["Trade experience", "75 years combined"],
  ["On the tools", "50+ tradespeople"],
  ["Sectors", "Residential · Commercial"],
];

export function Manifesto() {
  return (
    <section className="bg-paper px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        {/* Marginal title-block — the numbers, as drawing annotations */}
        <div className="md:col-span-4 md:border-r md:border-line md:pr-10">
          <Reveal>
            <dl className="flex flex-col">
              {ledger.map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between gap-4 border-b border-line py-3"
                >
                  <dt className="titleblock text-ink/45">{k}</dt>
                  <dd className="font-mono text-sm text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* The statement */}
        <div className="md:col-span-8">
          <h2 className="font-display text-3xl leading-[1.15] tracking-tight text-ink sm:text-4xl md:text-5xl">
            <RevealLines text="Brobrik has been run by one family since 1994. Three decades on, the name still goes on every job, so it gets built like the family will be back to see it." />
          </h2>

          <Reveal>
            <BrandDivider align="start" className="mt-10" />
          </Reveal>

          <Reveal delay={0.1} className="mt-10 max-w-2xl">
            <p className="text-lg leading-relaxed text-ink/70">
              The Englezos family leads a team that carries more than
              seventy-five years of trade between them. That depth shows up in
              the quiet places: a brick course that lines through, a junction
              that doesn&rsquo;t move, a building that stays watertight a decade
              on. It&rsquo;s why our clients keep coming back, and why they send
              their neighbours.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
