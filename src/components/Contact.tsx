import { contact } from "@/lib/site";
import { Reveal, RevealLines } from "./Reveal";
import { ContactForm } from "./ContactForm";

const block: { k: string; v: string; href?: string }[] = [
  { k: "Telephone", v: contact.phone, href: contact.phoneHref },
  { k: "Email", v: contact.email, href: contact.emailHref },
  { k: "Post", v: contact.postal.join(", ") },
  { k: "Region", v: contact.region },
];

export function Contact({ tone = "navy" }: { tone?: "navy" | "paper" }) {
  const dark = tone === "navy";

  const sectionClass = dark ? "bg-navy text-paper" : "bg-paper text-ink";
  const line = dark ? "border-paper/15" : "border-line";
  const muted = dark ? "text-paper/70" : "text-ink/70";
  const label = dark ? "text-paper/50" : "text-ink/50";
  const dt = dark ? "text-paper/45" : "text-ink/45";
  const dd = dark ? "text-paper" : "text-ink";

  return (
    <section
      id="contact"
      className={`${sectionClass} px-5 py-24 md:px-10 md:py-32`}
    >
      <div className="mx-auto max-w-7xl">
        <div className={`flex items-baseline justify-between border-b ${line} pb-6`}>
          <h2 className={`font-display display-lg max-w-[14ch] ${dd}`}>
            <RevealLines text="Tell us what you want built." />
          </h2>
          <span className={`titleblock hidden sm:inline ${label}`}>
            Start a project
          </span>
        </div>

        <div className="grid grid-cols-1 gap-12 pt-12 md:gap-16 lg:grid-cols-12">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <ContactForm tone={tone} />
          </Reveal>

          {/* Details */}
          <div className={`lg:col-span-5 lg:border-l ${line} lg:pl-12`}>
            <Reveal delay={0.1}>
              <p className={`max-w-sm leading-relaxed ${muted}`}>
                Prefer to talk it through? Call the office, or send the details
                straight to our inbox. We work right across the Sydney
                metropolitan area.
              </p>

              <dl className="mt-10 flex flex-col">
                {block.map((b) => (
                  <div
                    key={b.k}
                    className={`flex items-baseline justify-between gap-4 border-b ${line} py-4`}
                  >
                    <dt className={`titleblock ${dt}`}>{b.k}</dt>
                    <dd className={`text-right font-mono text-sm ${dd}`}>
                      {b.href ? (
                        <a
                          href={b.href}
                          className="transition-colors hover:text-orange"
                        >
                          {b.v}
                        </a>
                      ) : (
                        b.v
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
