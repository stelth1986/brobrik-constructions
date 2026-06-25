import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "New builds, extensions, renovations and remedial works across residential and commercial, by the Englezos family since 1994.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        title="Services"
        subtitle="New builds, extensions, renovations and remedial works, across residential and commercial."
        image="/media/g-01.jpg"
        imageAlt="Rear elevation of a Brobrik-built home."
      />

      <section className="bg-paper px-5 pb-24 pt-16 md:px-10 md:pb-32 md:pt-20">
        <div className="mx-auto max-w-7xl border-t border-line">
          {services.map((s) => (
            <Reveal key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group grid grid-cols-1 gap-6 border-b border-line py-10 md:grid-cols-12 md:gap-10 md:py-14"
              >
                <div className="md:col-span-7">
                  <h2 className="font-display text-3xl tracking-tight text-ink transition-transform duration-500 group-hover:translate-x-2 md:text-5xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-ink/70">{s.lede}</p>
                  <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                    {s.scope.map((item) => (
                      <li key={item} className="titleblock text-ink/45">
                        · {item}
                      </li>
                    ))}
                  </ul>
                  <span className="titleblock mt-7 inline-flex items-center gap-2 text-orange">
                    View {s.title}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>

                <div className="md:col-span-5">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
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
