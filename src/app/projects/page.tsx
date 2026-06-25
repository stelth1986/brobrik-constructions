import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected Brobrik Constructions projects across the Sydney metropolitan area.",
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHeader
        title="Projects"
        subtitle="A selection of our work across the Sydney metropolitan area."
        image="/media/g-00.jpg"
        imageAlt="A Brobrik project at dusk — pool and terrace."
      />

      <section className="bg-paper px-5 pb-24 pt-16 md:px-10 md:pb-32 md:pt-20">
        <div className="mx-auto max-w-7xl border-t border-line">
          {projects.map((p) => (
            <Reveal key={p.slug}>
              <Link
                href={`/projects/${p.slug}`}
                className="group grid grid-cols-1 gap-6 border-b border-line py-10 md:grid-cols-12 md:gap-10 md:py-14"
              >
                <div className="md:col-span-7">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={p.hero}
                      alt={p.heroAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 58vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:col-span-5 md:justify-center">
                  <p className="titleblock text-ink/45">
                    {p.category} · {p.suburb}
                  </p>
                  <h2 className="mt-4 font-display text-3xl tracking-tight text-ink transition-transform duration-500 group-hover:translate-x-2 md:text-5xl">
                    {p.title}
                  </h2>
                  <p className="mt-4 max-w-md text-ink/70">{p.summary}</p>

                  <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                    {p.specs.map((s) => (
                      <li key={s.label} className="titleblock text-ink/45">
                        {s.label} {s.value}
                      </li>
                    ))}
                  </ul>

                  <span className="titleblock mt-7 inline-flex items-center gap-2 text-orange">
                    View project
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
