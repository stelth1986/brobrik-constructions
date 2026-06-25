import Image from "next/image";
import Link from "next/link";
import { nav, contact, company } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-paper/15 bg-ink px-5 pb-10 pt-16 text-paper md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 border-b border-paper/15 pb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xs">
            <Image
              src="/media/brobrik-logo.png"
              alt="Brobrik Constructions"
              width={300}
              height={78}
              className="h-auto w-44"
            />
            <p className="mt-6 text-sm leading-relaxed text-paper/55">
              {company.blurbShort}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="titleblock text-paper/70 transition-colors hover:text-orange"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="titleblock text-paper/40">
            © {new Date().getFullYear()} {company.name} · Sydney
          </p>
          <div className="titleblock flex flex-wrap gap-x-6 gap-y-2 text-paper/40">
            <a href={contact.phoneHref} className="hover:text-orange">
              {contact.phone}
            </a>
            <a href={contact.emailHref} className="hover:text-orange">
              {contact.email}
            </a>
            <span>{contact.postal.join(", ")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
