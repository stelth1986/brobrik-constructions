import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.title, description: service.lede };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <main>
      <PageHeader
        title={service.title}
        subtitle={service.lede}
        image={service.image}
        imageAlt={service.alt}
      />

      {/* Body + scope, beside the lead image */}
      <section className="bg-paper px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-6">
            <Reveal>
              <p className="text-lg leading-relaxed text-ink/75 md:text-xl">
                {service.body}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="titleblock mt-12 text-ink/45">What this covers</p>
              <ul className="mt-5 grid grid-cols-1 gap-px overflow-hidden border border-line sm:grid-cols-2">
                {service.scope.map((item) => (
                  <li key={item} className="bg-paper p-4 text-sm text-ink/75">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="md:col-span-6">
            <Reveal className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={service.images[0]}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 48vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Supporting imagery */}
      <section className="bg-paper-2 px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          {service.images.slice(1).map((src, i) => (
            <Reveal key={src} delay={i * 0.08} className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Other services */}
      <section className="bg-paper px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="titleblock text-ink/45">More services</p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="font-display text-2xl text-ink/60 transition-colors hover:text-orange md:text-3xl"
                >
                  {s.title}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
