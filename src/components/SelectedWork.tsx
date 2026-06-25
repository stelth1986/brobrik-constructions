import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/site";
import { Reveal } from "./Reveal";

export function SelectedWork() {
  return (
    <section id="work" className="bg-paper px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex items-baseline justify-between border-b border-line pb-6">
          <h2 className="font-display text-4xl tracking-tight text-ink md:text-6xl">
            Our projects
          </h2>
          <Link
            href="/projects"
            className="titleblock text-ink/50 transition-colors hover:text-orange"
          >
            All projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
          {projects.map((p) => (
            <Reveal key={p.slug}>
              <Link href={`/projects/${p.slug}`} className="group block">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={p.hero}
                    alt={p.heroAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                <p className="titleblock mt-5 text-ink/45">
                  {p.category} · {p.suburb}
                </p>
                <h3 className="mt-3 font-display text-3xl tracking-tight text-ink transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-md text-ink/70">{p.summary}</p>

                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {p.specs.map((s) => (
                    <li key={s.label} className="titleblock text-ink/45">
                      {s.label} {s.value}
                    </li>
                  ))}
                </ul>

                <span className="titleblock mt-6 inline-flex items-center gap-2 text-orange">
                  View project
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
