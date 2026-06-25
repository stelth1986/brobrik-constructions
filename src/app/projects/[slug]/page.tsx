import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { BrandDivider } from "@/components/BrandDivider";
import { Reveal, RevealLines } from "@/components/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title}, ${project.suburb} — ${project.category}`,
    description: project.summary,
  };
}

// Lay the gallery out as an editorial rhythm: a full-bleed frame, then two
// paired portraits, repeating — far more considered than a uniform masonry.
type Block = { kind: "full"; img: string } | { kind: "pair"; imgs: string[] };

function compose(images: string[]): Block[] {
  const pattern = ["full", "pair", "pair"] as const;
  const blocks: Block[] = [];
  let i = 0;
  let p = 0;
  while (i < images.length) {
    if (pattern[p % pattern.length] === "full") {
      blocks.push({ kind: "full", img: images[i] });
      i += 1;
    } else {
      blocks.push({ kind: "pair", imgs: images.slice(i, i + 2) });
      i += 2;
    }
    p += 1;
  }
  return blocks;
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const blocks = compose(project.images);

  return (
    <main className="bg-paper">
      {/* Cinematic, full-bleed hero */}
      <section className="relative flex min-h-[90vh] items-end overflow-hidden bg-ink">
        <Image
          src={project.hero}
          alt={project.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="scrim-b absolute inset-0" />
        <div className="absolute inset-0 bg-ink/15" />

        <div className="relative z-10 w-full px-5 pb-14 md:px-10 md:pb-20">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <p className="titleblock text-paper/70">{project.category}</p>
            </Reveal>
            <h1 className="mt-5 font-display display-xl max-w-[14ch] text-paper">
              <RevealLines text={project.title} />
            </h1>
            <Reveal delay={0.15}>
              <p className="mt-6 font-mono text-sm uppercase tracking-[0.2em] text-paper/70">
                {project.suburb} · Sydney
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Opening statement */}
      <section className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <h2 className="font-display display-lg text-ink">
                <RevealLines text={project.summary} />
              </h2>
            </div>
            <div className="md:col-span-5 md:pt-3">
              {project.body.map((para, i) => (
                <Reveal key={i} delay={i * 0.08} className={i ? "mt-6" : ""}>
                  <p className="leading-relaxed text-ink/70">{para}</p>
                </Reveal>
              ))}
              <Reveal delay={0.2}>
                <BrandDivider align="start" className="mt-10" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Spec band — oversized light numerals over a navy ground */}
      <section className="bg-navy px-5 py-16 text-paper md:px-10 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-y-0">
          {project.specs.map(({ label, value }, i) => (
            <Reveal
              key={label}
              delay={i * 0.06}
              className="px-1 md:border-l md:border-paper/15 md:px-8 md:first:border-l-0"
            >
              <p className="titleblock text-paper/55">{label}</p>
              <p className="mt-3 font-display text-4xl font-light tracking-tight md:text-5xl">
                {value}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Editorial gallery */}
      <section className="pb-8 pt-20 md:pb-12 md:pt-28">
        <div className="flex flex-col gap-6 md:gap-10">
          {blocks.map((block, bi) =>
            block.kind === "full" ? (
              <Reveal
                key={bi}
                className="relative aspect-[16/9] w-full overflow-hidden"
              >
                <Image
                  src={block.img}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </Reveal>
            ) : (
              <div
                key={bi}
                className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-5 sm:grid-cols-2 md:gap-10 md:px-10"
              >
                {block.imgs.map((src, ii) => (
                  <Reveal
                    key={src}
                    delay={ii * 0.08}
                    className="relative aspect-[4/5] w-full overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </Reveal>
                ))}
              </div>
            )
          )}
        </div>
      </section>

      {/* Back link */}
      <section className="px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/projects"
            className="titleblock inline-flex items-center gap-2 text-orange"
          >
            <span aria-hidden>←</span>
            All projects
          </Link>
        </div>
      </section>

      <CtaBand title="Have a home like this in mind?" />
    </main>
  );
}
