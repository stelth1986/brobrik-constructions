import Image from "next/image";
import { BrandDivider } from "./BrandDivider";
import { Reveal } from "./Reveal";

/**
 * Inner-page hero — a compact (~30vh) image band with a dark overlay, the
 * centered Eurostile-style title, and the brand divider (white) beneath.
 * The fixed nav sits transparent over it, matching the homepage hero.
 */
export function PageHeader({
  title,
  subtitle,
  image,
  imageAlt = "",
}: {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative mt-[72px] flex min-h-[36vh] flex-col items-center justify-center overflow-hidden bg-ink py-16 text-center md:mt-20">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/70" />

      <div className="relative z-10 px-5">
        <Reveal>
          <h1 className="font-brand text-2xl uppercase leading-tight tracking-wide text-paper sm:text-3xl md:text-4xl">
            {title}
          </h1>
          <BrandDivider tone="light" className="mt-6" />
          {subtitle ? (
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-paper/75 md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
